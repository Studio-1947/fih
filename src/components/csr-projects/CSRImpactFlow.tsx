"use client";

import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  GraduationCap,
  HeartPulse,
  IndianRupee,
  ShieldAlert,
  Stethoscope,
  TreePine,
} from "lucide-react";

type OrbConfig = {
  title: string;
  Icon: typeof GraduationCap;
  tone: string;
};

function Orb({ title, Icon, tone, delay }: OrbConfig & { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`flex h-56 w-56 sm:h-64 sm:w-64 lg:h-44 lg:w-44 xl:h-52 xl:w-52 flex-none flex-col items-center justify-center rounded-full border shadow-sm ${tone}`}
    >
      <div className="flex h-12 w-12 lg:h-10 lg:w-10 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm">
        <Icon className="h-6 w-6 lg:h-5 lg:w-5 text-black" />
      </div>
      <span className="mt-3 max-w-28 lg:max-w-22 xl:max-w-26 px-2 text-center text-[15px] lg:text-[11px] xl:text-[13px] font-bold leading-tight text-black drop-shadow-[0_1px_0_rgba(255,255,255,0.55)] [font-family:var(--font-heading)]">
        {title}
      </span>
    </motion.div>
  );
}

function MergedPair({
  first,
  second,
  baseDelay,
}: {
  first: OrbConfig;
  second: OrbConfig;
  baseDelay: number;
}) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex flex-col items-center lg:flex-row lg:items-center">
        <div className="relative z-10">
          <Orb {...first} delay={baseDelay} />
        </div>
        <div className="relative -mt-12 sm:-mt-14 lg:mt-0 lg:-ml-8 xl:-ml-10">
          <Orb {...second} delay={baseDelay + 0.12} />
        </div>
      </div>
    </div>
  );
}

function Connector({
  symbol = "arrow",
  delay,
}: {
  symbol?: "arrow" | "equals";
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="flex flex-col items-center justify-center lg:flex-row"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm lg:hidden">
        {symbol === "equals" ? (
          <span className="text-xl font-black leading-none text-black">=</span>
        ) : (
          <ArrowDown className="h-5 w-5 text-black" />
        )}
      </div>
      <div className="hidden h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm lg:flex">
        {symbol === "equals" ? (
          <span className="text-lg font-black leading-none text-black">=</span>
        ) : (
          <ArrowRight className="h-4 w-4 text-black" />
        )}
      </div>
    </motion.div>
  );
}

export default function CSRImpactFlow() {
  return (
    <div className="relative overflow-hidden bg-black p-5 text-white sm:p-8 lg:px-8 lg:py-12 xl:px-16">
      <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-primary/20 blur-3xl" />

      {/* Single straight line on lg+, stacked column on mobile */}
      <div className="relative flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:justify-center lg:gap-2 xl:gap-4">
        <MergedPair
          baseDelay={0}
          first={{
            title: "Education",
            Icon: GraduationCap,
            tone: "border-[#f6efba] bg-[#fff7de] text-black",
          }}
          second={{
            title: "Health",
            Icon: HeartPulse,
            tone: "border-[#efe3a0] bg-[#faefc1] text-black",
          }}
        />

        <Connector symbol="equals" delay={0.25} />

        <MergedPair
          baseDelay={0.35}
          first={{
            title: "Income",
            Icon: IndianRupee,
            tone: "border-[#e2c87f] bg-[#f6e8b4] text-black",
          }}
          second={{
            title: "Disease burden",
            Icon: Stethoscope,
            tone: "border-[#dcc067] bg-[#f1dc99] text-black",
          }}
        />

        <Connector symbol="arrow" delay={0.55} />

        <Orb
          title="Reduction in multidimensional poverty"
          Icon={ShieldAlert}
          tone="border-[#cfb04d] bg-[#e9d37f] text-black"
          delay={0.67}
        />

        <Connector symbol="arrow" delay={0.82} />

        <Orb
          title="Rural resilience"
          Icon={TreePine}
          tone="border-primary bg-primary text-black"
          delay={0.94}
        />
      </div>
    </div>
  );
}
