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
    imagePath: "/AboutUs/our%20journey/2017.webp",
    body: "The first ever digital clinic was set up at Barhra, Birbhum (funded by Department of Science & Technology, Government of India). A child of 12 yrs was diagnosed with a rare but life-threatening cardiac disorder through digital consultation with a cardiologist sitting in Bangladesh. One life was saved!",
  },
  {
    year: "2018",
    title: "The Translation",
    imagePath: "/AboutUs/our%20journey/2018.webp",
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
    imagePath: "/AboutUs/our%20journey/2020.webp",
    body: "Expanded footprint of training schools across multiple states in India; thousands received training and subsequent job placement in a network of 60+ hospitals across almost all major cities in India.",
  },
  {
    year: "2022",
    title: "CSR Programs",
    imagePath: "/AboutUs/our%20journey/2022.webp",
    body: "Multiple companies came forward, inspired by the twin impact strategy. We aligned with their CSR values; demonstrated sustainable and measurable impact on various Sustainable Development Goals (SDGs).",
  },
];

const INTERVAL = 9000;

export default function OurJourneySection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const hintShownRef = useRef(false);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = journeyEvents.length;

  const goTo = useCallback((idx: number) => {
    setActive((idx + total) % total);
    setProgress(0);
  }, [total]);

  const startTimers = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);

    setProgress(0);

    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + 100 / (INTERVAL / 50), 100));
    }, 50);

    timerRef.current = setInterval(() => {
      setActive((a) => (a + 1) % total);
      setProgress(0);
    }, INTERVAL);
  }, [total]);

  useEffect(() => {
    if (!paused) startTimers();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [paused, startTimers]);

  const handleNav = (idx: number) => {
    goTo(idx);
    startTimers();
  };

  const dismissHint = () => setShowHint(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    dismissHint();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 40) return;
    handleNav(dx < 0 ? active + 1 : active - 1);
  };

  // Show hint once on mobile when section enters view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hintShownRef.current && window.innerWidth < 640) {
          hintShownRef.current = true;
          setShowHint(true);
          setTimeout(() => setShowHint(false), 2800);
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const event = journeyEvents[active];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0d0d0f] overflow-hidden"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      {/* Section label */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-8 flex items-center justify-between">
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
        className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] min-h-[420px] overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
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
                className="object-cover object-center"
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
              <span className="absolute -top-4 -left-2 text-[10rem] sm:text-[14rem] lg:text-[18rem] font-black text-white/[0.03] leading-none tracking-tighter select-none pointer-events-none [font-family:var(--font-heading)]">
                {ev.year}
              </span>

              <div className="relative">
                <span className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-primary [font-family:var(--font-heading)] mb-3 sm:mb-5">
                  {ev.year}
                </span>
                <h3 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight tracking-tighter mb-4 sm:mb-6 [font-family:var(--font-heading)]">
                  {ev.title}
                </h3>
                <div className="w-10 h-0.5 bg-primary mb-4 sm:mb-6" />
                <p className="text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed [font-family:var(--font-body)] max-w-md">
                  {ev.body}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* Arrow buttons — desktop only */}
        <button
          onClick={() => handleNav(active - 1)}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-white/15 text-white/60 hover:border-primary hover:text-primary bg-black/30 backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => handleNav(active + 1)}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-white/15 text-white/60 hover:border-primary hover:text-primary bg-black/30 backdrop-blur-sm transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Swipe hint — mobile only, shown once */}
        <div
          className={`absolute inset-x-0 bottom-8 z-30 flex justify-center pointer-events-none transition-opacity duration-700 sm:hidden ${
            showHint ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-5 py-2.5">
            <ChevronLeft className="w-3.5 h-3.5 text-white/50" />
            <span className="text-[11px] font-semibold text-white/70 tracking-wide [font-family:var(--font-heading)]">
              Swipe to explore
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-white/50" />
          </div>
        </div>
      </div>

      {/* Controls: dots + progress */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex items-center gap-6">
        {/* Dot nav */}
        <div className="flex items-center gap-2">
          {journeyEvents.map((_, i) => (
            <button
              key={i}
              onClick={() => handleNav(i)}
              className={`transition-all duration-400 rounded-full ${
                i === active ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="flex-1 h-px bg-white/10 relative overflow-hidden rounded-full">
          <div
            className="absolute left-0 top-0 h-full bg-primary transition-none rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Counter */}
        <span className="text-xs font-bold text-white/30 [font-family:var(--font-heading)] tabular-nums shrink-0">
          {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
