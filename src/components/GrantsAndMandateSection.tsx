import { aboutContent } from "@/lib/content/about";
import Image from "next/image";

export default function GrantsAndMandateSection() {
  const { grantsAndMandates } = aboutContent;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {grantsAndMandates.title}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our initiatives are supported by prestigious organizations, research institutions, and government bodies, enabling us to deliver scalable, science-driven impact across rural India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {grantsAndMandates.items.map((item, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full border border-gray-100 hover:-translate-y-1 group"
            >
              {/* Image/Logo Container */}
              <div className="relative w-full h-20 mb-6 flex items-center justify-start">
                <Image
                  src={item.imagePath}
                  alt={item.organization}
                  fill
                  className="object-contain object-left opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Heading Container with min-height for alignment */}
              <div className="mb-4 min-h-[60px] md:min-h-[80px]">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug group-hover:text-primary transition-colors">
                  {item.organization}
                </h3>
              </div>
              
              <div className="w-12 h-1 bg-gray-200 rounded-full mb-5 transition-colors group-hover:bg-primary/50"></div>
              
              <div className="flex-grow">
                <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">
                  {item.description}
                </p>
                
                {item.subtext && (
                  <p className="text-xs md:text-sm text-gray-500 font-medium italic leading-relaxed">
                    {item.subtext}
                  </p>
                )}
              </div>
              
              {/* Partners section (removed status) */}
              {item.partners && (
                <div className="mt-6 pt-5 border-t border-gray-200 text-sm font-medium">
                  <p className="text-gray-700 mb-2 leading-relaxed">
                    <span className="text-primary font-bold block uppercase tracking-wider text-[10px] mb-1">Collaboration Partners</span>
                    <span className="text-gray-600">{item.partners.replace("Collaboration Partners: ", "")}</span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
