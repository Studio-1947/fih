"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { StorySection } from "@/lib/content/storiesOfChange";

function useFadeIn(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function StorySectionItem({ section, index }: { section: StorySection; index: number }) {
  const { ref, visible } = useFadeIn(0.15);
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {/* Image Block */}
      <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <div className="relative">
          <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl group">
            {section.imagePath && (
              <Image
                src={section.imagePath}
                alt={section.heading}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
          </div>
          
          {/* Decorative Floating Card */}
          <div className={`absolute -bottom-10 ${isEven ? "-right-10" : "-left-10"} hidden xl:block w-48 h-48 bg-primary rounded-full blur-[80px] opacity-20 pointer-events-none animate-pulse`} />
        </div>
      </div>

      {/* Text Block */}
      <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"} flex flex-col`}>
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-12 bg-primary" />
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#141416] tracking-tighter leading-tight [font-family:var(--font-heading)]">
              {section.heading}
            </h3>
          </div>

          <div className="space-y-6 text-lg sm:text-xl text-[#141416]/70 leading-relaxed [font-family:var(--font-body)]">
            {section.paragraphs.map((para, pIndex) => (
              <p 
                key={pIndex}
                className={pIndex === 0 ? "first-letter:text-6xl first-letter:font-black first-letter:text-[#141416] first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] text-[#141416]/90 font-medium" : ""}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
