import HeroSection from "@/components/home/HeroSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import RecognitionSection from "@/components/home/RecognitionSection";
import SpecificObjectivesSection from "@/components/home/SpecificObjectivesSection";
import SupportedBySection from "@/components/home/SupportedBySection";
import StoriesAndMilestonesSection from "@/components/home/StoriesAndMilestonesSection";
import EventsSection from "@/components/home/EventsSection";
import PartnerWithUsSection from "@/components/home/PartnerWithUsSection";
import {
  homeHeroContent,
  whatWeDoContent,
  recognitionContent,
  storiesAndMilestonesContent,
  partnerWithUsContent,
} from "@/lib/content";

export default function Home() {
  return (
    <div className="space-y-8">
      <HeroSection content={homeHeroContent} />
      <WhatWeDoSection content={whatWeDoContent} />
      <RecognitionSection content={recognitionContent} />
      <SpecificObjectivesSection />
      <SupportedBySection />
      <StoriesAndMilestonesSection content={storiesAndMilestonesContent} />
      <EventsSection />
      <PartnerWithUsSection content={partnerWithUsContent} />
    </div>
  );
}
