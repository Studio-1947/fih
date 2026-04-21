export type Milestone = {
  tag: string;
  year: string;
  title: string;
  description: string;
};

export type StoriesAndMilestonesContent = {
  eyebrow: string;
  title: string;
  readMoreCta: string;
  readMoreHref: string;
  milestones: Milestone[];
};

export const storiesAndMilestonesContent: StoriesAndMilestonesContent = {
  eyebrow: "IMPACT & NEWS",
  title: "Stories of Change & Recent Milestones",
  readMoreCta: "Read Impact Stories",
  readMoreHref: "#",
  milestones: [
    {
      tag: "Partnership",
      year: "2024",
      title: "IIT Kharagpur Partnership",
      description:
        "FIH engaged as the 'Skill & Knowledge Partner' for the Allied Health Professional Education Program at Dr. B.C. Roy Multispecialty Medical Research Centre.",
    },
    {
      tag: "CSR Initiative",
      year: "2024",
      title: "Uday CSR Initiative",
      description:
        "Inauguration of 'Uday - Healthcare at the Doorstep' in the Sundarbans, proudly supported by Balmer Lawrie & Co. Ltd.",
    },
    {
      tag: "MoU Signed",
      year: "2024",
      title: "NIT Meghalaya MoU",
      description:
        "Pioneering inclusive tech education for the visually impaired in collaboration with global universities including DOT Inc. (Seoul).",
    },
  ],
};
