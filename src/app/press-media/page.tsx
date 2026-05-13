import { Metadata } from "next";
import AwardsRecognitionSection from "@/components/press-media/AwardsRecognitionSection";
import PublicationSection from "@/components/press-media/PublicationSection";
import EventsSection from "@/components/home/EventsSection";
import GallerySection from "@/components/press-media/GallerySection";
import FadeIn from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "News & Events | Foundation for Innovations in Health",
  description:
    "Explore FIH's latest events, media coverage, awards, recognition, and gallery of photos and videos.",
};

export default function PressAndMediaPage() {
  return (
    <main className="min-h-screen pt-0 bg-white">
      <AwardsRecognitionSection />
      <PublicationSection />
      <EventsSection />
      <GallerySection />
    </main>
  );
}
