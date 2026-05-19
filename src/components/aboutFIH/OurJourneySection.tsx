"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const journeyEvents = [
  {
    year: "2011",
    title: "Straightening a dog's tail",
    imagePath: "/AboutUs/our%20journey/2011.webp",
    body: "FIH = Serendipity; when Dr. Saha (its founder) and his doctor colleagues realised the futility of trying to improve health of the people by establishing more and more hospitals. Dr. Saha has been a serial entrepreneur in healthcare, having established 5 hospitals in different districts of West Bengal, starting with Westbank Hospital at Howrah. FIH was born!",
  },
  {
    year: "2013",
    title: "Learning",
    imagePath: "/AboutUs/our%20journey/2013.webp",
    body: "Exposure to rural primary care systems across South Asian countries and Africa, obtained through consulting work with IFC (World Bank Group) and other impact-oriented healthcare investment groups helped develop the hypothesis of the 3T model. The idea germinated!",
  },
  {
    year: "2015",
    title: "Challenging the conventional framework",
    imagePath: "/AboutUs/our%20journey/2015.webp",
    body: "Shifting task from the doctor (ubiquitous shortage) to the trained community health worker held the key to the 3T model. Through a collaboration with Johns Hopkins University USA, a software was developed that would mimic the doctor's mind — easy to be used by CHWs even in low band-width. The holy grail was found!",
  },
  {
    year: "2017",
    title: "The Trepidation",
    imagePath: "/AboutUs/our%20journey/2017.webp",
    body: "The first ever digital clinic was set up at Barhra, Birbhum (funded by Department of Science & Technology, Government of India). A child of 12 yrs was diagnosed with a rare but life-threatening cardiac disorder through digital consultation with a cardiologist sitting in Bangladesh, and referred for treatment. One life was saved!",
  },
  {
    year: "2018",
    title: "The Translation",
    imagePath: "/AboutUs/our%20journey/2018.webp",
    body: "Institutions took an interest, and came forward to build translational collaborations to innovate frugal, accurate and ethnographically aligned diagnostic solutions to fulfil primary care needs. Research became democratic!",
  },
  {
    year: "2018",
    title: "The Opportunity",
    imagePath: "/AboutUs/our%20journey/2018.2.webp",
    body: "West Bengal SCSTOBSDFC, Government of West Bengal entrusted us with the task of establishing more clinics in remote rural areas. Trust was gained!",
  },
  {
    year: "2020",
    title: "Onwards – Traction",
    imagePath: "/AboutUs/our%20journey/2020.webp",
    body: "Expanded footprint of training schools across multiple states in India; thousands received training and subsequent job placement in a network of 60+ hospitals across almost all major cities in India. A group of girls, rescued from trafficking, returned to their villages to receive a hero's welcome after securing jobs post-training.",
  },
  {
    year: "2022",
    title: "CSR Programs",
    imagePath: "/AboutUs/our%20journey/2022.webp",
    body: "Multiple companies came forward, inspired by the twin impact strategy. We aligned with their CSR values; demonstrated sustainable and measurable impact on various Sustainable Development Goals (SDGs).",
  },
];

function JourneyCard({ event, idx }: { event: typeof journeyEvents[0]; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const isEven = idx % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch transition-all duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${idx * 60}ms` }}
    >
      {/* Image — always left on mobile, alternates on desktop */}
      <div className={`relative w-full aspect-[4/3] lg:aspect-auto ${isEven ? "lg:order-1" : "lg:order-2"} overflow-hidden`}>
        <Image
          src={event.imagePath}
          alt={event.title}
          fill
          className="object-cover"
        />
        {/* Gradient overlay */}
        <div className={`absolute inset-0 ${isEven
          ? "bg-gradient-to-r from-transparent to-[#141416]/60"
          : "bg-gradient-to-l from-transparent to-[#141416]/60"}`}
        />
        {/* Large watermark year */}
        <div className={`absolute bottom-4 ${isEven ? "right-6" : "left-6"} text-[6rem] sm:text-[8rem] font-black text-white/10 leading-none tracking-tighter select-none [font-family:var(--font-heading)]`}>
          {event.year}
        </div>
      </div>

      {/* Text Panel */}
      <div className={`bg-[#141416] flex flex-col justify-center px-10 sm:px-14 lg:px-16 py-14 sm:py-16 lg:py-20
        ${isEven ? "lg:order-2" : "lg:order-1"}`}>

        {/* Year + divider */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary [font-family:var(--font-heading)]">
            {event.year}
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Title */}
        <h3 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-white leading-tight tracking-tighter mb-6 [font-family:var(--font-heading)]">
          {event.title}
        </h3>

        {/* Body */}
        <p className="text-lg text-white/60 leading-relaxed [font-family:var(--font-body)] max-w-md">
          {event.body}
        </p>
      </div>
    </div>
  );
}

export default function OurJourneySection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="bg-[#141416] overflow-hidden"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      {/* Header */}
      <div
        ref={headerRef}
        className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-20 sm:pb-28 transition-all duration-700 ease-out
          ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-10 h-[2px] bg-primary" />
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary [font-family:var(--font-heading)]">
            Since 2011
          </span>
        </div>
        <h2 className="text-5xl sm:text-7xl lg:text-[7rem] font-black text-white leading-[0.95] tracking-tighter [font-family:var(--font-heading)]">
          Our<br />Journey
        </h2>
      </div>

      {/* Milestone Grid — edge to edge, no gaps */}
      <div className="flex flex-col">
        {journeyEvents.map((event, idx) => (
          <JourneyCard key={idx} event={event} idx={idx} />
        ))}
      </div>
    </section>
  );
}
