"use client";

import { useEffect, useRef, useState } from "react";
import { Bell, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

interface SanityNotification {
  _id: string;
  title: string;
  publishDate: string;
  shortMessage: string;
}

const QUERY = groq`
  *[_type == "notification"] | order(publishDate desc) {
    _id, title, publishDate, shortMessage
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
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    client.fetch<SanityNotification[]>(QUERY).then((data) => {
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

  function toggleDropdown() {
    setIsOpen((v) => !v);
    if (!isOpen && hasUnseen) {
      setHasUnseen(false);
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    }
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
              className="absolute right-0 top-full z-500 mt-3 w-80 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_16px_48px_rgba(0,0,0,0.18)] sm:w-96"
            >
              {/* Header */}
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

              {/* List */}
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
            onClick={() => setSelected(null)}
          >
            <motion.div
              key="notif-modal"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative w-full max-w-lg cursor-default rounded-4xl bg-white p-8 shadow-2xl sm:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-5 top-5 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-black/8 transition-colors hover:bg-black/14"
              >
                <X className="h-5 w-5 text-black" />
              </button>

              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5">
                <Bell className="h-3 w-3 text-primary" />
                <span className="text-[11px] font-bold text-primary [font-family:var(--font-heading)]">
                  {formatDate(selected.publishDate)}
                </span>
              </div>

              <h2 className="mb-5 text-2xl font-bold leading-tight text-black sm:text-3xl [font-family:var(--font-heading)]">
                {selected.title}
              </h2>

              <p className="text-base leading-[1.8] text-black/70 [font-family:var(--font-body)]">
                {selected.shortMessage}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
