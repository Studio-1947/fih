import Link from "next/link";
import { ExternalLink, Building2 } from "lucide-react";
import type { StoriesAndMilestonesContent } from "@/lib/content";

type StoriesAndMilestonesSectionProps = {
  content: StoriesAndMilestonesContent;
};

export default function StoriesAndMilestonesSection({
  content,
}: StoriesAndMilestonesSectionProps) {
  return (
    <section className="w-full bg-[#FAFAFA] py-12 sm:py-16 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8 lg:mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                <span className="h-[3px] w-5 sm:w-6 bg-primary" />
                <span className="h-[3px] w-5 sm:w-8 bg-black" />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/80 [font-family:var(--font-heading)]">
                {content.eyebrow}
              </p>
            </div>

            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem] [font-family:var(--font-heading)]">
              <span className="text-[#202020]">Stories of Change & </span>
              <span className="text-black/40">Recent</span>
              <br />
              <span className="text-black/40">Milestones</span>
            </h2>
          </div>

          <div className="pb-2">
            <Link
              href={content.readMoreHref}
              className="inline-flex items-center gap-2 text-sm font-bold text-black transition-colors hover:text-black/70 [font-family:var(--font-heading)]"
            >
              {content.readMoreCta}
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {content.milestones.map((milestone, index) => (
            <div
              key={index}
              className="flex flex-col rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm transition-all hover:shadow-md sm:p-8"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="rounded-full bg-[#FEF8E6] px-3.5 py-1.5 text-[11px] font-bold text-[#D0A015] [font-family:var(--font-heading)]">
                  {milestone.tag}
                </span>
                <span className="text-xs font-semibold tracking-wide text-black/40 [font-family:var(--font-heading)]">
                  {milestone.year}
                </span>
              </div>

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[1.25rem] border border-black/5 bg-white shadow-sm">
                <Building2 className="h-6 w-6 text-teal-700/80 stroke-[1.5]" />
              </div>

              <h3 className="mb-3 pr-4 text-xl font-bold leading-snug text-black [font-family:var(--font-heading)]">
                {milestone.title}
              </h3>
              
              <p className="text-sm leading-[1.6] text-black/60 [font-family:var(--font-body)]">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
