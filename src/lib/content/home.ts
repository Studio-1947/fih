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
  description: `Foundation for Innovations in Health” (FIH) is a not-for-profit social impact enterprise dedicated to mitigating Multi-Dimensional Poverty (MDP) and building rural resilience through twin interventions: employment-oriented education for rural youth and improved access to public health and primary healthcare for last-mile communities`,
  primaryCta: { label: "Support Our Mission", href: "/contact" },
  secondaryCta: { label: "Discover Our Work", href: "/stories-of-change" },
  stats: [
    { value: "10,450+", label: "Beneficiaries Reached" },
    { value: "950+", label: "Trained Professional Health Workers" },
    { value: "15", label: "Partner Across the State" },
    { value: "₹48", label: "Average Cost per Patient" },
  ],
  heroBackdropPath: "/hero/hero-main.svg",
  heroManPath: "/hero/hero03.png",
  heroWomanPath: "/hero/hero02.png",
  heroChildPath: "/hero/hero01.png",
};
