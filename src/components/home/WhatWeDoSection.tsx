import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  Eye,
  GraduationCap,
  HeartPulse,
  Stethoscope,
} from "lucide-react";
import type { WhatWeDoContent } from "@/lib/content";

type WhatWeDoSectionProps = {
  content: WhatWeDoContent;
};

export default function WhatWeDoSection({ content }: WhatWeDoSectionProps) {
  const headingAccent = " & Livelihoods.";
  const [headingMain, headingTail] = content.heading.split(headingAccent);

  return (
    <section
      className="relative z-50 overflow-hidden bg-secondary text-black"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[56%] bg-linear-to-b from-black via-black/80 to-transparent"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:pb-12 lg:pt-20 xl:pt-24">
        <div className="relative grid gap-6 lg:grid-cols-2 lg:justify-center lg:gap-x-14">
          <div className="min-w-0 space-y-3">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary [font-family:var(--font-heading)]">
              <span className="h-0.5 w-8 bg-primary" aria-hidden="true" />
              {content.eyebrow}
            </p>
            <h2 className="max-w-[22ch] text-3xl font-semibold leading-[1.06] text-white [font-family:var(--font-heading)] sm:text-4xl lg:text-[2.50rem]">
              {headingMain}
              {headingTail !== undefined ? (
                <span className="text-secondary">{headingAccent}</span>
              ) : null}
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <p className="min-w-0  text-sm leading-relaxed text-white/78 [font-family:var(--font-body)] sm:text-base lg:justify-self-start  lg:text-left flex justify-center items-center">
              {content.intro}
            </p>
          </div>
        </div>

        <div className="relative mt-10 grid gap-4 lg:mt-12 lg:grid-cols-2 lg:gap-5">
          {content.cards.map((card, cardIndex) => {
            const isHealthcare = cardIndex === 0;

            return (
              <article
                key={card.title}
                className="overflow-hidden rounded-2xl border border-black/5 bg-[#f6f5f1] text-black shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-[#d9d3c6]">
                  <div className="absolute left-4 top-4 z-20 inline-flex items-center rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest [font-family:var(--font-heading)]">
                    {card.tag}
                  </div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.5),transparent_55%)]" />
                  <Image
                    src={card.imagePath}
                    alt={card.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div className="space-y-4 p-4 sm:p-5">
                  <div className="space-y-2">
                    <h3 className="text-[1.5rem] font-semibold leading-tight [font-family:var(--font-heading)]">
                      {card.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-black/70 [font-family:var(--font-body)]">
                      {card.description}
                    </p>
                  </div>

                  {/* <ul className="grid gap-3 sm:grid-cols-2">
                    {card.programs.map((program, programIndex) => {
                      const icon = isHealthcare ? (
                        programIndex === 0 ? (
                          <HeartPulse className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <Stethoscope className="h-4 w-4" aria-hidden="true" />
                        )
                      ) : programIndex === 0 ? (
                        <GraduationCap className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <Eye className="h-4 w-4" aria-hidden="true" />
                      );

                      return (
                        <li
                          key={program.title}
                          className="rounded-xl border border-black/5 bg-[#f2dc8f] p-3"
                        >
                          <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-black shadow-[0_6px_14px_rgba(0,0,0,0.14)]">
                            {icon}
                          </div>
                          <p className="text-xs font-semibold [font-family:var(--font-heading)]">
                            {program.title}
                          </p>
                          <p className="mt-1 text-[11px] leading-relaxed text-black/65 [font-family:var(--font-body)]">
                            {program.description}
                          </p>
                        </li>
                      );
                    })}
                  </ul> */}

                  <Link
                    href={card.ctaHref}
                    className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-semibold text-surface [font-family:var(--font-heading)] transition hover:bg-black/90"
                  >
                    {isHealthcare ? (
                      <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                    ) : (
                      <GraduationCap
                        className="h-3.5 w-3.5"
                        aria-hidden="true"
                      />
                    )}
                    {card.ctaLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
