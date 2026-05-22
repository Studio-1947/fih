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

      {/* Full-width cards — no max-w constraint */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {objectives.map((obj, index) => (
          <div
            key={index}
            className="group relative h-72 sm:h-80 lg:h-120 overflow-hidden"
          >
            {/* Image */}
            <Image
              src={obj.image}
              alt={obj.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-black/10 transition-opacity duration-500 group-hover:from-black/90" />

            {/* Text at bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="mb-4 h-0.75 w-8 rounded-full bg-primary transition-all duration-500 group-hover:w-16" />
              <h4 className="text-lg sm:text-xl font-bold leading-snug text-white [font-family:var(--font-heading)]">
                {obj.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
