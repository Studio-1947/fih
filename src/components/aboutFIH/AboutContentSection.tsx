"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { HeartHandshake, Cpu, Building2, X } from "lucide-react";
import type { AboutContent } from "@/lib/content/about";
import { aboutContent } from "@/lib/content/about";
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

  const [founderOpen, setFounderOpen] = useState(false);
  const founder =
    aboutContent.boardMembers.find((m) => m.name.includes("Satadal Saha")) ??
    aboutContent.boardMembers[0];

  useEffect(() => {
    if (!founderOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFounderOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [founderOpen]);

  return (
    <section className="w-full bg-white">
      {/* 1. Cinematic Editorial Intro Section - Full Background Image */}
      <div
        ref={a1.ref}
        className={`relative w-screen left-1/2 -translate-x-1/2 -mt-32 flex items-center min-h-[85vh] pt-44 sm:pt-56 pb-24 sm:pb-32 bg-[#0A0A0B] overflow-hidden transition-all duration-1000 ease-out ${
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
            <h2 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-black leading-[1.05] text-white tracking-tight [font-family:var(--font-heading)]">
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

      {/* 2. What sets us apart - Compact card row */}
      <div
        ref={a2.ref}
        className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 transition-all duration-1000 ease-out delay-100 ${
          a2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Section Header */}
        <div className="flex flex-col mb-8 gap-2 text-left relative">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#141416] [font-family:var(--font-heading)] tracking-tight">
            {whatSetsUsApart.title}
          </h3>
        </div>

        {/* 3-Column Compact Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {whatSetsUsApart.points.map((point, idx) => {
            const cardImages = [
              "/what-sets-us-apart/1-formal-sector-employment.webp",
              "/what-sets-us-apart/2-data-driven-approach.webp",
              "/what-sets-us-apart/3-access-barriers.webp",
            ];

            return (
              <div
                key={idx}
                className="group relative flex flex-col text-left h-full rounded-2xl overflow-hidden border border-gray-100/80 bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-primary/20"
              >
                {/* Compact banner image */}
                <div className="relative w-full aspect-[16/7] overflow-hidden bg-gray-50">
                  <Image
                    src={cardImages[idx]}
                    alt={point.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  {/* Icon & Title */}
                  <div className="flex items-start gap-2.5 mb-2">
                    <div className="text-primary shrink-0 mt-0.5 transition-transform duration-500 group-hover:rotate-6">
                      {idx === 0 && <HeartHandshake className="h-4.5 w-4.5" />}
                      {idx === 1 && <Cpu className="h-4.5 w-4.5" />}
                      {idx === 2 && <Building2 className="h-4.5 w-4.5" />}
                    </div>
                    <h4 className="text-[14px] sm:text-[15px] font-black text-gray-900 tracking-tight leading-snug [font-family:var(--font-heading)] group-hover:text-primary transition-colors duration-300">
                      {point.title}
                    </h4>
                  </div>

                  {/* Description */}
                  <p className="text-[13px] text-gray-500 leading-relaxed [font-family:var(--font-body)] font-medium">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Our Foundation - The Origins (two-column) */}
      <div
        ref={a3.ref}
        className={`w-full mt-24 sm:mt-40 relative overflow-hidden transition-opacity duration-700 ease-out ${a3.visible ? "opacity-100" : "opacity-0"}`}
        style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
      >
        {/* Faint full-bleed image with deep overlay */}
        {ourFoundation.imagePath && (
          <Image
            src={ourFoundation.imagePath}
            alt="Our Foundation"
            fill
            className="object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-br from-[#141416]/95 via-[#141416]/90 to-[#141416]/97" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 xl:gap-20 items-stretch">
            {/* Left: The Origins */}
            <div
              ref={a4.ref}
              className={`flex flex-col justify-center transition-all duration-700 ease-out ${a4.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-7">
                <div className="w-10 h-0.5 bg-primary" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary [font-family:var(--font-heading)]">
                  The Origins
                </span>
              </div>

              {/* Title */}
              <h3 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-black text-white leading-[1.05] tracking-tighter mb-8 [font-family:var(--font-heading)]">
                {ourFoundation.title}
              </h3>

              {/* Paragraphs */}
              <div className="space-y-6 text-lg sm:text-xl text-white/70 leading-relaxed [font-family:var(--font-body)] max-w-xl">
                {ourFoundation.paragraphs.map((p, idx) => {
                  const targetText = "Prof. (Dr.) Satadal Saha, MS, FRCS (Eng.)";
                  if (p.includes(targetText)) {
                    const parts = p.split(targetText);
                    return (
                      <p key={idx} className="text-white/90 font-medium text-xl sm:text-2xl">
                        {parts[0]}
                        <button
                          type="button"
                          onClick={() => setFounderOpen(true)}
                          className="cursor-pointer underline hover:text-primary transition-all duration-300 font-bold decoration-primary/45 hover:decoration-primary decoration-[3px] underline-offset-4 text-white"
                        >
                          {targetText}
                        </button>
                        {parts[1]}
                      </p>
                    );
                  }
                  return (
                    <p
                      key={idx}
                      className={idx === 0 ? "text-white/90 font-medium text-xl sm:text-2xl" : ""}
                    >
                      {p}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Right: Quote + Conclusion card */}
            <div
              ref={a5.ref}
              className={`relative flex flex-col justify-center overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 sm:p-10 lg:p-12 transition-all duration-700 ease-out delay-100 ${a5.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            >
              {/* Corner glow */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              {/* Decorative quote mark */}
              <span className="absolute top-2 right-6 text-[9rem] leading-none font-black text-primary/15 select-none pointer-events-none [font-family:var(--font-heading)]">
                &rdquo;
              </span>

              {/* Quote block */}
              <div className="relative">
                {ourFoundation.quoteIntro && (
                  <p className="text-base sm:text-lg font-medium text-white/60 [font-family:var(--font-body)] leading-relaxed mb-7">
                    {ourFoundation.quoteIntro}
                  </p>
                )}
                <BlurText
                  text={ourFoundation.quote}
                  delay={150}
                  animateBy="words"
                  direction="bottom"
                  className="justify-center text-center text-4xl sm:text-5xl lg:text-[3.75rem] font-black leading-[1.05] text-primary [font-family:var(--font-heading)] tracking-tighter"
                />
              </div>

              {/* Conclusion */}
              <div className="relative mt-10 pt-8 border-t border-white/10">
                <p className="text-lg sm:text-xl font-medium text-white/85 [font-family:var(--font-body)] leading-relaxed">
                  {ourFoundation.conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder profile modal */}
      {founderOpen && founder && (
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fade-in-up"
          onClick={() => setFounderOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={founder.name}
        >
          <div
            className="relative w-full max-w-2xl max-h-[88vh] overflow-hidden rounded-3xl bg-white shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setFounderOpen(false)}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-black/60 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header: photo + name */}
            <div className="relative shrink-0 h-64 sm:h-72 bg-[#141416]">
              <Image
                src={founder.imagePath}
                alt={founder.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, 640px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-[#141416]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight [font-family:var(--font-heading)]">
                  {founder.name}
                </h3>
                <p className="mt-1 text-sm font-bold uppercase tracking-widest text-primary [font-family:var(--font-heading)]">
                  {founder.role}
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="overflow-y-auto px-6 sm:px-8 py-6 sm:py-8 space-y-4 text-[15px] sm:text-base leading-relaxed text-[#141416]/75 [font-family:var(--font-body)]">
              {founder.description.split("\n\n").map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
