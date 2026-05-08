import { aboutContent } from "@/lib/content/about";

export default function StatutoryComplianceSection() {
  const { statutoryCompliance } = aboutContent;

  // Split details into two halves for the 2-column layout
  const midPoint = Math.ceil(statutoryCompliance.details.length / 2);
  const leftColumn = statutoryCompliance.details.slice(0, midPoint);
  const rightColumn = statutoryCompliance.details.slice(midPoint);

  return (
    <section className="py-20 bg-[#FAFAFA] border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 [font-family:var(--font-heading)]">
            {statutoryCompliance.title}
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8"></div>
          <p className="text-black/70 text-lg leading-relaxed [font-family:var(--font-body)]">
            FIH is committed to full transparency and strict adherence to all legal and statutory requirements. Our comprehensive registrations ensure maximum accountability to our stakeholders, partners, and the communities we serve.
          </p>
        </div>

        {/* Structured Table Layout */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-black/5 overflow-hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-black/5">
            {/* Left Column */}
            <div className="flex flex-col divide-y divide-black/5">
              {leftColumn.map((item, index) => (
                <div key={index} className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 hover:bg-[#F5F5F7] transition-colors duration-300">
                  <span className="text-[13px] sm:text-sm font-bold text-black/50 uppercase tracking-wider sm:w-2/5 shrink-0 pt-0.5">
                    {item.label}
                  </span>
                  <span className="text-[15px] sm:text-base text-black/90 font-medium sm:w-3/5 break-words [font-family:var(--font-body)]">
                    {item.label === "Website" ? (
                      <a href={item.value} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col divide-y divide-black/5">
              {rightColumn.map((item, index) => (
                <div key={index} className="p-6 sm:p-8 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 hover:bg-[#F5F5F7] transition-colors duration-300">
                  <span className="text-[13px] sm:text-sm font-bold text-black/50 uppercase tracking-wider sm:w-2/5 shrink-0 pt-0.5">
                    {item.label}
                  </span>
                  <span className="text-[15px] sm:text-base text-black/90 font-medium sm:w-3/5 break-words [font-family:var(--font-body)]">
                    {item.label === "Website" ? (
                      <a href={item.value} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline transition-all">
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
