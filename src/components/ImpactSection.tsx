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
        <div className="relative rounded-[2rem] sm:rounded-[3rem] bg-[#141416] px-6 py-12 sm:px-12 sm:py-16 lg:px-20 lg:py-24 text-white overflow-hidden shadow-2xl">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-[80%] md:w-1/2 h-full bg-gradient-to-bl from-primary/20 via-primary/5 to-transparent blur-3xl opacity-60" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-40" />

          <div className="relative z-10 space-y-12 md:space-y-16">
            <div className="space-y-6 max-w-3xl text-center mx-auto">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold [font-family:var(--font-heading)] bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                {content.modelInAction.heading}
              </h3>
              <p className="text-lg sm:text-xl text-white/80 [font-family:var(--font-body)] leading-relaxed">
                {content.modelInAction.intro}
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8 lg:gap-10 sm:grid-cols-2 lg:grid-cols-3 relative">
              {/* Connecting line for desktop */}
              <div className="hidden lg:block absolute top-12 left-10 right-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

              {content.modelInAction.points.map((point, idx) => (
                <div
                  key={idx}
                  className="relative z-10 group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl sm:rounded-[2rem] p-8 transition-all duration-500 backdrop-blur-md flex flex-col items-center sm:items-start text-center sm:text-left hover:-translate-y-2 shadow-lg"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(var(--color-primary-rgb),0.2)]">
                    <span className="text-2xl sm:text-3xl font-black text-primary [font-family:var(--font-heading)]">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 [font-family:var(--font-heading)]">
                    {point.title}
                  </h4>
                  <p className="text-[15px] sm:text-base text-white/70 leading-relaxed [font-family:var(--font-body)]">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mx-auto max-w-4xl bg-gradient-to-r from-primary/30 via-primary/10 to-transparent p-[1px] rounded-2xl sm:rounded-3xl">
              <div className="bg-[#141416]/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center sm:text-left flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <p className="text-[15px] sm:text-lg leading-relaxed text-white/90 [font-family:var(--font-body)] font-medium">
                  {content.modelInAction.conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Systemic Impact & Approach */}
        <div className="grid gap-8 lg:gap-8 lg:grid-cols-2 items-stretch">
          {/* Card 1: Systemic Impact */}
          <div className="bg-[#FAFAFA] rounded-[2rem] p-8 sm:p-10 border border-black/5 shadow-sm flex flex-col transition-colors duration-500 hover:border-primary/20 hover:shadow-md">
            <div className="space-y-6 flex-grow">
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-black [font-family:var(--font-heading)] leading-tight">
                  {content.systemicImpact.heading}
                </h3>
                <p className="text-base sm:text-lg text-black/70 [font-family:var(--font-body)] leading-relaxed">
                  {content.systemicImpact.intro}
                </p>
              </div>

              <ul className="space-y-3">
                {content.systemicImpact.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-black/5 group hover:bg-primary/5 transition-colors duration-300 shadow-sm"
                  >
                    <div className="bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 rounded-full p-2 shrink-0">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-[15px] sm:text-base leading-relaxed text-black/80 [font-family:var(--font-body)] font-medium">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20 mt-8 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 rounded-full blur-2xl -mr-8 -mt-8 transition-transform duration-700 group-hover:scale-150" />
               <p className="relative z-10 text-[15px] sm:text-base font-medium text-black/90 leading-relaxed [font-family:var(--font-body)]">
                 {content.systemicImpact.conclusion}
               </p>
            </div>
          </div>

          {/* Card 2: Our Approach */}
          <div className="bg-[#FAFAFA] rounded-[2rem] p-8 sm:p-10 border border-black/5 shadow-sm flex flex-col transition-colors duration-500 hover:border-primary/20 hover:shadow-md">
            <div className="space-y-3 text-center lg:text-left mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-black [font-family:var(--font-heading)] leading-tight">
                {content.ourApproach.heading}
              </h3>
              <p className="text-base sm:text-lg text-black/70 [font-family:var(--font-body)] leading-relaxed">
                {content.ourApproach.description}
              </p>
            </div>

            <div className="flex-grow flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-[340px] mx-auto rounded-[2.5rem] overflow-visible bg-white shadow-sm border border-black/5 flex items-center justify-center p-6 sm:p-8">
                <div className="relative w-full h-full">
                  <Image
                    src={content.ourApproach.imagePath}
                    alt="3T Model"
                    fill
                    className="object-contain"
                  />

                  {/* Top Circle: TRAIN */}
                  <div className="absolute top-[8%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[28%] aspect-square rounded-full bg-secondary/80 hover:bg-primary hover:text-black transition-all duration-500 flex items-center justify-center text-black font-bold text-[10px] sm:text-xs md:text-sm shadow-lg hover:shadow-2xl hover:scale-110 cursor-pointer z-10 text-center px-2 leading-tight backdrop-blur-md border border-white/30">
                    TRAIN
                  </div>

                  {/* Bottom Left Circle: TECHNOLOGY */}
                  <div className="absolute top-[70%] left-[15%] -translate-x-1/2 -translate-y-1/2 w-[28%] aspect-square rounded-full bg-secondary/80 hover:bg-primary hover:text-black transition-all duration-500 flex items-center justify-center text-black font-bold text-[10px] sm:text-xs md:text-sm shadow-lg hover:shadow-2xl hover:scale-110 cursor-pointer z-10 text-center px-2 leading-tight backdrop-blur-md border border-white/30">
                    TECHNOLOGY
                  </div>

                  {/* Bottom Right Circle: TASK-SHIFT */}
                  <div className="absolute top-[70%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-[28%] aspect-square rounded-full bg-secondary/80 hover:bg-primary hover:text-black transition-all duration-500 flex items-center justify-center text-black font-bold text-[10px] sm:text-xs md:text-sm shadow-lg hover:shadow-2xl hover:scale-110 cursor-pointer z-10 text-center px-2 leading-tight backdrop-blur-md border border-white/30">
                    TASK-SHIFT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
