export type WhatWeDoProgram = {
  title: string;
  description: string;
};

export type WhatWeDoCard = {
  tag: string;
  title: string;
  description: string;
  imagePath: string;
  ctaLabel: string;
  ctaHref: string;
  programs: WhatWeDoProgram[];
};

export type WhatWeDoContent = {
  eyebrow: string;
  heading: string;
  intro: string;
  cards: WhatWeDoCard[];
};

export const whatWeDoContent: WhatWeDoContent = {
  eyebrow: "WHAT WE DO",
  heading: "Bridging the Gap in Rural Healthcare & Livelihoods.",
  intro:
    "We leverage the democratization of frugal innovations in health-tech to deliver care to the last mile, while empowering rural youth through skill development.",
  cards: [
    {
      tag: "Healthcare",
      title: "Accessible Primary Care",
      description:
        "Operating mobile, fixed, and innovative floating digital clinics to bring high-quality, data-driven healthcare directly to underserved communities.",
      imagePath: "/floating_image.jpg",
      ctaLabel: "Explore Healthcare Programs",
      ctaHref: "/stories-of-change",
      programs: [
        {
          title: "Floating Digital Clinic",
          description: "Sundarbans waterway network",
        },
        {
          title: "Mobile and Fixed Clinics",
          description: "Consistent health monitoring",
        },
      ],
    },
    {
      tag: "Education",
      title: "Employment-Oriented Education",
      description:
        "Creating formal sector employment by training rural youth and visually impaired learners as allied health professionals and tech specialists.",
      imagePath: "/Technology usage (1).jpg",
      ctaLabel: "Explore Education Programs",
      ctaHref: "https://schoolforskills.in/",
      programs: [
        {
          title: "IGL STEU Program",
          description: "180 rural youth trained across LP",
        },
        {
          title: "Tech for Visually Impaired",
          description: "NIT Meghalaya x DCTF Inc. (Seoul)",
        },
      ],
    },
  ],
};
