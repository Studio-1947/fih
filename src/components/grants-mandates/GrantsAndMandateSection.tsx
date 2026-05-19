import { aboutContent } from "@/lib/content/about";
import Image from "next/image";

export default function GrantsAndMandateSection() {
  const { grantsAndMandates } = aboutContent;

  return (
    <section
      className="pt-12 pb-24 bg-[#FAFAFA]"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {grantsAndMandates.items.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col h-full border border-black/5 overflow-hidden group"
            >
              {/* Image/Logo Banner */}
              <div className="relative w-full h-40 sm:h-48 bg-gradient-to-b from-[#F5F5F7] to-white border-b border-black/5 flex items-center justify-center overflow-hidden shrink-0">
                <Image
                  src={item.imagePath}
                  alt={item.organization}
                  fill
                  className="object-contain p-4 sm:p-5 transition-transform duration-500 group-hover:scale-110 mix-blend-multiply"
                />
              </div>

              {/* Content Container */}
              <div className="p-6 sm:p-8 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-black leading-snug group-hover:text-primary-dark transition-colors duration-300 [font-family:var(--font-heading)] mb-4">
                  {item.organization}
                </h3>
                
                <p className="text-black/75 leading-relaxed text-[15px] sm:text-base flex-grow [font-family:var(--font-body)]">
                  {item.description}
                </p>
                
                {item.subtext && (
                  <div className="mt-5 bg-[#FAFAFA] rounded-xl p-4 border border-black/5">
                    <p className="text-[13px] text-black/60 font-medium italic leading-relaxed [font-family:var(--font-body)]">
                      {item.subtext}
                    </p>
                  </div>
                )}
                
                {/* Partners section */}
                {item.partners && (
                  <div className="mt-6 pt-5 border-t border-black/5">
                    <span className="text-primary-dark font-black block uppercase tracking-[0.1em] text-[10px] sm:text-[11px] mb-2 [font-family:var(--font-heading)]">
                      Collaboration Partners
                    </span>
                    <span className="text-black/80 font-medium leading-relaxed block text-[13.5px] sm:text-sm [font-family:var(--font-body)]">
                      {item.partners.replace("Collaboration Partners: ", "")}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
