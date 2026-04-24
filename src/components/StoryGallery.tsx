"use client";

import Image from "next/image";

const floatingImages = [
  { src: "/floating/IMG20220519145411 (1).jpg", alt: "Floating Clinic Activity 1" },
  { src: "/floating/IMG20230131134813 (1).jpg", alt: "Floating Clinic Activity 2" },
  { src: "/floating/IMG20231116131526.jpg", alt: "Onboard Consultation" },
  { src: "/floating/IMG20231130153542 (1).jpg", alt: "Community Outreach" },
  { src: "/floating/IMG_20210907_135134 (1).jpg", alt: "Healthcare Delivery" },
  { src: "/floating/PrePap 4 (1) (2).png", alt: "Digital Platform Interface" },
];

export default function StoryGallery() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-black/40 [font-family:var(--font-heading)]">
              Visual Narrative
            </span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-black [font-family:var(--font-heading)]">
            Impact in <span className="text-primary">Focus</span>
          </h2>
        </div>

        {/* Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {floatingImages.map((img, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-[2rem] bg-gray-100 shadow-sm transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                index === 2 ? "lg:row-span-2 lg:h-full" : "h-72"
              } ${index === 0 ? "lg:col-span-2 lg:h-96" : ""}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white text-sm font-bold tracking-wide uppercase [font-family:var(--font-heading)]">
                  {img.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
