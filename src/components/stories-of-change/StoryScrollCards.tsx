"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { storiesOfChangeContent } from "@/lib/content/storiesOfChange";

// Rich custom metadata for each of the beneficiaries in the storiesOfChangeContent
const testimonialMetadata: Record<string, { tag: string; stat: string; accent: string }> = {
  "Dhina Mardi": {
    tag: "Hypertension Care",
    stat: "Birbhum District",
    accent: "from-amber-500/10 to-orange-500/10"
  },
  "Sushama Mondal": {
    tag: "Thyroid Treatment",
    stat: "Kumirmari, Sundarbans",
    accent: "from-emerald-500/10 to-teal-500/10"
  },
  "Trupti Minde": {
    tag: "Allied Health Graduate",
    stat: "Neulife Hospital, Mahad",
    accent: "from-blue-500/10 to-indigo-500/10"
  },
  "Sonali Vilas Pawar": {
    tag: "Nursing Assistant",
    stat: "Healing Hand Clinic, Pune",
    accent: "from-rose-500/10 to-pink-500/10"
  },
  "Sanju Adhikary": {
    tag: "Emergency Med Tech",
    stat: "Apollo Hospitals, Chennai",
    accent: "from-violet-500/10 to-purple-500/10"
  },
  "Sangita Mandal": {
    tag: "Medical Lab Tech",
    stat: "ICMR-NIN Project",
    accent: "from-teal-500/10 to-emerald-500/10"
  },
  "Tajmina Khatun": {
    tag: "General Duty Assistant",
    stat: "Tata Medical, Kolkata",
    accent: "from-orange-500/10 to-red-500/10"
  },
  "Samapti Halder": {
    tag: "Clinic Attendant",
    stat: "RG Stone City Clinic",
    accent: "from-sky-500/10 to-blue-500/10"
  },
  "John Mary Subba": {
    tag: "Healthcare Professional",
    stat: "Cloud Nine, Bangalore",
    accent: "from-indigo-500/10 to-violet-500/10"
  },
  "Raj Anil Fule": {
    tag: "Patient Care Assistant",
    stat: "Ratna Memorial, Pune",
    accent: "from-pink-500/10 to-rose-500/10"
  },
  "Achal Ramesh Jadhao": {
    tag: "Patient Care Assistant",
    stat: "Ratna Memorial, Pune",
    accent: "from-amber-500/10 to-yellow-500/10"
  },
  "Puspalata Mondal": {
    tag: "Frontline Health Worker",
    stat: "Floating Clinic, Sundarbans",
    accent: "from-emerald-500/10 to-cyan-500/10"
  }
};

