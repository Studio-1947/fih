import { Metadata } from "next";
import GrantsAndMandateSection from "@/components/GrantsAndMandateSection";

export const metadata: Metadata = {
  title: "Grants & Mandates | Foundation for Innovations in Health",
  description: "Learn about the prestigious organizations, research institutions, and government bodies supporting FIH initiatives.",
};

export default function GrantsAndMandatesPage() {
  return (
    <main className="min-h-screen pt-24 bg-white">
      <GrantsAndMandateSection />
    </main>
  );
}
