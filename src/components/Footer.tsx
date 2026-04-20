import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, MessageCircle, Send } from "lucide-react";

const quickLinks = ["About Us", "Our Work", "Impact & News", "Partners", "Contact"];
const legalLinks = ["Terms & Conditions", "Privacy Policy", "Refund Policy"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#0e0f11] text-white z-50">
      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.45fr_0.85fr]">
          <div className="max-w-md space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/logo_nav.png"
                alt="Foundation for Innovations in Health"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full bg-white/95 object-cover p-1"
              />
              <div className="leading-tight">
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/55 [font-family:var(--font-body)]">
                  Foundation
                </p>
                <p className="text-base font-semibold [font-family:var(--font-heading)]">FIH</p>
              </div>
            </div>

            <p className="text-[26px] leading-snug text-white/65 [font-family:var(--font-body)] sm:text-lg">
              Foundation for Innovations in Health - mitigating multi-dimensional poverty through
              data-driven healthcare and employment-oriented education since 2013.
            </p>

            <div className="flex items-center gap-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/75 transition hover:bg-white/20 hover:text-white"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#"
                aria-label="X"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/75 transition hover:bg-white/20 hover:text-white"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/75 transition hover:bg-white/20 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/75 transition hover:bg-white/20 hover:text-white"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
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
                  <li key={link}>
                    <Link href="#" className="transition hover:text-white">
                      {link}
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
                  <li key={link}>
                    <Link href="#" className="transition hover:text-white">
                      {link}
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
