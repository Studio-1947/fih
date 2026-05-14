import { Metadata } from "next";
import AwardsRecognitionSection from "@/components/press-media/AwardsRecognitionSection";
import PublicationSection from "@/components/press-media/PublicationSection";
import EventsSection from "@/components/home/EventsSection";
import GallerySection from "@/components/press-media/GallerySection";
import { sanityFetch } from "@/sanity/lib/live";
import { urlFor } from "@/sanity/lib/image";
import { EVENTS_QUERY } from "@/sanity/lib/queries";
import { eventsContent } from "@/lib/content/events";
import type { EventItem } from "@/components/home/EventsSection";

export const metadata: Metadata = {
  title: "News & Events | Foundation for Innovations in Health",
  description:
    "Explore FIH's latest events, media coverage, awards, recognition, and gallery of photos and videos.",
};

export default async function PressAndMediaPage() {
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
    <main className="min-h-screen pt-0 bg-white">
      <AwardsRecognitionSection />
      <PublicationSection />
      <EventsSection events={events} />
      <GallerySection />
    </main>
  );
}
