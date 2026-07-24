import { Metadata } from "next";
import { aboutContent } from "@/lib/content/about";
import AboutContentSection from "@/components/aboutFIH/AboutContentSection";
import VisionMissionSection from "@/components/aboutFIH/VisionMissionSection";
import {
  ImpactIntro,
  ImpactBarriers,
  Impact3TModel,
  ImpactSystemic,
} from "@/components/aboutFIH/ImpactSection";
import OurJourneySection from "@/components/aboutFIH/OurJourneySection";
import OurApproachBanner from "@/components/aboutFIH/OurApproachBanner";
import StatutoryComplianceSection from "@/components/aboutFIH/StatutoryComplianceSection";
import SectionAccordion from "@/components/aboutFIH/SectionAccordion";

export const metadata: Metadata = {
  title: "About Us | Foundation for Innovations in Health",
  description:
    "Learn about FIH, our vision, mission, and how our 3T model creates scalable healthcare and livelihood impact in rural India.",
};

export default function AboutPage() {
  return (
    <div className="space-y-0">
      <AboutContentSection
        intro={aboutContent.intro}
        whatSetsUsApart={aboutContent.whatSetsUsApart}
        ourFoundation={aboutContent.ourFoundation}
      />
      <SectionAccordion
        items={[
          {
            id: "vision-mission",
            title: "Our vision & mission",
            content: <VisionMissionSection content={aboutContent.visionMission} />,
          },
          {
            id: "impact",
            title: "How we create impact",
            content: <ImpactIntro content={aboutContent.impact} />,
          },
          {
            id: "impact-barriers",
            title: "Transforming barriers into lasting impact",
            content: <ImpactBarriers content={aboutContent.impact} />,
          },
          {
            id: "three-t-model",
            title: "The 3T model in action",
            content: <Impact3TModel content={aboutContent.impact} />,
          },
          {
            id: "systemic-impact",
            title: "Creating systemic impact",
            content: <ImpactSystemic content={aboutContent.impact} />,
          },
          {
            id: "our-approach",
            title: "Our approach",
            content: <OurApproachBanner />,
          },
          {
            id: "our-journey",
            title: "Our journey",
            content: <OurJourneySection />,
          },
          {
            id: "statutory-compliance",
            title: "Statutory compliance",
            content: <StatutoryComplianceSection />,
          },
        ]}
      />
    </div>
  );
}
