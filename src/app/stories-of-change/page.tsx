import { Metadata } from "next";
import Image from "next/image";
import { storiesOfChangeContent } from "@/lib/content/storiesOfChange";
import { storiesAndMilestonesContent } from "@/lib/content/storiesAndMilestones";
import TestimonialSection from "@/components/TestimonialSection";

export const metadata: Metadata = {
  title: "Stories of Change | Foundation for Innovations in Health",
  description: "Discover how FIH is transforming lives through innovative healthcare solutions like the Floating Digital Clinic in the Sundarbans.",
  openGraph: {
    title: "Stories of Change | FIH",
    description: "Transforming lives through innovative healthcare solutions in the Sundarbans.",
    images: ["/stories_of_change/floating digital clinic.jpg"],
  }
};

export default function StoriesOfChangePage() {
  const { hero, sections } = storiesOfChangeContent;
  const { milestones } = storiesAndMilestonesContent;

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="absolute top-0 left-0 right-0 h-[85vh] lg:h-[95vh] flex flex-col justify-end overflow-hidden bg-black">
        <div className="absolute inset-0">
          <Image
            src={hero.bgImagePath}
            alt={hero.title}
            fill
            className="object-cover object-bottom"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none" />
        </div>
        
        {/* Text Container aligned over the image */}
        <div className="relative z-20 w-full pb-10 sm:pb-16 lg:pb-20 pointer-events-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pointer-events-auto">
            <div className="animate-fade-in-up max-w-3xl">
              <span className="inline-block px-4 py-1.5 bg-primary-dark text-white font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] rounded-full mb-4 sm:mb-6 shadow-lg">
                {hero.bannerHook}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 leading-[1.15] text-white [text-shadow:0_4px_12px_rgba(0,0,0,0.6)] drop-shadow-xl [font-family:var(--font-heading)]">
                {hero.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 leading-relaxed font-medium [text-shadow:0_2px_8px_rgba(0,0,0,0.6)] [font-family:var(--font-body)]">
                {hero.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer to push content below the absolute hero */}
      <div className="w-full h-[85vh] lg:h-[95vh] -mt-8" />

      {/* Narrative Sections */}
      <section className="py-32 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-40">
            {sections.map((section, index) => (
              <div 
                key={index} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
              >
                {/* Text Content */}
                <div className="flex-1 space-y-8 animate-fade-in">
                  <div className="flex items-center gap-6 mb-8">
                    <div className="h-1.5 w-16 bg-primary-dark rounded-full" />
                    <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight [font-family:var(--font-heading)]">
                      {section.heading}
                    </h3>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed font-light [font-family:var(--font-body)]">
                    {section.paragraphs.map((para, pIndex) => (
                      <p 
                        key={pIndex}
                        className={pIndex === 0 ? "first-letter:text-5xl first-letter:font-bold first-letter:text-primary-dark first-letter:mr-2 first-letter:float-left first-letter:leading-none" : ""}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
                
                {/* Image Content */}
                {section.imagePath && (
                  <div className="flex-1 w-full relative">
                    <div className="relative aspect-[4/3] rounded-[3.5rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] group border-[12px] border-white ring-1 ring-gray-100">
                      <Image
                        src={section.imagePath}
                        alt={section.heading}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>
                    {/* Decorative Element */}
                    <div className={`absolute -z-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl ${index % 2 === 0 ? '-top-10 -right-10' : '-bottom-10 -left-10'}`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-32 overflow-hidden relative" style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
        <div className="absolute top-0 right-0 text-[20rem] font-black text-black/5 leading-none translate-x-1/4 -translate-y-1/4 select-none">
          “
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <p className="text-3xl md:text-5xl font-black text-black leading-tight mb-12">
            "In the Sundarbans, where survival is a daily challenge, the Floating Digital Clinic is not just a service; it is a lifeline."
          </p>
          <div className="h-2 w-32 bg-black mx-auto rounded-full"></div>
        </div>
      </section>
      {/* Milestones Section */}
      {/* <section className="py-32 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4">Timeline of Impact</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900">Recent Milestones</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">{milestone.tag}</span>
                  <span className="text-2xl font-black text-gray-200 group-hover:text-primary/20 transition-colors">{milestone.year}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">{milestone.title}</h4>
                <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Quote Section */}
      {/* <section className="bg-primary py-32 overflow-hidden relative">
        <div className="absolute top-0 right-0 text-[20rem] font-black text-black/5 leading-none translate-x-1/4 -translate-y-1/4 select-none">
          “
        </div>
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <p className="text-3xl md:text-5xl font-black text-black leading-tight mb-12">
            "In the Sundarbans, where survival is a daily challenge, the Floating Digital Clinic is not just a service; it is a lifeline."
          </p>
          <div className="h-2 w-32 bg-black mx-auto rounded-full"></div>
        </div>
      </section> */}
    </main>
  );
}
