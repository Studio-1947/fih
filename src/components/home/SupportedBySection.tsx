import Image from "next/image";

const logos = Array.from(
  { length: 12 },
  (_, i) => `/supportedBy/s${i + 1}.svg`,
);

export default function SupportedBySection() {
  return (
    <section className="w-full py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-sm sm:text-base lg:text-lg font-bold uppercase tracking-[0.15em] text-black/40 mb-10 sm:mb-12 [font-family:var(--font-heading)]">
          Our Partners
        </h3>

        <div className="relative w-full overflow-hidden flex items-center py-4">
          {/* Fading Edges */}
          <div className="absolute left-0 top-0 z-10 h-full w-12 sm:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 z-10 h-full w-12 sm:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          
          <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
            {[...Array(2)].map((_, setIndex) => (
              <div 
                key={setIndex}
                className="flex flex-shrink-0 items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20 pr-8 sm:pr-12 lg:pr-16 xl:pr-20"
              >
                {logos.map((src, index) => (
                  <div
                    key={`logo-${setIndex}-${index}`}
                    className="relative h-20 w-40 sm:h-24 sm:w-48 lg:h-24 lg:w-48 xl:h-28 xl:w-56 flex-shrink-0 transition-all duration-300 hover:scale-105"
                  >
                    <Image
                      src={src}
                      alt={`Partner logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
