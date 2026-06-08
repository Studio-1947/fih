"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HeartHandshake, Cpu, Building2 } from "lucide-react";
import type { AboutContent } from "@/lib/content/about";
import BlurText from "@/components/ui/BlurText";

function useFadeIn(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold },
    );
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
      {/* 1. Cinematic Editorial Intro Section - Full Background Image */}
      <div
        ref={a1.ref}
        className={`relative w-screen left-1/2 -translate-x-1/2 py-24 sm:py-32 bg-[#0A0A0B] overflow-hidden transition-all duration-1000 ease-out ${
          a1.visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Full Background Image */}
        {intro.imagePath && (
          <div className="absolute inset-0 z-0">
            <Image
              src={intro.imagePath}
              alt={intro.heading}
              fill
              className="object-cover opacity-[0.88] transition-all duration-700"
              sizes="100vw"
              priority
            />
            {/* Cinematic dark gradients for absolute readability and smooth fade transitions */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-l from-[#0A0A0B] via-[#0A0A0B]/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-[#0A0A0B]/10 z-10" />
          </div>
        )}

        {/* Content Area */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
          {/* Title */}
          <div className="max-w-5xl mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-black leading-[1.05] text-white tracking-tight [font-family:var(--font-heading)] uppercase">
              About
              <br />
              <span className="text-primary drop-shadow-[0_0_20px_rgba(255,184,0,0.25)]">
                Foundation for Innovations in Health
              </span>
            </h2>
            <div className="mt-8 h-1.5 w-20 bg-primary rounded-full shadow-[0_0_10px_rgba(255,184,0,0.4)]" />
          </div>

          {/* Paragraphs Area */}
          <div className="max-w-5xl space-y-6 [font-family:var(--font-body)] text-white/75 leading-relaxed text-[15px] sm:text-[17px]">
            {intro.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="text-lg sm:text-xl font-medium text-white leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* 2. What Sets Us Apart - Premium Image Bento Card Grid */}
      <div
        ref={a2.ref}
        className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-24 sm:mt-40 transition-all duration-1000 ease-out delay-100 ${
          a2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Section Header */}
        <div className="flex flex-col mb-12 gap-3 pb-6 text-left relative">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#141416] [font-family:var(--font-heading)] tracking-tight uppercase">
            {whatSetsUsApart.title}
          </h3>
        </div>

        {/* 3-Column Layered Overlapping Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {whatSetsUsApart.points.map((point, idx) => {
            const cardImages = [
              "/csr/gallery/03.jpeg", // Integrated Model
              "/csr/gallery/04.jpeg", // Technology-Driven
              "/csr/gallery/07.jpeg", // Collaborative Approach
            ];

            return (
              <div
                key={idx}
                className="group relative flex flex-col text-left cursor-pointer transition-all duration-300 h-full"
              >
                {/* Visual Header: Wide 16:11 Image Box */}
                <div className="relative w-full aspect-[16/11] rounded-[2rem] overflow-hidden bg-gray-50 border border-gray-100/50 z-0">
                  <Image
                    src={cardImages[idx]}
                    alt={point.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 400px"
                  />
                </div>

                {/* Overlapping White Sleek Card */}
                <div className="relative z-10 mx-4 mt-[-48px] bg-white border border-gray-100/80 rounded-[2rem] p-5 sm:p-6 shadow-xl transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:border-primary/20 flex-1 flex flex-col min-h-[160px] sm:min-h-[170px] md:min-h-[220px] lg:min-h-[180px]">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="text-primary shrink-0 transition-transform duration-500 group-hover:rotate-6">
                      {idx === 0 && <HeartHandshake className="h-4.5 w-4.5" />}
                      {idx === 1 && <Cpu className="h-4.5 w-4.5" />}
                      {idx === 2 && <Building2 className="h-4.5 w-4.5" />}
                    </div>
                    <h4 className="text-[14px] sm:text-[15px] lg:text-base font-black text-gray-900 uppercase tracking-tight [font-family:var(--font-heading)] group-hover:text-primary transition-colors duration-300">
                      {point.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] sm:text-[14px] text-gray-500 leading-relaxed [font-family:var(--font-body)] font-medium">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
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
              {ourFoundation.paragraphs.map((p, idx) => {
                const targetText = "Prof. (Dr.) Satadal Saha, MS, FRCS (Eng.)";
                if (p.includes(targetText)) {
                  const parts = p.split(targetText);
                  return (
                    <p
                      key={idx}
                      className={
                        idx === 0
                          ? "text-white/90 font-medium text-xl sm:text-2xl text-left"
                          : "text-left"
                      }
                    >
                      {parts[0]}
                      <a
                        href="#board-members"
                        className="underline hover:text-primary transition-all duration-300 font-bold decoration-primary/45 hover:decoration-primary decoration-[3px] underline-offset-4 text-white"
                      >
                        {targetText}
                      </a>
                      {parts[1]}
                    </p>
                  );
                }
                return (
                  <p
                    key={idx}
                    className={
                      idx === 0
                        ? "text-white/90 font-medium text-xl sm:text-2xl text-left"
                        : "text-left"
                    }
                  >
                    {p}
                  </p>
                );
              })}
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
        <div className="absolute -top-24 -left-10 text-[20rem] font-black text-black/5 leading-none select-none">
          "
        </div>
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
