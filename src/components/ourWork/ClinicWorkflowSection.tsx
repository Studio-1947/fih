"use client";

import React, { useState, useEffect } from "react";
import { LogIn, LogOut, Info, ChevronRight } from "lucide-react";
import type { OurWorkContent } from "@/lib/content/ourWork";
import FadeIn from "@/components/ui/FadeIn";

type ClinicWorkflowSectionProps = {
  workflow: OurWorkContent["clinicWorkflow"];
};

export default function ClinicWorkflowSection({ workflow }: ClinicWorkflowSectionProps) {
  const allSteps = workflow.steps;
  const totalSteps = allSteps.length;
  
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycling effect
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalSteps);
    }, 2000); // 2 seconds per step
    
    return () => clearInterval(interval);
  }, [totalSteps, isPaused]);

  // Unified radius for perfect alignment
  const radius = "13.5rem";
  const mobileRadius = "8rem";

  // All nodes separated by 360/totalSteps degrees. Starting at top (0 degrees).
  const angles = allSteps.map((_, i) => (i * 360) / totalSteps);
  
  // Arrows placed halfway between nodes.
  const arrowAngles = allSteps.map((_, i) => ((i + 0.5) * 360) / totalSteps);

  return (
    <section 
      className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-white my-12 overflow-hidden flex flex-col items-center justify-center"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Background Elements for Vibrancy */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-primary/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, #ca9a22 1px, transparent 0)`, 
          backgroundSize: '32px 32px' 
        }}
      ></div>

      <FadeIn className="w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 space-y-4 relative z-20">
          <p className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-primary [font-family:var(--font-heading)]">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            INTERACTIVE PATIENT JOURNEY
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
          </p>
          <h2 className="text-4xl font-black tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl [font-family:var(--font-heading)]">
            {workflow.title}
          </h2>
          <p className="text-[#666666] text-sm sm:text-lg [font-family:var(--font-body)] max-w-xl mx-auto">
            Follow the complete cycle of care from arrival to departure.
          </p>
        </div>
      </FadeIn>

      {/* Diagram Container */}
      <FadeIn delay={0.2} className="w-full">
        <div className="relative w-full max-w-[40rem] h-[26rem] sm:h-[38rem] mx-auto flex items-center justify-center mt-8 sm:mt-12">
        
        {/* Rotating Background Dashed Track Wrapper - Fixes misalignment */}
        <div className="absolute inset-0 animate-rotate-track pointer-events-none z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-dashed border-primary/50 dashed-track shadow-[0_0_20px_rgba(251,191,36,0.1)]" 
               style={{ width: `calc(${radius} * 2)`, height: `calc(${radius} * 2)` }}>
          </div>
        </div>

        {/* Central Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-32 h-32 sm:w-44 sm:h-44 rounded-full bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex items-center justify-center text-center p-6 border-8 border-primary/10 group transition-transform duration-500 hover:scale-105">
          <div className="space-y-1">
             <div className="w-10 h-1 bg-primary/40 mx-auto rounded-full mb-2 group-hover:w-16 transition-all"></div>
             <p className="text-[10px] sm:text-xs font-black text-[#1a1a1a] [font-family:var(--font-heading)] uppercase leading-tight tracking-widest">
               PATIENT<br/><span className="text-primary text-base sm:text-2xl drop-shadow-sm">UDAY</span><br/>JOURNEY
             </p>
             <div className="w-10 h-1 bg-primary/40 mx-auto rounded-full mt-2 group-hover:w-16 transition-all"></div>
          </div>
        </div>

        {/* Path Arrows */}
        {arrowAngles.map((angle, idx) => {
          const isActive = activeIndex === idx;
          return (
            <div
              key={`arrow-${idx}`}
              className="absolute top-1/2 left-1/2 z-10 pointer-events-none path-arrow"
              style={{
                '--angle': `${angle}deg`,
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius})`
              } as React.CSSProperties}
            >
              <div 
                className={`text-primary ${isActive ? 'animate-pulse scale-125' : 'animate-blink-path'}`}
                style={{ animationDelay: `${idx * (1.5 / totalSteps)}s` }}
              >
                <ChevronRight className="w-10 h-10 sm:w-12 sm:h-12 text-primary" strokeWidth={3} />
              </div>
            </div>
          );
        })}

        {/* All Steps as Nodes */}
        {allSteps.map((step, idx) => {
          const angle = angles[idx];
          const isStart = idx === 0;
          const isEnd = idx === totalSteps - 1;
          const isActive = activeIndex === idx;
          
          return (
            <div
              key={`node-${idx}`}
              className={`absolute top-1/2 left-1/2 z-20 transition-all duration-500 ${isActive ? 'scale-125 z-30' : 'hover:scale-110'} group circular-node`}
              style={{
                '--angle': `${angle}deg`,
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}) rotate(-${angle}deg)`
              } as React.CSSProperties}
            >
              <div 
                className={`
                  w-24 h-24 sm:w-32 sm:h-32 rounded-full flex flex-col items-center justify-center p-3 text-center cursor-help relative overflow-visible transition-all duration-300
                  ${isStart ? 'bg-[#fbcc32] border-4 border-white shadow-xl text-black' : 
                    isEnd ? 'bg-[#4a5d23] border-4 border-white shadow-xl text-white' : 
                    'bg-white border-2 border-primary/30 shadow-[0_15px_40px_rgba(0,0,0,0.12)] text-[#1a1a1a]'}
                  ${isActive ? 'border-primary ring-4 ring-primary/20 shadow-[0_20px_50px_rgba(202,154,34,0.3)]' : 'hover:border-primary hover:shadow-[0_20px_50px_rgba(202,154,34,0.3)]'}
                `}
                onMouseEnter={() => setActiveIndex(idx)}
              >
                {isStart ? (
                  <LogIn className="w-5 h-5 mb-1 rotate-90" />
                ) : isEnd ? (
                  <LogOut className="w-5 h-5 mb-1 -rotate-90" />
                ) : (
                  <span className={`text-[10px] font-black opacity-40 mb-0.5 group-hover:opacity-100 transition-opacity ${isActive ? 'opacity-100 text-primary' : ''}`}>0{idx}</span>
                )}
                
                <h4 className={`
                  text-[9px] sm:text-[11px] font-black leading-tight [font-family:var(--font-heading)] uppercase px-1
                  ${isEnd ? 'text-white' : 'text-[#1a1a1a]'}
                `}>
                  {step.title}
                </h4>
                
                {!isStart && !isEnd && (
                  <div className={`mt-1 sm:mt-2 text-primary transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    <Info className="w-4 h-4" />
                  </div>
                )}

                {/* Tooltip Description */}
                {step.description && (
                  <div className={`
                    absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-52 sm:w-72 bg-[#1a1a1a] text-white p-4 rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.3)] transition-all duration-500 z-50 text-left border border-white/10
                    ${isActive ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0'}
                  `}>
                    <div className="flex items-center gap-2 mb-2 border-b border-white/10 pb-2">
                       <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                       <h5 className="text-primary font-black text-[11px] sm:text-xs uppercase tracking-wider">{step.title}</h5>
                    </div>
                    <p className="text-gray-300 text-[10px] sm:text-[11px] leading-relaxed [font-family:var(--font-body)]">
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

      <style jsx global>{`
        .animate-blink-path {
          animation: blink-path 1.5s ease-in-out infinite;
        }
        @keyframes blink-path {
          0%, 100% { opacity: 0.2; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); filter: drop-shadow(0 0 15px rgba(251,191,36,0.9)); }
        }
        
        .animate-rotate-track {
          animation: rotate-track 60s linear infinite;
        }
        @keyframes rotate-track {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @media (max-width: 639px) {
           .circular-node {
             transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-8rem) rotate(calc(var(--angle) * -1)) !important;
           }
           .path-arrow {
             transform: translate(-50%, -50%) rotate(var(--angle)) translateY(-8rem) !important;
           }
           .dashed-track {
             width: 16rem !important;
             height: 16rem !important;
           }
        }
      `}</style>
    </section>
  );
}
