"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = ["/hero/hero001.svg", "/hero/hero002.svg", "/hero/hero003.svg"];

export default function HeroImageSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActive((a) => (a + 1) % SLIDES.length),
      4500,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {SLIDES.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt="Community member"
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
