"use client";

import { useEffect, useRef, useState } from "react";

export default function QuoteSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-primary pt-20 pb-32 lg:pt-24 lg:pb-36 overflow-hidden relative" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
      <div className="absolute top-0 right-0 text-[20rem] font-black text-black/5 leading-none translate-x-1/4 -translate-y-1/4 select-none">
        &ldquo;
      </div>
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-4 text-center relative z-10 transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <p className="text-3xl md:text-5xl font-black text-black leading-tight mb-12">
          &ldquo;In the Sundarbans, where survival is a daily challenge, the Floating Digital Clinic is not just a service; it is a lifeline.&rdquo;
        </p>
        <div className="h-2 w-32 bg-black mx-auto rounded-full" />
      </div>
    </section>
  );
}
