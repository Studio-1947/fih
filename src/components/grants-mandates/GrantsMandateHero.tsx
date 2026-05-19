"use client";

import StoriesOfChangeHero from "@/components/stories-of-change/StoriesOfChangeHero";
import { aboutContent } from "@/lib/content/about";

export default function GrantsMandateHero() {
  const logoItems = aboutContent.grantsAndMandates.items.map((item) => ({
    imagePath: item.imagePath,
    alt: item.organization,
  }));

  return (
    <StoriesOfChangeHero
      kicker="Government, Institution & Others"
      title="Grants &"
      highlight="Mandates."
      description="Strategic grants and mandates powering rural healthcare, education, and livelihood programs across India."
      items={logoItems}
      imageClassName="object-contain p-3 sm:p-4 mix-blend-multiply"
      tileClassName="bg-transparent border-transparent shadow-none"
    />
  );
}
