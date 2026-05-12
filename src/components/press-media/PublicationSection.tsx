"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Newspaper, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const publications = [
  {
    src: "/press-media/Publication/Picsart_22-07-20_17-11-51-662.jpg",
    alt: "ET Healthworld – Floating Hospital takes digital healthcare to Sunderbans",
    caption: "ET Healthworld",
  },
  {
    src: "/press-media/Publication/IMG-20240906-WA0001.jpg",
    alt: "Hindi newspaper – Community health programme launch",
    caption: "Print Media",
  },
  {
    src: "/press-media/Publication/Awards%20and%20recognition_page-0002.jpg",
    alt: "Press clipping – Awards & Recognition coverage",
    caption: "Press Coverage",
  },
  {
    src: "/press-media/Publication/Awards%20and%20recognition_page-0003.jpg",
    alt: "Press clipping – Awards & Recognition coverage",
    caption: "Press Coverage",
  },
  {
    src: "/press-media/Publication/Awards%20and%20recognition_page-0004.jpg",
    alt: "Press clipping – Awards & Recognition coverage",
    caption: "Press Coverage",
  },
  {
    src: "/press-media/Publication/Awardsandrecognition.jpg",
    alt: "Anandabazar Patrika – Awards & Recognition article",
    caption: "Anandabazar Patrika",
  },
  {
    src: "/press-media/Publication/DW%20DOT%20NEWS.jpeg",
    alt: "DW News – In Indian Sundarbans, tech enables health care for all",
    caption: "DW News",
  },
  {
    src: "/press-media/Publication/IIT%20Kharagpur%20Healthcare%20Training%202025%20_%20IIT%20Kharagpur%20will%20launch%20center%20for%20training%20rural%20youths%20in%20healthcare%20dgtl%20-%20Anandabazar.jpg",
    alt: "Anandabazar Patrika – IIT Kharagpur healthcare training 2025",
    caption: "Anandabazar Patrika",
  },
  {
    src: "/press-media/Publication/1731041308866.jpg",
    alt: "Press publication",
    caption: "Press Coverage",
  },
  {
    src: "/press-media/Publication/3tmodel.jpg",
    alt: "3T Model publication",
    caption: "Publication",
  },
  {
    src: "/press-media/Publication/Picsart_22-07-20_17-15-10-540.jpg",
    alt: "Press publication",
    caption: "Press Coverage",
  },
];

const ZOOM_STEP = 0.5;
const ZOOM_MIN = 1;
const ZOOM_MAX = 4;

