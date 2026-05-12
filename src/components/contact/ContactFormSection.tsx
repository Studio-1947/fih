import React from "react";
import { MapPin, Phone, Mail, ArrowRight, Heart } from "lucide-react";
import Link from "next/link";
import type { PartnerWithUsContent } from "@/lib/content";

interface ContactFormSectionProps {
  content: PartnerWithUsContent;
}

export default function ContactFormSection({ content }: ContactFormSectionProps) {
  return (
    <section className="bg-[#FAFAFA] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-black [font-family:var(--font-heading)]">
                Our Office
              </h2>
              <p className="text-black/60 [font-family:var(--font-body)]">
                Visit us at our headquarters in Kolkata or reach out through any of the channels below.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-1">
              {/* Address Card */}
              <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-black/40 [font-family:var(--font-heading)]">
                    Address
                  </h3>
                  <p className="text-base text-black/80 [font-family:var(--font-body)]">
                    {content.address}
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-black/40 [font-family:var(--font-heading)]">
                    Phone
                  </h3>
                  <p className="text-base text-black/80 [font-family:var(--font-body)]">
                    {content.phone}
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-black/40 [font-family:var(--font-heading)]">
                    Email
                  </h3>
                  <p className="text-base text-black/80 [font-family:var(--font-body)]">
                    {content.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Donation CTA */}
            <div className="relative mt-8 overflow-hidden rounded-3xl bg-[#141416] p-8 text-white shadow-xl">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/20 blur-2xl" />
              <div className="relative z-10 space-y-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-6 w-6 fill-primary text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold [font-family:var(--font-heading)]">
                    Support Our Vision
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60 [font-family:var(--font-body)]">
                    Your support helps us bring quality healthcare to those who need it most. 
                    Every contribution makes a difference.
                  </p>
                </div>
                <Link
                  href="/#donate"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-black transition-transform hover:scale-[1.02] [font-family:var(--font-heading)]"
                >
                  Make a Donation
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-xl lg:p-12">
            <div className="mb-10 space-y-2">
              <h2 className="text-3xl font-bold text-black [font-family:var(--font-heading)]">
                Send a Message
              </h2>
              <p className="text-black/60 [font-family:var(--font-body)]">
                Have a question or proposal? Fill out the form below and we&apos;ll get back to you shortly.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-black/40 [font-family:var(--font-heading)]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-black/10 bg-[#FAFAFA] px-5 py-4 text-sm outline-none transition-all focus:border-primary focus:bg-white [font-family:var(--font-body)]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-black/40 [font-family:var(--font-heading)]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="email@example.com"
                    className="w-full rounded-xl border border-black/10 bg-[#FAFAFA] px-5 py-4 text-sm outline-none transition-all focus:border-primary focus:bg-white [font-family:var(--font-body)]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-black/40 [font-family:var(--font-heading)]">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full rounded-xl border border-black/10 bg-[#FAFAFA] px-5 py-4 text-sm outline-none transition-all focus:border-primary focus:bg-white [font-family:var(--font-body)]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-widest text-black/40 [font-family:var(--font-heading)]">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-black/10 bg-[#FAFAFA] px-5 py-4 text-sm outline-none transition-all focus:border-primary focus:bg-white [font-family:var(--font-body)]"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-black py-4 text-base font-bold text-white transition-all hover:bg-primary hover:text-black [font-family:var(--font-heading)]"
              >
                Send Message
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black [font-family:var(--font-heading)]">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-black/60 [font-family:var(--font-body)]">
              Quick answers to common inquiries about our programs and partnerships.
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-bold text-black [font-family:var(--font-heading)]">
                How can I volunteer?
              </h3>
              <p className="text-sm leading-relaxed text-black/60 [font-family:var(--font-body)]">
                We welcome volunteers across various fields. Send us a message with your background and area of interest, and our team will get in touch.
              </p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-bold text-black [font-family:var(--font-heading)]">
                Are donations tax-exempt?
              </h3>
              <p className="text-sm leading-relaxed text-black/60 [font-family:var(--font-body)]">
                Yes, all donations to Foundation for Innovations in Health are eligible for tax deduction under Section 80G of the Income Tax Act.
              </p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-bold text-black [font-family:var(--font-heading)]">
                Do you offer CSR partnerships?
              </h3>
              <p className="text-sm leading-relaxed text-black/60 [font-family:var(--font-body)]">
                Absolutely. We work with several corporate partners on scalable healthcare and livelihood projects. Contact us for a detailed proposal.
              </p>
            </div>
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-bold text-black [font-family:var(--font-heading)]">
                How is my donation used?
              </h3>
              <p className="text-sm leading-relaxed text-black/60 [font-family:var(--font-body)]">
                100% of your donation goes directly to our rural health and education programs. We maintain full transparency in our financial reporting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
