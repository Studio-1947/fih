import { Eye, Target } from "lucide-react";
import type { AboutContent } from "@/lib/content/about";

type VisionMissionSectionProps = {
  content: AboutContent["visionMission"];
};

export default function VisionMissionSection({ content }: VisionMissionSectionProps) {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 sm:py-20 lg:py-24 border-y border-black/5">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Vision Card */}
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-white p-8 sm:p-12 border border-black/5 shadow-sm transition-shadow hover:shadow-md">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110" />
            
            <div className="relative z-10 flex flex-col items-start gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-sm">
                <Eye className="h-8 w-8 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-black [font-family:var(--font-heading)]">
                Vision
              </h2>
              <p className="text-lg leading-relaxed text-black/70 [font-family:var(--font-body)]">
                {content.vision}
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="group relative overflow-hidden rounded-[2.5rem] bg-[#141416] p-8 sm:p-12 shadow-xl transition-transform hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110" />
            
            <div className="relative z-10 flex flex-col items-start gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 shadow-sm backdrop-blur-md">
                <Target className="h-8 w-8 text-primary-dark" />
               </div>
              <h2 className="text-3xl font-bold text-white [font-family:var(--font-heading)]">
                Mission
              </h2>
              <p className="text-lg leading-relaxed text-white/80 [font-family:var(--font-body)]">
                {content.mission}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
