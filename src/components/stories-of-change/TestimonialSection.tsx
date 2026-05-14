"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { storiesOfChangeContent } from "@/lib/content/storiesOfChange";
import { Quote } from "lucide-react";

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

export default function TestimonialSection() {
  const { testimonials } = storiesOfChangeContent;
  const { ref: headingRef, visible: headingVisible } = useFadeIn(0.2);
  const { ref: gridRef, visible: gridVisible } = useFadeIn(0.1);

  return (
    <section id="testimonials" className="py-20 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headingRef}
          className={`text-center mb-12 lg:mb-16 transition-all duration-700 ease-out ${
            headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Stories of Change</h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mt-6" />
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: gridVisible ? `${index * 120}ms` : "0ms",
                transitionProperty: "opacity, transform, box-shadow",
                transitionDuration: "700ms",
                transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[5rem] -mr-8 -mt-8 transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10" />

              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="relative w-28 h-28 rounded-3xl overflow-hidden shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-500 shrink-0">
                  <Image
                    src={item.imagePath}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-primary-dark transition-colors">{item.name}</h4>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary-dark text-[10px] font-bold uppercase tracking-wider rounded-full mt-2">
                    Beneficiary
                  </span>
                </div>
              </div>

              <div className="relative grow z-10">
                <Quote className="absolute -top-4 -left-4 w-16 h-16 text-primary/5 group-hover:text-primary/10 transition-all duration-700 -z-10 rotate-12" strokeWidth={1} />
                <p className="text-gray-600 leading-relaxed text-[0.95rem] md:text-base relative">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between group-hover:border-primary/20 transition-colors duration-500">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-primary-dark transition-colors">Foundation for Innovations in Health</span>
                <div className="w-12 h-1 bg-gray-100 group-hover:bg-primary/30 rounded-full transition-all duration-500 group-hover:w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
