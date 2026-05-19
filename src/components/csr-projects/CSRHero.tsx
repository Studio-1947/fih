"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import FadeIn from "@/components/ui/FadeIn";

const csrImages = [
  { src: "/csr/hero/ChatGPT%20Image%20May%2013%2C%202026%2C%2012_02_45%20PM.jpg", position: "object-top" },
  { src: "/csr/hero/ChatGPT%20Image%20May%2013%2C%202026%2C%2012_05_48%20PM.jpg", position: "object-center" },
  { src: "/csr/hero/ChatGPT%20Image%20May%2013%2C%202026%2C%2012_07_13%20PM.jpg", position: "object-top" },
];

export default function CSRHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % csrImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className="relative w-full h-[70vh] min-h-[500px] lg:min-h-[600px] max-h-[900px] overflow-hidden bg-black -mt-32 flex flex-col justify-center"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      {/* Background Image Slideshow (Full Screen) */}
      <div className="absolute inset-0 w-full h-full">
        {csrImages.map((img, index) => (
          <div
            key={img.src}
            className="absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out"
            style={{
              opacity: currentImageIndex === index ? 1 : 0,
              zIndex: currentImageIndex === index ? 10 : 0,
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
            />
          </div>
        ))}
      </div>

      {/* Gradients for text legibility & cinematic depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-black/20 pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-24 pb-12">
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
              <span className="text-primary drop-shadow-[0_0_20px_rgba(255,184,0,0.3)]">Sustainable</span> <br />
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
