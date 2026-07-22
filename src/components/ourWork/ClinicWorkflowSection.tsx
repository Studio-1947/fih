"use client";

import React, { useState, useEffect } from "react";
import { LogIn, LogOut, Info, ChevronRight } from "lucide-react";
import type { OurWorkContent } from "@/lib/content/ourWork";
import FadeIn from "@/components/ui/FadeIn";

type ClinicWorkflowSectionProps = {
  workflow: OurWorkContent["clinicWorkflow"];
};

// Colors matching the diagram reference image
const stepColors = [
  { hex: "#5b7bcf", text: "text-white", bg: "bg-[#5b7bcf]", border: "border-[#5b7bcf]", glow: "rgba(91, 123, 207, 0.4)" }, // Patient arrives (Blue)
  { hex: "#3b82f6", text: "text-white", bg: "bg-[#3b82f6]", border: "border-[#3b82f6]", glow: "rgba(59, 130, 246, 0.4)" }, // CHW data entry (Royal Blue)
  { hex: "#f5b82e", text: "text-gray-900", bg: "bg-[#f5b82e]", border: "border-[#f5b82e]", glow: "rgba(245, 184, 46, 0.4)" }, // Real-time sharing (Golden Yellow)
  { hex: "#8ce624", text: "text-gray-900", bg: "bg-[#8ce624]", border: "border-[#8ce624]", glow: "rgba(140, 230, 36, 0.4)" }, // Remote consultation (Lime Green)
  { hex: "#2ec971", text: "text-white", bg: "bg-[#2ec971]", border: "border-[#2ec971]", glow: "rgba(46, 201, 113, 0.4)" }, // Medical action (Emerald Green)
  { hex: "#28d2a0", text: "text-white", bg: "bg-[#28d2a0]", border: "border-[#28d2a0]", glow: "rgba(40, 210, 160, 0.4)" }, // Vital/Action doc (Teal Green)
  { hex: "#2e731d", text: "text-white", bg: "bg-[#2e731d]", border: "border-[#2e731d]", glow: "rgba(46, 115, 29, 0.4)" }, // Patient departs (Forest Green)
];

