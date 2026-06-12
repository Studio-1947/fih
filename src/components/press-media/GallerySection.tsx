"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Images, PlayCircle } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

// ── Photos ──────────────────────────────────────────────────────────────────
const photos = [
  "/press-media/gallery/photos/photo-gallery-01.jpg",
  "/press-media/gallery/photos/photo-gallery-02.jpeg",
  "/press-media/gallery/photos/photo-gallery-03.png",
  "/press-media/gallery/photos/photo-gallery-04.jpg",
  "/press-media/gallery/photos/photo-gallery-05.png",
  "/press-media/gallery/photos/photo-gallery-06.png",
  "/press-media/gallery/photos/photo-gallery-07.webp",
  "/press-media/gallery/photos/photo-gallery-08.webp",
  "/press-media/gallery/photos/photo-gallery-09.webp",
  "/press-media/gallery/photos/photo-gallery-10.webp",
  "/press-media/gallery/photos/photo-gallery-11.jpg",
  "/press-media/gallery/photos/photo-gallery-12.png",
  "/press-media/gallery/photos/photo-gallery-13.jpg",
  "/press-media/gallery/photos/photo-gallery-14.jpg",
  "/press-media/gallery/photos/photo-gallery-15.jpg",
  "/press-media/gallery/photos/photo-gallery-16.jpg",
  "/press-media/gallery/photos/photo-gallery-17.jpg",
  "/press-media/gallery/photos/photo-gallery-18.jpg",
  "/press-media/gallery/photos/photo-gallery-19.jpg",
  "/press-media/gallery/photos/photo-gallery-20.jpg",
  "/press-media/gallery/photos/photo-gallery-21.jpg",
  "/press-media/gallery/photos/photo-gallery-22.jpg",
  "/press-media/gallery/photos/photo-gallery-23.jpeg",
  "/press-media/gallery/photos/photo-gallery-24.jpeg",
  "/press-media/gallery/photos/photo-gallery-25.png",
  "/press-media/gallery/photos/photo-gallery-26.jpg",
  "/press-media/gallery/photos/photo-gallery-27.jpg",
  "/press-media/gallery/photos/photo-gallery-28.jpg",
  "/press-media/gallery/photos/photo-gallery-29.jpg",
  "/press-media/gallery/photos/photo-gallery-30.jpg",
  "/press-media/gallery/photos/photo-gallery-31.jpg",
  "/press-media/gallery/photos/photo-gallery-32.jpg",
  "/press-media/gallery/photos/DSC_0201.jpg",
  "/press-media/gallery/photos/DSC_0736.jpg",
  "/press-media/gallery/photos/DSC_0745.jpg",
  "/press-media/gallery/photos/IMG-20250224-WA0011.jpg",
  "/press-media/gallery/photos/IMG-20250402-WA0002.jpg",
  "/press-media/gallery/photos/WhatsApp%20Image%202025-06-04%20at%2018.53.47_dc85eaaf.jpg",
  "/press-media/gallery/photos/WhatsApp%20Image%202025-06-04%20at%2022.05.20_2bfc0ee9.jpg",
  "/press-media/gallery/photos/1000146543.jpg",
  "/press-media/gallery/photos/1000147425.jpg",
  "/press-media/gallery/photos/20220323_113617.jpg",
  "/press-media/gallery/photos/20220506_113853.jpg",
  "/press-media/gallery/photos/20220517_122355.jpg",
  "/press-media/gallery/photos/20250703_134828.jpg",
  "/press-media/gallery/photos/6.jpg",
  "/press-media/gallery/photos/Akansha%20Shinde%20(1).jpeg",
  "/press-media/gallery/photos/BL%20-%20FIH%20-%20Photo%204%20-%2009.07.2025.jpg",
  "/press-media/gallery/photos/CBG%20test%2C%20Sun-CLA%20(1).jpg",
  "/press-media/gallery/photos/CloudNIne.jpg",
  "/press-media/gallery/photos/CSR%20Bottom%20Photo%2012.jpeg",
  "/press-media/gallery/photos/CSR%20Bottom%20Photo%205.jpg",
  "/press-media/gallery/photos/CSR%20Bottom%20Photo%206%20(1).jpg",
  "/press-media/gallery/photos/CSR%20Program.jpg",
  "/press-media/gallery/photos/DSC_0131.JPG",
  "/press-media/gallery/photos/DSC_0164.JPG",
  "/press-media/gallery/photos/DSC_0688.JPG",
  "/press-media/gallery/photos/Education.jpg",
  "/press-media/gallery/photos/Engagement%20letter%20distribution.jpeg",
  "/press-media/gallery/photos/f2071800-3755-43a7-8773-b8fffaf8deca.jpg",
  "/press-media/gallery/photos/FGD.JPG",
  "/press-media/gallery/photos/Gayatri%20Korgaonkar.png",
  "/press-media/gallery/photos/Gujarat%201.jpg",
  "/press-media/gallery/photos/Hands%20on%20exposure.jpg",
  "/press-media/gallery/photos/Household%20screening.JPG",
  "/press-media/gallery/photos/Image%209%202024-04-17%20at%2011.19.24%E2%80%AFAM%20(1).png",
  "/press-media/gallery/photos/IMG-20220608-WA0005.jpg",
  "/press-media/gallery/photos/IMG-20230701-WA0001.jpg",
  "/press-media/gallery/photos/IMG-20240919-WA0065%20(5).jpg",
  "/press-media/gallery/photos/IMG-20250205-WA0033.jpg",
  "/press-media/gallery/photos/IMG-20250323-WA0005.jpg",
  "/press-media/gallery/photos/IMG-20250604-WA0006.jpg",
  "/press-media/gallery/photos/IMG-20250620-WA0011.jpg",
  "/press-media/gallery/photos/IMG-20250902-WA0009.jpg",
  "/press-media/gallery/photos/IMG-20260103-WA0018.jpg",
  "/press-media/gallery/photos/IMG20220519145411%20(3).jpg",
  "/press-media/gallery/photos/IMG20220525114436%20(1).jpg",
  "/press-media/gallery/photos/IMG20221118141136.jpg",
  "/press-media/gallery/photos/IMG20231130142433.jpg",
  "/press-media/gallery/photos/IMG_20210907_135134%20(1).jpg",
  "/press-media/gallery/photos/IMG_20210907_135134.jpg",
  "/press-media/gallery/photos/IMG_20210909_100141.jpg",
  "/press-media/gallery/photos/IMG_20211218_114331%20(2).jpg",
  "/press-media/gallery/photos/IMG_20250806_123053540%20(1).jpg",
  "/press-media/gallery/photos/IMG_20250811_152149795.jpg",
  "/press-media/gallery/photos/IMG_20250811_164350995.jpg",
  "/press-media/gallery/photos/IMG_20250811_165010525.jpg",
  "/press-media/gallery/photos/IMG_20250830_171053016.jpg",
  "/press-media/gallery/photos/IMG_20250830_171118352_HDR%20(1).jpg",
  "/press-media/gallery/photos/IMG_20250830_171118352_HDR.jpg",
  "/press-media/gallery/photos/IMG_20250830_171625766.jpg",
  "/press-media/gallery/photos/IMG_20250830_172130697_HDR_PORTRAIT.jpg",
  "/press-media/gallery/photos/IMG_20250924_114007930.jpg",
  "/press-media/gallery/photos/IMG_20250924_135358984_HDR.jpg",
  "/press-media/gallery/photos/IMG_20250924_155640551_HDR_PORTRAIT.jpg",
  "/press-media/gallery/photos/IMG_20251114_111721403.jpg",
  "/press-media/gallery/photos/IMG_20251114_113350855_HDR.jpg",
  "/press-media/gallery/photos/Karkinos%20-%201.jpg",
  "/press-media/gallery/photos/Max%20Hospital.jpg",
  "/press-media/gallery/photos/Ongoing%20CPR%20Training.jpg",
  "/press-media/gallery/photos/Photo%20from%20Suraj%20Mondal.jpg",
  "/press-media/gallery/photos/Photo%20Gallery%209%20(1).jpg",
  "/press-media/gallery/photos/PXL_20230720_154028852.jpg",
  "/press-media/gallery/photos/Sanika%20Khatu%20(1).png",
  "/press-media/gallery/photos/SEHAAT%20-%20BL%202.jpg",
  "/press-media/gallery/photos/WhatsApp%20Image%202022-09-28%20at%206.44.17%20PM.jpeg",
  "/press-media/gallery/photos/WhatsApp%20Image%202022-09-28%20at%206.44.19%20PM%20(1).jpeg",
  "/press-media/gallery/photos/WhatsApp%20Image%202025-07-17%20at%2010.51.04%20AM.jpeg",
  "/press-media/gallery/photos/WhatsApp%20Image%202025-07-17%20at%2010.52.41%20AM.jpeg",
  "/press-media/gallery/photos/WhatsApp%20Image%202025-07-17%20at%2011.36.49%20AM.jpeg",
  "/press-media/gallery/photos/WhatsApp%20Image%202025-09-02%20at%2019.45.16%20(1).jpeg",
  "/press-media/gallery/photos/WhatsApp%20Image%202025-09-02%20at%2019.45.23.jpeg",
  "/press-media/gallery/photos/_MG_5432.JPG",
  "/press-media/gallery/photos/_MG_5510%20(1).JPG",
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
  const [currentPage, setCurrentPage] = useState(1);

  const PAGE_SIZE = 12;
  const totalPages = Math.ceil(photos.length / PAGE_SIZE);
  const paginatedPhotos = photos.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

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
        className="relative pt-8 sm:pt-12 pb-20 sm:pb-32 bg-white"
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
                <span className={`ml-1 rounded-full px-2 py-0.5 text-[10px] font-bold ${activeTab === "photos" ? "bg-primary-dark text-white" : "bg-black/10"}`}>
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
            <>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {paginatedPhotos.map((src, i) => {
                  const globalIndex = (currentPage - 1) * PAGE_SIZE + i;
                  return (
                    <FadeIn key={globalIndex} delay={i * 0.05}>
                      <button
                        type="button"
                        onClick={() => openPhoto(globalIndex)}
                        aria-label={`View photo ${globalIndex + 1}`}
                        className="group relative block w-full overflow-hidden rounded-[1.5rem] cursor-zoom-in shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-gray-50 border border-black/5"
                      >
                        <div className="relative aspect-[4/5] sm:aspect-square md:aspect-[4/3]">
                          <Image
                            src={src}
                            alt={`FIH Gallery photo ${globalIndex + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                          {/* Soft gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Hover indicator icon */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                            <div className="bg-white/95 backdrop-blur-md text-black rounded-full p-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </button>
                    </FadeIn>
                  );
                })}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/5 bg-white text-black shadow-sm transition-all hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Previous page"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  
                  <div className="flex items-center gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`h-10 min-w-[2.5rem] rounded-xl text-sm font-bold transition-all ${
                          currentPage === i + 1
                            ? "bg-black text-white shadow-md scale-105"
                            : "bg-gray-100 text-black/40 hover:bg-gray-200 hover:text-black"
                        } [font-family:var(--font-heading)]`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-black/5 bg-white text-black shadow-sm transition-all hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed"
                    aria-label="Next page"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              )}
            </>
          )}

          {/* ── Videos grid ──────────────────────────────────────────────── */}
          {activeTab === "videos" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
              {videos.map((video, i) => (
                <FadeIn key={video.id} delay={i * 0.1}>
                  <button
                    type="button"
                    onClick={() => setActiveVideo(video.id)}
                    aria-label={`Play: ${video.title}`}
                    className="group text-left flex flex-col overflow-hidden rounded-[1.5rem] border border-black/5 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary h-full"
                  >
                    {/* Thumbnail */}
                    <div className="relative aspect-video overflow-hidden bg-gray-50">
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
                </FadeIn>
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
