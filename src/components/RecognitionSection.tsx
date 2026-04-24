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
    <section className="w-full py-12 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div 
          className="relative flex flex-col lg:flex-row overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] shadow-xl"
          style={{
            backgroundImage: `url(${content.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark Overlay for the entire section: dark on left, fading to light/transparent on the right */}
          <div className="absolute inset-0 bg-black/90 lg:bg-transparent lg:bg-gradient-to-r lg:from-black lg:via-black/80 lg:to-transparent pointer-events-none" />

          {/* Left Card - Main Recognition */}
          <div className="relative z-10 flex w-full flex-col p-6 sm:p-10 lg:w-[45%] lg:justify-center lg:py-12 lg:pl-12 lg:pr-8">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-primary">
                <Award className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-black" fill="currentColor" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-white [font-family:var(--font-heading)]">
                {content.eyebrow}
              </span>
            </div>

            {content.partners?.[0]?.logo && (
              <div className="mt-6 sm:mt-8">
                <div className="relative h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20">
                  <Image
                    src={content.partners[0].logo}
                    alt="Stanford Seal"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            )}

            <div className="mt-5 space-y-1.5 sm:space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight [font-family:var(--font-heading)]">
                {content.mainTitle.includes("Stanford University") ? (
                  <>
                    <span className="block text-white/70">
                      {content.mainTitle.replace("Stanford University", "").trim()}
                    </span>
                    <span className="block text-white mt-1">Stanford University</span>
                  </>
                ) : (
                  <span className="block text-white">{content.mainTitle}</span>
                )}
              </h2>
              <p className="mt-4 sm:mt-5 max-w-sm text-sm sm:text-[15px] leading-relaxed text-white/70 [font-family:var(--font-body)]">
                {content.mainDescription}
              </p>
            </div>

            <div className="mt-8 lg:mt-10">
              <Link
                href={content.mainCtaHref}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white [font-family:var(--font-heading)] transition-colors hover:text-white/80"
              >
                {content.mainCta}
                <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </Link>
            </div>
          </div>

          {/* Right Card - Partners Grid */}
          <div className="relative z-10 flex w-full flex-col lg:w-[55%] lg:p-4 lg:pl-0">
            <div className="flex h-full flex-col space-y-4 sm:space-y-5 rounded-[1.5rem] sm:rounded-[2rem] bg-white p-5 sm:p-8 lg:p-10">
              <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-black/40 [font-family:var(--font-heading)]">
                {content.partnersSectionTitle}
              </h3>

              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 flex-grow">
                {content.partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="flex flex-col rounded-xl sm:rounded-2xl border border-black/10 bg-white p-4 sm:p-5"
                  >
                    <div className="relative h-10 w-10 sm:h-11 sm:w-11">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain"
                      />
                    </div>

                    <div className="mt-3 sm:mt-4 flex flex-col space-y-0.5 sm:space-y-1">
                      <p
                        className={`text-sm sm:text-[15px] font-bold [font-family:var(--font-heading)] ${
                          partner.categoryColor === "yellow"
                            ? "text-primary"
                            : "text-black"
                        }`}
                      >
                        {partner.name}
                      </p>
                      <p className="text-xs sm:text-[13px] font-medium text-black/50 [font-family:var(--font-body)]">
                        {partner.location}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 sm:pt-5">
                      <span
                        className={`text-[10px] sm:text-[11px] font-bold [font-family:var(--font-heading)] ${
                          partner.categoryColor === "yellow"
                            ? "text-primary"
                            : "text-black/40"
                        }`}
                      >
                        {partner.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-2 sm:mt-3 rounded-xl sm:rounded-2xl border border-black/10 bg-[#fafafa] p-4 sm:p-5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                  <p className="text-xs sm:text-[13px] leading-relaxed text-black/60 [font-family:var(--font-body)]">
                    {content.bottomNote.split("Balmer Lawrie & Co. Ltd.").map((part, i, arr) => (
                      <span key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="font-bold text-black" style={{ display: 'inline-block' }}>
                            Balmer Lawrie & Co. Ltd.
                          </span>
                        )}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
