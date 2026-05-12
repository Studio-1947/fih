"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Building2 } from "lucide-react";
import type { AboutContent } from "@/lib/content/about";
import BlurText from "@/components/ui/BlurText";

function useFadeIn(threshold = 0.12) {
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

type AboutContentSectionProps = {
  intro: AboutContent["intro"];
  whatSetsUsApart: AboutContent["whatSetsUsApart"];
  ourFoundation: AboutContent["ourFoundation"];
};

export default function AboutContentSection({
  intro,
  whatSetsUsApart,
  ourFoundation,
}: AboutContentSectionProps) {
  const a1 = useFadeIn();
  const a2 = useFadeIn();
  const a3 = useFadeIn();
  const a4 = useFadeIn();
  const a5 = useFadeIn();
  return (
    <section className="w-full bg-white">
      
      {/* 1. Editorial Intro Section */}
      <div
        ref={a1.ref}
        className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 transition-all duration-700 ease-out ${a1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 relative">
          
          {/* Main Heading taking 5 columns */}
          <div className="lg:col-span-5 flex flex-col pt-2 lg:pt-8">
            <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-black leading-[1.05] text-[#141416] tracking-tight [font-family:var(--font-heading)]">
              {intro.heading.split(' ').map((word, i) => (
                <span key={i} className={i > 2 ? 'text-black/30' : ''}>{word} </span>
              ))}
            </h2>
            <div className="mt-8 h-1.5 w-24 bg-primary rounded-full" />
          </div>

          {/* Image and Text taking 7 columns */}
          <div className="lg:col-span-7 space-y-12">
            {intro.imagePath && (
              <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
                <Image
                  src={intro.imagePath}
                  alt={intro.heading}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl" />
              </div>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 text-[#141416]/70 text-[15px] sm:text-[17px] leading-[1.7] [font-family:var(--font-body)]">
              {intro.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? 'font-medium text-[#141416] text-lg' : ''}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. What Sets Us Apart - Asymmetrical Bento Box */}
      <div
        ref={a2.ref}
        className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 sm:mt-40 transition-all duration-700 ease-out delay-100 ${a2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="flex flex-col mb-10 gap-2 border-b border-black/10 pb-8 text-left">
          <p className="text-xs font-bold text-black/40 uppercase tracking-[0.2em] [font-family:var(--font-heading)]">
            Our Core Pillars
          </p>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141416] [font-family:var(--font-heading)] tracking-tight">
            {whatSetsUsApart.title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {whatSetsUsApart.points.map((point, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden rounded-[2rem] p-8 sm:p-10 flex flex-col h-full transition-all duration-500 hover:-translate-y-2
                ${idx === 0 ? 'bg-[#141416] text-white shadow-xl' : 
                  idx === 1 ? 'bg-primary text-[#141416] shadow-lg' : 
                  'bg-[#F4F4F5] text-[#141416] shadow-sm'}
              `}
            >
              <div className="flex justify-start items-start mb-8">
                <div className={`h-12 w-12 rounded-full flex items-center justify-center backdrop-blur-md ${idx === 0 ? 'bg-white/10' : 'bg-black/5'}`}>
                  <CheckCircle2 className={`h-5 w-5 ${idx === 0 ? 'text-primary' : 'text-[#141416]'}`} />
                </div>
              </div>
              
              <div className="relative z-10 flex flex-col flex-1">
                <h4 className="text-2xl font-bold mb-4 [font-family:var(--font-heading)] leading-tight">
                  {point.title}
                </h4>
                <p className={`text-[15px] leading-relaxed ${idx === 0 ? 'text-white/70' : 'text-[#141416]/70'} [font-family:var(--font-body)]`}>
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Our Foundation - Immersive Dark Section */}
      <div
        ref={a3.ref}
        className={`w-full mt-24 sm:mt-40 relative overflow-hidden transition-opacity duration-700 ease-out ${a3.visible ? "opacity-100" : "opacity-0"}`}
        style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
      >
        {/* Full-bleed image with deep overlay */}
        <div className="relative w-full min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center">
          {ourFoundation.imagePath && (
            <Image
              src={ourFoundation.imagePath}
              alt="Our Foundation"
              fill
              className="object-cover"
            />
          )}
          {/* Deep dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#141416]/80 via-[#141416]/70 to-[#141416]/95" />

          {/* Floating Content */}
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-8 lg:px-12 py-24 sm:py-32 flex flex-col items-center text-center">
            
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-[2px] bg-primary" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary [font-family:var(--font-heading)]">
                The Origins
              </span>
              <div className="w-10 h-[2px] bg-primary" />
            </div>

            {/* Title */}
            <h3 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-black text-white leading-[1.0] tracking-tighter mb-14 [font-family:var(--font-heading)] max-w-4xl">
              {ourFoundation.title}
            </h3>

            {/* Divider */}
            <div className="w-20 h-[2px] bg-white/20 mb-14" />

            {/* Paragraphs */}
            <div className="space-y-6 text-lg sm:text-xl text-white/70 leading-relaxed [font-family:var(--font-body)] max-w-3xl">
              {ourFoundation.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === 0 ? "text-white/90 font-medium text-xl sm:text-2xl" : ""}>
                  {p}
                </p>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* 4. Immersive Quote Breakout */}
      <div
        ref={a4.ref}
        className={`w-full bg-primary py-24 sm:py-32 px-4 relative overflow-hidden transition-opacity duration-700 ease-out ${a4.visible ? "opacity-100" : "opacity-0"}`}
        style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
      >
        <div className="absolute -top-24 -left-10 text-[20rem] font-black text-black/5 leading-none select-none">"</div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col justify-center items-center gap-8 sm:gap-12">
          {ourFoundation.quoteIntro && (
            <p className="text-lg sm:text-xl font-medium text-[#141416]/80 max-w-4xl [font-family:var(--font-body)] leading-relaxed">
              {ourFoundation.quoteIntro}
            </p>
          )}
          <BlurText
            text={ourFoundation.quote}
            delay={150}
            animateBy="words"
            direction="bottom"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] font-black leading-[1.05] text-[#141416] [font-family:var(--font-heading)] tracking-tighter text-center mx-auto max-w-5xl justify-center"
          />
        </div>
      </div>

      {/* 5. Conclusion / Transition to Vision & Mission */}
      <div
        ref={a5.ref}
        className={`mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 mt-24 sm:mt-32 text-center transition-all duration-700 ease-out delay-100 ${a5.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h4 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-[#141416]/90 [font-family:var(--font-heading)] leading-relaxed">
          {ourFoundation.conclusion}
        </h4>
      </div>

    </section>
  );
}
