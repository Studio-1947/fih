import Link from "next/link";
import { ArrowRight, MapPin, Phone, Mail, Heart } from "lucide-react";
import type { PartnerWithUsContent } from "@/lib/content";

type PartnerWithUsSectionProps = {
  content: PartnerWithUsContent;
};

export default function PartnerWithUsSection({
  content,
}: PartnerWithUsSectionProps) {
  return (
    <section className="w-full bg-white py-10 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-8 space-y-4 lg:mb-10">
          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              <span className="h-[3px] w-4 sm:w-6 bg-primary" />
              <span className="h-[3px] w-6 sm:w-8 bg-black" />
            </div>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] text-black/80 [font-family:var(--font-heading)]">
              {content.eyebrow}
            </p>
          </div>

          <div className="space-y-2.5">
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem] [font-family:var(--font-heading)]">
              <span className="text-[#202020]">{content.titleHighlight} </span>
              <span className="text-black/40">{content.titleSuffix}</span>
            </h2>
            <p className="max-w-2xl text-[13px] leading-[1.6] text-black/60 [font-family:var(--font-body)] sm:text-[15px]">
              {content.description}
            </p>
          </div>
        </div>

        {/* Two-Column Grid */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:gap-8">
          
          {/* Left Column: Two Cards */}
          <div className="flex flex-col gap-4 sm:gap-6">
            
            {/* Contact Details Card */}
            <div className="rounded-3xl bg-[#141416] p-6 lg:p-8 shadow-lg">
              <h3 className="mb-5 text-lg font-bold text-white [font-family:var(--font-heading)]">
                Contact Details
              </h3>
              
              <div className="space-y-4">
                {/* Item 1 */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#22271c]">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-bold tracking-wide text-primary [font-family:var(--font-heading)]">
                      Address
                    </span>
                    <span className="text-xs leading-relaxed text-white/80 [font-family:var(--font-body)]">
                      {content.address}
                    </span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#22271c]">
                    <Phone className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-bold tracking-wide text-primary [font-family:var(--font-heading)]">
                      Phone
                    </span>
                    <span className="text-xs leading-relaxed text-white/80 [font-family:var(--font-body)]">
                      {content.phone}
                    </span>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#22271c]">
                    <Mail className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[13px] font-bold tracking-wide uppercase text-primary [font-family:var(--font-heading)]">
                      Email
                    </span>
                    <span className="text-xs leading-relaxed text-white/80 [font-family:var(--font-body)]">
                      {content.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Our Mission Card */}
            <div className="relative overflow-hidden rounded-3xl bg-[#FACC15] p-6 lg:p-8 shadow-lg">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#EAB308]/60 blur-2xl" />
              
              <div className="relative z-10 flex flex-col items-start gap-4">
                <Heart className="h-7 w-7 fill-white text-white" />
                
                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-[#141416] [font-family:var(--font-heading)]">
                    Support Our Mission
                  </h3>
                  <p className="max-w-[260px] text-[13px] leading-relaxed text-[#141416]/80 [font-family:var(--font-body)]">
                    100% of donations reach our programs. ₹48 provides complete care for one patient.
                  </p>
                </div>

                <Link
                  href="#"
                  className="mt-2 inline-flex items-center gap-2 rounded-xl bg-[#141416] px-6 py-3 text-[13px] font-bold text-white transition-opacity hover:opacity-90 [font-family:var(--font-heading)]"
                >
                  Donate Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="rounded-3xl border border-black/5 bg-[#FAFAFA] p-6 sm:p-8 lg:p-10 shadow-sm">
            <h3 className="mb-6 text-xl font-bold text-[#202020] [font-family:var(--font-heading)]">
              Send Us a Message
            </h3>

            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#202020]/70 [font-family:var(--font-heading)]">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Priya Sharma"
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-xs placeholder-black/40 outline-none transition-colors focus:border-primary [font-family:var(--font-body)]"
                  />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#202020]/70 [font-family:var(--font-heading)]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-xs placeholder-black/40 outline-none transition-colors focus:border-primary [font-family:var(--font-body)]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#202020]/70 [font-family:var(--font-heading)]">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="e.g. CSR Partnership Inquiry"
                  className="w-full rounded-xl border border-black/10 bg-white px-4 py-3.5 text-xs placeholder-black/40 outline-none transition-colors focus:border-primary [font-family:var(--font-body)]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#202020]/70 [font-family:var(--font-heading)]">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your interest or how you'd like to support"
                  rows={3}
                  className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3.5 text-xs placeholder-black/40 outline-none transition-colors focus:border-primary [font-family:var(--font-body)]"
                />
              </div>

              <button
                type="button"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-[#141416] py-3.5 text-[13px] font-bold text-white transition-opacity hover:opacity-90 [font-family:var(--font-heading)]"
              >
                Send Message
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
