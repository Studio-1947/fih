"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const journeyEvents = [
  {
    year: "2011",
    title: "Straightening a dog's tail",
    imagePath: "/AboutUs/our%20journey/2011.webp",
    body: "FIH = Serendipity; when Dr. Saha (its founder) and his doctor colleagues realised the futility of trying to improve health of the people by establishing more and more hospitals. Dr. Saha has been a serial entrepreneur in healthcare, having established 5 hospitals in different districts of West Bengal, starting with Westbank Hospital at Howrah. FIH was born!",
  },
  {
    year: "2013",
    title: "Learning",
    imagePath: "/AboutUs/our%20journey/2013.webp",
    body: "Exposure to rural primary care systems across South Asian countries and Africa, obtained through consulting work with IFC (World Bank Group) and other impact-oriented healthcare investment groups helped develop the hypothesis of the 3T model. The idea germinated!",
  },
  {
    year: "2015",
    title: "Challenging the conventional framework",
    imagePath: "/AboutUs/our%20journey/2015.webp",
    body: "Shifting task from the doctor (ubiquitous shortage) to the trained community health worker held the key to the 3T model. Through a collaboration with Johns Hopkins University USA, a software was developed that would mimic the doctor's mind — easy to be used by CHWs even in low band-width. The holy grail was found!",
  },
  {
    year: "2017",
    title: "The Trepidation",
    imagePath: "/AboutUs/our%20journey/2017.jpg",
    body: "The first ever digital clinic was set up at Barhra, Birbhum (funded by Department of Science & Technology, Government of India). A child of 12 yrs was diagnosed with a rare but life-threatening cardiac disorder through digital consultation with a cardiologist sitting in Bangladesh. One life was saved!",
  },
  {
    year: "2018",
    title: "The Translation",
    imagePath: "/AboutUs/our%20journey/2018.png",
    body: "Institutions took an interest, and came forward to build translational collaborations to innovate frugal, accurate and ethnographically aligned diagnostic solutions to fulfil primary care needs. Research became democratic!",
  },
  {
    year: "2018",
    title: "The Opportunity",
    imagePath: "/AboutUs/our%20journey/2018.2.webp",
    body: "West Bengal SCSTOBSDFC, Government of West Bengal entrusted us with the task of establishing more clinics in remote rural areas. Trust was gained!",
  },
  {
    year: "2020",
    title: "Onwards – Traction",
    imagePath: "/AboutUs/our%20journey/2020.png",
    body: "Expanded footprint of training schools across multiple states in India; thousands received training and subsequent job placement in a network of 60+ hospitals across almost all major cities in India.",
  },
  {
    year: "2022",
    title: "CSR Programs",
    imagePath: "/AboutUs/our%20journey/2022.webp",
    body: "Multiple companies came forward, inspired by the twin impact strategy. We aligned with their CSR values; demonstrated sustainable and measurable impact on various Sustainable Development Goals (SDGs).",
  },
];

export default function OurJourneySection() {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = journeyEvents.length;

  const goTo = useCallback(
    (idx: number) => setActive((idx + total) % total),
    [total],
  );

  // Keyboard arrows for accessibility
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goTo(active - 1);
      if (e.key === "ArrowRight") goTo(active + 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, goTo]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 40) return;
    goTo(dx < 0 ? active + 1 : active - 1);
  };

  return (
    <section
      className="bg-[#0d0d0f] overflow-hidden"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      {/* Section label */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 pb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-8 h-px bg-primary" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary [font-family:var(--font-heading)]">
            Since 2011
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tighter [font-family:var(--font-heading)]">
          Our Journey
        </h2>
      </div>

      {/* Main card — full bleed */}
      <div
        className="relative w-full h-[48vh] sm:h-[54vh] lg:h-[60vh] min-h-[360px] max-h-[640px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        {journeyEvents.map((ev, i) => (
          <div
            key={i}
            className="absolute inset-0 flex transition-opacity duration-700"
            style={{ opacity: i === active ? 1 : 0, pointerEvents: i === active ? "auto" : "none" }}
          >
            {/* Right: image */}
            <div className="absolute inset-0 lg:left-[42%]">
              <Image
                src={ev.imagePath}
                alt={ev.title}
                fill
                // object-contain so the whole milestone photo stays visible
                // (heads never cropped); the dark panel absorbs the margins
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 58vw"
                priority={i === 0}
              />
              {/* fade to left */}
              <div className="absolute inset-0 bg-linear-to-r from-[#0d0d0f] via-[#0d0d0f]/60 to-transparent lg:via-[#0d0d0f]/20" />
              {/* fade bottom */}
              <div className="absolute inset-0 bg-linear-to-t from-[#0d0d0f]/80 via-transparent to-transparent" />
            </div>

            {/* Left: text panel — solid bg on mobile for readability */}
            <div className="relative z-10 flex flex-col justify-end sm:justify-center px-6 pb-10 sm:pb-0 sm:px-12 lg:px-16 xl:px-24 w-full lg:w-[54%] h-full">
              {/* Solid dark scrim behind text on mobile */}
              <div className="absolute inset-0 bg-linear-to-t from-[#0d0d0f] via-[#0d0d0f]/85 to-[#0d0d0f]/30 lg:hidden pointer-events-none" />

              {/* Large watermark year */}
              <span className="absolute -top-4 -left-2 text-[10rem] sm:text-[14rem] lg:text-[16rem] font-black text-white/[0.03] leading-none tracking-tighter select-none pointer-events-none [font-family:var(--font-heading)]">
                {ev.year}
              </span>

              <div className="relative">
                <span className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-primary [font-family:var(--font-heading)] mb-3 sm:mb-4">
                  {ev.year}
                </span>
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter mb-4 sm:mb-5 [font-family:var(--font-heading)]">
                  {ev.title}
                </h3>
                <div className="w-10 h-0.5 bg-primary mb-4 sm:mb-5" />
                <p className="text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed [font-family:var(--font-body)] max-w-md">
                  {ev.body}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Prominent arrow buttons */}
        <button
          onClick={() => goTo(active - 1)}
          aria-label="Previous milestone"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-primary text-[#0d0d0f] shadow-[0_8px_24px_rgba(0,0,0,0.45)] ring-2 ring-white/15 hover:scale-110 hover:ring-white/30 active:scale-95 transition-all cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
        </button>
        <button
          onClick={() => goTo(active + 1)}
          aria-label="Next milestone"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-primary text-[#0d0d0f] shadow-[0_8px_24px_rgba(0,0,0,0.45)] ring-2 ring-white/15 hover:scale-110 hover:ring-white/30 active:scale-95 transition-all cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
        </button>
      </div>

      {/* Controls: dots + counter */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex items-center gap-6">
        {/* Dot nav */}
        <div className="flex items-center gap-2">
          {journeyEvents.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to milestone ${i + 1}`}
              className={`transition-all duration-400 rounded-full cursor-pointer ${
                i === active ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <div className="flex-1" />

        {/* Counter */}
        <span className="text-xs font-bold text-white/30 [font-family:var(--font-heading)] tabular-nums shrink-0">
          {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
