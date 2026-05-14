"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export interface EventItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
}

interface EventsSectionProps {
  events: EventItem[];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export default function EventsSection({ events }: EventsSectionProps) {
  const [selected, setSelected] = useState<EventItem | null>(null);

  if (!events.length) return null;

  return (
    <>
      <style>{`
        .events-marquee-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
        }
        @media (min-width: 1024px) {
          .events-marquee-track {
            animation: marquee-events 60s linear infinite;
          }
          .events-marquee-track:hover {
            animation-play-state: paused;
          }
        }
        @keyframes marquee-events {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

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
              <span className="text-[#202020]">Latest Events </span>
              <span className="text-black/40">&amp; </span>
              <br />
              <span className="text-black/40">Milestones</span>
            </h2>
          </motion.div>

          {/* Scrollable Cards - Marquee on desktop, manual on mobile */}
          <div
            className="relative overflow-x-auto lg:overflow-x-hidden pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black 3%, black 97%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 3%, black 97%, transparent)",
            }}
          >
            <div className="events-marquee-track">
              {[0, 1].map((groupIndex) => (
                <div key={groupIndex} className="flex gap-6 pr-6 items-start">
                  {events.map((event, i) => (
                    <motion.button
                      key={`${event.id}-${groupIndex}-${i}`}
                      initial={{ opacity: 0, y: 32 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{
                        duration: 0.6,
                        delay: i * 0.1,
                        ease: [0.21, 0.47, 0.32, 0.98],
                      }}
                      onClick={() => setSelected(event)}
                      className="group flex-shrink-0 w-72 sm:w-80 cursor-pointer text-left flex flex-col"
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
