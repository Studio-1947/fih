"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Bell, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface SanityNotification {
  _id: string;
  title: string;
  publishDate: string;
  shortMessage: string;
  image?: {
    asset: { _ref: string; _type: string };
    hotspot?: { x: number; y: number; height: number; width: number };
  };
}

const QUERY = groq`
  *[_type == "notification"] | order(publishDate desc) {
    _id, title, publishDate, shortMessage, image
  }
`;

const STORAGE_KEY = "fih_notifications_last_seen";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NotificationBell() {
  const [notifications, setNotifications] = useState<SanityNotification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnseen, setHasUnseen] = useState(false);
  const [selected, setSelected] = useState<SanityNotification | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    client.withConfig({ useCdn: false }).fetch<SanityNotification[]>(QUERY).then((data) => {
      const list = data || [];
      setNotifications(list);
      if (list.length > 0) {
        const lastSeen = localStorage.getItem(STORAGE_KEY);
        if (!lastSeen || new Date(list[0].publishDate) > new Date(lastSeen)) {
          setHasUnseen(true);
        }
      }
    });
  }, []);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [isOpen]);

  // Lock body scroll when modal or zoom is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [selected]);

  // Lock body scroll when zoomed
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isZoomed]);

  // Close zoom on Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (isZoomed) setIsZoomed(false);
        else if (selected) setSelected(null);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isZoomed, selected]);

  function toggleDropdown() {
    setIsOpen((v) => !v);
    if (!isOpen && hasUnseen) {
      setHasUnseen(false);
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    }
  }

  function closeModal() {
    setSelected(null);
    setIsZoomed(false);
  }

  return (
    <>
      <div className="relative shrink-0" ref={dropdownRef}>
        {/* Bell Button */}
        <button
          onClick={toggleDropdown}
          aria-label="Notifications"
          className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl transition-colors hover:bg-black/5"
        >
          <Bell className="h-5 w-5 text-black" strokeWidth={2} />
          {hasUnseen && (
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-primary ring-2 ring-surface" />
          )}
        </button>

        {/* Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.97 }}
              transition={{ duration: 0.18, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="fixed left-3 right-3 top-24 z-500 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_16px_48px_rgba(0,0,0,0.18)] sm:absolute sm:left-auto sm:right-0 sm:top-full sm:mt-3 sm:w-96"
            >
              <div className="flex items-center justify-between border-b border-black/5 px-5 py-4">
                <h3 className="text-sm font-bold text-black [font-family:var(--font-heading)]">
                  Notifications
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-black/8"
                >
                  <X className="h-4 w-4 text-black/40" />
                </button>
              </div>

              <div className="max-h-90 overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {notifications.length === 0 ? (
                  <p className="px-5 py-8 text-center text-sm text-black/40 [font-family:var(--font-body)]">
                    No notifications yet
                  </p>
                ) : (
                  notifications.map((n) => (
                    <button
                      key={n._id}
                      onClick={() => {
                        setSelected(n);
                        setIsOpen(false);
                      }}
                      className="group w-full cursor-pointer border-b border-black/5 px-5 py-4 text-left transition-colors last:border-0 hover:bg-black/3"
                    >
                      <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-primary [font-family:var(--font-heading)]">
                        {formatDate(n.publishDate)}
                      </p>
                      <p className="mb-1 line-clamp-1 text-sm font-bold text-black transition-colors group-hover:text-primary [font-family:var(--font-heading)]">
                        {n.title}
                      </p>
                      <p className="line-clamp-2 text-xs leading-relaxed text-black/50 [font-family:var(--font-body)]">
                        {n.shortMessage}
                      </p>
                    </button>
                  ))
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="notif-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-600 flex cursor-pointer items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              key="notif-modal"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative w-full max-w-xl cursor-default overflow-hidden rounded-4xl bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-black/50 transition-colors hover:bg-black/70"
              >
                <X className="h-5 w-5 text-white" />
              </button>

              {/* Image preview — fixed height, object-contain, zoomable */}
              {selected.image && (
                <div className="group relative h-56 w-full bg-black/5 sm:h-64">
                  <Image
                    src={urlFor(selected.image).width(1200).auto("format").url()}
                    alt={selected.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, 576px"
                  />

                  {/* Zoom overlay on hover */}
                  <button
                    onClick={() => setIsZoomed(true)}
                    className="absolute inset-0 flex cursor-zoom-in items-center justify-center bg-black/0 transition-colors duration-200 group-hover:bg-black/20"
                    aria-label="Zoom image"
                  >
                    <span className="flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <ZoomIn className="h-4 w-4 text-white" />
                      <span className="text-xs font-semibold text-white [font-family:var(--font-heading)]">
                        Zoom
                      </span>
                    </span>
                  </button>
                </div>
              )}

              {/* Content */}
              <div className="p-7 sm:p-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5">
                  <Bell className="h-3 w-3 text-primary" />
                  <span className="text-[11px] font-bold text-primary [font-family:var(--font-heading)]">
                    {formatDate(selected.publishDate)}
                  </span>
                </div>

                <h2 className="mb-4 text-2xl font-bold leading-tight text-black sm:text-3xl [font-family:var(--font-heading)]">
                  {selected.title}
                </h2>

                <p className="text-base leading-[1.8] text-black/70 [font-family:var(--font-body)]">
                  {selected.shortMessage}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Zoom Lightbox */}
      <AnimatePresence>
        {isZoomed && selected?.image && (
          <motion.div
            key="zoom-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-700 flex cursor-zoom-out items-center justify-center bg-black/95 p-4"
            onClick={() => setIsZoomed(false)}
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute right-5 top-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5 text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] max-w-[92vw] cursor-default"
            >
              <Image
                src={urlFor(selected.image).width(2400).auto("format").url()}
                alt={selected.title}
                width={2400}
                height={1600}
                className="max-h-[92vh] w-auto max-w-[92vw] rounded-xl object-contain shadow-2xl"
                sizes="92vw"
              />
            </motion.div>

            <p className="absolute bottom-5 text-xs text-white/40 [font-family:var(--font-body)]">
              Click anywhere to close
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
