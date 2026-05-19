import { Metadata } from "next";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { ourWorkContent } from "@/lib/content/ourWork";
import { storiesOfChangeContent } from "@/lib/content/storiesOfChange";
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

      {/* Floating Digital Clinic Spotlight Section */}
      <section 
        className="relative w-screen left-1/2 -translate-x-1/2 py-24 sm:py-32 lg:py-36 bg-[#0A0A0B] overflow-hidden flex items-center min-h-[60vh]"
      >
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/stories_of_change/floating digital clinic.jpg"
            alt="Floating Digital Clinic"
            fill
            priority
            className="object-cover object-center opacity-85"
            sizes="100vw"
          />
          {/* Double Spotlight Gradient Protection Shield */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-[#0A0A0B]/40 z-10" />
        </div>

        {/* Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-left">
          <div className="max-w-3xl">
            <span className="text-primary font-black text-[10px] uppercase tracking-[0.4em] [font-family:var(--font-heading)] mb-4 block">
              Special Project Spotlight
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.0] tracking-tight [font-family:var(--font-heading)] uppercase mb-6">
              Floating <br />
              <span className="text-primary drop-shadow-[0_0_15px_rgba(255,184,0,0.2)]">Digital Clinic</span>
            </h2>

            {/* Location Metadata Pill */}
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2.5 w-fit mb-8 shadow-2xl">
              <MapPin className="h-4.5 w-4.5 text-primary shrink-0" />
              <div className="text-left leading-none">
                <p className="text-[9px] uppercase font-black text-white/50 tracking-[0.2em] mb-1">Location</p>
                <p className="text-sm font-black text-white tracking-tight uppercase [font-family:var(--font-heading)]">Sundarbans, India</p>
              </div>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed font-medium [font-family:var(--font-body)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] max-w-2xl">
              The Sundarbans Biosphere Reserve is the world’s largest delta and mangrove forest, spanning 9,630 sq. km, including over 4,200 sq. km of ecologically critical mangroves. This unique landscape is divided into 102 islands, of which 54 are inhabited, supporting a population of more than 4.4 million people, many of whom live in extreme isolation with limited access to essential services.
            </p>
          </div>
        </div>
      </section>

      {/* Floating Digital Clinic Story Cards & Quote */}
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
              loading="lazy"
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
