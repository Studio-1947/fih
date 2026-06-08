"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { AboutContent } from "@/lib/content/about";
import ShinyText from "@/components/ui/ShinyText";

type ImpactSectionProps = {
  content: AboutContent["impact"];
};

const T3_LABELS = ["TRAIN", "TECHNOLOGY", "TASK-SHIFT"];
const T3_POSITIONS = [
  { top: "8%", left: "50%" },
  { top: "70%", left: "15%" },
  { top: "70%", left: "85%" },
];

function T3TriangleArrows() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="absolute inset-0 z-10 w-full h-full"
      fill="none"
    >
      <line
        x1="43.4"
        y1="22.6"
        x2="24.2"
        y2="56.8"
        stroke="white"
        strokeWidth="0.6"
        strokeOpacity="0.45"
        strokeDasharray="2.5 2"
      />
      <line
        x1="21.6"
        y1="55.4"
        x2="40.8"
        y2="21.2"
        stroke="white"
        strokeWidth="0.6"
        strokeOpacity="0.45"
        strokeDasharray="2.5 2"
      />
      <line
        x1="59.2"
        y1="21.2"
        x2="78.4"
        y2="55.4"
        stroke="white"
        strokeWidth="0.6"
        strokeOpacity="0.45"
        strokeDasharray="2.5 2"
      />
      <line
        x1="75.8"
        y1="56.8"
        x2="56.6"
        y2="22.6"
        stroke="white"
        strokeWidth="0.6"
        strokeOpacity="0.45"
        strokeDasharray="2.5 2"
      />
      <line
        x1="31"
        y1="68.5"
        x2="69"
        y2="68.5"
        stroke="white"
        strokeWidth="0.6"
        strokeOpacity="0.45"
        strokeDasharray="2.5 2"
      />
      <line
        x1="69"
        y1="71.5"
        x2="31"
        y2="71.5"
        stroke="white"
        strokeWidth="0.6"
        strokeOpacity="0.45"
        strokeDasharray="2.5 2"
      />
      <circle
        cx="50"
        cy="49"
        r="13"
        stroke="white"
        strokeOpacity="0.2"
        strokeWidth="0.5"
        strokeDasharray="2 2"
      />
      <text
        x="50"
        y="46.5"
        textAnchor="middle"
        fontSize="5.5"
        fontWeight="bold"
        fill="white"
        fillOpacity="0.45"
        letterSpacing="0.3"
      >
        3T
      </text>
      <text
        x="50"
        y="53"
        textAnchor="middle"
        fontSize="3"
        fill="white"
        fillOpacity="0.35"
        letterSpacing="1.5"
      >
        MODEL
      </text>
    </svg>
  );
}

function T3RotatingCircles() {
  return (
    <>
      {T3_LABELS.map((label, i) => {
        const pos = T3_POSITIONS[i];
        return (
          <div
            key={label}
            className="absolute w-[24%] aspect-square rounded-full bg-white text-[#141416] font-bold text-[9px] shadow-xl border border-black/5 flex items-center justify-center text-center px-1 leading-tight z-20 select-none"
            style={{
              top: pos.top,
              left: pos.left,
              transform: "translate(-50%, -50%)",
            }}
          >
            {label}
          </div>
        );
      })}
    </>
  );
}

