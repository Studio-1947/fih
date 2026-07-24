"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";

export type SpotlightSlide = {
  eyebrow: string;
  title: string;
  location?: string;
  imagePath: string;
  body: string[];
};

type SpotlightSliderProps = {
  slides: SpotlightSlide[];
};

export default function SpotlightSlider({ slides }: SpotlightSliderProps) {
  const [active, setActive] = useState(0);
  const total = slides.length;
  const go = (idx: number) => setActive((idx + total) % total);

  return (
    <section
      className="relative w-screen left-1/2 -translate-x-1/2 bg-[#0A0A0B] py-14 sm:py-20 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black shadow-2xl">
          {/* All slides stacked in one grid cell → the frame is always as tall as
              the tallest slide, so switching never jumps and nothing scrolls. */}
          <div className="relative">
            <div className="grid">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  aria-hidden={i !== active}
                  className={`col-start-1 row-start-1 grid grid-cols-1 sm:grid-cols-2 sm:min-h-[420px] transition-opacity duration-500 ${
                    i === active ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-52 sm:h-auto">
                    <Image
                      src={slide.imagePath}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      priority={i === 0}
                    />
                    {/* Blend image into the dark text panel */}
                    <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-transparent via-transparent to-black/90 sm:to-black" />
                  </div>

                  {/* Text */}
                  <div className="relative flex flex-col justify-center gap-4 px-6 sm:px-10 lg:px-14 py-10 sm:py-12">
                    <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] text-primary [font-family:var(--font-heading)]">
                      {slide.eyebrow}
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.05] tracking-tight [font-family:var(--font-heading)]">
                      {slide.title}
                    </h2>

                    {slide.location && (
                      <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 w-fit">
                        <MapPin className="h-4 w-4 text-primary shrink-0" />
                        <span className="text-sm font-bold text-white tracking-tight [font-family:var(--font-heading)]">
                          {slide.location}
                        </span>
                      </div>
                    )}

                    <div className="space-y-3 text-sm sm:text-[15px] leading-relaxed text-white/75 [font-family:var(--font-body)]">
                      {slide.body.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Prominent arrows */}
            <button
              onClick={() => go(active - 1)}
              aria-label="Previous"
              className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary text-[#0A0A0B] shadow-[0_8px_24px_rgba(0,0,0,0.5)] ring-2 ring-white/15 hover:scale-110 hover:ring-white/30 active:scale-95 transition-all cursor-pointer"
            >
              <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
            </button>
            <button
              onClick={() => go(active + 1)}
              aria-label="Next"
              className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-primary text-[#0A0A0B] shadow-[0_8px_24px_rgba(0,0,0,0.5)] ring-2 ring-white/15 hover:scale-110 hover:ring-white/30 active:scale-95 transition-all cursor-pointer"
            >
              <ChevronRight className="h-6 w-6" strokeWidth={2.5} />
            </button>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between gap-4 border-t border-white/10 px-6 sm:px-10 py-4">
            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    i === active ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-white/40 tabular-nums [font-family:var(--font-heading)]">
              {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
