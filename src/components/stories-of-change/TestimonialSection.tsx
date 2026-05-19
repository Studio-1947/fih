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
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function TestimonialCard({ item, index }: { item: (typeof storiesOfChangeContent.testimonials)[0]; index: number }) {
  const { ref, visible } = useFadeIn(0.08);

  return (
    <div
      ref={ref}
      className={`bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col h-full hover:shadow-2xl hover:-translate-y-2 group relative overflow-hidden transition-[opacity,transform,box-shadow] duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: visible ? `${index * 80}ms` : "0ms" }}
    >
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[5rem] -mr-8 -mt-8 transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/10" />

      <div className="flex flex-col items-center text-center mb-4 relative z-10">
        <div className="relative w-28 h-36 rounded-3xl overflow-hidden shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-500 mb-2 border border-gray-100 group-hover:border-primary/20 shrink-0">
          <Image src={item.imagePath} alt={item.name} fill className="object-cover" />
        </div>
        <h4 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-primary-dark transition-colors">
          {item.name}
        </h4>
        <span className="inline-block px-2.5 py-0.5 bg-primary/10 text-black text-[9px] font-extrabold uppercase tracking-wider rounded-full mt-1">
          Beneficiary
        </span>
      </div>

      <div className="relative grow z-10 text-left px-1 mt-1">
        <Quote className="absolute -top-3 -left-3 w-8 h-8 text-primary/5 group-hover:text-primary/15 transition-all duration-700 -z-10 rotate-12" strokeWidth={2} />
        <p className="text-gray-600 leading-relaxed text-[0.88rem] md:text-[0.94rem] relative pl-4 border-l-2 border-primary/25 italic font-medium">
          &ldquo;{item.description}&rdquo;
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between group-hover:border-primary/20 transition-colors duration-500">
        <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-wider text-gray-400 group-hover:text-primary-dark transition-colors whitespace-nowrap overflow-hidden text-ellipsis mr-3">
          Foundation for Innovations in Health
        </span>
        <div className="w-12 h-0.5 bg-gray-100 group-hover:bg-primary/40 rounded-full transition-all duration-500 shrink-0 origin-right group-hover:scale-x-125" />
      </div>
    </div>
  );
}

export default function TestimonialSection() {
  const { testimonials } = storiesOfChangeContent;
  const { ref: headingRef, visible: headingVisible } = useFadeIn(0.2);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <TestimonialCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