export default function ClinicWorkflowSection({ workflow }: ClinicWorkflowSectionProps) {
  const allSteps = workflow.steps;
  const totalSteps = allSteps.length;

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalSteps);
    }, 2000);
    return () => clearInterval(interval);
  }, [totalSteps, isPaused]);

  // Standardized responsive sizing for predictable alignment
  const radius = "13.5rem";
  const mobileRadius = "6.5rem";

  // All nodes separated by 360/totalSteps degrees. Starting at top (0 degrees).
  const angles = allSteps.map((_, i) => (i * 360) / totalSteps);
  const arrowAngles = allSteps.map((_, i) => ((i + 0.5) * 360) / totalSteps);

  const currentColor = stepColors[activeIndex % stepColors.length];

  return (
    <section 
      className="relative z-[60] mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-white my-12 overflow-hidden flex flex-col items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background glow matching active step color */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] blur-[120px] rounded-full pointer-events-none z-0 transition-colors duration-500 opacity-15"
        style={{ backgroundColor: currentColor.hex }}
      />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ca9a22 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <FadeIn className="w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-4 relative z-20">
          <p className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-primary [font-family:var(--font-heading)]">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            INTERACTIVE PATIENT JOURNEY
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
          </p>
          <h2 className="text-3xl font-black tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl [font-family:var(--font-heading)] px-2">
            {workflow.title}
          </h2>
          <p className="text-[#666666] text-sm sm:text-lg [font-family:var(--font-body)] max-w-xl mx-auto">
            Follow the complete cycle of care from arrival to departure.
          </p>
        </div>
      </FadeIn>

      {/* 1. Desktop Circular Diagram (Hidden on Mobile) */}
      <FadeIn delay={0.2} className="w-full hidden sm:block">
        <div className="relative w-full max-w-[40rem] h-[38rem] mx-auto flex items-center justify-center mt-12">
        
        {/* Mobile Active Step Info - Safe Zone at Top */}
        <div className="sm:hidden absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[18rem] z-50 transition-all duration-500">
           <div className="bg-[#1a1a1a] text-white p-3 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 text-center">
              <div className="flex items-center justify-center gap-2 mb-1.5">
                 <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: currentColor.hex }}></div>
                 <h5 className="font-black text-[10px] uppercase tracking-wider" style={{ color: currentColor.hex }}>{allSteps[activeIndex].title}</h5>
              </div>
              <p className="text-gray-300 text-[10px] leading-relaxed [font-family:var(--font-body)]">
                {allSteps[activeIndex].description}
              </p>
           </div>
           <div className="w-px h-6 mx-auto mt-2 animate-bounce" style={{ background: `linear-gradient(to bottom, ${currentColor.hex}, transparent)` }}></div>
        </div>
        
        {/* Rotating Background Dashed Track Wrapper */}
        <div className="absolute inset-0 animate-rotate-track pointer-events-none z-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-dashed border-primary/50 shadow-[0_0_20px_rgba(251,191,36,0.1)]"
            style={{ width: `calc(${radius} * 2)`, height: `calc(${radius} * 2)` }}
          />
        </div>

        {/* Central Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-28 h-28 sm:w-44 sm:h-44 rounded-full bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex items-center justify-center text-center p-4 sm:p-6 border-[6px] sm:border-8 border-primary/10 group transition-transform duration-500 hover:scale-105">
          <div className="space-y-1">
             <div className="w-8 sm:w-12 h-1 bg-primary/30 mx-auto rounded-full mb-1 sm:mb-2 group-hover:w-16 transition-all"></div>
             <p className="text-[8px] sm:text-xs font-black text-[#1a1a1a] [font-family:var(--font-heading)] uppercase leading-tight tracking-[0.2em] sm:tracking-widest">
               PATIENT<br/><span className="text-primary text-sm sm:text-2xl drop-shadow-md">UDAY</span><br/>JOURNEY
             </p>
             <div className="w-8 sm:w-12 h-1 bg-primary/30 mx-auto rounded-full mt-1 sm:mt-2 group-hover:w-16 transition-all"></div>
          </div>
        </div>

        {/* Path arrows with step color scheme */}
        {arrowAngles.map((angle, idx) => {
          const isActive = activeIndex === idx;
          const arrowColor = stepColors[idx % stepColors.length].hex;
          return (
            <div
              key={`arrow-${idx}`}
              className="absolute top-1/2 left-1/2 z-10 pointer-events-none path-arrow"
              style={{
                '--angle': `${angle}deg`,
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(-1 * ${radius}))`
              } as React.CSSProperties}
            >
              <div 
                className={`${isActive ? "animate-pulse scale-125" : "animate-blink-path"}`} 
                style={{ 
                  animationDelay: `${idx * (1.5 / totalSteps)}s`,
                  color: arrowColor 
                }}
              >
                <ChevronRight className="w-12 h-12" strokeWidth={3.5} />
              </div>
            </div>
          );
        })}

        {/* Step nodes with color scheme from diagram screenshot */}
        {allSteps.map((step, idx) => {
          const angle = angles[idx];
          const isStart = idx === 0;
          const isEnd = idx === totalSteps - 1;
          const isActive = activeIndex === idx;
          const nodeColor = stepColors[idx % stepColors.length];

          return (
            <div
              key={`node-${idx}`}
              className={`absolute top-1/2 left-1/2 z-20 transition-all duration-500 ${isActive ? 'scale-125 z-30' : 'hover:scale-110'} group circular-node`}
              style={{
                '--angle': `${angle}deg`,
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(calc(-1 * ${radius})) rotate(calc(-1 * ${angle}deg))`
              } as React.CSSProperties}
            >
              <div 
                className={`
                  w-20 h-20 sm:w-32 sm:h-32 rounded-full flex flex-col items-center justify-center p-2 sm:p-4 text-center cursor-pointer relative overflow-visible transition-all duration-300 shadow-lg border-[3px] sm:border-4 border-white
                  ${isActive ? 'ring-4 ring-offset-2 scale-105' : 'hover:shadow-xl'}
                `}
                style={{
                  backgroundColor: nodeColor.hex,
                  color: nodeColor.hex === "#f5b82e" || nodeColor.hex === "#8ce624" ? "#1a1a1a" : "#ffffff",
                  boxShadow: isActive ? `0 0 30px ${nodeColor.glow}` : undefined,
                }}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
              >
                {isStart ? (
                  <LogIn className="w-4 h-4 sm:w-6 sm:h-6 mb-1 rotate-90" />
                ) : isEnd ? (
                  <LogOut className="w-4 h-4 sm:w-6 sm:h-6 mb-1 -rotate-90" />
                ) : (
                  <span className="text-[9px] sm:text-[10px] font-black opacity-80 mb-0.5">0{idx}</span>
                )}
                
                <h4 className="text-[7.5px] sm:text-[11px] font-black leading-tight [font-family:var(--font-heading)] uppercase px-1 w-full text-center">
                  {step.title}
                </h4>

                {!isStart && !isEnd && (
                  <div className={`mt-1 transition-opacity ${isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}>
                    <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                )}

                {/* Tooltip Description - Desktop Only */}
                {step.description && (
                  <div className={`
                    hidden sm:block absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-72 bg-[#1a1a1a] text-white p-4 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.3)] transition-all duration-500 z-[100] text-left border border-white/10
                    ${isActive ? "opacity-100 visible translate-y-0" : "opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"}
                  `}>
                    <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
                       <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: nodeColor.hex }}></div>
                       <h5 className="font-black text-xs uppercase tracking-wider" style={{ color: nodeColor.hex }}>{step.title}</h5>
                    </div>
                    <p className="text-gray-300 text-[11px] leading-relaxed [font-family:var(--font-body)]">
                      {step.description}
                    </p>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-4 h-4 bg-[#1a1a1a] rotate-45 -mt-2"></div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      </FadeIn>

      {/* 2. Mobile Vertical Stepper (Shown on Mobile ONLY) */}
      <FadeIn delay={0.2} className="w-full sm:hidden px-4">
        <div className="relative space-y-4">
          <div className="absolute left-[1.35rem] top-4 bottom-4 w-px border-l-2 border-dashed border-primary/20 z-0"></div>
          
          {allSteps.map((step, idx) => {
            const isActive = activeIndex === idx;
            const isStart = idx === 0;
            const isEnd = idx === totalSteps - 1;
            const nodeColor = stepColors[idx % stepColors.length];
            
            return (
              <div 
                key={`mobile-step-${idx}`}
                className={`relative flex gap-5 items-start transition-all duration-500 ${isActive ? 'scale-[1.02]' : 'opacity-70'}`}
                onClick={() => setActiveIndex(idx)}
              >
                <div 
                  className={`
                    relative z-10 w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 shadow-md border-2 border-white
                    ${isActive ? 'ring-4 ring-offset-1' : ''}
                  `}
                  style={{
                    backgroundColor: nodeColor.hex,
                    color: nodeColor.hex === "#f5b82e" || nodeColor.hex === "#8ce624" ? "#1a1a1a" : "#ffffff",
                  }}
                >
                  {isStart ? <LogIn className="w-5 h-5 rotate-90" /> : isEnd ? <LogOut className="w-5 h-5 -rotate-90" /> : <span className="text-[10px] font-black">0{idx}</span>}
                </div>

                <div className={`
                  flex-1 p-4 rounded-2xl border transition-all duration-300
                  ${isActive ? 'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]' : 'bg-white/60 border-gray-200'}
                `}
                style={{ borderColor: isActive ? nodeColor.hex : undefined }}
                >
                  <h4 className="text-xs font-black uppercase tracking-wider mb-1" style={{ color: isActive ? nodeColor.hex : '#1a1a1a' }}>
                    {step.title}
                  </h4>
                  {(isActive || step.description) && (
                    <p className="text-[11px] leading-relaxed text-[#666666] animate-in fade-in slide-in-from-top-1 duration-500">
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </FadeIn>

      <style jsx global>{`
        .animate-blink-path {
          animation: blink-path 1.5s ease-in-out infinite;
        }
        @keyframes blink-path {
          0%, 100% { opacity: 0.3; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.15); filter: drop-shadow(0 0 8px currentColor); }
        }
        @keyframes rotate-track {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 639px) {
           .circular-node {
             transform: translate(-50%, -50%) rotate(var(--angle)) translateY(calc(-1 * ${mobileRadius})) rotate(calc(-1 * var(--angle))) !important;
           }
           .path-arrow {
             transform: translate(-50%, -50%) rotate(var(--angle)) translateY(calc(-1 * ${mobileRadius})) !important;
           }
           .dashed-track {
             width: calc(${mobileRadius} * 2) !important;
             height: calc(${mobileRadius} * 2) !important;
           }
        }
      `}</style>
    </section>
  );
}
