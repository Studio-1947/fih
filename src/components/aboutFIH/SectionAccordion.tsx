"use client";

import { useRef, useState } from "react";
import { Plus } from "lucide-react";

export type AccordionItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type SectionAccordionProps = {
  items: AccordionItem[];
  /** Index of the item open on first render (null = all closed) */
  defaultOpen?: number | null;
};

export default function SectionAccordion({
  items,
  defaultOpen = 0,
}: SectionAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Toggling an item changes the height of everything above it (the previously
  // open panel collapses), which otherwise leaves the clicked header shifted
  // off-screen — the "view thrown away" effect. When opening, we re-anchor the
  // just-opened header to the top of the viewport once the layout has settled,
  // so the section always lands in a clean, stable view.
  const handleToggle = (idx: number) => {
    const willOpen = openIndex !== idx;
    setOpenIndex(willOpen ? idx : null);
    if (!willOpen) return;
    // Wait two frames so the collapse + panel mount are reflowed before scrolling.
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        sectionRefs.current[idx]?.scrollIntoView({
          block: "start",
          behavior: "smooth",
        });
      }),
    );
  };

  return (
    <div className="w-full">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <section
            key={item.id}
            id={item.id}
            ref={(el) => {
              sectionRefs.current[idx] = el;
            }}
            className="w-full scroll-mt-28"
          >
            {/* Opener bar */}
            <button
              type="button"
              onClick={() => handleToggle(idx)}
              aria-expanded={isOpen}
              aria-controls={`${item.id}-panel`}
              className={`group relative block w-full cursor-pointer overflow-hidden text-left outline-none transition-colors duration-300 ${
                isOpen
                  ? "bg-[#141416] text-white"
                  : "bg-white text-[#141416] hover:bg-[#141416] hover:text-white"
              }`}
            >
              {/* Left accent bar — grows in on hover / when open */}
              <span
                className={`absolute inset-y-0 left-0 w-1.5 bg-primary origin-top transition-transform duration-300 ${
                  isOpen ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"
                }`}
              />

              <div className="mx-auto flex max-w-7xl items-center gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
                <h2 className="flex-1 text-xl sm:text-2xl lg:text-[1.85rem] font-black tracking-tight leading-tight transition-transform duration-300 [font-family:var(--font-heading)] group-hover:translate-x-2">
                  {item.title}
                </h2>

                {/* Toggle affordance */}
                <span
                  className={`flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 border-primary bg-primary text-[#141416]"
                      : "border-black/20 group-hover:border-primary group-hover:bg-primary group-hover:text-[#141416] group-hover:rotate-90"
                  }`}
                >
                  <Plus className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
              </div>

              {/* Baseline divider */}
              <span
                className={`absolute inset-x-0 bottom-0 h-px transition-colors duration-300 ${
                  isOpen ? "bg-transparent" : "bg-black/10 group-hover:bg-transparent"
                }`}
              />
            </button>

            {/* Panel */}
            {isOpen && (
              <div
                id={`${item.id}-panel`}
                className="w-full overflow-hidden animate-fade-in-up"
              >
                {item.content}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
