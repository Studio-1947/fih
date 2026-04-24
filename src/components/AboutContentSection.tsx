import Image from "next/image";
import { CheckCircle2, Building2 } from "lucide-react";
import type { AboutContent } from "@/lib/content/about";

type AboutContentSectionProps = {
  intro: AboutContent["intro"];
  whatSetsUsApart: AboutContent["whatSetsUsApart"];
  ourFoundation: AboutContent["ourFoundation"];
};

export default function AboutContentSection({
  intro,
  whatSetsUsApart,
  ourFoundation,
}: AboutContentSectionProps) {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-32">
        
        {/* Intro Section */}
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] text-black [font-family:var(--font-heading)]">
                {intro.heading}
              </h2>
              <div className="h-1.5 w-16 bg-primary rounded-full" />
            </div>
            <div className="space-y-6 text-black/70 text-[15px] sm:text-base leading-relaxed [font-family:var(--font-body)]">
              {intro.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
          {intro.imagePath && (
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <Image
                src={intro.imagePath}
                alt={intro.heading}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2.5rem]" />
            </div>
          )}
        </div>

        {/* What Sets Us Apart */}
        <div className="rounded-3xl bg-[#FAFAFA] p-8 sm:p-12 lg:p-16 border border-black/5 shadow-sm">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-black [font-family:var(--font-heading)]">
              {whatSetsUsApart.title}
            </h3>
            <div className="h-1 w-12 bg-primary rounded-full mx-auto mt-4" />
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whatSetsUsApart.points.map((point, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 flex flex-col gap-4 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150" />
                <CheckCircle2 className="h-8 w-8 text-primary relative z-10" />
                <h4 className="text-lg font-bold text-black [font-family:var(--font-heading)] relative z-10">
                  {point.title}
                </h4>
                <p className="text-sm leading-relaxed text-black/65 [font-family:var(--font-body)] relative z-10">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Foundation */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div className="relative rounded-3xl bg-[#141416] p-8 sm:p-12 text-white shadow-xl overflow-hidden group">
            {ourFoundation.imagePath && (
              <div className="absolute inset-0 z-0">
                <Image
                  src={ourFoundation.imagePath}
                  alt="Our Foundation"
                  fill
                  className="object-cover opacity-40 transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#141416] via-[#141416]/80 to-transparent" />
              </div>
            )}
            
            <div className="relative z-10 flex flex-col items-start gap-6">
              <Building2 className="h-10 w-10 text-primary" />
              <h3 className="text-2xl sm:text-3xl font-bold [font-family:var(--font-heading)]">
                {ourFoundation.title}
              </h3>
              <div className="space-y-4 text-white/80 text-[15px] leading-relaxed [font-family:var(--font-body)]">
                {ourFoundation.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col justify-center space-y-8 lg:pl-8">
            <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight [font-family:var(--font-heading)] relative">
              <span className="absolute -left-4 sm:-left-8 -top-6 text-6xl text-primary/30">"</span>
              {ourFoundation.quote.replace(/“|”|"/g, '')}
              <span className="absolute -bottom-10 text-6xl text-primary/30 ml-2">"</span>
            </blockquote>
            <p className="text-base sm:text-lg leading-relaxed text-black/60 [font-family:var(--font-body)] border-l-4 border-primary pl-6 py-2">
              {ourFoundation.conclusion}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
