import { Metadata } from "next";
import { aboutContent } from "@/lib/content/about";
import AboutHeroSection from "@/components/aboutFIH/AboutHeroSection";
import AboutContentSection from "@/components/aboutFIH/AboutContentSection";
import VisionMissionSection from "@/components/aboutFIH/VisionMissionSection";
import ImpactSection from "@/components/aboutFIH/ImpactSection";
import BoardOfMembersSection from "@/components/aboutFIH/BoardOfMembersSection";
import OurJourneySection from "@/components/aboutFIH/OurJourneySection";
import OurApproachBanner from "@/components/aboutFIH/OurApproachBanner";
import StatutoryComplianceSection from "@/components/aboutFIH/StatutoryComplianceSection";

export const metadata: Metadata = {
  title: "About Us | Foundation for Innovations in Health",
  description:
    "Learn about FIH, our vision, mission, and how our 3T model creates scalable healthcare and livelihood impact in rural India.",
};

export default function AboutPage() {
  return (
    <div className="space-y-0">
      <AboutHeroSection content={aboutContent.hero} />
      <AboutContentSection
        intro={aboutContent.intro}
        whatSetsUsApart={aboutContent.whatSetsUsApart}
        ourFoundation={aboutContent.ourFoundation}
      />
      <VisionMissionSection content={aboutContent.visionMission} />
      <ImpactSection content={aboutContent.impact} />
      <OurApproachBanner />
      <OurJourneySection />
      <BoardOfMembersSection />
      <StatutoryComplianceSection />
    </div>
  );
}
