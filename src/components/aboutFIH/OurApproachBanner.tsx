import Image from "next/image";

export default function OurApproachBanner() {
  return (
    <section className="relative w-full h-[50vh] min-h-[320px] overflow-hidden flex items-center justify-center">
      <Image
        src="/press-media/gallery/photos/photo-gallery-09.webp"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="relative z-10 text-center px-6">
        <span className="block text-primary font-bold tracking-[0.25em] uppercase text-xs sm:text-sm [font-family:var(--font-heading)] mb-4">
          Our Approach
        </span>
        <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white [font-family:var(--font-heading)] leading-snug max-w-3xl mx-auto">
          From isolated interventions to system-wide transformation.
        </p>
      </div>
    </section>
  );
}