function useFadeIn(threshold = 0.15) {
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

export default function ImpactSection({ content }: ImpactSectionProps) {
  const intro = useFadeIn();
  const challenges = useFadeIn();
  const model = useFadeIn();
  const systemic = useFadeIn();

  return (
    <section
      className="w-full bg-[#FAFAFA] pt-24 sm:pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden border-t border-black/5"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      {/* 1. Asymmetrical Overlap Poster Intro */}
      <div
        ref={intro.ref}
        className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-32 sm:mb-48 pt-16 lg:pt-32 relative transition-all duration-700 ease-out ${intro.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        {/* Background Image Block (Shifted Right) */}
        <a
          href="#three-t-model"
          className="relative w-full lg:w-[65%] lg:ml-auto aspect-[4/3] sm:aspect-[4/3] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl border border-black/5 group block cursor-pointer"
          aria-label="Scroll to 3T Model in Action"
        >
          {content.imagePath && (
            <Image
              src={content.imagePath}
              alt="Impact in Focus"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-[3000ms]"
            />
          )}
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-1000" />
        </a>

        {/* Foreground Typography Block */}
        <div className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-4 xl:left-8 mt-[-10%] lg:mt-0 w-[95%] mx-auto lg:mx-0 lg:w-[50%] z-10">
          <div className="bg-[#141416] p-10 sm:p-14 lg:p-16 rounded-[2rem] sm:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden group/card">
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/20 rounded-full blur-[80px] group-hover/card:scale-125 transition-transform duration-1000 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-[2px] bg-primary" />
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary [font-family:var(--font-heading)]">
                  {content.mainHeading}
                </span>
              </div>
              <h2 className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black leading-[0.95] tracking-tighter mb-10 [font-family:var(--font-heading)] text-white">
                {content.subHeading}
              </h2>
              <div className="space-y-6 border-l-2 border-primary/30 pl-6 lg:pl-8">
                <p className="text-xl sm:text-2xl font-bold text-white/90 leading-snug tracking-tight [font-family:var(--font-body)]">
                  {content.hook}
                </p>
                <p className="text-base sm:text-lg text-white/60 leading-relaxed font-light [font-family:var(--font-body)]">
                  {content.introParagraph}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Transforming Barriers into Lasting Impact - Bento Grid */}
      <div
        ref={challenges.ref}
        className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-700 ease-out delay-100 ${challenges.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="flex items-center gap-5 mb-16 sm:mb-20">
          <div className="h-px flex-1 bg-black/10" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#141416]/40 [font-family:var(--font-heading)] shrink-0">
            Transforming Barriers into Lasting Impact
          </span>
          <div className="h-px flex-1 bg-black/10" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Livelihoods */}
          <div className="group relative bg-white border border-black/5 hover:border-black/10 p-8 sm:p-12 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-default">
            {/* Subtle card accent lines & background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#141416] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block bg-[#141416] text-white text-xs font-bold tracking-[0.2em] uppercase px-3.5 py-2 rounded-xl [font-family:var(--font-heading)] shadow-sm">
                  Livelihoods
                </span>
              </div>

              {/* Heading */}
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#141416] leading-tight tracking-tight mb-8 [font-family:var(--font-heading)] group-hover:text-primary transition-colors duration-300">
                {content.ruralEmployment.heading}
              </h4>

              {/* Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-[#141416]/70 leading-relaxed [font-family:var(--font-body)]">
                {content.ruralEmployment.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Healthcare */}
          <div className="group relative bg-white border border-black/5 hover:border-black/10 p-8 sm:p-12 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-default">
            {/* Subtle card accent lines & background glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center gap-3 mb-8">
                <span className="inline-block bg-primary text-[#141416] text-xs font-bold tracking-[0.2em] uppercase px-3.5 py-2 rounded-xl [font-family:var(--font-heading)] shadow-sm">
                  Healthcare
                </span>
              </div>

              {/* Heading */}
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#141416] leading-tight tracking-tight mb-8 [font-family:var(--font-heading)] group-hover:text-primary transition-colors duration-300">
                {content.healthcareAccess.heading}
              </h4>

              {/* Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-[#141416]/70 leading-relaxed [font-family:var(--font-body)]">
                {content.healthcareAccess.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. The 3T Model in Action */}
      <div
        id="three-t-model"
        ref={model.ref}
        className={`w-full bg-[#141416] pt-16 sm:pt-20 lg:pt-16 pb-16 sm:pb-20 lg:pb-28 relative overflow-hidden text-white transition-all duration-700 ease-out ${model.visible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="absolute top-0 right-0 w-[80vw] h-[80vw] max-w-4xl max-h-4xl bg-primary/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-stretch">
            <div className="lg:col-span-5 lg:sticky lg:top-40 flex flex-col items-center justify-center text-center">
              <h3 className="text-4xl sm:text-5xl lg:text-[5rem] font-black mb-8 leading-[0.95] tracking-tighter [font-family:var(--font-heading)]">
                <ShinyText
                  text={content.modelInAction.heading}
                  speed={3}
                  delay={1}
                  color="rgba(255, 255, 255, 0.4)"
                  shineColor="#ffffff"
                  spread={120}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={true}
                  className="leading-[0.95] tracking-tighter"
                />
              </h3>
              <p className="text-xl sm:text-2xl font-medium text-white/60 leading-relaxed [font-family:var(--font-body)]">
                {content.modelInAction.intro}
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col">
              <div className="border-t border-white/10 flex flex-col">
                {content.modelInAction.points.map((point, idx) => (
                  <div
                    key={idx}
                    className="group py-6 lg:py-8 border-b border-white/10 flex flex-col gap-3 transition-all duration-500 hover:pl-6 sm:hover:pl-10 cursor-default"
                  >
                    <h4 className="text-4xl sm:text-5xl font-black text-primary [font-family:var(--font-heading)] tracking-tighter transition-colors duration-500 group-hover:text-white">
                      {point.title}
                    </h4>
                    <p className="text-lg sm:text-xl text-white/50 leading-relaxed font-light [font-family:var(--font-body)] max-w-2xl group-hover:text-white/80 transition-colors duration-500">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* T3 Animation — centered full width */}
          <div className="mt-12 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] opacity-60 pointer-events-none" />
              <T3TriangleArrows />
              <T3RotatingCircles />
            </div>
          </div>

          {/* Conclusion Block */}
          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="text-base sm:text-lg text-white/40 leading-relaxed font-light [font-family:var(--font-body)] max-w-2xl">
              {content.modelInAction.conclusion}
            </p>
          </div>
        </div>
      </div>

      {/* 4. Creating Systemic Impact */}
      <div
        ref={systemic.ref}
        className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-32 transition-all duration-700 ease-out ${systemic.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 border-t border-black/10 pt-16 sm:pt-24">
          <div className="lg:col-span-5">
            <h3 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-black text-[#141416] tracking-tighter leading-[0.95] mb-8 [font-family:var(--font-heading)]">
              {content.systemicImpact.heading}
            </h3>
            <p className="text-lg sm:text-xl text-[#141416]/60 font-medium leading-relaxed [font-family:var(--font-body)] max-w-sm">
              {content.systemicImpact.intro}
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            {content.systemicImpact.points.map((point, idx) => (
              <div
                key={idx}
                className={`pb-12 sm:pb-16 ${idx === 0 ? "border-b border-black/10 mb-12 sm:mb-16" : ""} flex flex-col sm:flex-row gap-6 sm:gap-10 items-start group`}
              >
                <div className="w-16 h-0.75 bg-primary shrink-0 mt-4 origin-left scale-x-50 sm:scale-x-75 group-hover:scale-x-100 group-hover:bg-[#141416] transition-all duration-500 rounded-full" />
                <p className="text-2xl sm:text-3xl lg:text-4xl text-[#141416]/90 font-medium leading-tight tracking-tight [font-family:var(--font-body)] group-hover:text-[#141416] transition-colors duration-300">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-12 bg-white border border-black/5 rounded-4xl sm:rounded-[3rem] p-10 sm:p-16 lg:p-24 shadow-2xl relative overflow-hidden flex items-center justify-center text-center group">
          <div className="absolute top-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          <p className="text-xl sm:text-2xl lg:text-3xl text-[#141416]/80 leading-relaxed font-light [font-family:var(--font-body)] max-w-4xl relative z-10">
            {content.systemicImpact.conclusion}
          </p>
        </div>
      </div>
    </section>
  );
}
