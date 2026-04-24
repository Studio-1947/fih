import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { AboutContent } from "@/lib/content/about";

type ImpactSectionProps = {
  content: AboutContent["impact"];
};

export default function ImpactSection({ content }: ImpactSectionProps) {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
        
        {/* Header Area */}
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-bold tracking-widest uppercase text-primary [font-family:var(--font-heading)]">
                {content.mainHeading}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] text-black [font-family:var(--font-heading)]">
                {content.subHeading}
              </h2>
            </div>
            <p className="text-xl font-medium text-black/80 [font-family:var(--font-heading)]">
              {content.hook}
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-black/65 [font-family:var(--font-body)]">
              {content.introParagraph}
            </p>
          </div>
          {content.imagePath && (
            <div className="relative aspect-[5/4] rounded-[3rem] overflow-hidden shadow-xl border border-black/5 group">
              <Image
                src={content.imagePath}
                alt="Impact in Focus"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
          )}
        </div>

        {/* The Challenges (Side by Side) */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Rural Employment */}
          <div className="bg-[#FAFAFA] rounded-[2rem] p-8 sm:p-10 border border-black/5 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 [font-family:var(--font-heading)] leading-snug">
              {content.ruralEmployment.heading}
            </h3>
            <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-black/65 [font-family:var(--font-body)]">
              {content.ruralEmployment.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>

          {/* Healthcare Access */}
          <div className="bg-[#FAFAFA] rounded-[2rem] p-8 sm:p-10 border border-black/5 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-6 [font-family:var(--font-heading)] leading-snug">
              {content.healthcareAccess.heading}
            </h3>
            <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-black/65 [font-family:var(--font-body)]">
              {content.healthcareAccess.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </div>

        {/* The 3T Model in Action */}
        <div className="relative rounded-[3rem] bg-[#141416] px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-24 text-white overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />
          
          <div className="relative z-10 max-w-4xl space-y-12">
            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl font-bold [font-family:var(--font-heading)]">
                {content.modelInAction.heading}
              </h3>
              <p className="text-lg text-white/70 [font-family:var(--font-body)]">
                {content.modelInAction.intro}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {content.modelInAction.points.map((point, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <span className="text-4xl font-black text-primary opacity-50 mb-4 block">
                    0{idx + 1}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-2 [font-family:var(--font-heading)]">
                    {point.title}
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed [font-family:var(--font-body)]">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-[15px] sm:text-base leading-relaxed text-white/80 border-l-2 border-primary pl-4 max-w-3xl [font-family:var(--font-body)]">
              {content.modelInAction.conclusion}
            </p>
          </div>
        </div>

        {/* Systemic Impact & Approach */}
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl sm:text-4xl font-bold text-black [font-family:var(--font-heading)]">
                {content.systemicImpact.heading}
              </h3>
              <p className="text-lg text-black/65 [font-family:var(--font-body)]">
                {content.systemicImpact.intro}
              </p>
            </div>

            <ul className="space-y-4">
              {content.systemicImpact.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-[15px] sm:text-base leading-relaxed text-black/80 [font-family:var(--font-body)]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
              <p className="text-[15px] font-medium text-black/80 leading-relaxed [font-family:var(--font-body)]">
                {content.systemicImpact.conclusion}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl font-bold text-black [font-family:var(--font-heading)]">
                {content.ourApproach.heading}
              </h3>
              <p className="text-lg text-black/65 [font-family:var(--font-body)]">
                {content.ourApproach.description}
              </p>
            </div>
            
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-3xl overflow-visible bg-[#FAFAFA] flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={content.ourApproach.imagePath}
                  alt="3T Model"
                  fill
                  className="object-contain"
                />
                
                {/* Top Circle: TRAIN */}
                <div className="absolute top-[8%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[28%] aspect-square rounded-full bg-secondary/55 hover:bg-primary hover:text-black transition-all duration-300 flex items-center justify-center text-white font-bold text-[10px] sm:text-xs md:text-sm shadow-md cursor-pointer z-10 text-center px-2 leading-tight">
                  TRAIN
                </div>
                
                {/* Bottom Left Circle: TECHNOLOGY */}
                <div className="absolute top-[70%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-[28%] aspect-square rounded-full bg-secondary/55 hover:bg-primary hover:text-black transition-all duration-300 flex items-center justify-center text-white font-bold text-[10px] sm:text-xs md:text-sm shadow-md cursor-pointer z-10 text-center px-2 leading-tight">
                  TECHNOLOGY
                </div>
                
                {/* Bottom Right Circle: TASK-SHIFT */}
                <div className="absolute top-[70%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-[28%] aspect-square rounded-full bg-secondary/55 hover:bg-primary hover:text-black transition-all duration-300 flex items-center justify-center text-white font-bold text-[10px] sm:text-xs md:text-sm shadow-md cursor-pointer z-10 text-center px-2 leading-tight">
                  TASK-SHIFT
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
