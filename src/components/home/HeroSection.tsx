import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { HomeHeroContent } from "@/lib/content/home";
import HeroImageSlider from "@/components/home/HeroImageSlider";

type HeroSectionProps = {
  content: HomeHeroContent;
};

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative z-10 bg-surface px-4 pt-0 lg:px-0 lg:pt-0">
      <div className="w-[80%] mx-auto grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr] overflow-visible">
        <div className="space-y-8 flex flex-col items-center text-center lg:block lg:text-left py-10 lg:py-16 self-center">
          <div className="space-y-6 flex flex-col items-center lg:block">
            <h1 className="max-w-2xl text-5xl font-bold leading-none tracking-tight uppercase [font-family:var(--font-heading)] sm:text-6xl lg:text-[5.5rem]">
              <span className="text-[#2b2b2b]">HEALTH</span>
              <span className="text-[#888888]"> FOR</span>
              <br />
              <span className="text-[#888888]">A</span>
              <span className="text-[#2b2b2b]"> BILLION.</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-[#888888] [font-family:var(--font-body)] sm:text-lg">
              {content.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link
              href={content.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-full bg-[#1a1a1a] px-7 py-3.5 text-sm font-semibold text-white [font-family:var(--font-body)] transition-transform hover:scale-105"
            >
              {content.primaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              href={content.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-full bg-[#fbcc32] px-7 py-3.5 text-sm font-semibold text-[#1a1a1a] [font-family:var(--font-body)] transition-transform hover:scale-105"
            >
              {content.secondaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-6 pt-4 sm:flex sm:flex-wrap sm:gap-x-8 lg:justify-start w-full text-center lg:text-left">
            {content.stats.map((stat) => (
              <li
                key={stat.label}
                className="space-y-1.5 mx-auto sm:mx-0 max-w-35"
              >
                <p className="text-2xl font-bold tracking-tight text-[#1a1a1a] [font-family:var(--font-heading)]">
                  {stat.value}
                </p>
                <p className="text-[13px] leading-tight text-[#666666] [font-family:var(--font-body)] font-medium">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative w-full max-w-none lg:mx-0 self-end">
          <div className="relative overflow-visible bg-surface p-0 mt-8 lg:mt-0">
            <div className="relative aspect-5/5 bg-surface left-[-10%] sm:left-[-5%] lg:left-[-8%] scale-[1.1] sm:scale-100">
              <Image
                src="/hero/Bbbb_5.gif"
                alt=""
                width={300}
                height={420}
                unoptimized
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 left-[29%] lg:left-[35%] z-10 h-auto w-[90%] object-contain"
                priority
              />

              <HeroImageSlider />

              {/* <Image
                src={content.heroChildPath}
                alt="Child beneficiary"
                width={250}
                height={360}
                className="absolute bottom-[-10%] left-[4%] lg:left-[6%] z-40 h-[78%] w-[55%] object-bottom"
                priority
              />

              <Image
                src={content.heroWomanPath}
                alt="Community member"
                width={250}
                height={360}
                className="absolute bottom-[-10%] right-[-8%] lg:right-[-12%] z-30 h-[76%] w-[55%] object-bottom"
                priority
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
