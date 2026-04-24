export type HeroStat = {
  value: string;
  label: string;
};

export type HomeHeroContent = {
  eyebrow: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: HeroStat[];
  heroBackdropPath: string;
  heroManPath: string;
  heroWomanPath: string;
  heroChildPath: string;
};

export const homeHeroContent: HomeHeroContent = {
  eyebrow: "HEALTH FOR",
  titleTop: "A Billion.",
  titleBottom: "",
  description:
    "Mitigating multi-dimensional poverty and building rural resilience through data-driven healthcare and employment-oriented education.",
  primaryCta: { label: "Support Our Mission", href: "/#contact" },
  secondaryCta: { label: "Discover Our Work", href: "/stories-of-change" },
  stats: [
    { value: "10,450+", label: "Beneficiaries Reached" },
    { value: "950+", label: "Trained Professional Health Workers" },
    { value: "15", label: "Partner Across the State" },
    { value: "₹48", label: "Average Cost per Patient" },
  ],
  heroBackdropPath: "/hero/hero-main.svg",
  heroManPath: "/hero/man_image.png",
  heroWomanPath: "/hero/woman_image.png",
  heroChildPath: "/hero/child_image.png",
};
