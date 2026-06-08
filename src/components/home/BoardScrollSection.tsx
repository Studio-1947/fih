"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { aboutContent } from "@/lib/content/about";

type Member = (typeof aboutContent.boardMembers)[0];

function MemberModal({
  member,
  onClose,
}: {
  member: Member;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl flex flex-col md:flex-row"
        style={{ height: "min(85vh, 560px)" }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm hover:bg-gray-100 p-2 rounded-full text-gray-600 transition-colors shadow-sm"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="relative w-full md:w-[280px] shrink-0 h-56 md:h-full rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden bg-[#f4f4f5]">
          <Image
            src={member.imagePath}
            alt={member.name}
            fill
            className="object-contain"
          />
        </div>
        <div className="flex-1 min-w-0 flex flex-col overflow-hidden rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none">
          <div className="px-6 sm:px-8 pt-6 pb-4 shrink-0 border-b border-black/5">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
              {member.name}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">
              {member.role}
            </p>
          </div>
          <div className="px-6 sm:px-8 py-5 overflow-y-auto flex-1">
            {member.description.split("\n\n").map((p, i) => (
              <p
                key={i}
                className="mb-4 last:mb-0 text-gray-700 leading-relaxed text-sm"
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const CARD_W = 220;
const GAP = 20;

export default function BoardScrollSection() {
  const { boardMembers } = aboutContent;
  const [selected, setSelected] = useState<Member | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const unitRef = useRef(0);

  const tripled = [...boardMembers, ...boardMembers, ...boardMembers];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    unitRef.current = el.scrollWidth / 3;
    el.scrollLeft = unitRef.current;
  }, []);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const unit = unitRef.current;
    if (el.scrollLeft < unit * 0.5) {
      el.scrollLeft += unit;
    } else if (el.scrollLeft > unit * 1.5) {
      el.scrollLeft -= unit;
    }
  };

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -(CARD_W + GAP) : CARD_W + GAP,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      {/* Header */}
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-0.5 w-8 bg-primary" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/50 [font-family:var(--font-heading)]">
            Mentor Group
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#141416] [font-family:var(--font-heading)]">
          Board of Members
        </h2>
      </div>

      {/* Constrained scroll window with flanking arrows on large screens */}
      <div className="mx-auto max-w-5xl relative">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 hidden lg:flex items-center justify-center w-11 h-11 rounded-full bg-white border border-black/10 shadow-md text-black/50 hover:border-primary hover:text-primary transition-all cursor-pointer"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 hidden lg:flex items-center justify-center w-11 h-11 rounded-full bg-white border border-black/10 shadow-md text-black/50 hover:border-primary hover:text-primary transition-all cursor-pointer"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto pb-4"
            style={{
              gap: `${GAP}px`,
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {tripled.map((member, i) => (
              <button
                key={i}
                onClick={() => setSelected(member)}
                className="shrink-0 group relative rounded-2xl overflow-hidden cursor-pointer text-left"
                style={{ width: `${CARD_W}px`, aspectRatio: "3 / 4" }}
              >
                <Image
                  src={member.imagePath}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="220px"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/70" />
                {/* Primary accent line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-bold text-sm text-white leading-snug [font-family:var(--font-heading)]">
                    {member.name}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-white/55">
                    {member.role}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <MemberModal member={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
