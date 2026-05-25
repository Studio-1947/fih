import Image from "next/image";

const objectives = [
  {
    title: "Accessible & affordable primary care & public health",
    image: "/Specific%20Objectives/Accessible%20%26%20affordable%20primary%20care%20%26%20public%20health.webp",
  },
  {
    title: "Employment creation among rural youth",
    image: "/Specific%20Objectives/Employment%20creation%20among%20rural%20youth.webp",
  },
  {
    title: "Upliftment of marginalized community",
    image: "/Specific%20Objectives/Upliftment%20of%20marginalized%20community.jpg",
  },
  {
    title: "Empowering Rural Women",
    image: "/Specific%20Objectives/Women%E2%80%99s%20Empowerment.webp",
  },
];

export default function SpecificObjectivesSection() {
  return (
    <section
      className="relative w-full bg-[#f4f4f5] py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      {/* Header */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-0.75 w-5 sm:w-6 bg-primary" />
            <span className="h-0.75 w-5 sm:w-8 bg-black" />
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-black/60 [font-family:var(--font-heading)] mx-2">
              OUR FOCUS
            </h2>
            <span className="h-0.75 w-5 sm:w-8 bg-black" />
            <span className="h-0.75 w-5 sm:w-6 bg-primary" />
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold [font-family:var(--font-heading)] text-[#202020]">
            Specific Objectives
          </h3>
        </div>
      </div>

      {/* 2×2 grid on lg, single column below */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {objectives.map((obj, index) => (
          <div key={index} className="group flex flex-col sm:flex-row items-center gap-6 sm:gap-8 bg-white rounded-2xl overflow-hidden shadow-sm">
            {/* Image — left, consistent height across all cards */}
            <div className="w-full sm:w-2/5 shrink-0 self-stretch overflow-hidden">
              <div className="relative w-full h-56 sm:h-full">
                <Image
                  src={obj.image}
                  alt={obj.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 40vw, 20vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Text — right */}
            <div className="flex-1 p-6 sm:py-8 sm:pr-8 sm:pl-0">
              <div className="mb-4 h-0.75 w-8 rounded-full bg-primary transition-all duration-500 group-hover:w-16" />
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold leading-snug text-[#202020] [font-family:var(--font-heading)]">
                {obj.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
