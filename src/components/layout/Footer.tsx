import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/aboutFIH" },
  { label: "Grants & Mandates", href: "/grants-mandates" },
  { label: "Stories of Change", href: "/stories-of-change" },
  { label: "CSR Projects", href: "/csr-projects" },
  { label: "Press & Media", href: "/press-media" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0e0f11] text-white z-50">
      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.45fr_0.85fr]">
          <div className="max-w-md space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logos/logo_nav.png"
                alt="Foundation for Innovations in Health logo"
                width={52}
                height={52}
                className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14 bg-white"
              />
              <span className="text-sm font-semibold leading-tight text-white [font-family:var(--font-heading)] lg:text-base">
                Foundation for
                <br />
                Innovations in Health
              </span>
            </Link>

            <p className="text-[26px] leading-snug text-white/65 [font-family:var(--font-body)] sm:text-lg">
              Foundation for Innovations in Health - mitigating multi-dimensional poverty through
              data-driven healthcare and employment-oriented education since 2013.
            </p>

            <div className="flex items-center gap-3">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/75 transition hover:bg-white/20 hover:text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/75 transition hover:bg-white/20 hover:text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/75 transition hover:bg-white/20 hover:text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid gap-8 text-sm sm:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-base font-semibold text-white [font-family:var(--font-heading)]">
                Quick Links
              </h3>
              <ul className="space-y-2.5 text-white/62 [font-family:var(--font-body)]">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-base font-semibold text-white [font-family:var(--font-heading)]">
                Legal
              </h3>
              <ul className="space-y-2.5 text-white/62 [font-family:var(--font-body)]">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-5 text-xs text-white/45 [font-family:var(--font-body)] sm:flex-row sm:items-center sm:justify-between">
          <p>{year} Foundation for Innovations in Health. All Rights Reserved.</p>
          <p>Designed by Studio 1947</p>
        </div>
      </div>
    </footer>
  );
}
