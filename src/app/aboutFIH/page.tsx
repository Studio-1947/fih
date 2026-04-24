import { Metadata } from "next";
import { aboutContent } from "@/lib/content/about";
import AboutHeroSection from "@/components/AboutHeroSection";
import AboutContentSection from "@/components/AboutContentSection";
import VisionMissionSection from "@/components/VisionMissionSection";
import ImpactSection from "@/components/ImpactSection";
import BoardOfMembersSection from "@/components/BoardOfMembersSection";
import StatutoryComplianceSection from "@/components/StatutoryComplianceSection";

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
      <BoardOfMembersSection />
      <StatutoryComplianceSection />
    </div>
  );
}
