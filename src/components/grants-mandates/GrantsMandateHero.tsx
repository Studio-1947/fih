"use client";

import Image from "next/image";
import { aboutContent } from "@/lib/content/about";
import FadeIn from "@/components/ui/FadeIn";
import { motion } from "motion/react";

export default function GrantsMandateHero() {
  const logos = aboutContent.grantsAndMandates.items.map(
    (item) => item.imagePath,
  );

  return (
    <section
      className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#fafafa]"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 z-0 bg-gray-50/50" />

      {/* Overlay Gradients for Depth */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#fafafa] via-transparent to-[#fafafa]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#fafafa] via-transparent to-[#fafafa]" />

      {/* Content Grid */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-15 pb-20 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Text */}
          <FadeIn>
            <div className="text-center lg:text-left">
              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black text-black tracking-tight leading-[1.1] [font-family:var(--font-heading)]">
                Grants & <br />
                <span className="text-primary">Mandates</span>
              </h1>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
                <div className="hidden sm:block h-1.5 w-16 bg-primary rounded-full shadow-[0_0_15px_rgba(208,160,21,0.3)]" />
                <p className="text-xs sm:text-xl font-bold text-primary-dark [font-family:var(--font-heading)] uppercase tracking-widest sm:tracking-[0.2em]">
                  Government, Institution & Others
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right Side: Logo Square */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="relative grid grid-cols-3 gap-4 sm:gap-6 p-4 bg-transparent rounded-[2.5rem] border border-black/5"
              style={{
                maskImage:
                  "radial-gradient(circle, black 60%, transparent 95%)",
                WebkitMaskImage:
                  "radial-gradient(circle, black 60%, transparent 95%)",
              }}
            >
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 * index,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3 + (index % 3),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    whileHover={{ scale: 1.1, rotate: 2, zIndex: 10 }}
                    className="relative h-20 w-20 sm:h-28 sm:w-28 bg-white rounded-2xl border border-black/5 shadow-sm flex items-center justify-center p-3 sm:p-4 hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                  >
                    <Image
                      src={logo}
                      alt="Partner Logo"
                      fill
                      className="object-contain p-2 sm:p-3 mix-blend-multiply transition-all duration-500"
                    />
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Background Blur for the logos */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
