import { Metadata } from "next";
import { contactPageContent, partnerWithUsContent } from "@/lib/content";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import MapSection from "@/components/contact/MapSection";

export const metadata: Metadata = {
  title: "Contact Us | Foundation for Innovations in Health",
  description:
    "Get in touch with FIH. Reach out to collaborate, volunteer, or support our programs in underserved communities.",
};

export default function ContactPage() {
  return (
    <div
      className="bg-white"
      style={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}
    >
      <ContactHero
        title={contactPageContent.title}
        intro={contactPageContent.intro}
      />
      <ContactFormSection content={partnerWithUsContent} />
      <MapSection content={partnerWithUsContent} />
    </div>
  );
}
