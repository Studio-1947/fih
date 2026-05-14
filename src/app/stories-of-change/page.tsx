import { Metadata } from "next";
import TestimonialSection from "@/components/stories-of-change/TestimonialSection";

export const metadata: Metadata = {
  title: "Stories of Change | Foundation for Innovations in Health",
  description: "Discover how FIH is transforming lives through innovative healthcare solutions like the Floating Digital Clinic in the Sundarbans.",
  openGraph: {
    title: "Stories of Change | FIH",
    description: "Transforming lives through innovative healthcare solutions in the Sundarbans.",
    images: ["/stories_of_change/floating digital clinic.jpg"],
  }
};

export default function StoriesOfChangePage() {
  return (
    <main className="bg-white min-h-screen">
      <TestimonialSection />
    </main>
  );
}
