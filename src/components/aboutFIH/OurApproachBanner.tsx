import Image from "next/image";

export default function OurApproachBanner() {
  return (
    <section className="relative w-full h-[70vh] min-h-115 max-h-205 overflow-hidden flex items-center justify-center">
      <Image
        src="/press-media/gallery/photos/photo-gallery-09.webp"
        alt=""
        fill
        // Taller banner + a small brightness lift so much more of the portrait
        // photo is revealed and it reads bright rather than dark
        className="object-cover object-center brightness-105"
        sizes="100vw"
      />
      {/* Gentle overall darken keeps the bright image from washing out the text
          without dulling it; the radial scrim adds just enough contrast right
          behind the centred copy. */}
      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_50%,rgba(0,0,0,0.55),transparent_78%)]" />
      <div className="relative z-10 text-center px-6">
        <span className="block text-primary font-bold tracking-[0.25em] uppercase text-xs sm:text-sm [font-family:var(--font-heading)] mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
          Our Approach
        </span>
        <p className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white [font-family:var(--font-heading)] leading-snug max-w-3xl mx-auto drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          From isolated interventions to system-wide transformation.
        </p>
      </div>
    </section>
  );
}
