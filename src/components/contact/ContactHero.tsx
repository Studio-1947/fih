"use client";

import React from "react";
import BlurText from "@/components/ui/BlurText";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

interface ContactHeroProps {
  title: string;
  intro: string;
}

export default function ContactHero({ title, intro }: ContactHeroProps) {
  const scrollToForm = () => {
    const formSection = document.getElementById("collaborate");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative -mt-[120px] flex min-h-[60vh] items-center overflow-hidden bg-black pb-24 pt-[180px] lg:-mt-[140px] lg:min-h-[70vh] lg:pt-[200px]">
      {/* Background Image with Left-to-Right Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/AboutUs/FIH.jpg"
          alt="FIH Community Work"
          fill
          className="animate-subtle-zoom object-cover object-center opacity-50 grayscale-[20%]"
          priority
        />
        {/* Dark on left, fading to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent" />
        {/* Subtle bottom gradient to blend into the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-[0.03]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Modernized Pill Eyebrow */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            <p className="text-label font-bold uppercase tracking-widest text-white/90 [font-family:var(--font-body)]">
              Let&apos;s Connect
            </p>
          </div>

          <BlurText
            text="Your support creates employment and access to healthcare"
            delay={150}
            animateBy="words"
            direction="bottom"
            className="mb-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl [font-family:var(--font-heading)] leading-[1.1]"
          />

          <FadeIn delay={0.4}>
            <p className="max-w-2xl text-base leading-relaxed tracking-tight text-white/90 [font-family:var(--font-body)] sm:text-lg">
              Whether you want to partner with us, volunteer your time, or
              support our vision,
              <br className="hidden sm:block" /> we&apos;d love to hear from
              you.
            </p>
          </FadeIn>

          {/* Scroll Indicator */}
          <FadeIn delay={0.6}>
            <button
              onClick={scrollToForm}
              className="group mt-12 inline-flex items-center gap-3 text-sm font-bold text-white transition-colors hover:text-primary [font-family:var(--font-body)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 transition-all group-hover:border-primary/50 group-hover:bg-primary/10">
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </div>
              Start a Conversation
            </button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
