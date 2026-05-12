import React from "react";

interface ContactHeroProps {
  title: string;
  intro: string;
}

export default function ContactHero({ title, intro }: ContactHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">


      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex gap-1">
              <span className="h-[3px] w-6 bg-primary" />
              <span className="h-[3px] w-8 bg-black" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-black/80 [font-family:var(--font-heading)]">
              Get in Touch
            </p>
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl [font-family:var(--font-heading)]">
            {title} <span className="text-black/30">Us</span>
          </h1>
          <p className="text-lg leading-relaxed text-black/60 [font-family:var(--font-body)] sm:text-xl lg:max-w-2xl">
            {intro}
          </p>
        </div>
      </div>
    </section>
  );
}
