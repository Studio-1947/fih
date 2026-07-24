"use client";

import Image from "next/image";
import { storiesOfChangeContent } from "@/lib/content/storiesOfChange";
import FadeIn from "@/components/ui/FadeIn";

type HeroMarqueeItem = {
  imagePath: string;
  name?: string;
  alt?: string;
};

type StoriesOfChangeHeroProps = {
  kicker?: string;
  title?: string;
  highlight?: string;
  description?: string;
  items?: HeroMarqueeItem[];
  tileClassName?: string;
  imageClassName?: string;
};

export default function StoriesOfChangeHero({
  kicker = "Voices of Resilience",
  title = "Stories",
  highlight = "of change.",
  description =
    "Real stories from communities transformed by our primary healthcare, education, and livelihood initiatives. Meet the individuals driving sustainable change.",
  items = storiesOfChangeContent.testimonials,
  tileClassName = "",
  imageClassName = "object-cover",
}: StoriesOfChangeHeroProps) {

  // Split testimonials into 2 rows and repeat them 3 times for a mathematically perfect, seamless marquee
  const halfLength = Math.ceil(items.length / 2);
  const firstHalf = items.slice(0, halfLength);
  const secondHalf = items.slice(halfLength);

  const row1Items = [...firstHalf, ...firstHalf, ...firstHalf];
  const row2Items = [...secondHalf, ...secondHalf, ...secondHalf];
  const tileBaseClass =
    "relative w-36 h-48 sm:w-44 sm:h-56 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shrink-0";
  const tileClass = tileClassName
    ? `${tileBaseClass} ${tileClassName}`
    : tileBaseClass;

  return (
    <section 
      className="relative w-screen left-1/2 -translate-x-1/2 pt-44 pb-24 sm:pt-48 lg:pt-56 lg:pb-36 bg-[#0A0A0B] overflow-hidden -mt-32 flex flex-col justify-center min-h-[90vh]"
    >
      {/* Immersive Rotated Sideways Scrolling Photo Collage Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute -inset-16 flex flex-col justify-center gap-6 sm:gap-8 -rotate-3 scale-[1.06] opacity-[0.88] saturate-[0.95]">
          
          {/* Row 1: Scrolls Left Infinitely */}
          <div className="flex w-max gap-4 sm:gap-6 py-1 animate-marquee-left">
            {row1Items.map((item, index) => (
              <div 
                key={`row1-${item.imagePath}-${index}`} 
                className={tileClass}
              >
                <Image 
                  src={item.imagePath} 
                  alt={item.alt ?? item.name ?? "Hero image"} 
                  fill 
                  className={imageClassName} 
                  sizes="(max-width: 640px) 144px, 176px"
                />
              </div>
            ))}
          </div>

          {/* Row 2: Scrolls Right Infinitely */}
          <div className="flex w-max gap-4 sm:gap-6 py-1 animate-marquee-right">
            {row2Items.map((item, index) => (
              <div 
                key={`row2-${item.imagePath}-${index}`} 
                className={tileClass}
              >
                <Image 
                  src={item.imagePath} 
                  alt={item.alt ?? item.name ?? "Hero image"} 
                  fill 
                  className={imageClassName} 
                  sizes="(max-width: 640px) 144px, 176px"
                />
              </div>
            ))}
          </div>

        </div>
        
        {/* Soft cinematic fading overlays for premium legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/10 to-transparent z-10" />
      </div>

      {/* Hero Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <FadeIn direction="up">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="h-1 w-12 bg-primary rounded-full shadow-[0_0_10px_rgba(255,184,0,0.5)]" />
              <span className="inline-block text-[12px] sm:text-[14px] font-bold uppercase tracking-[0.3em] text-white/90 [font-family:var(--font-heading)] drop-shadow-md">
                {kicker}
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl lg:text-[100px] font-black text-white leading-[0.95] tracking-tighter [font-family:var(--font-heading)] drop-shadow-2xl mb-8">
              {title} <br />
              <span className="text-primary drop-shadow-[0_0_20px_rgba(255,184,0,0.3)]">{highlight}</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/70 max-w-2xl font-medium leading-relaxed [font-family:var(--font-body)] [text-shadow:0_2px_12px_rgba(0,0,0,0.85)]">
              {description}
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Performant infinite marquee keyframes */}
      <style jsx global>{`
        @keyframes marquee-left {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.3333%, 0, 0);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translate3d(-33.3333%, 0, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-marquee-left {
          animation: marquee-left 45s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 45s linear infinite;
        }
      `}</style>
    </section>
  );
}
