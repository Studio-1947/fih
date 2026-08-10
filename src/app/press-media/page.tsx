import { Metadata } from "next";
import {
  AwardsHero,
  FeaturedRecognition,
  RegularAwardsSection,
} from "@/components/press-media/AwardsRecognitionSection";
import PublicationSection from "@/components/press-media/PublicationSection";
import EventsSection from "@/components/home/EventsSection";
import GallerySection from "@/components/press-media/GallerySection";
import { eventsContent } from "@/lib/content/events";
import type { EventItem } from "@/components/home/EventsSection";

export const metadata: Metadata = {
  title: "News & Events | Foundation for Innovations in Health",
  description:
    "Explore FIH's latest events, media coverage, awards, recognition, and gallery of photos and videos.",
};

const fallbackEvents: EventItem[] = eventsContent.map((e) => ({
  ...e,
  imageUrl: e.image,
}));

export default function PressAndMediaPage() {
  return (
    <main className="min-h-screen pt-0 bg-white">
      <AwardsHero />
      <FeaturedRecognition />
      <RegularAwardsSection />
      <PublicationSection />
      <EventsSection events={fallbackEvents} />
      <GallerySection />
      </main>
  );
}
