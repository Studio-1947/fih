import { CheckCircle2 } from "lucide-react";
import type { OurWorkContent } from "@/lib/content/ourWork";

type OurWorkContentSectionProps = {
  benefits: OurWorkContent["benefits"];
  uniqueness: OurWorkContent["uniqueness"];
  pillars: OurWorkContent["pillars"];
};

export default function OurWorkContentSection({
  benefits,
  uniqueness,
  pillars,
}: OurWorkContentSectionProps) {
  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24">
        {/* Benefits Section */}
        <div className="bg-[#f6f5f1] rounded-3xl p-8 sm:p-10 shadow-[0_18px_40px_rgba(0,0,0,0.08)] border border-black/5">
          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-8 [font-family:var(--font-heading)] flex items-center gap-4">
            <span className="w-1.5 h-8 bg-primary rounded-full"></span>
            {benefits.title}
          </h3>
          <ul className="space-y-4">
            {benefits.items.map((item, idx) => (
              <li key={idx} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-[#4a4a4a] text-[15px] leading-relaxed [font-family:var(--font-body)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Uniqueness Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_18px_40px_rgba(0,0,0,0.08)] border border-black/5">
          <h3 className="text-2xl font-bold text-[#1a1a1a] mb-8 [font-family:var(--font-heading)] flex items-center gap-4">
            <span className="w-1.5 h-8 bg-black rounded-full"></span>
            {uniqueness.title}
          </h3>
          <ul className="space-y-4">
            {uniqueness.items.map((item, idx) => (
              <li key={idx} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                <span className="text-[#4a4a4a] text-[15px] leading-relaxed [font-family:var(--font-body)]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pillars Section */}
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl [font-family:var(--font-heading)]">
            Core Pillars of Our Model
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-primary rounded-full"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-black/5 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 group"
            >
              <h4 className="text-xl font-bold text-[#1a1a1a] mb-3 [font-family:var(--font-heading)] group-hover:text-primary transition-colors">
                {pillar.title}
              </h4>
              <p className="text-[#666666] text-sm leading-relaxed [font-family:var(--font-body)]">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
