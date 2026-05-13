import Image from "next/image";
import type { OurWorkContent } from "@/lib/content/ourWork";
import BlurText from "@/components/ui/BlurText";

type OurWorkHeroSectionProps = {
  content: OurWorkContent["hero"];
};

export default function OurWorkHeroSection({ content }: OurWorkHeroSectionProps) {
  return (
    <section 
      className="relative w-full h-[60vh] min-h-[500px] lg:h-[75vh] lg:min-h-[650px] flex items-center justify-center bg-black overflow-hidden"
      style={{ 
        width: "100vw", 
        marginLeft: "calc(-50vw + 50%)",
        marginTop: "-160px",
        paddingTop: "160px"
      }}
    >
      {/* Background Image & Premium Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={content.bgImagePath}
          alt="Our Work Hero Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dual gradients for better depth: dark at top for nav, vignette around edges, dark at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90" />
        <div className="absolute inset-0 bg-black/30" />
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
