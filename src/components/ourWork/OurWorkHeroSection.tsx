import Image from "next/image";
import type { OurWorkContent } from "@/lib/content/ourWork";

type OurWorkHeroSectionProps = {
  content: OurWorkContent["hero"];
};

export default function OurWorkHeroSection({ content }: OurWorkHeroSectionProps) {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p className="text-primary font-black text-[10px] uppercase tracking-[0.5em] [font-family:var(--font-heading)] mb-4">
              Our Healthcare Model
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#141416] leading-tight tracking-tighter [font-family:var(--font-heading)]">
              Uday —<br />doctor at<br />doorstep
            </h2>
            <div className="h-1.5 w-16 bg-primary rounded-full mt-8" />
          </div>

          {/* Logo */}
          <div className="shrink-0 flex justify-center lg:justify-end w-full lg:w-auto">
            <Image
              src="/uday.png"
              alt="Uday - Doctor at Doorstep"
              width={520}
              height={340}
              className="w-[200px] sm:w-[240px] h-auto object-contain"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
