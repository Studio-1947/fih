export type HomeHeroContent = {
  eyebrow: string;
  titleTop: string;
  titleBottom: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
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
  heroBackdropPath: "/hero/hero-main.svg",
  heroManPath: "/hero/hero03.png",
  heroWomanPath: "/hero/hero02.png",
  heroChildPath: "/hero/hero01.png",
};
