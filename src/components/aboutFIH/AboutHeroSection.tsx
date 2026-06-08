"use client";

import type { AboutContent } from "@/lib/content/about";
import { Eye, Target } from "lucide-react";

type AboutHeroSectionProps = {
  content: AboutContent["hero"];
  visionMission: AboutContent["visionMission"];
};

export default function AboutHeroSection({ content, visionMission }: AboutHeroSectionProps) {
  return (
    <section
      className="relative w-full lg:h-[90vh] lg:min-h-[800px] flex items-center bg-[#FAFAFA] overflow-hidden pb-20 pt-32 lg:pb-0"
      style={{
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        marginTop: "-160px",
        paddingTop: "240px",
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

          {/* Right Side (Bottom on Mobile): Vision and Mission */}
          <div className="flex flex-col gap-6 w-full max-w-md mx-auto lg:mt-0 mt-8 relative">
            {/* Soft decorative background glow */}
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Vision Card */}
            <div className="group relative bg-[#141416] text-white p-8 rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl border border-white/5 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-all duration-500 pointer-events-none" />
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="p-3 bg-white/5 rounded-xl text-primary transition-transform duration-500 group-hover:scale-110">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-black tracking-tight [font-family:var(--font-heading)] uppercase">Our Vision</h3>
              </div>
              <p className="text-white/70 leading-relaxed text-sm sm:text-base [font-family:var(--font-body)] relative z-10">
                {visionMission.vision}
              </p>
            </div>

            {/* Mission Card */}
            <div className="group relative bg-primary text-[#141416] p-8 rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl border border-black/5 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all duration-500 pointer-events-none" />
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="p-3 bg-[#141416]/10 rounded-xl text-[#141416] transition-transform duration-500 group-hover:scale-110">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-black tracking-tight text-[#141416] [font-family:var(--font-heading)] uppercase">Our Mission</h3>
              </div>
              <p className="text-[#141416]/80 leading-relaxed text-sm sm:text-base font-medium [font-family:var(--font-body)] relative z-10">
                {visionMission.mission}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
