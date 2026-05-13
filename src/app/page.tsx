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

import FadeIn from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <div className="space-y-0">
      <HeroSection content={homeHeroContent} />
      
      <FadeIn>
        <WhatWeDoSection content={whatWeDoContent} />
      </FadeIn>
      
      <FadeIn>
        <RecognitionSection content={recognitionContent} />
      </FadeIn>
      
      <FadeIn>
        <SpecificObjectivesSection />
      </FadeIn>
      
      <FadeIn>
        <SupportedBySection />
      </FadeIn>
      
      <FadeIn>
        <StoriesAndMilestonesSection content={storiesAndMilestonesContent} />
      </FadeIn>
      
      <FadeIn>
        <EventsSection />
      </FadeIn>
      
      <FadeIn>
        <PartnerWithUsSection content={partnerWithUsContent} />
      </FadeIn>
    </div>
  );
}
