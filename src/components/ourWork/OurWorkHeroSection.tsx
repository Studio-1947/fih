import Image from "next/image";
import type { OurWorkContent } from "@/lib/content/ourWork";
import BlurText from "@/components/ui/BlurText";

type OurWorkHeroSectionProps = {
  content: OurWorkContent["hero"];
};

export default function OurWorkHeroSection({ content }: OurWorkHeroSectionProps) {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-primary font-black text-[10px] uppercase tracking-[0.5em] [font-family:var(--font-heading)] mb-4">
              Our Healthcare Model
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#141416] leading-tight tracking-tighter [font-family:var(--font-heading)] uppercase">
              Uday —<br />Doctor at<br />Doorstep
            </h2>
            <div className="h-1.5 w-16 bg-primary rounded-full mt-8" />
          </div>

          {/* Image */}
          <div className="w-full lg:w-[52%] shrink-0">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/uday.png"
                alt="Uday - Doctor at Doorstep"
                width={900}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

      {/* Enhanced Content Layout */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-8">
        <BlurText
          text={content.bannerHook}
          delay={150}
          animateBy="words"
          direction="bottom"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black text-white tracking-tight leading-[1.1] [font-family:var(--font-heading)] drop-shadow-2xl justify-center"
        />
        
        <div className="mt-10 sm:mt-12 h-1.5 w-24 bg-primary rounded-full shadow-[0_0_15px_rgba(208,160,21,0.5)]" />
      </div>
    </section>
  );
}