export default function PublicationSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0, panX: 0, panY: 0 });
  const imageWrapRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };
  const closeLightbox = () => {
    setLightboxIndex(null);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const changeZoom = useCallback((delta: number) => {
    setZoom((z) => {
      const next = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, z + delta));
      if (next === ZOOM_MIN) setPan({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const resetZoom = () => { setZoom(1); setPan({ x: 0, y: 0 }); };

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + publications.length) % publications.length);
    setZoom(1); setPan({ x: 0, y: 0 });
  }, [lightboxIndex]);

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % publications.length);
    setZoom(1); setPan({ x: 0, y: 0 });
  }, [lightboxIndex]);

  // Keyboard
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "+" || e.key === "=") changeZoom(ZOOM_STEP);
      if (e.key === "-") changeZoom(-ZOOM_STEP);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, goPrev, goNext, changeZoom]);

  // Scroll to zoom
  useEffect(() => {
    if (lightboxIndex === null) return;
    const el = imageWrapRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      changeZoom(e.deltaY < 0 ? ZOOM_STEP : -ZOOM_STEP);
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, [lightboxIndex, changeZoom]);

  // Drag to pan
  const onMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    isDragging.current = true;
    dragStart.current = { x: e.clientX, y: e.clientY, panX: pan.x, panY: pan.y };
    e.preventDefault();
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    setPan({
      x: dragStart.current.panX + (e.clientX - dragStart.current.x),
      y: dragStart.current.panY + (e.clientY - dragStart.current.y),
    });
  };
  const onMouseUp = () => { isDragging.current = false; };

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  return (
    <>
      {/* Full-bleed section: escape max-w-7xl parent using viewport centering */}
      <section
        id="publications"
        className="relative py-20 sm:py-32 bg-secondary"
        style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="mb-12 sm:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                  <Newspaper className="h-3.5 w-3.5 text-black" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-black/50 [font-family:var(--font-heading)]">
                  In the News
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold [font-family:var(--font-heading)] text-black leading-tight">
                Publications
              </h2>
              <div className="mt-3 h-1 w-14 bg-primary rounded-full" />
            </div>
            <p className="text-sm sm:text-[15px] leading-relaxed text-black/55 [font-family:var(--font-body)] sm:max-w-xs sm:text-right">
              FIH&apos;s work as featured in print media, digital outlets, and
              leading publications. Click any clipping to zoom and read.
            </p>
          </div>

          {/* Grid — 4 columns on lg, fills evenly with no orphan gap */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
            {publications.map((pub, index) => {
              return (
                <FadeIn key={index} delay={index * 0.1}>
                  <button
                    type="button"
                    onClick={() => openLightbox(index)}
                    aria-label={`View: ${pub.alt}`}
                    className="group relative block w-full overflow-hidden rounded-xl border border-black/10 bg-white cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary aspect-[3/4]"
                  >
                    <Image
                      src={pub.src}
                      alt={pub.alt}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex flex-col items-start justify-end p-3">
                      <div className="translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="inline-block rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider [font-family:var(--font-heading)]">
                          {pub.caption}
                        </span>
                        <p className="mt-1 flex items-center gap-1 text-[10px] text-white/80 [font-family:var(--font-body)]">
                          <ZoomIn className="h-3 w-3" /> Click to zoom &amp; read
                        </p>
                      </div>
                    </div>
                  </button>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Publication viewer"
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-3 bg-black/60 backdrop-blur-sm">
            <span className="text-xs text-white/50 [font-family:var(--font-heading)] uppercase tracking-wider">
              {lightboxIndex + 1} / {publications.length}
            </span>

            {/* Zoom controls */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); changeZoom(-ZOOM_STEP); }}
                disabled={zoom <= ZOOM_MIN}
                aria-label="Zoom out"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 transition-colors"
              >
                <ZoomOut className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); resetZoom(); }}
                aria-label="Reset zoom"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <Maximize2 className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); changeZoom(ZOOM_STEP); }}
                disabled={zoom >= ZOOM_MAX}
                aria-label="Zoom in"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 disabled:opacity-30 transition-colors"
              >
                <ZoomIn className="h-4 w-4" />
              </button>
              <span className="ml-1 min-w-[3ch] text-center text-xs font-bold text-white/60 [font-family:var(--font-heading)]">
                {Math.round(zoom * 100)}%
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Close"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous"
            className="absolute left-3 sm:left-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image area — scroll-to-zoom + drag-to-pan */}
          <div
            ref={imageWrapRef}
            className="absolute inset-0 top-14 bottom-12 flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            style={{ cursor: zoom > 1 ? "grab" : "zoom-in" }}
          >
            <div
              style={{
                transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                transition: isDragging.current ? "none" : "transform 0.15s ease",
                transformOrigin: "center center",
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            >
              <Image
                src={publications[lightboxIndex].src}
                alt={publications[lightboxIndex].alt}
                width={1200}
                height={1600}
                className="max-h-[calc(100vh-7rem)] w-auto max-w-[90vw] rounded-lg object-contain shadow-2xl select-none"
                priority
                draggable={false}
              />
            </div>
          </div>

          {/* Bottom caption */}
          <div className="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-2.5 bg-black/60 backdrop-blur-sm">
            <span className="text-xs sm:text-sm text-white/70 [font-family:var(--font-body)] truncate">
              {publications[lightboxIndex].alt}
            </span>
            <span className="ml-4 shrink-0 text-[10px] text-white/35 [font-family:var(--font-heading)]">
              Scroll or use +/− to zoom · Drag to pan
            </span>
          </div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next"
            className="absolute right-3 sm:right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
