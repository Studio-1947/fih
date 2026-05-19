import { Metadata } from "next";
import TestimonialSection from "@/components/stories-of-change/TestimonialSection";
import StoriesOfChangeHero from "@/components/stories-of-change/StoriesOfChangeHero";

export const metadata: Metadata = {
  title: "Stories of Change | Foundation for Innovations in Health",
  description: "Real stories from communities transformed by FIH's healthcare initiatives — voices of patients, caregivers, and changemakers from the Sundarbans and beyond.",
  openGraph: {
    title: "Stories of Change | Foundation for Innovations in Health",
    description: "Real stories from communities transformed by FIH's healthcare initiatives — voices of patients, caregivers, and changemakers.",
    images: ["/stories_of_change/floating%20digital%20clinic.jpg"],
  }
};

export default function StoriesOfChangePage() {
  return (
    <main className="bg-white min-h-screen">
      <StoriesOfChangeHero />
      <TestimonialSection />
    </main>
  );
}