export default function StoryScrollCards() {
  const testimonials = storiesOfChangeContent.testimonials;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // Synchronize scroll position of the description panels with the active card index
  const handleScroll = () => {
    if (!scrollContainerRef.current || isScrolling) return;

    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.clientWidth;

    if (itemWidth > 0) {
      const nextIndex = Math.round(scrollLeft / itemWidth);
      if (nextIndex !== activeIndex && nextIndex >= 0 && nextIndex < testimonials.length) {
        setActiveIndex(nextIndex);
      }
    }
  };

  // Programmatically scroll the description container to a specific index
  const scrollToStory = (index: number) => {
    if (!scrollContainerRef.current) return;

    setIsScrolling(true);
    setActiveIndex(index);

    const container = scrollContainerRef.current;
    const targetScrollLeft = index * container.clientWidth;

    container.scrollTo({
      left: targetScrollLeft,
      behavior: "smooth"
    });

    // Reset scrolling flag after animation completes
    setTimeout(() => {
      setIsScrolling(false);
    }, 600);
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToStory(activeIndex - 1);
    }
  };

  const handleNext = () => {
    if (activeIndex < testimonials.length - 1) {
      scrollToStory(activeIndex + 1);
    }
  };

  // Keep the active thumbnail card centered in the scrolling top row
  useEffect(() => {
    if (imageContainerRef.current) {
      const container = imageContainerRef.current;
      const activeChild = container.children[activeIndex] as HTMLElement;
      if (activeChild) {
        const targetScrollLeft = activeChild.offsetLeft - (container.clientWidth / 2) + (activeChild.clientWidth / 2);
        container.scrollTo({
          left: targetScrollLeft,
          behavior: "smooth"
        });
      }
    }
  }, [activeIndex]);

  // Re-align description scroll on window resize
  useEffect(() => {
    const handleResize = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        container.scrollLeft = activeIndex * container.clientWidth;
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [activeIndex]);

  return (
    <section className="py-24 bg-gradient-to-b from-surface to-gray-50 overflow-hidden relative">
      {/* Decorative backdrop blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-primary-dark [font-family:var(--font-heading)] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Interactive Gallery
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight [font-family:var(--font-heading)]">
            Voices of <span className="text-primary-dark bg-clip-text">Transformation</span>
          </h2>
          <p className="mt-4 text-gray-500 text-[0.88rem] md:text-[0.94rem] max-w-2xl mx-auto font-medium">
            Explore the real-life testimonies of community members, beneficiaries, and changemakers empowered by our healthcare initiatives.
          </p>
        </div>

        {/* 1. Scrolling Small Thumbnail Row - Separated on mobile, overlapping on desktop */}
        <div
          ref={imageContainerRef}
          className="relative z-30 flex gap-4 justify-start md:justify-center overflow-x-auto pt-6 pb-6 mb-5 md:mb-[-4rem] snap-x snap-mandatory no-scrollbar scroll-smooth select-none max-w-full px-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {testimonials.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.name}
                onClick={() => scrollToStory(index)}
                className={`snap-center shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer relative shadow-md ${isActive
                  ? "border-2 border-primary ring-4 ring-primary/20 scale-110 shadow-xl z-10 translate-y-[-4px]"
                  : "border-2 border-white hover:border-gray-200 opacity-60 hover:opacity-85 scale-95"
                  }`}
                title={item.name}
              >
                <Image
                  src={item.imagePath}
                  alt={item.name}
                  fill
                  className={`object-cover transition-all duration-700 ${isActive ? "grayscale-0 animate-subtle-zoom" : "grayscale"
                    }`}
                  sizes="120px"
                />
              </button>
            );
          })}
        </div>

        {/* 2. Interactive Scrolling Description Section */}
        <div className="relative z-10 bg-white rounded-[2.5rem] shadow-xl border border-gray-100/80 overflow-hidden">

          {/* Active Accent Gradient Overlay */}
          {testimonials[activeIndex] && (
            <div className={`absolute inset-0 bg-gradient-to-br ${(testimonialMetadata[testimonials[activeIndex].name] || { accent: "from-primary/10 to-amber-500/10" }).accent} opacity-45 transition-all duration-1000 pointer-events-none`} />
          )}

          {/* Left & Right Nav Arrows */}
          <div className="absolute inset-y-0 left-4 lg:left-6 z-20 hidden lg:flex items-center pointer-events-none">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className={`p-3 rounded-2xl bg-white/95 border border-gray-100 shadow-md pointer-events-auto transition-all ${activeIndex === 0
                ? "opacity-30 cursor-not-allowed"
                : "opacity-85 hover:opacity-100 hover:scale-105 active:scale-95 text-gray-800 hover:border-primary"
                }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute inset-y-0 right-4 lg:right-6 z-20 hidden lg:flex items-center pointer-events-none">
            <button
              onClick={handleNext}
              disabled={activeIndex === testimonials.length - 1}
              className={`p-3 pointer rounded-2xl bg-white/95 border border-gray-100 shadow-md pointer-events-auto transition-all ${activeIndex === testimonials.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "opacity-85 hover:opacity-100 hover:scale-105 active:scale-95 text-gray-800 hover:border-primary"
                }`}
            >
              <ChevronRight className="w-5 h-5 " />
            </button>
          </div>

          {/* Descriptions Snap-Scroll Container - py-0 allows the image to cover from top to bottom */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth select-none"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {testimonials.map((item) => {
              const meta = testimonialMetadata[item.name] || {
                tag: "Beneficiary Story",
                stat: "Impact Achieved",
                accent: "from-primary/10 to-amber-500/10"
              };

              return (
                <div
                  key={item.name}
                  className="w-full shrink-0 snap-start snap-always flex flex-col lg:flex-row items-stretch relative z-10"
                >
                  {/* Left Side: Large End-to-End Image */}
                  <div className="relative w-full lg:w-[22%] xl:w-[24%] h-72 sm:h-96 lg:h-auto lg:min-h-[320px] shrink-0 bg-gray-50 overflow-hidden">
                    <Image
                      src={item.imagePath}
                      alt={item.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority={testimonials[activeIndex].name === item.name}
                    />
                    {/* Shadow overlay block */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5 mix-blend-multiply" />
                  </div>

                  {/* Right Side: Text & Stats Content Area */}
                  <div className="flex-1 flex flex-col justify-between px-6 sm:px-12 lg:px-14 xl:px-16 pt-6 sm:pt-10 lg:pt-16 pb-10 sm:pb-12 text-left">

                    {/* Header & Body */}
                    <div>
                      <span className="inline-block px-3.5 py-1 bg-primary/10 text-black text-[10px] font-extrabold uppercase tracking-wider rounded-full mb-1.5 sm:mb-2">
                        {meta.tag}
                      </span>

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-1.5 sm:mb-2 tracking-tight [font-family:var(--font-heading)]">
                        {item.name}
                      </h3>

                      <p className="text-gray-600 leading-relaxed text-[0.82rem] sm:text-[0.88rem] md:text-[0.94rem] font-medium max-w-2xl animate-fade-in-up">
                        &ldquo;{item.description}&rdquo;
                      </p>
                    </div>

                    {/* Compact Horizontal Location & Focus Highlight Bar at the bottom */}
                    <div className="mt-4 sm:mt-5 bg-gray-50/50 backdrop-blur-sm border border-gray-100/60 py-2.5 px-3.5 sm:py-4 sm:px-5 rounded-[1.25rem] flex items-center justify-between gap-4">
                      <div>
                        <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest block mb-0.5">
                          Location & Focus
                        </span>
                        <div className="text-[0.82rem] sm:text-[0.88rem] md:text-[0.98rem] font-black text-primary-dark tracking-tight leading-none">
                          {meta.stat}
                        </div>
                      </div>
                      <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider hidden sm:block">
                        Foundation for Innovations in Health
                      </span>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>

          {/* Dots Indicator / Progress Bar */}
          <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center items-center gap-2.5">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToStory(index)}
                className={`transition-all duration-500 rounded-full cursor-pointer ${index === activeIndex
                  ? "w-7 h-2 bg-primary"
                  : "w-2 h-2 bg-gray-200 hover:bg-gray-300"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
