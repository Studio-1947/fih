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
  heading:
    "Transforming Lives through Employment, Health Access & Community Resilience",
  intro:
    "We leverage the democratization of frugal innovations in health-tech to deliver care to the last mile, while empowering rural youth through skill development.",
  cards: [
    {
      tag: "Healthcare",
      title: "Accessible Primary Care & Public Health",
      description:
        "Driven by data and technology, sustainable, citizen-centric, climate-resilient",
      imagePath: "/what-we-do/accessible-primary-care-public-health.webp",
      ctaLabel: "Explore Healthcare Programs",
      ctaHref: "/our-work",
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
        "Enabling formal sector employment through skills, inclusion & innovation",
      imagePath: "/what-we-do/employment-oriented-education.webp",
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
