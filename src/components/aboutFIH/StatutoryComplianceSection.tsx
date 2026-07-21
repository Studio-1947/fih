import { BadgeCheck, Building2, ShieldCheck } from "lucide-react";
import { aboutContent } from "@/lib/content/about";

export default function StatutoryComplianceSection() {
  const { statutoryCompliance } = aboutContent;

  const groupIcons = [Building2, ShieldCheck];

  return (
    <section
      className="pt-20 pb-10 bg-[#FAFAFA] border-t border-black/5"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 [font-family:var(--font-heading)]">
            {statutoryCompliance.title}
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-black/70 text-lg leading-relaxed [font-family:var(--font-body)]">
            FIH is committed to full transparency and strict adherence to all
            legal and statutory requirements. Our comprehensive registrations
            ensure maximum accountability to our stakeholders, partners, and the
            communities we serve.
          </p>
        </div>

        {/* Grouped compliance cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {statutoryCompliance.groups.map((group, groupIndex) => {
            const Icon = groupIcons[groupIndex] ?? BadgeCheck;

            return (
              <div
                key={group.title}
                className="flex flex-col bg-white rounded-4xl shadow-sm border border-black/5 overflow-hidden"
              >
                {/* Group header */}
                <div className="flex items-center gap-3 px-6 sm:px-8 py-5 border-b border-black/5 bg-[#FCFCFD]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-black/70 [font-family:var(--font-heading)]">
                    {group.title}
                  </h3>
                </div>

                {/* Rows */}
                <dl className="flex flex-col divide-y divide-black/5">
                  {group.items.map((item) => (
                    <div
                      key={item.label}
                      className="px-6 sm:px-8 py-5 flex flex-col sm:flex-row sm:items-baseline gap-1.5 sm:gap-6 hover:bg-[#F5F5F7] transition-colors duration-300"
                    >
                      <dt className="text-[13px] font-bold text-black/50 uppercase tracking-wider sm:w-2/5 shrink-0">
                        {item.label}
                      </dt>
                      <dd className="sm:w-3/5 wrap-break-word">
                        {item.code ? (
                          <span className="inline-block rounded-md bg-[#F5F5F7] px-2.5 py-1 font-mono text-[13px] sm:text-sm font-semibold tracking-tight text-black/90">
                            {item.value}
                          </span>
                        ) : (
                          <span className="text-[15px] sm:text-base text-black/90 font-medium [font-family:var(--font-body)]">
                            {item.value}
                          </span>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
