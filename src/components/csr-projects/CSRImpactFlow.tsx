"use client";

import { motion } from "motion/react";
import {
  GraduationCap,
  HeartPulse,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

export default function CSRImpactFlow() {
  return (
    <div className="relative w-full overflow-hidden bg-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-gray-100 flex flex-col items-center justify-center">
      {/* Background Ambient Lighting */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-80 w-80 rounded-full bg-teal-100/40 blur-3xl" />

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* ── 1. DESKTOP LAYOUT (Hidden on < lg screens) ────────────────────────── */}
        <div className="hidden lg:flex items-center justify-center gap-3 lg:gap-4 xl:gap-5 w-full py-4">
          {/* EDUCATION ORB (Blue) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center justify-center shrink-0"
          >
            <div className="w-40 h-40 xl:w-48 xl:h-48 rounded-full bg-gradient-to-br from-[#1d70b8] via-[#1b6bb0] to-[#14558f] p-4 text-white shadow-[0_15px_35px_rgba(29,112,184,0.3)] ring-4 ring-white border-2 border-blue-200 flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2 group-hover:bg-white/30 transition-colors shadow-inner">
                <GraduationCap className="w-6 h-6 xl:w-7 xl:h-7 text-white stroke-[2.2]" />
              </div>
              <span className="text-xs xl:text-base font-black uppercase tracking-wider [font-family:var(--font-heading)]">
                EDUCATION
              </span>
            </div>
          </motion.div>

          {/* PLUS OPERATOR */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-[#e53e3e] text-4xl xl:text-5xl font-black font-mono shrink-0 select-none"
          >
            +
          </motion.div>

          {/* HEALTH ORB (Teal Green) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center justify-center shrink-0"
          >
            <div className="w-40 h-40 xl:w-48 xl:h-48 rounded-full bg-gradient-to-br from-[#00a896] via-[#009688] to-[#007a6e] p-4 text-white shadow-[0_15px_35px_rgba(0,168,150,0.3)] ring-4 ring-white border-2 border-teal-200 flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-2 group-hover:bg-white/30 transition-colors shadow-inner">
                <HeartPulse className="w-6 h-6 xl:w-7 xl:h-7 text-white stroke-[2.2]" />
              </div>
              <span className="text-xs xl:text-base font-black uppercase tracking-wider [font-family:var(--font-heading)]">
                HEALTH
              </span>
            </div>
          </motion.div>

          {/* EQUALS OPERATOR */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-[#e53e3e] text-4xl xl:text-5xl font-black font-mono shrink-0 select-none"
          >
            =
          </motion.div>

          {/* STACKED ORBS: INCOME+ & DISEASE BURDEN - */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col items-center justify-center gap-3 shrink-0"
          >
            {/* INCOME + Circle (Green) */}
            <div className="w-32 h-32 xl:w-36 xl:h-36 rounded-full bg-gradient-to-br from-[#38c172] via-[#22c55e] to-[#15803d] p-3 text-white shadow-[0_10px_25px_rgba(34,197,94,0.3)] ring-4 ring-white border-2 border-green-200 flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-1 group-hover:bg-white/30 transition-colors shadow-inner">
                <TrendingUp className="w-4 h-4 xl:w-5 xl:h-5 text-white stroke-[2.5]" />
              </div>
              <span className="text-[11px] xl:text-xs font-black uppercase tracking-wider [font-family:var(--font-heading)] leading-tight">
                INCOME +
              </span>
            </div>

            {/* DISEASE BURDEN - Circle (Purple) */}
            <div className="w-32 h-32 xl:w-36 xl:h-36 rounded-full bg-gradient-to-br from-[#a855f7] via-[#9333ea] to-[#6b21a8] p-3 text-white shadow-[0_10px_25px_rgba(147,51,234,0.3)] ring-4 ring-white border-2 border-purple-200 flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform duration-300">
              <div className="w-8 h-8 xl:w-9 xl:h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-1 group-hover:bg-white/30 transition-colors shadow-inner">
                <TrendingDown className="w-4 h-4 xl:w-5 xl:h-5 text-white stroke-[2.5]" />
              </div>
              <span className="text-[11px] xl:text-xs font-black uppercase tracking-wider [font-family:var(--font-heading)] leading-tight px-1">
                DISEASE BURDEN -
              </span>
            </div>
          </motion.div>

          {/* RED ARROW 1 */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex items-center justify-center shrink-0 px-1"
          >
            <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-[#e53e3e] text-white flex items-center justify-center shadow-md">
              <ArrowRight className="w-5 h-5 xl:w-6 xl:h-6 stroke-[3]" />
            </div>
          </motion.div>

          {/* REDUCTION IN MULTI-DIMENSIONAL POVERTY ORB (Golden Yellow) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex flex-col items-center justify-center shrink-0"
          >
            <div className="w-40 h-40 xl:w-48 xl:h-48 rounded-full bg-gradient-to-br from-[#f59e0b] via-[#e5a823] to-[#d97706] p-4 text-white shadow-[0_15px_35px_rgba(245,158,11,0.3)] ring-4 ring-white border-2 border-amber-200 flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform duration-300">
              <span className="text-[11px] xl:text-xs font-black uppercase tracking-wider [font-family:var(--font-heading)] leading-snug px-2">
                REDUCTION IN MULTI-DIMENSIONAL POVERTY
              </span>
            </div>
          </motion.div>

          {/* RED ARROW 2 */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="flex items-center justify-center shrink-0 px-1"
          >
            <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-[#e53e3e] text-white flex items-center justify-center shadow-md">
              <ArrowRight className="w-5 h-5 xl:w-6 xl:h-6 stroke-[3]" />
            </div>
          </motion.div>

          {/* RURAL RESILIENCE ORB (Sky Blue) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-col items-center justify-center shrink-0"
          >
            <div className="w-40 h-40 xl:w-48 xl:h-48 rounded-full bg-gradient-to-br from-[#00a2ff] via-[#0284c7] to-[#0369a1] p-4 text-white shadow-[0_15px_35px_rgba(2,132,199,0.3)] ring-4 ring-white border-2 border-sky-200 flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform duration-300">
              <span className="text-xs xl:text-base font-black uppercase tracking-wider [font-family:var(--font-heading)] leading-snug px-2">
                RURAL RESILIENCE
              </span>
            </div>
          </motion.div>
        </div>


        {/* ── 2. MOBILE & TABLET LAYOUT (Hidden on >= lg screens) ──────────────── */}
        <div className="flex lg:hidden flex-col items-center gap-6 w-full max-w-md mx-auto py-2">
          
          {/* Section 1: Education + Health */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 w-full">
            {/* EDUCATION */}
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#1d70b8] via-[#1b6bb0] to-[#14558f] p-3 text-white shadow-md ring-4 ring-white border-2 border-blue-200 flex flex-col items-center justify-center text-center shrink-0">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-1">
                <GraduationCap className="w-5 h-5 text-white stroke-[2.2]" />
              </div>
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider [font-family:var(--font-heading)]">
                EDUCATION
              </span>
            </div>

            {/* PLUS */}
            <span className="text-[#e53e3e] text-3xl font-black font-mono shrink-0 select-none">
              +
            </span>

            {/* HEALTH */}
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#00a896] via-[#009688] to-[#007a6e] p-3 text-white shadow-md ring-4 ring-white border-2 border-teal-200 flex flex-col items-center justify-center text-center shrink-0">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-1">
                <HeartPulse className="w-5 h-5 text-white stroke-[2.2]" />
              </div>
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider [font-family:var(--font-heading)]">
                HEALTH
              </span>
            </div>
          </div>

          {/* EQUALS OPERATOR */}
          <div className="text-[#e53e3e] text-3xl font-black font-mono select-none my-0.5">
            =
          </div>

          {/* Section 2: Income+ & Disease Burden- */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 w-full">
            {/* INCOME + */}
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#38c172] via-[#22c55e] to-[#15803d] p-3 text-white shadow-md ring-4 ring-white border-2 border-green-200 flex flex-col items-center justify-center text-center shrink-0">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-1">
                <TrendingUp className="w-4 h-4 text-white stroke-[2.5]" />
              </div>
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider [font-family:var(--font-heading)] leading-tight">
                INCOME +
              </span>
            </div>

            {/* DISEASE BURDEN - */}
            <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#a855f7] via-[#9333ea] to-[#6b21a8] p-3 text-white shadow-md ring-4 ring-white border-2 border-purple-200 flex flex-col items-center justify-center text-center shrink-0">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-1">
                <TrendingDown className="w-4 h-4 text-white stroke-[2.5]" />
              </div>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider [font-family:var(--font-heading)] leading-tight px-1">
                DISEASE BURDEN -
              </span>
            </div>
          </div>

          {/* RED DOWN ARROW 1 */}
          <div className="w-9 h-9 rounded-full bg-[#e53e3e] text-white flex items-center justify-center shadow-md my-0.5">
            <ArrowDown className="w-5 h-5 stroke-[3]" />
          </div>

          {/* Section 3: Poverty Reduction */}
          <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#f59e0b] via-[#e5a823] to-[#d97706] p-4 text-white shadow-md ring-4 ring-white border-2 border-amber-200 flex flex-col items-center justify-center text-center shrink-0">
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider [font-family:var(--font-heading)] leading-snug px-1">
              REDUCTION IN MULTI-DIMENSIONAL POVERTY
            </span>
          </div>

          {/* RED DOWN ARROW 2 */}
          <div className="w-9 h-9 rounded-full bg-[#e53e3e] text-white flex items-center justify-center shadow-md my-0.5">
            <ArrowDown className="w-5 h-5 stroke-[3]" />
          </div>

          {/* Section 4: Rural Resilience */}
          <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-[#00a2ff] via-[#0284c7] to-[#0369a1] p-4 text-white shadow-md ring-4 ring-white border-2 border-sky-200 flex flex-col items-center justify-center text-center shrink-0">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider [font-family:var(--font-heading)] leading-snug px-1">
              RURAL RESILIENCE
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
