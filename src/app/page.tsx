import HeroSection from "@/components/HeroSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import RecognitionSection from "@/components/RecognitionSection";
import SupportedBySection from "@/components/SupportedBySection";
import StoriesAndMilestonesSection from "@/components/StoriesAndMilestonesSection";
import EventsSection from "@/components/EventsSection";
import PartnerWithUsSection from "@/components/PartnerWithUsSection";
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
      <SupportedBySection />
      <StoriesAndMilestonesSection content={storiesAndMilestonesContent} />
      <EventsSection />
      <PartnerWithUsSection content={partnerWithUsContent} />
    </div>
  );
}
