import { Metadata } from "next";
import { ourWorkContent } from "@/lib/content/ourWork";
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
  return (
    <div className="space-y-0 bg-white">
      <OurWorkHeroSection content={ourWorkContent.hero} />
      <OurWorkContentSection
        intro={ourWorkContent.intro}
        benefits={ourWorkContent.benefits}
        uniqueness={ourWorkContent.uniqueness}
        pillars={ourWorkContent.pillars}
      />
      <ClinicWorkflowSection workflow={ourWorkContent.clinicWorkflow} />
      <ServicesSection services={ourWorkContent.services} />
    </div>
  );
}
