"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

const csrImages = [
  { src: "/csr/hero/ChatGPT%20Image%20May%2013%2C%202026%2C%2012_02_45%20PM.jpg", position: "object-top" },
  { src: "/csr/hero/ChatGPT%20Image%20May%2013%2C%202026%2C%2012_05_48%20PM.jpg", position: "object-center" },
  { src: "/csr/hero/ChatGPT%20Image%20May%2013%2C%202026%2C%2012_07_13%20PM.jpg", position: "object-top" },
];

export default function CSRHeroV2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % csrImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className="relative w-full h-[80vh] min-h-[550px] lg:min-h-[750px] max-h-[1000px] overflow-hidden bg-black -mt-32 flex flex-col justify-center"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      {/* Background Image Slideshow (Full Screen) */}
      <div className="absolute inset-0 w-full h-full z-0">
        {csrImages.map((img, index) => (
          <div
            key={img.src}
            className="absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out"
            style={{
              opacity: currentImageIndex === index ? 1 : 0,
              zIndex: currentImageIndex === index ? 2 : 1,
            }}
          >
            <Image
              src={img.src}
              alt={`CSR Impact ${index + 1}`}
              fill
              className={`object-cover ${img.position} transition-transform duration-[15000ms] ease-out ${
                currentImageIndex === index ? "scale-110" : "scale-100"
              }`}
              priority
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Gradients for image side cinematic depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-black/20 to-black/70 pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-black/10 pointer-events-none mix-blend-overlay" />
      
      {/* Slanted Primary Yellow Panel */}
      <div className="slanted-yellow-bg bg-primary" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-24 sm:pt-36 lg:pt-56 xl:pt-64 pb-12">
        <div className="w-full lg:max-w-[45%] text-left">
          <FadeIn direction="up">
            <div className="flex items-center gap-4 mb-6 sm:mb-8 justify-start">
              <div className="h-1 w-12 bg-black rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.15)]" />
              <span className="inline-block text-[12px] sm:text-[14px] font-bold uppercase tracking-[0.3em] text-black/80 [font-family:var(--font-heading)]">
                Corporate Social Responsibility
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[75px] xl:text-[85px] font-black text-black leading-[1.05] tracking-tighter [font-family:var(--font-heading)] uppercase drop-shadow-sm">
              Creating <br />
              <span className="text-white underline decoration-white/25 decoration-4 underline-offset-8 drop-shadow-sm">Sustainable</span> <br />
              Change.
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Responsive custom style tag for clip-paths and mobile layouts */}
      <style jsx>{`
        .slanted-yellow-bg {
          position: absolute;
          inset: 0;
          z-index: 10;
          clip-path: polygon(0 0, 100% 0, 100% 48%, 0 62%);
          pointer-events: none;
          transition: clip-path 1.2s cubic-bezier(0.25, 1, 0.5, 1);
        }

        @media (min-width: 1024px) {
          .slanted-yellow-bg {
            clip-path: polygon(0 0, 52% 0, 38% 100%, 0 100%);
          }
        }

        @media (max-width: 768px) {
          section {
            height: 80vh !important;
            margin-top: -128px !important;
            width: 100vw !important;
            margin-left: calc(-50vw + 50%) !important;
          }

          .relative.z-20 {
            padding-top: 130px;
            padding-bottom: 20px;
          }

          h1 {
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
