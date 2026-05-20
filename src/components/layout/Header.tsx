"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import NotificationBell from "@/components/layout/NotificationBell";

const navLinks = [
  { href: "/aboutFIH", label: "About Us" },
  { href: "/grants-mandates", label: "Grants & Mandates" },
  { href: "/stories-of-change", label: "Stories of Change" },
  { href: "/csr-projects", label: "CSR Projects" },
  { href: "/press-media", label: "News & Events" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isCSRPage = pathname === "/csr-projects";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-100 transition-all duration-300 px-4 text-black sm:px-6 lg:px-8 ${
        isScrolled ? "py-2" : "pt-4"
      } ${isCSRPage && !isScrolled ? "bg-transparent shadow-none" : ""}`}
    >
      <div
        className={`mx-auto w-full max-w-7xl rounded-[2rem] bg-surface px-4 py-4 shadow-[0_12px_32px_rgba(0,0,0,0.18)] transition-all duration-300 ${isScrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.1)]" : ""}`}
      >
        <div className="relative z-40 flex items-center justify-between gap-1.5 min-[360px]:gap-2 sm:gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-1.5 min-[360px]:gap-2 sm:gap-3">
            <Image
              src="/logos/logo_nav.png"
              alt="Foundation for Innovations in Health logo"
              width={52}
              height={52}
              className="h-9 w-9 rounded-full object-cover min-[360px]:h-10 min-[360px]:w-10 sm:h-14 sm:w-14"
              priority
            />
            <span className="text-[9px] min-[360px]:text-[10px] min-[400px]:text-[11px] font-semibold leading-[1.15] [font-family:var(--font-heading)] sm:text-sm lg:text-sm xl:text-base">
              Foundation for
              <br />
              Innovations in Health
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden flex-1 min-[1120px]:block"
          >
            <ul className="flex items-center justify-center gap-4 lg:gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex border-y-2 border-transparent py-2 text-[13px] xl:text-sm font-medium [font-family:var(--font-heading)] transition hover:border-b-primary whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <NotificationBell />

          <Link
            href="https://fihruralhealth.org/donate/"
            className="hidden shrink-0 items-center gap-2 rounded-2xl bg-primary px-4 py-2.5 text-[13px] xl:text-sm font-semibold [font-family:var(--font-heading)] min-[1120px]:inline-flex transition hover:scale-105"
          >
            Donate Now
            <Heart
              aria-hidden="true"
              className="h-4 w-4 fill-black text-black"
              strokeWidth={2.2}
            />
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-black [font-family:var(--font-heading)] min-[1120px]:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-panel"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {/* Mobile nav panel — fixed to viewport, contains its own header row so sticky issues don't matter */}
      {isMenuOpen ? (
        <nav
          id="mobile-nav-panel"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-200 h-dvh w-screen overflow-y-auto bg-white touch-none min-[1120px]:hidden"
        >
          {/* Header row inside the panel */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-black/5">
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex min-w-0 items-center gap-1.5 min-[360px]:gap-2"
            >
              <Image
                src="/logos/logo_nav.png"
                alt="Foundation for Innovations in Health logo"
                width={52}
                height={52}
                className="h-9 w-9 rounded-full object-cover min-[360px]:h-10 min-[360px]:w-10"
                priority
              />
              <span className="text-[9px] min-[360px]:text-[10px] min-[400px]:text-[11px] font-semibold leading-[1.15] [font-family:var(--font-heading)]">
                Foundation for
                <br />
                Innovations in Health
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-black [font-family:var(--font-heading)]"
              aria-label="Close navigation menu"
            >
              Close
            </button>
          </div>

          {/* Nav links */}
          <ul className="mx-auto grid w-full max-w-sm gap-3 px-4 pt-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex w-full items-center justify-center rounded-lg border border-black/20 bg-white px-3 py-3 text-center text-sm font-medium [font-family:var(--font-heading)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://fihruralhealth.org/donate/"
                onClick={() => setIsMenuOpen(false)}
                className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-black/20 bg-white px-3 py-3 text-sm font-semibold [font-family:var(--font-heading)]"
              >
                Donate Now
                <Heart
                  aria-hidden="true"
                  className="h-4 w-4 fill-black text-black"
                  strokeWidth={2.2}
                />
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
