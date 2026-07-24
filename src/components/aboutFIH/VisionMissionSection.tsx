import { Eye, Target } from "lucide-react";
import type { AboutContent } from "@/lib/content/about";

type VisionMissionSectionProps = {
  content: AboutContent["visionMission"];
};

export default function VisionMissionSection({ content }: VisionMissionSectionProps) {
  return (
    <section 
      className="w-full flex flex-col lg:flex-row"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      {/* Vision Half - Dark */}
      <div className="w-full lg:w-1/2 bg-[#141416] py-24 sm:py-32 lg:py-40 px-8 sm:px-16 lg:px-24 flex items-start lg:justify-end border-b lg:border-b-0 lg:border-r border-white/10 group">
        <div className="max-w-xl w-full text-left transition-transform duration-700 lg:group-hover:-translate-x-4">
          <Eye className="h-16 w-16 text-primary mb-12 transition-transform duration-700 group-hover:scale-110" />
          <h2 className="text-5xl sm:text-6xl lg:text-[6rem] font-black text-white mb-8 tracking-tighter leading-[0.9] [font-family:var(--font-heading)]">
            Our<br/>Vision.
          </h2>
          <p className="text-xl sm:text-2xl leading-relaxed text-white/70 font-light [font-family:var(--font-body)]">
            {content.vision}
          </p>
        </div>
      </div>

      {/* Mission Half - Primary Color */}
      <div className="w-full lg:w-1/2 bg-primary py-24 sm:py-32 lg:py-40 px-8 sm:px-16 lg:px-24 flex items-start lg:justify-start group">
        <div className="max-w-xl w-full text-left transition-transform duration-700 lg:group-hover:translate-x-4">
          <Target className="h-16 w-16 text-[#141416] mb-12 transition-transform duration-700 group-hover:scale-110" />
          <h2 className="text-5xl sm:text-6xl lg:text-[6rem] font-black text-[#141416] mb-8 tracking-tighter leading-[0.9] [font-family:var(--font-heading)]">
            Our<br/>Mission.
          </h2>
          <p className="text-xl sm:text-2xl leading-relaxed text-[#141416]/80 font-medium [font-family:var(--font-body)]">
            {content.mission}
          </p>
        </div>
      </div>
    </section>
  );
}
