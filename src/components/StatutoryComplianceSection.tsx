import { aboutContent } from "@/lib/content/about";

export default function StatutoryComplianceSection() {
  const { statutoryCompliance } = aboutContent;

  return (
    <section className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {statutoryCompliance.title}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg leading-relaxed">
            FIH is committed to full transparency and strict adherence to all legal and statutory requirements. Our comprehensive registrations ensure maximum accountability to our stakeholders, partners, and the communities we serve.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-flow-dense gap-4 md:gap-6">
          {statutoryCompliance.details.map((item, index) => {
            // Make the cards with long values span 2 columns
            const isLongText = item.label === "Registered as" || item.label === "Registered Address";
            
            return (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center ${isLongText ? 'sm:col-span-2' : 'col-span-1'}`}
              >
                <div className="flex items-center mb-3 text-gray-500">
                  <svg className="w-5 h-5 text-primary mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-bold uppercase tracking-wider">{item.label}</span>
                </div>
                
                <div className="text-gray-900 font-semibold md:text-lg break-words">
                  {item.label === "Website" ? (
                    <a href={item.value} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
