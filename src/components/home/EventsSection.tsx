"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { client } from "@/sanity/lib/client";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export interface EventItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

interface EventsSectionProps {
  events?: EventItem[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export default function EventsSection({ events: initialEvents = [] }: EventsSectionProps) {
  const [eventsList, setEventsList] = useState<EventItem[]>(initialEvents);
  const [selected, setSelected] = useState<EventItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchLiveEvents() {
      try {
        const sanityEvents = await client.fetch(EVENTS_QUERY);
        if (sanityEvents && sanityEvents.length > 0) {
          const mapped: EventItem[] = sanityEvents.map(
            (e: {
              _id: string;
              title: string;
              description: string;
              image: Parameters<typeof urlFor>[0];
              date: string;
            }) => ({
              id: e._id,
              title: e.title,
              description: e.description,
              imageUrl: urlFor(e.image).width(900).auto("format").url(),
              date: e.date,
            })
          );
          setEventsList(mapped);
        }
      } catch (err) {
        console.error("Failed to fetch live Sanity events on client:", err);
      }
    }

    fetchLiveEvents();
  }, []);

  // Manual, button-driven horizontal scroll — no auto-play. Each click nudges
  // the track by most of its visible width so a fresh set of cards slides in.
  const scrollByViewport = (direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: "smooth" });
  };

  if (!eventsList.length) return null;

  return (
    <>
      <section
        id="events"
        className="w-full bg-white pt-12 sm:pt-16 lg:pt-24 pb-8 sm:pb-12 overflow-hidden"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="mb-12 lg:mb-16 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <span className="h-[3px] w-5 sm:w-6 bg-primary" />
                <span className="h-[3px] w-5 sm:w-8 bg-black" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/80 [font-family:var(--font-heading)]">
                News & Events
              </p>
            </div>

            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem] [font-family:var(--font-heading)]">
              <span className="text-[#202020]">Latest Events</span>
            </h2>
          </motion.div>

          {/* Manually-scrolled cards with prominent controls on both sides */}
          <div className="relative">
            {/* Prev */}
            <button
              type="button"
              aria-label="Previous events"
              onClick={() => scrollByViewport(-1)}
              className="absolute left-0 sm:-left-5 top-26 sm:top-30 -translate-y-1/2 z-20 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white text-black shadow-xl ring-1 ring-black/5 cursor-pointer transition-all duration-200 hover:bg-primary hover:text-white hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.5} />
            </button>

            {/* Next */}
            <button
              type="button"
              aria-label="Next events"
              onClick={() => scrollByViewport(1)}
              className="absolute right-0 sm:-right-5 top-26 sm:top-30 -translate-y-1/2 z-20 flex h-11 w-11 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white text-black shadow-xl ring-1 ring-black/5 cursor-pointer transition-all duration-200 hover:bg-primary hover:text-white hover:scale-105 active:scale-95"
            >
              <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.5} />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-6 items-start overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {eventsList.map((event, i) => (
                <motion.button
                  key={event.id}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                  onClick={() => setSelected(event)}
                  className="group flex-shrink-0 w-[280px] sm:w-80 snap-start cursor-pointer text-left flex flex-col"
                >
                  {/* Image */}
                  <div className="relative h-52 sm:h-60 w-full rounded-[1.5rem] overflow-hidden bg-black/5 mb-4">
                    <Image
                      src={event.imageUrl}
                      alt={event.title}
                      fill
                      sizes="(max-width: 640px) 288px, 320px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-[1.5rem]" />
                  </div>

                  {/* Card Content */}
                  <div className="space-y-2 px-1 flex-1">
                    <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-black/40 [font-family:var(--font-heading)]">
                      {formatDate(event.date)}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold leading-snug text-black line-clamp-2 [font-family:var(--font-heading)] group-hover:text-primary transition-colors duration-200 min-h-[2.8rem] sm:min-h-[3.2rem]">
                      {event.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-black/55 line-clamp-2 [font-family:var(--font-body)] mb-2">
                      {event.description}
                    </p>
                    <span className="inline-block pt-1 text-xs font-bold text-black/40 group-hover:text-primary transition-colors duration-200 [font-family:var(--font-heading)] mt-auto">
                      Read more →
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              key="modal-card"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative w-full max-w-2xl rounded-[2rem] bg-white shadow-2xl max-h-[90vh] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/8 hover:bg-black/14 transition-colors"
              >
                <X className="h-5 w-5 text-black" />
              </button>

              {/* Modal Image */}
              <div className="relative h-64 sm:h-80 w-full rounded-t-[2rem] overflow-hidden bg-black/5">
                <Image
                  src={selected.imageUrl}
                  alt={selected.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 672px"
                  className="object-cover"
                />
              </div>

              {/* Modal Content */}
              <div className="p-7 sm:p-10">
                <div className="mb-4 inline-block rounded-full bg-[#FEF8E6] px-3.5 py-1.5 text-[11px] font-bold text-primary [font-family:var(--font-heading)]">
                  {formatDate(selected.date)}
                </div>

                <h2 className="mb-5 text-2xl sm:text-3xl font-bold leading-tight text-black [font-family:var(--font-heading)]">
                  {selected.title}
                </h2>

                <p className="text-base leading-[1.8] text-black/70 [font-family:var(--font-body)]">
                  {selected.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
