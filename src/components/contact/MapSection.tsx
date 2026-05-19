import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { PartnerWithUsContent } from "@/lib/content";

interface ContactInfoSectionProps {
  content: PartnerWithUsContent;
}

export default function MapSection({ content }: ContactInfoSectionProps) {
  return (
    <section className="bg-black/[0.02] py-16 lg:py-24 border-t border-black/5">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top: Heading & Intro */}
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tightest text-black [font-family:var(--font-heading)] sm:text-4xl lg:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed tracking-tight text-black/60 [font-family:var(--font-body)] sm:text-lg">
            We are always open to visitors who want to learn more about our
            initiatives. Feel free to drop by, give us a call, or reach out via
            email.
          </p>
        </div>

        {/* Bottom: 4 Cards in one row */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Address Card */}
          <div className="flex flex-col items-start gap-4 rounded-3xl bg-white p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold tracking-tightest text-black [font-family:var(--font-heading)]">
                Address
              </h3>
              <p className="text-sm leading-relaxed tracking-tight text-black/70 [font-family:var(--font-body)]">
                {content.address}
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="flex flex-col items-start gap-4 rounded-3xl bg-white p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold tracking-tightest text-black [font-family:var(--font-heading)]">
                Call Us
              </h3>
              <a
                href={`tel:${content.phone.replace(/[^0-9+]/g, "")}`}
                className="block text-sm leading-relaxed tracking-tight text-black/70 transition-colors hover:text-primary [font-family:var(--font-body)]"
              >
                {content.phone}
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex flex-col items-start gap-4 rounded-3xl bg-white p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold tracking-tightest text-black [font-family:var(--font-heading)]">
                Email Us
              </h3>
              <a
                href={`mailto:${content.email}`}
                className="block text-sm leading-relaxed tracking-tight text-black/70 transition-colors hover:text-primary [font-family:var(--font-body)]"
              >
                {content.email}
              </a>
            </div>
          </div>

          {/* Open Hours Card */}
          <div className="flex flex-col items-start gap-4 rounded-3xl bg-white p-6 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold tracking-tightest text-black [font-family:var(--font-heading)]">
                Open Hours
              </h3>
              <p className="text-sm leading-relaxed tracking-tight text-black/70 [font-family:var(--font-body)]">
                Monday - Saturday
                <br />
                10:00 AM - 06:30 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
