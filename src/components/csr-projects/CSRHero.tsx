"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import FadeIn from "@/components/ui/FadeIn";

const csrImages = [
  "/csr/hero/ChatGPT%20Image%20May%2013%2C%202026%2C%2012_00_47%20PM.png",
  "/csr/hero/ChatGPT%20Image%20May%2013%2C%202026%2C%2012_02_45%20PM.png",
  "/csr/hero/ChatGPT%20Image%20May%2013%2C%202026%2C%2012_05_48%20PM.png",
  "/csr/hero/ChatGPT%20Image%20May%2013%2C%202026%2C%2012_07_13%20PM.png",
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
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-black -mt-32"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      {/* Background Image Slideshow (Right Side) */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={csrImages[currentImageIndex]}
              alt="CSR Impact"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay for the image side */}
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slanted Color Overlay (Left Side) */}
      <div 
        className="absolute inset-0 z-10 w-full h-full bg-primary/80 pointer-events-none"
        style={{
          clipPath: "polygon(0 0, 50% 0, 30% 100%, 0 100%)",
        }}
      >
        {/* Subtle texture or pattern on the primary color */}
        <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center pt-32">
        <div className="max-w-3xl">
          <FadeIn direction="left">
            <span className="inline-block text-[12px] font-bold uppercase tracking-[0.4em] text-white/80 mb-6 [font-family:var(--font-heading)] drop-shadow-md">
              Corporate Social Responsibility
            </span>
            
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter [font-family:var(--font-heading)] uppercase drop-shadow-2xl">
              Creating <br />
              <span className="text-white">Sustainable</span> <br />
              Change
            </h1>
            
            <div className="mt-8 space-y-6 max-w-2xl">
              <p className="text-lg sm:text-xl text-white font-bold [font-family:var(--font-body)] leading-relaxed drop-shadow-lg">
                Our integrated approach focuses on two key outcomes: building a skilled health workforce and expanding access to primary care and public health. Together, these create a self-sustaining ecosystem of health and livelihood.
              </p>
              
              <p className="text-base sm:text-lg text-white/90 font-medium [font-family:var(--font-body)] leading-relaxed drop-shadow-md">
                By enabling rural youth to access stable employment and bringing affordable healthcare closer to communities, we help increase household incomes while significantly reducing long-term medical expenses. The result is a meaningful reduction in multi-dimensional poverty.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Responsive adjustments for the split on mobile */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            height: 100vh !important;
            margin-top: -128px !important; /* Ensure absolute top coverage on mobile */
            width: 100vw !important;
            margin-left: calc(-50vw + 50%) !important;
          }
          
          /* Hide the slanted yellow overlay on mobile */
          div[style*="clipPath"] {
            display: none !important;
          }

          /* Make the dark overlay darker on mobile for readability */
          .bg-black\/40 {
            background-color: rgba(0, 0, 0, 0.6) !important;
          }

          .max-w-7xl {
            padding-top: 100px;
            padding-bottom: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          h1 {
            font-size: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
