"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const csrImages = [
  { src: "/csr/hero/banner-01.webp", position: "object-center" },
  { src: "/csr/hero/banner-02.webp", position: "object-center" },
  { src: "/csr/hero/banner-03.webp", position: "object-center" },
  { src: "/csr/hero/banner-04.webp", position: "object-center" },
  { src: "/csr/hero/banner-05.webp", position: "object-center" },
  { src: "/csr/hero/banner-06.webp", position: "object-center" },
  { src: "/csr/hero/banner-07.webp", position: "object-center" },
  { src: "/csr/hero/banner-08.webp", position: "object-center" },
  { src: "/csr/hero/banner-09.webp", position: "object-center" },
  { src: "/csr/hero/banner-10.webp", position: "object-center" },
];

export default function CSRHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % csrImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full h-[80vh] min-h-[550px] lg:min-h-[750px] max-h-[1000px] overflow-hidden bg-black -mt-32 flex flex-col justify-end"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      {/* Ambient backdrop. Rather than a lightly-blurred copy of the banner
          (which reads as an obvious duplicate), the source is scaled up hard and
          blurred into an out-of-focus colour wash, with saturation pushed and
          brightness pulled down so it glows like the ambient backgrounds in
          premium media players. Same src/sizes as the sharp layer, so it costs
          no extra image download. */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {csrImages.map((img, index) => (
          <Image
            key={`${img.src}-backdrop`}
            src={img.src}
            alt=""
            aria-hidden="true"
            fill
            className="object-cover scale-[1.6] blur-[90px] saturate-[1.4] brightness-[0.9] transition-opacity duration-700 ease-in-out"
            style={{ opacity: currentImageIndex === index ? 1 : 0 }}
            priority={index === 0}
            loading={index === 0 ? undefined : "lazy"}
            sizes="100vw"
          />
        ))}
      </div>

      {/* Depth layer over the ambient wash (still behind the sharp banner):
          a light radial vignette that settles the frame's edges into the
          section, and a soft warm-primary glow. Kept gentle so the photos read
          bright and clean rather than veiled. */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(130% 85% at 50% 45%, transparent 45%, rgba(0,0,0,0.35) 100%)",
        }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(60%_50%_at_75%_25%,rgba(255,184,0,0.12),transparent_60%)] mix-blend-screen" />

      {/* Sharp slideshow.
          Inset from the top by the same 128px the section is pulled up (-mt-32),
          so the banners start below the transparent nav instead of behind it.
          Its top edge is masked to fade into the blurred backdrop over 6rem,
          otherwise the inset reads as a hard divider line. */}
      <div
        className="absolute inset-x-0 bottom-0 top-32 z-1 mask-[linear-gradient(to_bottom,transparent_0,black_6rem)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0,black_6rem)]"
      >
        {csrImages.map((img, index) => (
          <div
            key={img.src}
            className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out"
            style={{
              // Always keep non-active slides below; active slide on top
              // This prevents the "blank gap" when transitioning between slides
              opacity: currentImageIndex === index ? 1 : 0,
              zIndex: currentImageIndex === index ? 2 : 1,
            }}
          >
            <Image
              src={img.src}
              alt={`CSR Impact ${index + 1}`}
              fill
              // object-contain (not cover): these banners carry important
              // figures edge-to-edge, so we show the whole frame uncropped and
              // let the blurred backdrop fill the letterbox instead of clipping
              // heads out of the group photos. A light brightness/contrast lift
              // makes the photographs read cleaner and more vivid.
              className={`object-contain ${img.position} brightness-[1.08] contrast-[1.04] saturate-[1.05]`}
              // Only the first slide blocks render; the rest load lazily as the
              // slideshow advances, so ten banners don't all preload at once
              priority={index === 0}
              loading={index === 0 ? undefined : "lazy"}
              // Serve a higher-quality encode than the default 75 so faces stay
              // crisp on large screens
              quality={90}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Gradients kept light: just enough scrim on the left for the headline
          to stay legible, without dulling or darkening the photographs. */}
      <div className="absolute inset-0 z-10 bg-linear-to-r from-black/65 via-black/20 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-linear-to-t from-black/45 via-transparent to-black/15 pointer-events-none" />

      {/* Content Container — anchored to the bottom of the hero */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-10 sm:pb-14 lg:pb-16">
        <div className="max-w-none">
          <FadeIn direction="up">
            <div className="flex items-center gap-4 mb-4 sm:mb-5">
              <div className="h-1 w-12 bg-primary rounded-full shadow-[0_0_10px_rgba(255,184,0,0.5)]" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tighter [font-family:var(--font-heading)] drop-shadow-2xl lg:whitespace-nowrap">
              Creating{" "}
              <span className="text-primary drop-shadow-[0_0_20px_rgba(255,184,0,0.3)]">
                sustainable
              </span>{" "}
              change.
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Responsive adjustments for mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            height: 70vh !important;
            margin-top: -128px !important;
            width: 100vw !important;
            margin-left: calc(-50vw + 50%) !important;
          }

          .max-w-7xl {
            padding-bottom: 32px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            text-align: center;
          }

          .flex.items-center.gap-4 {
            justify-content: center;
          }

          h1 {
            font-size: 2.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
