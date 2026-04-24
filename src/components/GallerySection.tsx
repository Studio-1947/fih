"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Images, PlayCircle } from "lucide-react";

// ── Photos ──────────────────────────────────────────────────────────────────
const photos = [
  "/Press&media/gallery/photos/photo-gallery-01.jpg",
  "/Press&media/gallery/photos/photo-gallery-02.jpeg",
  "/Press&media/gallery/photos/photo-gallery-03.png",
  "/Press&media/gallery/photos/photo-gallery-04.jpg",
  "/Press&media/gallery/photos/photo-gallery-05.png",
  "/Press&media/gallery/photos/photo-gallery-06.png",
  "/Press&media/gallery/photos/photo-gallery-07.webp",
  "/Press&media/gallery/photos/photo-gallery-08.webp",
  "/Press&media/gallery/photos/photo-gallery-09.webp",
  "/Press&media/gallery/photos/photo-gallery-10.webp",
  "/Press&media/gallery/photos/photo-gallery-11.jpg",
  "/Press&media/gallery/photos/photo-gallery-12.png",
  "/Press&media/gallery/photos/photo-gallery-13.jpg",
  "/Press&media/gallery/photos/photo-gallery-14.jpg",
  "/Press&media/gallery/photos/photo-gallery-15.jpg",
  "/Press&media/gallery/photos/photo-gallery-16.jpg",
  "/Press&media/gallery/photos/photo-gallery-17.jpg",
  "/Press&media/gallery/photos/photo-gallery-18.jpg",
  "/Press&media/gallery/photos/photo-gallery-19.jpg",
  "/Press&media/gallery/photos/photo-gallery-20.jpg",
  "/Press&media/gallery/photos/photo-gallery-21.jpg",
  "/Press&media/gallery/photos/photo-gallery-22.jpg",
  "/Press&media/gallery/photos/photo-gallery-23.jpeg",
  "/Press&media/gallery/photos/photo-gallery-24.jpeg",
  "/Press&media/gallery/photos/photo-gallery-25.png",
  "/Press&media/gallery/photos/photo-gallery-26.jpg",
  "/Press&media/gallery/photos/photo-gallery-27.jpg",
  "/Press&media/gallery/photos/photo-gallery-28.jpg",
  "/Press&media/gallery/photos/photo-gallery-29.jpg",
  "/Press&media/gallery/photos/photo-gallery-30.jpg",
  "/Press&media/gallery/photos/photo-gallery-31.jpg",
  "/Press&media/gallery/photos/photo-gallery-32.jpg",
  "/Press&media/gallery/photos/DSC_0201.jpg",
  "/Press&media/gallery/photos/DSC_0736.jpg",
  "/Press&media/gallery/photos/DSC_0745.jpg",
  "/Press&media/gallery/photos/IMG-20250224-WA0011.jpg",
  "/Press&media/gallery/photos/IMG-20250402-WA0002.jpg",
  "/Press&media/gallery/photos/WhatsApp Image 2025-06-04 at 18.53.47_dc85eaaf.jpg",
  "/Press&media/gallery/photos/WhatsApp Image 2025-06-04 at 22.05.20_2bfc0ee9.jpg",
];

// ── Videos ──────────────────────────────────────────────────────────────────
const videos = [
  {
    id: "oTJZrGz3Wq4",
    title: "MGL Hunar Project: Empowering Rural Women Through Health Sector Skills & Employment",
  },
  {
    id: "HZIHZcNDAws",
    title: "SEHAAT: Building Healthier Communities in Silvassa",
  },
  {
    id: "lrlLAa3wqOs",
    title: "Project TRANSFORM: Empowering Women Through Technology-Driven Cancer Screening",
  },
  {
    id: "0uksfwCI2SA",
    title: "UDAY & FIH: Empowering Communities Through Health Technology and Inclusive Care",
  },
  {
    id: "1EaC6jZqbJ0",
    title: "Announcement from Director IIT Kharagpur | 75th Foundation Day",
  },
  {
    id: "nkWWNtuel3w",
    title: "UDAY: AI-Powered E-Health Ecosystem Empowering Community Health Workers",
  },
  {
    id: "H-_aAtLKc5I",
    title: "DOT (Seoul, S. Korea) — World's First Digital-Haptic Technology Innovation Powered by AI",
  },
  {
    id: "CwIscoNS0f8",
    title: "Tumpa and Asit: A Transformative Journey Where Technology Unlocks Health and Dignity",
  },
];

