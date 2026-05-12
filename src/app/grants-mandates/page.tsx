import { Metadata } from "next";
import GrantsAndMandateSection from "@/components/grants-mandates/GrantsAndMandateSection";

export const metadata: Metadata = {
  title: "Grants & Mandates | Foundation for Innovations in Health",
  description: "Learn about the prestigious organizations, research institutions, and government bodies supporting FIH initiatives.",
};

export default function GrantsAndMandatesPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] -mt-8">
      <GrantsAndMandateSection />
    </div>
  );
}
