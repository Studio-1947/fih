"use client";

import type { AboutContent } from "@/lib/content/about";

type AboutHeroSectionProps = {
  content: AboutContent["hero"];
};

const LABELS = ["TRAIN", "TECHNOLOGY", "TASK-SHIFT"];

// Three fixed positions: top-center, bottom-left, bottom-right
const POSITIONS = [
  { top: "8%",  left: "50%"  },
  { top: "70%", left: "15%"  },
  { top: "70%", left: "85%"  },
];

function TriangleArrows() {
  return (
    <svg viewBox="0 0 100 100" className="absolute inset-0 z-10 w-full h-full" fill="none">
      <line x1="43.4" y1="22.6" x2="24.2" y2="56.8" stroke="#141416" strokeWidth="0.6" strokeOpacity="0.45" strokeDasharray="2.5 2"/>
      <line x1="21.6" y1="55.4" x2="40.8" y2="21.2" stroke="#141416" strokeWidth="0.6" strokeOpacity="0.45" strokeDasharray="2.5 2"/>
      <line x1="59.2" y1="21.2" x2="78.4" y2="55.4" stroke="#141416" strokeWidth="0.6" strokeOpacity="0.45" strokeDasharray="2.5 2"/>
      <line x1="75.8" y1="56.8" x2="56.6" y2="22.6" stroke="#141416" strokeWidth="0.6" strokeOpacity="0.45" strokeDasharray="2.5 2"/>
      <line x1="31" y1="68.5" x2="69" y2="68.5" stroke="#141416" strokeWidth="0.6" strokeOpacity="0.45" strokeDasharray="2.5 2"/>
      <line x1="69" y1="71.5" x2="31" y2="71.5" stroke="#141416" strokeWidth="0.6" strokeOpacity="0.45" strokeDasharray="2.5 2"/>
      <circle cx="50" cy="49" r="13" stroke="#141416" strokeOpacity="0.2" strokeWidth="0.5" strokeDasharray="2 2"/>
      <text x="50" y="46.5" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#141416" fillOpacity="0.45" letterSpacing="0.3">3T</text>
      <text x="50" y="53" textAnchor="middle" fontSize="3" fill="#141416" fillOpacity="0.35" letterSpacing="1.5">MODEL</text>
    </svg>
  );
}

function RotatingCircles() {
  return (
    <>
      {LABELS.map((label, i) => {
        const pos = POSITIONS[i];
        return (
          <div
            key={label}
            className="absolute w-[24%] aspect-square rounded-full bg-white text-[#141416] font-bold text-[10px] sm:text-xs md:text-sm shadow-xl border border-black/5 flex items-center justify-center text-center px-2 leading-tight z-20 cursor-default select-none hover:bg-[#141416] hover:text-white hover:scale-110"
            style={{
              top: pos.top,
              left: pos.left,
              transform: "translate(-50%, -50%)",
              transition: "background-color 300ms, color 300ms, box-shadow 300ms",
            }}
          >
            {label}
          </div>
        );
      })}
    </>
  );
}

export default function AboutHeroSection({ content }: AboutHeroSectionProps) {
  return (
    <section 
      className="relative w-full lg:h-[90vh] lg:min-h-[800px] flex items-center bg-[#FAFAFA] overflow-hidden pb-20 pt-32 lg:pb-0"
      style={{ 
        width: "100vw", 
        marginLeft: "calc(-50vw + 50%)",
        marginTop: "-160px",
        paddingTop: "240px" 
      }}
    >
      {/* Soft background gradient to add a premium touch without an image */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-primary/5 pointer-events-none" />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Hero Text */}
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black text-[#141416] tracking-tight leading-[1.1] [font-family:var(--font-heading)] drop-shadow-sm">
              {content.bannerHook}
            </h1>
            <div className="mt-8 sm:mt-10 h-1.5 w-24 bg-primary rounded-full shadow-[0_4px_10px_rgba(251,191,36,0.3)]" />
          </div>

          {/* Right Side (Bottom on Mobile): 3T Model */}
          <a
            href="#three-t-model"
            className="relative w-full max-w-md mx-auto aspect-square lg:mt-0 mt-4 block group cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform duration-500"
            aria-label="Scroll to The 3T Model in Action"
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] opacity-60 group-hover:opacity-85 transition-opacity duration-500" />
            <TriangleArrows />
            <RotatingCircles />
          </a>

        </div>
      </div>
    </section>
  );
}
