import Image from "next/image";

const logos = Array.from({ length: 12 }, (_, i) => `/supportedBy/s${i + 1}.svg`);

export default function SupportedBySection() {
  return (
    <section className="w-full py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-black/30 mb-10 sm:mb-12 [font-family:var(--font-heading)]">
          Also Supported By
        </h3>
        
        <div className="flex flex-col items-center gap-10 sm:gap-14">
          {/* Top Row (8 logos) */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 lg:gap-4 xl:gap-8 w-full">
            {logos.slice(0, 8).map((src, index) => (
              <div 
                key={`top-${index}`} 
                className="relative h-12 w-24 sm:h-14 sm:w-28 lg:h-14 lg:w-24 xl:h-16 xl:w-28"
              >
                <Image 
                  src={src} 
                  alt={`Partner logo ${index + 1}`} 
                  fill 
                  className="object-contain" 
                />
              </div>
            ))}
          </div>

          {/* Bottom Row (4 logos) */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 lg:gap-8 xl:gap-14 w-full">
            {logos.slice(8).map((src, index) => (
              <div 
                key={`bottom-${index}`} 
                className="relative h-12 w-24 sm:h-14 sm:w-28 lg:h-14 lg:w-24 xl:h-16 xl:w-28"
              >
                <Image 
                  src={src} 
                  alt={`Partner logo ${index + 9}`} 
                  fill 
                  className="object-contain" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
