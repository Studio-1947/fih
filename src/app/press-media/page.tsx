import { Metadata } from "next";
import AwardsRecognitionSection from "@/components/press-media/AwardsRecognitionSection";
import PublicationSection from "@/components/press-media/PublicationSection";
import GallerySection from "@/components/press-media/GallerySection";

export const metadata: Metadata = {
  title: "Press & Media | Foundation for Innovations in Health",
  description:
    "Explore FIH's media coverage, awards, recognition, publications, and gallery of photos and videos.",
};

export default function PressAndMediaPage() {
  return (
    <main className="min-h-screen pt-10 bg-white">
      <AwardsRecognitionSection />
      <PublicationSection />
      <GallerySection />
    </main>
  );
}
