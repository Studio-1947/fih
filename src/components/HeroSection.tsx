import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Users } from "lucide-react";
import type { HomeHeroContent } from "@/lib/content/home";

type HeroSectionProps = {
  content: HomeHeroContent;
};

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className=" bg-surface sm:px-4">
      <div className="w-full grid items-end gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="space-y-5">
            <h1 className="max-w-xl text-4xl font-bold leading-[0.92] tracking-tight uppercase [font-family:var(--font-heading)] sm:text-5xl lg:text-7xl">
              <span className="text-black">{content.eyebrow}</span>
              <br />
              <span className="text-black/45">A</span>
              <span className="text-black"> BILLION.</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-black/65 [font-family:var(--font-body)] sm:text-lg">
              {content.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={content.primaryCta.href}
              className="inline-flex items-center gap-2 rounded-2xl bg-black px-6 py-3 text-sm font-semibold text-surface [font-family:var(--font-heading)]"
            >
              <HeartHandshake className="h-4 w-4" aria-hidden="true" />
              {content.primaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <Link
              href={content.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-black [font-family:var(--font-heading)]"
            >
              <Users className="h-4 w-4" aria-hidden="true" />
              {content.secondaryCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <ul className="grid gap-5 pt-4 sm:grid-cols-2 xl:grid-cols-4">
            {content.stats.map((stat) => (
              <li key={stat.label} className="space-y-1">
                <p className="text-3xl font-bold tracking-tight text-black [font-family:var(--font-heading)]">
                  {stat.value}
                </p>
                <p className="text-sm leading-snug text-black/70 [font-family:var(--font-body)]">
                  {stat.label}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-[620px]  lg:mx-0">
          {/* <div
            className="absolute -left-8 top-8 h-16 w-16 rounded-full bg-primary/80 blur-xl"
            aria-hidden="true"
          />
          <div
            className="absolute -right-5 top-20 h-20 w-20 rounded-full bg-primary/70 blur-2xl"
            aria-hidden="true"
          /> */}

          <div className="relative overflow-visible bg-surface p-0">
            <div className="relative aspect-[5/5] bg-surface  left-0">
              {/* <Image
                src={content.heroBackdropPath}
                alt="Community impact backdrop"
                fill
                className="object-cover"
                priority
              /> */}

              {/* <div className="absolute inset-x-0 bottom-0 z-20 h-20 bg-gradient-to-t from-surface to-transparent" /> */}

              <Image
                src="/hero/Bbbb_5.gif"
                alt=""
                width={300}
                height={420}
                unoptimized
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-10 left-[29%] z-10 h-auto w-[90%] object-contain"
                priority
              />

              <Image
                src={content.heroManPath}
                alt="Community member"
                width={250}
                height={360}
                className="absolute -bottom-15 left-[20%] z-20 h-auto w-[50%] object-contain overflow-hidden"
                priority
              />

              <Image
                src={content.heroChildPath}
                alt="Child beneficiary"
                width={300}
                height={500}
                className="absolute -bottom-10 left-[6%] z-40 h-auto w-[42%] object-contain"
                priority
              />

              <Image
                src={content.heroWomanPath}
                alt="Community member"
                width={300}
                height={420}
                className="absolute -bottom-10 -right-[-9%] z-30 h-auto w-[60%] object-contain overflow-hidden"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
