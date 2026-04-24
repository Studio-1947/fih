import Image from "next/image";
import type { AboutContent } from "@/lib/content/about";

type AboutHeroSectionProps = {
  content: AboutContent["hero"];
};

export default function AboutHeroSection({ content }: AboutHeroSectionProps) {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center bg-black overflow-hidden mt-6 lg:mt-8 rounded-3xl mx-auto max-w-7xl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={content.bgImagePath}
          alt="About Us Hero Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight [font-family:var(--font-heading)]">
          {content.bannerHook}
        </h1>
      </div>
    </section>
  );
}
