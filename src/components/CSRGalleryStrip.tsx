"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "01.jpeg", "02.jpeg", "03.jpeg", "04.jpeg", "05.jpeg",
  "06.jpeg", "07.jpeg", "08.jpeg", "09.jpeg", "10.jpeg",
  "11.jpeg", "12.jpeg", "13.jpeg", "14.jpeg", "15.jpeg",
  "16.jpeg", "17.jpeg", "18.jpeg", "19.jpeg",
];

export default function CSRGalleryStrip() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Drag-to-scroll state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    return () => el.removeEventListener("scroll", updateArrows);
  }, [updateArrows]);

  const scroll = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.75;
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  // Mouse drag handlers
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.2;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };
  const stopDrag = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header row */}
        <div className="flex items-end justify-between mb-6 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-1 w-8 rounded-full bg-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 [font-family:var(--font-heading)]">
                In the Field
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black [font-family:var(--font-heading)] text-black">
              CSR Gallery
            </h2>
          </div>

          {/* Scroll arrow buttons — visible on desktop */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll left"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/12 bg-white shadow-sm hover:bg-primary disabled:opacity-25 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll right"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-black/12 bg-white shadow-sm hover:bg-primary disabled:opacity-25 transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Scroll track */}
        <div
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          className="flex gap-3 overflow-x-auto pb-3 select-none"
          style={{
            cursor: "grab",
            scrollbarWidth: "none",         /* Firefox */
            msOverflowStyle: "none",        /* IE/Edge */
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Hide scrollbar in WebKit */}
          <style>{`.csr-track::-webkit-scrollbar{display:none}`}</style>

          {images.map((img) => (
            <div
              key={img}
              className="relative shrink-0 h-52 sm:h-64 lg:h-72 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              style={{ width: "clamp(180px, 22vw, 300px)" }}
            >
              <Image
                src={`/csr/gallery/${img}`}
                alt={`CSR Gallery – ${img}`}
                fill
                className="object-cover pointer-events-none"
                sizes="300px"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Mobile swipe hint */}
        <p className="mt-3 text-center text-[11px] text-black/30 [font-family:var(--font-body)] sm:hidden">
          Swipe to explore →
        </p>
      </div>
    </section>
  );
}
