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
      className="relative w-full h-[80vh] min-h-[550px] lg:min-h-[750px] max-h-[1000px] overflow-hidden bg-black -mt-32 flex flex-col justify-center"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      {/* Blurred backdrop. Fills the whole section — including the strip behind
          the transparent nav — so that band reads as a soft continuation of the
          banner rather than a flat black gap. Same src and sizes as the sharp
          layer below, so it costs no extra image download. */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {csrImages.map((img, index) => (
          <Image
            key={`${img.src}-backdrop`}
            src={img.src}
            alt=""
            aria-hidden="true"
            fill
            className="object-cover scale-125 blur-2xl transition-opacity duration-2000 ease-in-out"
            style={{ opacity: currentImageIndex === index ? 1 : 0 }}
            priority={index === 0}
            loading={index === 0 ? undefined : "lazy"}
            sizes="100vw"
          />
        ))}
      </div>

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
            className="absolute inset-0 w-full h-full transition-opacity duration-2000 ease-in-out"
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
              // No zoom: these banners are 2.8:1, so any scale-up crops the
              // heads out of the group photos
              className={`object-cover ${img.position}`}
              // Only the first slide blocks render; the rest load lazily as the
              // slideshow advances, so ten banners don't all preload at once
              priority={index === 0}
              loading={index === 0 ? undefined : "lazy"}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Gradients for text legibility & cinematic depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-black/20 pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-24 sm:pt-36 lg:pt-56 xl:pt-64 pb-12">
        <div className="max-w-3xl">
          <FadeIn direction="up">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <div className="h-1 w-12 bg-primary rounded-full shadow-[0_0_10px_rgba(255,184,0,0.5)]" />
              <span className="inline-block text-[12px] sm:text-[14px] font-bold uppercase tracking-[0.3em] text-white/90 [font-family:var(--font-heading)] drop-shadow-md">
                Corporate Social Responsibility
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[100px] font-black text-white leading-[1] tracking-tighter [font-family:var(--font-heading)] uppercase drop-shadow-2xl">
              Creating <br />
              <span className="text-primary drop-shadow-[0_0_20px_rgba(255,184,0,0.3)]">
                Sustainable
              </span>{" "}
              <br />
              Change.
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
            padding-top: 100px;
            padding-bottom: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          .flex.items-center.gap-4 {
            justify-content: center;
          }

          h1 {
            font-size: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
