import HeroSection from "@/components/home/HeroSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import BoardScrollSection from "@/components/home/BoardScrollSection";
import SpecificObjectivesSection from "@/components/home/SpecificObjectivesSection";
import SupportedBySection from "@/components/home/SupportedBySection";
import OurScaleSection from "@/components/home/OurScaleSection";
import EventsSection from "@/components/home/EventsSection";
import PartnerWithUsSection from "@/components/home/PartnerWithUsSection";
import {
  homeHeroContent,
  whatWeDoContent,
  partnerWithUsContent,
} from "@/lib/content";
import { eventsContent } from "@/lib/content/events";
import type { EventItem } from "@/components/home/EventsSection";

import FadeIn from "@/components/ui/FadeIn";

const fallbackEvents: EventItem[] = eventsContent.map((e) => ({
  ...e,
  imageUrl: e.image,
}));

export default function Home() {
  return (
    <div className="space-y-0">
      <HeroSection content={homeHeroContent} />

      <WhatWeDoSection content={whatWeDoContent} />

      <FadeIn>
        <BoardScrollSection />
      </FadeIn>

      <FadeIn>
        <SpecificObjectivesSection />
      </FadeIn>

      <FadeIn>
        <SupportedBySection />
      </FadeIn>

      <FadeIn>
        <OurScaleSection />
      </FadeIn>

      <FadeIn>
        <EventsSection events={fallbackEvents} />
      </FadeIn>

      <FadeIn>
        <PartnerWithUsSection content={partnerWithUsContent} />
      </FadeIn>
    </div>
  );
}
