"use client";

import Image from "next/image";
import type { AboutContent } from "@/lib/content/about";

type AboutHeroSectionProps = {
  content: AboutContent["hero"];
};

export default function AboutHeroSection({ content }: AboutHeroSectionProps) {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left Side: Hero Text */}
          <div className="flex flex-col items-start text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black text-[#141416] tracking-tight leading-[1.1] [font-family:var(--font-heading)] drop-shadow-sm">
              {content.bannerHook}
            </h1>
            <div className="mt-8 sm:mt-10 h-1.5 w-24 bg-primary rounded-full shadow-[0_4px_10px_rgba(251,191,36,0.3)]" />
          </div>

          {/* Right Side (Bottom on Mobile): Hero Image */}
          <div className="relative w-full lg:mt-0 mt-4">
            {/* Soft decorative background glow */}
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            {/* Offset accent frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border-2 border-primary/40 pointer-events-none hidden sm:block" />

            <div className="group relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-black/5 bg-[#141416]">
              <Image
                src={content.bgImagePath}
                alt={content.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-[70%_center] transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle depth so the image sits with the rest of the page */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#141416]/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
