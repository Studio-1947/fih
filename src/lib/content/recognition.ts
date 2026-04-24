export type Partner = {
  name: string;
  location: string;
  logo: string;
  category: string;
  categoryColor?: "yellow" | "gray";
};

export type RecognitionContent = {
  eyebrow: string;
  mainTitle: string;
  mainDescription: string;
  mainCta: string;
  mainCtaHref: string;
  backgroundImage: string;
  partnersSectionTitle: string;
  partners: Partner[];
  bottomNote: string;
};

export const recognitionContent: RecognitionContent = {
  eyebrow: "GLOBAL RECOGNITION",
  mainTitle: "Recognized by Stanford University",
  mainDescription:
    "Proud to be acknowledged among the top 40 global changemakers by Stanford University for our innovative approach to grassroots healthcare, alongside partnerships with premier Indian institutions.",
  mainCta: "Read The Recognition Story",
  mainCtaHref: "#",
  backgroundImage: "/recognised/bg_image.png",
  partnersSectionTitle: "OUR ACADEMIC & INSTITUTIONAL PARTNERS",
  partners: [
    {
      name: "Stanford",
      location: "Stanford University",
      logo: "/recognised/stanford_university.svg",
      category: "Top 40 Global Changemakers",
      categoryColor: "yellow",
    },
    {
      name: "IIT KGP",
      location: "IIT Kharagpur",
      logo: "/recognised/iit_kharagpur.svg",
      category: "Skill & Knowledge Partner",
      categoryColor: "gray",
    },
    {
      name: "IIT GHY",
      location: "IIT Guwahati",
      logo: "/recognised/iit_guwahati.svg",
      category: "Academic Collaboration",
      categoryColor: "gray",
    },
    {
      name: "NIT MEG",
      location: "NIT Meghalaya",
      logo: "/recognised/nit_meghalaya.svg",
      category: "Inclusive Tech Education",
      categoryColor: "yellow",
    },
  ],
  bottomNote:
    "Uday - Healthcare at the Doorstep is proudly supported by Balmer Lawrie & Co. Ltd. as a CSR initiative in the Sundarbans.",
};
