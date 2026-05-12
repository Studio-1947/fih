"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

const navLinks = [
  { href: "/aboutFIH", label: "About Us" },
  { href: "/grants-mandates", label: "Grants & Mandates" },
  { href: "/stories-of-change", label: "Stories of Change" },
  { href: "/csr-projects", label: "CSR Projects" },
  { href: "/press-media", label: "Press & Media" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isGrantsPage = pathname === "/grants-mandates";

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
      className={`sticky top-0 z-[100] transition-all duration-300 px-4 text-black sm:px-6 lg:px-8 ${
        isScrolled ? "py-2" : "pt-6"
      } ${isGrantsPage ? "bg-[#fafafa]" : ""}`}
    >
      <div className={`mx-auto w-full max-w-7xl rounded-[2rem] bg-surface px-4 py-4 shadow-[0_12px_32px_rgba(0,0,0,0.18)] transition-all duration-300 ${isScrolled ? "scale-[0.98] shadow-[0_4px_20px_rgba(0,0,0,0.1)]" : ""}`}>
        <div className="relative z-40 flex items-center justify-between gap-3">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/logos/logo_nav.png"
              alt="Foundation for Innovations in Health logo"
              width={52}
              height={52}
              className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
              priority
            />
            <span className="text-xs font-semibold leading-tight [font-family:var(--font-heading)] sm:text-sm lg:text-base">
              Foundation for
              <br />
              Innovations in Health
            </span>
          </Link>

          <nav
            aria-label="Primary navigation"
            className="hidden flex-1 min-[1120px]:block"
          >
            <ul className="flex items-center justify-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex border-b-2 border-transparent pb-2 text-sm font-medium [font-family:var(--font-heading)] transition hover:border-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/donate"
            className="hidden shrink-0 items-center gap-2 rounded-2xl bg-primary px-5 py-3 text-sm font-semibold [font-family:var(--font-heading)] min-[1120px]:inline-flex"
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

        {isMenuOpen ? (
          <nav
            id="mobile-nav-panel"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-30 h-[100dvh] w-screen overflow-hidden bg-white pt-28 touch-none min-[1120px]:hidden"
          >
            <ul className="mx-auto grid w-full max-w-sm gap-3 px-4">
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
                  href="/donate"
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
      </div>
    </header>
  );
}
