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
    title: "Empowering\nRural\nWomen",
    image: "/Specific%20Objectives/Women%E2%80%99s%20Empowerment.webp",
  },
];

export default function SpecificObjectivesSection() {
  return (
    <section 
      className="relative w-full bg-[#f4f4f5] py-16 sm:py-20 lg:py-24 overflow-hidden"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12 sm:mb-16 text-center flex flex-col items-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="h-[3px] w-5 sm:w-6 bg-primary" />
            <span className="h-[3px] w-5 sm:w-8 bg-black" />
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-black/60 [font-family:var(--font-heading)] mx-2">
              OUR FOCUS
            </h2>
            <span className="h-[3px] w-5 sm:w-8 bg-black" />
            <span className="h-[3px] w-5 sm:w-6 bg-primary" />
          </div>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold [font-family:var(--font-heading)] text-[#202020]">
            Specific Objectives
          </h3>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {objectives.map((obj, index) => (
            <div
              key={index}
              className="group relative flex flex-col w-full h-full overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5"
            >
              {/* Image */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                <Image
                  src={obj.image}
                  alt={obj.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-transparent" />
              </div>
              
              {/* Text Content */}
              <div className="relative flex flex-1 flex-col p-6 sm:p-8 bg-primary overflow-hidden justify-between">
                <h4 className="relative z-10 text-lg sm:text-xl font-bold leading-snug text-[#141416] [font-family:var(--font-heading)] mb-6 whitespace-pre-line">
                  {obj.title}
                </h4>
                
                {/* Animated progress line */}
                <div className="relative z-10 h-[3px] w-8 bg-black/10 transition-all duration-500 group-hover:w-full group-hover:bg-[#141416] rounded-full overflow-hidden" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
