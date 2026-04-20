"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/our-work", label: "Our Work" },
  { href: "/impact-news", label: "Impact & News" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-20 px-4 pt-6 text-black sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl rounded-[2rem] bg-surface px-4 py-4 shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
        <div className="flex items-center justify-between gap-3">
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
            className="inline-flex items-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold [font-family:var(--font-heading)] min-[1120px]:hidden"
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
            className="mt-4 min-[1120px]:hidden"
          >
            <ul className="grid gap-2 rounded-2xl bg-primary p-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg bg-secondary px-3 py-2 text-sm font-medium [font-family:var(--font-heading)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/donate"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-secondary px-3 py-2 text-sm font-semibold [font-family:var(--font-heading)]"
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