// ── Tab type ─────────────────────────────────────────────────────────────────
type Tab = "photos" | "videos";

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<Tab>("photos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Photo lightbox navigation
  const openPhoto = (i: number) => setLightboxIndex(i);
  const closePhoto = () => setLightboxIndex(null);
  const prevPhoto = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  }, []);
  const nextPhoto = useCallback(() => {
    setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length));
  }, []);

  // Keyboard for photo lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePhoto();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [lightboxIndex, prevPhoto, nextPhoto]);

  // Keyboard for video modal
  useEffect(() => {
    if (!activeVideo) return;
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") setActiveVideo(null); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [activeVideo]);

  // Body scroll lock
  const isOverlayOpen = lightboxIndex !== null || activeVideo !== null;
  useEffect(() => {
    document.body.style.overflow = isOverlayOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOverlayOpen]);

  return (
    <>
      <section
        id="gallery"
        className="relative py-16 sm:py-24 bg-white"
        style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section header ───────────────────────────────────────────── */}
          <div className="mb-10 sm:mb-14 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold [font-family:var(--font-heading)] text-black leading-tight">
              Gallery
            </h2>
            <div className="mt-4 h-1 w-14 bg-primary rounded-full mx-auto" />
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-black/50 [font-family:var(--font-body)] max-w-xl mx-auto">
              A visual record of FIH&apos;s work in the field — stories told through
              photographs and videos.
            </p>
          </div>

          {/* ── Tab switcher ─────────────────────────────────────────────── */}
          <div className="flex justify-center mb-10 sm:mb-14">
            <div className="relative flex items-center gap-1 rounded-2xl bg-gray-100 p-1.5">
              {/* Sliding pill */}
              <span
                aria-hidden="true"
                className="absolute top-1.5 bottom-1.5 rounded-xl bg-white shadow-sm transition-all duration-300"
                style={{
                  left: activeTab === "photos" ? "6px" : "50%",
                  right: activeTab === "photos" ? "50%" : "6px",
                }}
              />
              <button
                type="button"
                onClick={() => setActiveTab("photos")}
                className={`relative z-10 flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold [font-family:var(--font-heading)] transition-colors duration-200 ${
                  activeTab === "photos" ? "text-black" : "text-black/40 hover:text-black/60"
                }`}
              >
                <Images className="h-4 w-4" />
                Photos
                <span className={`ml-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${activeTab === "photos" ? "bg-primary" : "bg-black/10"}`}>
                  {photos.length}
                </span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("videos")}
                className={`relative z-10 flex items-center gap-2 rounded-xl px-6 py-2.5 text-sm font-semibold [font-family:var(--font-heading)] transition-colors duration-200 ${
                  activeTab === "videos" ? "text-black" : "text-black/40 hover:text-black/60"
                }`}
              >
                <PlayCircle className="h-4 w-4" />
                Videos
                <span className={`ml-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${activeTab === "videos" ? "bg-primary" : "bg-black/10"}`}>
                  {videos.length}
                </span>
              </button>
            </div>
          </div>

          {/* ── Photos grid ──────────────────────────────────────────────── */}
          {activeTab === "photos" && (
            <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 lg:gap-4">
              {photos.map((src, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => openPhoto(i)}
                  aria-label={`View photo ${i + 1}`}
                  className="group relative mb-3 lg:mb-4 block w-full overflow-hidden rounded-xl cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Image
                    src={src}
                    alt={`FIH Gallery photo ${i + 1}`}
                    width={600}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                </button>
              ))}
            </div>
          )}

          {/* ── Videos grid ──────────────────────────────────────────────── */}
          {activeTab === "videos" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {videos.map((video) => (
                <button
                  key={video.id}
                  type="button"
                  onClick={() => setActiveVideo(video.id)}
                  aria-label={`Play: ${video.title}`}
                  className="group text-left flex flex-col overflow-hidden rounded-2xl border border-black/8 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-gray-100">
                    <Image
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors duration-300">
                      <div className="flex h-13 w-13 items-center justify-center rounded-full bg-white/90 shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ width: 52, height: 52 }}>
                        {/* Triangle play icon */}
                        <svg viewBox="0 0 24 24" className="h-6 w-6 ml-0.5" fill="black" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 5.14v14l11-7-11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {/* Title */}
                  <div className="flex flex-col flex-1 p-4">
                    <p className="text-sm font-semibold [font-family:var(--font-heading)] text-black leading-snug line-clamp-3">
                      {video.title}
                    </p>
                    <span className="mt-3 text-[11px] font-bold uppercase tracking-wider text-primary [font-family:var(--font-heading)]">
                      Foundation for Innovations in Health
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Photo Lightbox ───────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/92 backdrop-blur-sm"
          onClick={closePhoto}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 rounded-full bg-black/50 px-4 py-1.5 text-xs font-bold text-white/70 [font-family:var(--font-heading)]">
            {lightboxIndex + 1} / {photos.length}
          </div>

          {/* Close */}
          <button
            type="button"
            onClick={closePhoto}
            aria-label="Close"
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            aria-label="Previous"
            className="absolute left-3 sm:left-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image */}
          <div
            className="flex items-center justify-center max-h-[90vh] max-w-5xl w-full px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightboxIndex]}
              alt={`FIH Gallery photo ${lightboxIndex + 1}`}
              width={1400}
              height={1000}
              className="max-h-[90vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
              priority
            />
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            aria-label="Next"
            className="absolute right-3 sm:right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}

      {/* ── Video Modal ──────────────────────────────────────────────────── */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setActiveVideo(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          {/* Close */}
          <button
            type="button"
            onClick={() => setActiveVideo(null)}
            aria-label="Close video"
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          {/* iframe wrapper */}
          <div
            className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=1&rel=0`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
