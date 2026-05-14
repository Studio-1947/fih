import { Metadata } from "next";
import { ourWorkContent } from "@/lib/content/ourWork";
import { storiesOfChangeContent } from "@/lib/content/storiesOfChange";
import StoriesOfChangeHero from "@/components/stories-of-change/StoriesOfChangeHero";
import StorySectionItem from "@/components/stories-of-change/StorySectionItem";
import QuoteSection from "@/components/stories-of-change/QuoteSection";
import OurWorkHeroSection from "@/components/ourWork/OurWorkHeroSection";
import OurWorkContentSection from "@/components/ourWork/OurWorkContentSection";
import ClinicWorkflowSection from "@/components/ourWork/ClinicWorkflowSection";
import ServicesSection from "@/components/ourWork/ServicesSection";

export const metadata: Metadata = {
  title: "Our Work | Foundation for Innovations in Health",
  description:
    "Uday - Doctor at Doorstep: Delivering primary care and public health services to the underserved rural population.",
};

export default function OurWorkPage() {
  const { sections } = storiesOfChangeContent;

  return (
    <div className="space-y-0 bg-white">

      {/* Page Hero */}
      <section className="relative w-full min-h-[55vh] flex items-center justify-center bg-[#0A0A0B] overflow-hidden"
        style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)", marginTop: "-160px", paddingTop: "160px" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B]/80 via-[#0A0A0B]/50 to-[#0A0A0B]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-20">
          <p className="text-primary font-black text-[10px] uppercase tracking-[0.5em] [font-family:var(--font-heading)] mb-6">
            Foundation for Innovations in Health
          </p>
          <h1 className="text-5xl sm:text-7xl lg:text-[8rem] font-black text-white leading-[0.9] tracking-tighter [font-family:var(--font-heading)] uppercase mb-8">
            Our Works
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-white/70 leading-relaxed font-medium [font-family:var(--font-body)] max-w-3xl mx-auto">
            Healthcare That Reaches You… Even in the hard-to-reach Remote Corners of Sundarbans
          </p>
        </div>
      </section>

      {/* Stories of Change — Floating Digital Clinic */}
      <StoriesOfChangeHero />

      <section className="py-20 sm:py-24 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 sm:space-y-32 lg:space-y-36">
            {sections.map((section, index) => (
              <StorySectionItem key={index} section={section} index={index} />
            ))}
          </div>
        </div>
      </section>

      <QuoteSection />

      {/* Uday — Doctor at Doorstep */}
      <OurWorkHeroSection content={ourWorkContent.hero} />

      {/* Our Healthcare Model intro */}
      <section className="w-full bg-white pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="space-y-4">
              {ourWorkContent.intro.description.map((para, i) => (
                <p key={i} className="text-base sm:text-lg text-gray-600 leading-relaxed [font-family:var(--font-body)]">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video */}
      <section className="w-full bg-white pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/UcYSuH7m_Pc?si=SPrJ6CE7CZYp_yoO"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <ClinicWorkflowSection workflow={ourWorkContent.clinicWorkflow} />
      <OurWorkContentSection
        benefits={ourWorkContent.benefits}
        uniqueness={ourWorkContent.uniqueness}
        pillars={ourWorkContent.pillars}
      />
      <ServicesSection services={ourWorkContent.services} />
    </div>
  );
}
