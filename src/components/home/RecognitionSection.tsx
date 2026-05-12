import Image from "next/image";
import Link from "next/link";
import { Award, ExternalLink } from "lucide-react";
import type { RecognitionContent } from "@/lib/content";

type RecognitionSectionProps = {
  content: RecognitionContent;
};

export default function RecognitionSection({
  content,
}: RecognitionSectionProps) {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="space-y-4 lg:space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <span className="h-[3px] w-5 sm:w-6 bg-primary" />
                <span className="h-[3px] w-5 sm:w-8 bg-black" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/80 [font-family:var(--font-heading)]">
                {content.eyebrow}
              </p>
            </div>
            
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl [font-family:var(--font-heading)]">
              <span className="text-[#202020]">Recognitions & </span>
              <br className="hidden sm:block" />
              <span className="text-black/40">Institutional Partners</span>
            </h2>
          </div>
          
          <div className="pb-2 hidden md:block">
            <p className="max-w-md text-sm leading-[1.6] text-black/60 [font-family:var(--font-body)] text-right">
              {content.mainDescription}
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-5 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {content.partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center text-center rounded-[2rem] border border-black/5 bg-[#FAFAFA] p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div className="relative mb-6 h-20 w-20 sm:h-24 sm:w-24">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col flex-grow items-center space-y-2">
                <p className="text-lg sm:text-xl font-bold leading-snug text-[#202020] [font-family:var(--font-heading)]">
                  {partner.name}
                </p>
                <p className="text-sm font-medium text-black/50 [font-family:var(--font-body)]">
                  {partner.location}
                </p>
              </div>

              <div className="mt-8 w-full border-t border-black/5 pt-5 flex justify-center">
                <span className="inline-block rounded-full bg-black/5 px-4 py-1.5 text-[11px] font-bold tracking-wide text-black/60 [font-family:var(--font-heading)] uppercase">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-10 sm:mt-12 rounded-2xl border border-black/5 bg-[#FAFAFA] p-5 sm:p-6 lg:p-8 flex items-start gap-4 shadow-sm">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <Award className="h-5 w-5 text-primary" />
          </div>
          <p className="text-sm sm:text-[15px] leading-relaxed text-black/70 [font-family:var(--font-body)]">
            {content.bottomNote.split("Balmer Lawrie & Co. Ltd.").map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span className="font-bold text-black border-b-2 border-primary/30 pb-0.5">
                    Balmer Lawrie & Co. Ltd.
                  </span>
                )}
              </span>
            ))}
          </p>
        </div>

      </div>
    </section>
  );
}
