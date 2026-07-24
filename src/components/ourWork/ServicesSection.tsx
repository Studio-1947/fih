import { Check, ArrowRight } from "lucide-react";
import Image from "next/image";
import type { OurWorkContent } from "@/lib/content/ourWork";
import FadeIn from "@/components/ui/FadeIn";

type ServicesSectionProps = {
  services: OurWorkContent["services"];
};

export default function ServicesSection({ services }: ServicesSectionProps) {
  const [featured, ...rest] = services;

  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-24 bg-[#0A0A0B] rounded-[3.5rem] mb-16 overflow-hidden border border-white/5">
      
      {/* Immersive Medical Tech Background Image & Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image 
          src="/floating_image.jpg" 
          alt="Comprehensive Healthcare Services" 
          fill 
          className="object-cover object-center opacity-15 saturate-[0.8]" 
          sizes="(max-width: 1280px) 100vw, 1280px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/90 via-transparent to-[#0A0A0B]/95 z-10" />
      </div>

      <div className="relative z-20">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary [font-family:var(--font-heading)]">
              <span className="h-0.5 w-8 bg-primary" aria-hidden="true" />
              OUR SERVICES
              <span className="h-0.5 w-8 bg-primary" aria-hidden="true" />
            </p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl [font-family:var(--font-heading)]">
              Comprehensive care for every need
            </h2>
            <p className="text-white/60 [font-family:var(--font-body)] text-base max-w-2xl mx-auto font-medium leading-relaxed">
              We provide a wide range of specialized healthcare services to rural communities through our innovative digital clinics and partnerships.
            </p>
          </div>
        </FadeIn>

        {/* Featured service (with its feature list) beside the remaining services */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Featured card */}
          {featured && (
            <FadeIn className="h-full">
              <div className="group flex h-full flex-col bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/10 hover:bg-white hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out cursor-pointer">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white [font-family:var(--font-heading)] group-hover:text-primary transition-colors duration-300">
                    {featured.title}
                  </h3>
                  <div className="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-[#0A0A0B] transition-colors" />
                  </div>
                </div>

                <p className="text-white/70 group-hover:text-gray-600 leading-relaxed text-sm [font-family:var(--font-body)] transition-colors duration-300">
                  {featured.description}
                </p>

                {featured.features && featured.features.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-white/10 group-hover:border-black/5 transition-colors duration-300">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-gray-400 mb-4 [font-family:var(--font-heading)] transition-colors">
                      Key Features
                    </h4>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                      {featured.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex gap-3">
                          <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-white/10 text-primary group-hover:bg-primary/20 group-hover:text-primary-dark flex items-center justify-center transition-colors">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="text-xs text-white/80 group-hover:text-gray-600 [font-family:var(--font-body)] transition-colors">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </FadeIn>
          )}

          {/* Remaining services stacked */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {rest.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} className="flex-1">
                <div className="group flex h-full flex-col justify-center bg-white/5 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/10 hover:bg-white hover:border-transparent hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white [font-family:var(--font-heading)] group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="w-10 h-10 shrink-0 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <ArrowRight className="w-5 h-5 text-white/50 group-hover:text-[#0A0A0B] transition-colors" />
                    </div>
                  </div>
                  <p className="text-white/70 group-hover:text-gray-600 leading-relaxed text-sm [font-family:var(--font-body)] transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

