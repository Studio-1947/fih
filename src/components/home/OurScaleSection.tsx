"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "motion/react";

function Counter({
  value,
  prefix = "",
  suffix = "",
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);

  const formatted = useTransform(count, (latest) => {
    const rounded = Math.round(latest);
    return `${prefix}${rounded.toLocaleString()}${suffix}`;
  });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, value, {
        duration: 2.5,
        ease: [0.21, 0.47, 0.32, 0.98],
      });
      return controls.stop;
    }
  }, [inView, count, value]);

  return <motion.span ref={ref}>{formatted}</motion.span>;
}

const scaleData1 = [
  { value: 12, suffix: " +", label: "YEAR" },
  { value: 6, suffix: "", label: "STATES" },
  { value: 5000, suffix: " +", label: "TRAINED" },
  { value: 80, suffix: " +", label: "HOSPITALS" },
];

const scaleData2 = [
  { value: 15, suffix: "", label: "MOBILE & FIXED CLINICS" },
  { value: 1, suffix: "", label: "MOTOR BOAT" },
  { value: 55000, suffix: " +", label: "BENEFICIARIES" },
  { value: 250, prefix: "₹ ", suffix: "", label: "AV. COST/PATIENT" },
];

export default function OurScaleSection() {
  return (
    <section className="w-full bg-white py-20 sm:py-32 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-[2px] w-12 bg-primary"></span>
            <h2 className="text-4xl font-bold tracking-tight text-[#141416] sm:text-5xl lg:text-6xl [font-family:var(--font-heading)]">
              Our Scale
            </h2>
            <span className="h-[2px] w-12 bg-primary"></span>
          </div>
        </div>

        {/* Group 1 */}
        <div className="mb-32">
          <h3 className="mb-8 text-center text-xl font-medium text-[#141416]/80 sm:text-2xl [font-family:var(--font-heading)]">
            AHP education and training programme
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-12 pb-12 sm:gap-8 lg:gap-10">
            {scaleData1.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.1 }}
                key={item.label}
                className={`flex aspect-square w-[160px] flex-col items-center justify-center rounded-full bg-[#141416] p-4 text-center shadow-2xl ring-8 ring-white transition-all duration-300 hover:scale-105 hover:shadow-primary/20 sm:w-[220px] sm:p-6 lg:w-[260px] lg:p-8 ${
                  i % 2 === 0 ? "lg:-translate-y-12" : "lg:translate-y-12"
                }`}
              >
                <div className="mb-2 text-3xl font-bold tracking-tighter text-primary sm:text-4xl lg:text-5xl [font-family:var(--font-heading)]">
                  <Counter value={item.value} prefix={item.prefix} suffix={item.suffix} />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/80 sm:text-xs [font-family:var(--font-heading)]">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Group 2 */}
        <div>
          <h3 className="mb-8 text-center text-xl font-medium text-[#141416]/80 sm:text-2xl [font-family:var(--font-heading)]">
            Primary care &amp; public health delivery program
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6 pt-12 pb-12 sm:gap-8 lg:gap-10">
            {scaleData2.map((item, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 100, damping: 15, delay: i * 0.1 }}
                key={item.label}
                className={`flex aspect-square w-[160px] flex-col items-center justify-center rounded-full bg-[#141416] p-4 text-center shadow-2xl ring-8 ring-white transition-all duration-300 hover:scale-105 hover:shadow-primary/20 sm:w-[220px] sm:p-6 lg:w-[260px] lg:p-8 ${
                  i % 2 !== 0 ? "lg:-translate-y-12" : "lg:translate-y-12"
                }`}
              >
                <div className="mb-2 text-3xl font-bold tracking-tighter text-primary sm:text-4xl lg:text-5xl [font-family:var(--font-heading)]">
                  <Counter value={item.value} prefix={item.prefix} suffix={item.suffix} />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/80 sm:text-xs [font-family:var(--font-heading)]">
                  {item.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
