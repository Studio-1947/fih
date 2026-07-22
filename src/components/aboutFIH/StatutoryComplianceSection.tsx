import {
  BadgeCheck,
  CalendarDays,
  FileText,
  Fingerprint,
  MapPin,
  Phone,
} from "lucide-react";
import { aboutContent } from "@/lib/content/about";
import CopyButton from "@/components/aboutFIH/CopyButton";

export default function StatutoryComplianceSection() {
  const { statutoryCompliance } = aboutContent;

  return (
    <section
      className="pt-20 pb-16 bg-[#FAFAFA] border-t border-black/5"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 [font-family:var(--font-heading)]">
            {statutoryCompliance.title}
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-black/70 text-base sm:text-lg leading-relaxed [font-family:var(--font-body)]">
            FIH is committed to full transparency and strict adherence to all
            legal and statutory requirements. Our comprehensive registrations
            ensure maximum accountability to our stakeholders, partners, and the
            communities we serve.
          </p>
        </div>

        {/* Headline Credential Tiles (12A, 80G, CSR, FCRA, DARPAN) */}
        <div className="max-w-6xl mx-auto mb-8 sm:mb-10">
          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-black/50 mb-4 text-center sm:text-left">
            Key Statutory Registrations
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
            {statutoryCompliance.credentials.map((credential, idx) => (
              <li
                key={credential.code}
                className={`group relative flex flex-col items-center text-center rounded-2xl bg-white border border-black/8 shadow-sm p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-400/50 ${
                  idx === statutoryCompliance.credentials.length - 1
                    ? "col-span-2 sm:col-span-1 max-w-xs sm:max-w-none mx-auto w-full"
                    : ""
                }`}
              >
                <div className="absolute top-2.5 right-2.5">
                  <CopyButton
                    value={credential.value}
                    label={`${credential.code} registration number`}
                    className="opacity-70 group-hover:opacity-100 focus-visible:opacity-100"
                  />
                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-700 mb-3 transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-black">
                  <BadgeCheck className="h-5.5 w-5.5" aria-hidden="true" />
                </span>

                <span className="text-2xl sm:text-3xl font-black tracking-tight text-black [font-family:var(--font-heading)]">
                  {credential.code}
                </span>
                <span className="mt-1 text-[11px] font-bold uppercase tracking-wider text-black/50">
                  {credential.caption}
                </span>

                <span className="mt-3.5 w-full rounded-xl bg-gray-100/90 px-2.5 py-1.5 font-mono text-[11px] sm:text-xs font-semibold text-gray-800 break-all select-all text-center">
                  {credential.value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Organisation Details (Registered As, Registered Address, etc.) */}
        <div className="max-w-6xl mx-auto space-y-4 sm:space-y-5">
          <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-black/50 mb-2 text-center sm:text-left">
            Legal & Contact Reference
          </h3>

          {/* Top row: Registered as & Registered Address */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
            {/* Card 1: Registered as */}
            <div className="group rounded-2xl bg-white border border-black/8 shadow-sm p-5 sm:p-6 transition-all duration-300 hover:shadow-md hover:border-amber-400/40 flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-amber-700 transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-black">
                  <FileText className="h-5 w-5" aria-hidden="true" />
                </span>

                <div className="min-w-0 flex-1">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.15em] text-black/45 mb-1">
                    Registered As
                  </dt>
                  <dd className="space-y-2.5 mt-1">
                    <div className="text-base sm:text-lg font-bold text-gray-900 [font-family:var(--font-heading)]">
                      Society{" "}
                      <span className="text-xs sm:text-sm font-normal text-gray-600 block sm:inline">
                        (WB Societies Registration Act 1961)
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-0.5">
                      <div className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1 text-xs font-mono font-medium text-gray-800 border border-gray-200/60">
                        <span className="text-black/50 uppercase font-sans text-[10px] font-bold tracking-wider">
                          Reg No:
                        </span>
                        <span className="font-semibold select-all">S/2L/7000</span>
                        <CopyButton
                          value="S/2L/7000"
                          label="Registration Number S/2L/7000"
                          className="h-5 w-5 ml-0.5 !bg-transparent hover:!bg-black/10"
                        />
                      </div>

                      <div className="inline-flex items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1 text-xs font-mono font-medium text-gray-800 border border-gray-200/60">
                        <span className="text-black/50 uppercase font-sans text-[10px] font-bold tracking-wider">
                          Date:
                        </span>
                        <span className="font-semibold">02.07.2013</span>
                      </div>
                    </div>
                  </dd>
                </div>
              </div>
            </div>

            {/* Card 2: Registered Address */}
            <div className="group rounded-2xl bg-white border border-black/8 shadow-sm p-5 sm:p-6 transition-all duration-300 hover:shadow-md hover:border-amber-400/40 flex flex-col justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/15 text-amber-700 transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-black">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <dt className="text-[11px] font-bold uppercase tracking-[0.15em] text-black/45">
                      Registered Address
                    </dt>
                    <CopyButton
                      value="44A SP Mukherjee Road, Kolkata, West Bengal – 700026"
                      label="Registered Address"
                    />
                  </div>
                  <dd className="text-sm sm:text-base text-gray-900 font-medium leading-relaxed [font-family:var(--font-body)]">
                    44A SP Mukherjee Road, Kolkata, West Bengal – 700026
                  </dd>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row: 3 compact info cards (Year of Registration, PAN No., Phone No.) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {/* Card 3: Year of Registration */}
            <div className="group rounded-2xl bg-white border border-black/8 shadow-sm p-4 sm:p-5 transition-all duration-300 hover:shadow-md hover:border-amber-400/40 flex items-center gap-3.5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-black/50 transition-colors duration-300 group-hover:bg-amber-400/15 group-hover:text-amber-700">
                <CalendarDays className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <dt className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/45 mb-0.5">
                  Year Registered
                </dt>
                <dd className="text-base font-bold text-gray-900">2013</dd>
              </div>
            </div>

            {/* Card 4: PAN No. */}
            <div className="group rounded-2xl bg-white border border-black/8 shadow-sm p-4 sm:p-5 transition-all duration-300 hover:shadow-md hover:border-amber-400/40 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-black/50 transition-colors duration-300 group-hover:bg-amber-400/15 group-hover:text-amber-700">
                  <Fingerprint className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/45 mb-0.5">
                    PAN No.
                  </dt>
                  <dd className="text-base font-mono font-bold text-gray-900 select-all">
                    AAAAF2698E
                  </dd>
                </div>
              </div>
              <CopyButton value="AAAAF2698E" label="PAN Number" />
            </div>

            {/* Card 5: Phone No. */}
            <div className="group rounded-2xl bg-white border border-black/8 shadow-sm p-4 sm:p-5 transition-all duration-300 hover:shadow-md hover:border-amber-400/40 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5 min-w-0">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-black/50 transition-colors duration-300 group-hover:bg-amber-400/15 group-hover:text-amber-700">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <dt className="text-[10px] font-bold uppercase tracking-[0.15em] text-black/45 mb-0.5">
                    Phone No.
                  </dt>
                  <dd className="text-sm sm:text-base font-semibold text-gray-900 select-all">
                    +91 33 2455-3334
                  </dd>
                </div>
              </div>
              <CopyButton value="+91 33 2455-3334" label="Phone Number" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
