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
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/85 z-10" />
        <div className="absolute inset-0 scale-105 animate-subtle-zoom blur-[2px]">
          <Image
            src={hero.bgImagePath}
            alt={hero.title}
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>
        <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-primary text-black font-bold text-xs md:text-sm uppercase tracking-widest rounded-full mb-8 shadow-xl">
              {hero.bannerHook}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 leading-[1.1] text-white [text-shadow:0_8px_24px_rgba(0,0,0,0.8)] drop-shadow-2xl">
              {hero.title}
            </h1>
            <p className="text-lg md:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed font-semibold [text-shadow:0_4px_16px_rgba(0,0,0,0.8)] drop-shadow-lg">
              {hero.description}
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </div> */}
      </section>

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
                    <div className="h-1.5 w-16 bg-primary rounded-full shadow-[0_0_15px_rgba(var(--color-primary),0.5)]" />
                    <h3 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight [font-family:var(--font-heading)]">
                      {section.heading}
                    </h3>
                  </div>
                  <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed font-light [font-family:var(--font-body)]">
                    {section.paragraphs.map((para, pIndex) => (
                      <p 
                        key={pIndex}
                        className={pIndex === 0 ? "first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:mr-2 first-letter:float-left first-letter:leading-none" : ""}
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
