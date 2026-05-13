import { Check, ArrowRight } from "lucide-react";
import type { OurWorkContent } from "@/lib/content/ourWork";

type ServicesSectionProps = {
  services: OurWorkContent["services"];
};

export default function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-24 bg-[#f6f5f1]/50 rounded-[3rem] mb-16">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary [font-family:var(--font-heading)]">
          <span className="h-0.5 w-8 bg-primary" aria-hidden="true" />
          OUR SERVICES
          <span className="h-0.5 w-8 bg-primary" aria-hidden="true" />
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-[#1a1a1a] sm:text-4xl lg:text-5xl [font-family:var(--font-heading)]">
          Comprehensive Care for Every Need
        </h2>
        <p className="text-[#666666] [font-family:var(--font-body)] text-base max-w-2xl mx-auto">
          We provide a wide range of specialized healthcare services to rural communities through our innovative digital clinics and partnerships.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, idx) => (
          <div 
            key={idx} 
            className="flex flex-col bg-white rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-black/5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-300 group"
          >
            <div className="flex-1 space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-[#1a1a1a] [font-family:var(--font-heading)] group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center group-hover:bg-primary transition-colors">
                  <ArrowRight className="w-5 h-5 text-black/30 group-hover:text-black" />
                </div>
              </div>
              
              <p className="text-[#666666] leading-relaxed text-sm [font-family:var(--font-body)]">
                {service.description}
              </p>
              
              {service.features && service.features.length > 0 && (
                <div className="pt-4 border-t border-black/5">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-black/40 mb-4 [font-family:var(--font-heading)]">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {service.features.slice(0, 6).map((feature, fIdx) => (
                      <li key={fIdx} className="flex gap-3">
                        <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-black" />
                        </div>
                        <span className="text-xs text-[#4a4a4a] [font-family:var(--font-body)]">
                          {feature}
                        </span>
                      </li>
                    ))}
                    {service.features.length > 6 && (
                      <li className="text-xs text-primary font-medium [font-family:var(--font-body)]">
                        + {service.features.length - 6} more features
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

