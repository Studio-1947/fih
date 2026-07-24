"use client";

import { Fragment } from "react";
import { LogIn, LogOut, ChevronRight, ChevronDown } from "lucide-react";
import type { OurWorkContent } from "@/lib/content/ourWork";
import FadeIn from "@/components/ui/FadeIn";

type ClinicWorkflowSectionProps = {
  workflow: OurWorkContent["clinicWorkflow"];
};

// Sequential colour scheme, left → right along the journey
const stepColors = [
  "#5b7bcf", // Patient arrives
  "#3b82f6", // Clinical data entry
  "#f5b82e", // Real-time sharing
  "#8ce624", // Remote consultation
  "#2ec971", // Medical action
  "#28d2a0", // Documentation completion
  "#2e731d", // Patient departs
];

const darkText = new Set(["#f5b82e", "#8ce624"]);

export default function ClinicWorkflowSection({ workflow }: ClinicWorkflowSectionProps) {
  const steps = workflow.steps;
  const total = steps.length;

  return (
    <section className="relative z-[60] mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 bg-white my-12 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ca9a22 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Header */}
      <FadeIn className="w-full relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-4">
          <span className="inline-block rounded-full border border-black/10 bg-black/[0.03] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black/50 [font-family:var(--font-heading)]">
            Option B · Left to right
          </span>
          <p className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-primary [font-family:var(--font-heading)]">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            Uday Journey
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
          </p>
          <h2 className="text-3xl font-black tracking-tight text-[#1a1a1a] sm:text-5xl lg:text-6xl [font-family:var(--font-heading)] px-2">
            {workflow.title}
          </h2>
          <p className="text-[#666666] text-sm sm:text-lg [font-family:var(--font-body)] max-w-xl mx-auto">
            Follow the complete cycle of care, from arrival on the left to departure on the right.
          </p>
        </div>
      </FadeIn>

      {/* Wide desktop: single evenly-distributed row, connected by lines + arrows */}
      <FadeIn delay={0.15} className="w-full relative z-10 hidden xl:block">
        <div className="flex items-start">
          {steps.map((step, idx) => {
            const color = stepColors[idx % stepColors.length];
            const nextColor = stepColors[(idx + 1) % stepColors.length];
            const isStart = idx === 0;
            const isEnd = idx === total - 1;
            const onDark = !darkText.has(color);
            return (
              <Fragment key={idx}>
                {/* Step */}
                <div className="flex w-32 shrink-0 flex-col items-center text-center">
                  <div
                    className="group flex h-32 w-32 flex-col items-center justify-center gap-1 rounded-full border-4 border-white p-3 transition-transform duration-300 hover:scale-105"
                    style={{
                      backgroundColor: color,
                      color: onDark ? "#ffffff" : "#1a1a1a",
                      boxShadow: `0 12px 28px ${color}45`,
                    }}
                  >
                    {isStart && <LogIn className="h-5 w-5 rotate-90 opacity-90" />}
                    {isEnd && <LogOut className="h-5 w-5 -rotate-90 opacity-90" />}
                    <span className="text-xs font-black leading-[1.15] [font-family:var(--font-heading)]">
                      {step.title}
                    </span>
                  </div>
                  {step.description && (
                    <p className="mt-4 text-[11px] leading-relaxed text-[#666666] [font-family:var(--font-body)]">
                      {step.description}
                    </p>
                  )}
                </div>

                {/* Connector (line + arrow) aligned to circle centre */}
                {!isEnd && (
                  <div className="mt-16 flex flex-1 items-center px-1">
                    <div
                      className="h-1 flex-1 rounded-full"
                      style={{ background: `linear-gradient(to right, ${color}, ${nextColor})` }}
                    />
                    <ChevronRight
                      className="-ml-1 h-6 w-6 shrink-0"
                      strokeWidth={3}
                      style={{ color: nextColor }}
                    />
                  </div>
                )}
              </Fragment>
            );
          })}
        </div>
      </FadeIn>

      {/* Mobile → large desktop: vertical stepper (top → bottom) */}
      <FadeIn delay={0.15} className="w-full relative z-10 xl:hidden">
        <div className="relative mx-auto max-w-md">
          {steps.map((step, idx) => {
            const color = stepColors[idx % stepColors.length];
            const isStart = idx === 0;
            const isEnd = idx === total - 1;
            const onDark = !darkText.has(color);
            return (
              <div key={idx} className="flex flex-col items-center">
                <div className="flex w-full items-start gap-5">
                  <div
                    className="relative z-10 flex h-16 w-16 shrink-0 flex-col items-center justify-center gap-0.5 rounded-full border-4 border-white p-1.5 text-center shadow-md"
                    style={{
                      backgroundColor: color,
                      color: onDark ? "#ffffff" : "#1a1a1a",
                    }}
                  >
                    {isStart ? (
                      <LogIn className="h-5 w-5 rotate-90" />
                    ) : isEnd ? (
                      <LogOut className="h-5 w-5 -rotate-90" />
                    ) : (
                      <span className="text-[8px] font-black leading-[1.1] [font-family:var(--font-heading)]">
                        {step.title}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                    <h4 className="text-sm font-black mb-1 [font-family:var(--font-heading)]" style={{ color }}>
                      {step.title}
                    </h4>
                    {step.description && (
                      <p className="text-[12px] leading-relaxed text-[#666666] [font-family:var(--font-body)]">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
                {/* Down connector */}
                {!isEnd && (
                  <ChevronDown className="my-1.5 h-6 w-6 text-primary/50 self-start ml-5" strokeWidth={3} aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>
      </FadeIn>
    </section>
  );
}
