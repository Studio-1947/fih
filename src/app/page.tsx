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
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import type { EventItem } from "@/components/home/EventsSection";

import FadeIn from "@/components/ui/FadeIn";

export default async function Home() {
  const { data: sanityEvents } = await sanityFetch({ query: EVENTS_QUERY });

  const events: EventItem[] =
    sanityEvents && sanityEvents.length > 0
      ? sanityEvents.map(
          (e: {
            _id: string;
            title: string;
            description: string;
            image: Parameters<typeof urlFor>[0];
            date: string;
          }) => ({
            id: e._id,
            title: e.title,
            description: e.description,
            imageUrl: urlFor(e.image).width(900).auto("format").url(),
            date: e.date,
          })
        )
      : eventsContent.map((e) => ({ ...e, imageUrl: e.image }));

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
        <EventsSection events={events} />
      </FadeIn>

      <FadeIn>
        <PartnerWithUsSection content={partnerWithUsContent} />
      </FadeIn>
    </div>
  );
}
