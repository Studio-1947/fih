"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = ["/hero/hero001.svg", "/hero/hero002.svg"];

// function that takes interval and length of slides
function useCarousel(totalSlides: number, intervalMs = 2000) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % totalSlides);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [totalSlides, intervalMs]);

  return active;
}

export default function HeroImageSlider() {
  const active = useCarousel(SLIDES.length, 1800);

  return (
    <>
      {SLIDES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`Community member ${i + 1}`}
          width={250}
          height={360}
          unoptimized
          priority={i === 0}
          className={`absolute bottom-[-49%] left-[5%] lg:left-[20%] z-20 h-[150%] w-[110%] object-contain transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
}
