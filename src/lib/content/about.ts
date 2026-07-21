export type AboutContent = {
  hero: {
    bannerHook: string;
    bgImagePath: string;
  };
  intro: {
    heading: string;
    paragraphs: string[];
    imagePath?: string;
  };
  whatSetsUsApart: {
    title: string;
    points: {
      title: string;
      description: string;
    }[];
  };
  ourFoundation: {
    title: string;
    paragraphs: string[];
    quoteIntro?: string;
    quote: string;
    conclusion: string;
    imagePath?: string;
  };
  visionMission: {
    vision: string;
    mission: string;
  };
  impact: {
    mainHeading: string;
    subHeading: string;
    hook: string;
    introParagraph: string;
    imagePath?: string;
    ruralEmployment: {
      heading: string;
      paragraphs: string[];
    };
    healthcareAccess: {
      heading: string;
      paragraphs: string[];
    };
    modelInAction: {
      heading: string;
      intro: string;
      points: {
        title: string;
        description: string;
      }[];
      conclusion: string;
    };
    systemicImpact: {
      heading: string;
      intro: string;
      points: string[];
      conclusion: string;
    };
    ourApproach: {
      heading: string;
      description: string;
      imagePath: string;
    };
  };
  boardMembers: {
    name: string;
    role: string;
    imagePath: string;
    description: string;
  }[];
  statutoryCompliance: {
    title: string;
    groups: {
      title: string;
      items: {
        label: string;
        value: string;
        /** Registration identifiers render as monospace reference codes */
        code?: boolean;
      }[];
    }[];
  };
  grantsAndMandates: {
    title: string;
    items: {
      organization: string;
      imagePath: string;
      subtext?: string;
      description: string;
      partners?: string;
      status?: string;
    }[];
  };
};

export const aboutContent: AboutContent = {
  hero: {
    bannerHook: "Reimagining Healthcare & Livelihoods for Rural India",
    bgImagePath: "/AboutUs/about_us_fih.png",
  },
  intro: {
    heading: "About Foundation for Innovations in Health",
    imagePath: "/AboutUs/aboutus01.png",
    paragraphs: [
      `Foundation for Innovations in Health (FIH) is committed to addressing health and income inequities. At FIH, we believe that sustainable change lies at the intersection of healthcare access and livelihood generation. By leveraging the democratisation of frugal healthtech innovations, we design and deploy scalable, cost-effective solutions that bring quality healthcare, including mental health and mitigation of climate change impacts, closer to underserved populations while creating meaningful employment opportunities.`,
    ],
  },
  whatSetsUsApart: {
    title: "What Sets Us Apart",
    points: [
      {
        title: "Large scale formal sector employment creation",
        description:
          "Agency to community health workers, permanent community capacity creation, and driving sustainability ",
      },
      {
        title: "Data-driven approach, integrity & regularity",
        description: "Democratization and diffusion of Frugal health-tech",
      },
      {
        title: "Disruption of access barriers – culture, cost, home-based",
        description:
          "Value addition through institutional participation – IIT Kharagpur, IIT Guwahati, NIT Meghalaya",
      },
    ],
  },
  ourFoundation: {
    title: "Our Foundation",
    paragraphs: [
      "Established in 2013 by Prof. (Dr.) Satadal Saha, MS, FRCS (Eng.) and his colleagues, FIH is guided by a strong leadership vision, scientific rigour, citizen-centricity and social anthropological mooring. The organisation is mentored by Prof. Amitabha Ghosh, Emeritus Scientist at the Indian National Science Academy and Former Director of IIT Kharagpur.",
    ],
    quoteIntro:
      "Mentored by internationally acclaimed pioneers and inspiring personalities, governed by a diverse group of eminent professionals, and driven by domain experts, FIH operates with a unified purpose:",
    quote: "“Health for a Billion”",
    conclusion:
      "Through innovation, collaboration, and impact-driven execution, FIH continues to redefine how healthcare and skilling can work together to transform lives at scale.",
    imagePath: "/AboutUs/IMG20230331164856%20%281%29.jpg",
  },
  visionMission: {
    vision:
      "We will address income and health inequity that is adversely affecting the underserved population.",
    mission:
      "We will achieve this through building an integrated 3T model - Training & education of rural youth, Task- shifting from doctors, Technologies that are frugal and deep-science driven.",
  },
  impact: {
    mainHeading: "How We Create Impact",
    subHeading: "From Silo to System",
    hook: "Transforming Challenges into Scalable, Sustainable Impact",
    introParagraph:
      "At Foundation for Innovations in Health (FIH), we move beyond fragmented solutions to build a holistic, integrated ecosystem, our 3T Model (Training, Technology, Task-shifting), designed to tackle the twin challenges of income health inequity.",
    imagePath: "/AboutUs/IMG20240524174227.jpg",
    ruralEmployment: {
      heading: "Addressing India’s Most Pressing Challenge: Rural Unemployment",
      paragraphs: [
        "Rural unemployment remains one of India’s most critical concerns. FIH addresses this by training rural youth, primarily women and from disadvantaged communities, into skilled healthcare professionals.",
        "Through structured, nationally-accredited employment-oriented programs in allied health specialities, we have successfully placed thousands of youth into stable, formal jobs within the healthcare sector, bridging both the skills gap and livelihood insecurity.",
      ],
    },
    healthcareAccess: {
      heading: "Bridging the Healthcare Access Gap",
      paragraphs: [
        "50% of the world’s population do not have access to affordable, evidence-based and equitable primary healthcare, leading to burgeoning disease burden in the society and accompanying economic and social misery.",
        "FIH has developed technology driven, community-owned primary care and mass population screening model tailored for resource-constrained settings. Today, this model serves as a critical healthcare lifeline for thousands of patients living in remote and fragile geographies.",
      ],
    },
    modelInAction: {
      heading: "The 3T Model in Action",
      intro: "At the core of FIH’s approach lies a powerful synergy:",
      points: [
        {
          title: "Training",
          description: "Building a skilled, local healthcare workforce",
        },
        {
          title: "Task-shifting",
          description:
            "Shifting skill-based tasks from doctors to community health workers",
        },
        {
          title: "Technology",
          description:
            "Enabling data-driven, accessible, scalable, and sustainable public health and primary care delivery with high community adoption",
        },
      ],
      conclusion:
        "By leveraging technology-enabled task shifting, responsibilities traditionally limited to doctors are effectively redistributed to trained community health workers, ensuring both efficiency and accessibility.",
    },
    systemicImpact: {
      heading: "Creating Systemic Impact",
      intro: "FIH’s model delivers impact on two critical fronts:",
      points: [
        "Increasing household incomes through stable employment",
        "Reducing healthcare expenses through preventive care, earlier detection and timely management",
      ],
      conclusion:
        "This integrated, system-level approach ensures sustainability, scalability, and replicability, positioning the 3T Model as a globally relevant, fit-for-purpose solution for inclusive development.",
    },
    ourApproach: {
      heading: "Our Approach",
      description: "From isolated interventions to system-wide transformation.",
      imagePath: "/AboutUs/model-3t.svg",
    },
  },
  boardMembers: [
    {
      name: "Prof. (Dr.) Satadal Saha",
      role: "Founder - President",
      imagePath:
        "/AboutUs/board_members/Prof.%20%28Dr.%29%20Satadal%20Saha.jpg",
      description:
        "Prof. (Dr.) Satadal Saha MS, FRCS (Eng.) is an Honorary Visiting Professor at the Centre for Nanotechnology, IIT Guwahati. He was a former Professor at the School of Medical Science & Technology at IIT Kharagpur. A general surgeon by profession, Prof. Saha was the key founder of FIH in 2013.\n\nProf. Saha has been trained in India and the UK. He founded the Westbank Hospital at Howrah and has established and operated four more hospitals in different districts of West Bengal — all delivering affordable speciality and super-speciality care to the rural population. In 2011, he shifted his focus to primary care and public health delivery to the vast rural population and started working on how innovative, cutting-edge science and technology can be leveraged to develop affordable healthcare technologies and software systems that may be used by trained and certified health workers to improve access to affordable high-quality healthcare in rural India.",
    },
    {
      name: "Biswadip Gupta",
      role: "Member",
      imagePath: "/AboutUs/board_members/Biswadip%20Gupta.jpg",
      description:
        "Mr. Gupta is currently the President–Corporate Affairs (East) of JSW Steel Ltd., Chairman of Vesuvius India Ltd., Member of Board of Directors of JSW Cement Ltd., Independent Director of IFB Industries and Chairman of Neoceram India Ltd. He is a past President of The Bengal Chamber of Commerce & Industry and the past Chairman of CII, Eastern Region. He is a member of Indian Chamber of Commerce and ASSOCHAM.",
    },
    {
      name: "Suparna Pathak",
      role: "Secretary",
      imagePath: "/AboutUs/board_members/Suparna%20Pathak.jpg",
      description:
        "Mr. Pathak is a content strategist and an experienced media professional with a passion for weaving words, Suparna is regarded as a pioneer in modern business journalism in the Bengali media. An eloquent and proficient writer in both English and Bengali with 40 years of experience, he is also known for his astute and incisive analysis of government and corporate policies and is a regular presence at seminars organized by national level chambers of commerce and international organisations.",
    },
    {
      name: "Shubha Pathak",
      role: "Treasurer",
      imagePath: "/AboutUs/board_members/Shubha%20Pathak.jpg",
      description:
        "Ms. Pathak is an articulation capacity builder, Shubha has 36 years of experience in teaching English at reputed schools in senior classes. Her expertise in creating articulation capacity is also sought after at various organizational levels, including corporates. She excels in turning a communication deficient, articulation averse team into go-getters. She believes language is the soul of our thoughts and one doesn’t exist without the other. Creating articulation capacity is nothing but releasing a skill that we are born with is her mantra",
    },
    {
      name: "Dr. Suchismita Bhaumik",
      role: "Member",
      imagePath: "/AboutUs/board_members/Dr.%20Suchismita%20Bhaumik.jpg",
      description:
        "Dr. Bhaumik (MBBS, DGO,DA,DRCOG) is currently a consultant at the Health Check Department at Apollo Multi Speciality Hospital in Kolkata. Prior to taking up this position Dr Bhaumik was working for the WHO and Chittaranjan National Cancer Institute for cancer prevention projects. She has also worked in the Community Medicine Department of KPC Medical College, Kolkata. Before relocating to India from the UK, Dr Bhaumik had been a GP Principal working at Fairfield Medical Center, Port Talbot, in Wales.\n\nDr. Bhaumik’s biggest contribution is in the development and establishment of ‘’School for Skills: Allied Health Sciences’’. The program started at Suri in the district of Birbhum, West Bengal. Following in her footsteps, this program has expanded across the country, and these schools are now training hundreds of students every year.",
    },
    {
      name: "Dr. Durba Bandyopadhyay",
      role: "Member",
      imagePath: "/AboutUs/board_members/Dr.%20Durba%20Bandyopadhyay.png",
      description:
        "A biological sciences alumnus of Presidency & Jadavpur University, she is now the Program Director of the ‘Adolescent Leadership Program’ at “Jabala Action Research Organisation”, a civil society organization working on child rights, human trafficking, unsafe migration, and women’s labor. Her primary area of action research is the socio-cultural aspects and sexual and reproductive health rights of women & girls from Santhal & Pahariya communities & other indigenous tribes in the eastern states of India, including Intimate partner violence in South Asia.\n\nDurba has more than 15 years of experience as researcher and trainer in a variety of sectors in social work. She has held teaching positions at some prestigious educational institutions in Kolkata. Durba conducted workshops with Centre for Criminology and Justice (CCJ), School of Social Work (SSW) & Tata Institute of Social Sciences on advocacy and intervention in the field of child marriage. She actively provides research support to initiatives on sex trafficking, HIV/AIDS control, and prevention of Child marriage. She was part of CNNS’s Anthropometric data collection program in 107 PSUs of West Bengal as the State trainer, for UNICEF and Population Council in 2018. She has been engaged in the training of adolescent girls on Leadership; Gender and Sexuality; ‘Reproductive Health & Menstrual Health Management (MHM) etc. She has been an invited speaker at Ford Foundation Centre for Social Justice, New York, Curtin University, Perth, West Australia, International Organization of Migration (India Chapter) and many other national and international platforms.\n\nIt was her life’s calling that she left academia to join social sector, driven by a conviction that regressive social practices need to be addressed most urgently and that can be done only identifying and removing irrational and unscientific prejudices in which they are mired.",
    },
    {
      name: "Dr. Bibaswan Basu",
      role: "Member",
      imagePath: "/AboutUs/board_members/Dr.%20Bibaswan%20Basu.webp",
      description:
        "Dr. Basu has a total of twelve (12) years of teaching experience, along with eight (8) years of experience in the development sector, focusing on Healthcare, Education and Livelihood. His core domain of work includes allied health professional (AHP) education and skill development; improving access to affordable primary care and public health for underserved rural communities; and promoting inclusive education and livelihood generation for visually impaired persons by leveraging innovative technology.\n\nHe has been extensively involved in implementing multiple programs pertaining to AHP education, capacity building, healthcare training, skill development, livelihood generation among youth, upliftment of scheduled caste and scheduled tribe youth and women empowerment across West Bengal, Assam, Madhya Pradesh, Maharashtra, Uttar Pradesh, Gujarat, Bihar, Uttarakhand, Meghalaya. He was nominated as academic expert by various Vocational & Skill Development departments at National and State levels. He served as the Chief Operating Officer of the Foundation for Innovations in Health. He is also a member of the Executive Committee at the School for Skills: Healthcare & Technology at IIT Kharagpur and IIT Indore.\n\nRole in the organization – contributes to curriculum and pedagogy innovation, training and skill development initiatives, collaboration management, quality assurance, CSR program design and implementation, and the acquisition of projects and funding opportunities.",
    },
  ],
  statutoryCompliance: {
    title: "Statutory Compliance",
    groups: [
      {
        title: "The Organisation",
        items: [
          {
            label: "Registered as",
            value:
              "Society (WB Societies Registration Act 1961); S/2L/7000 dated 02.07.2013",
          },
          { label: "Year of Registration", value: "2013" },
          {
            label: "Registered Address",
            value: "44A SP Mukherjee Road, Kolkata, West Bengal – 700026",
          },
          { label: "Phone No.", value: "+91 33 2455-3334" },
          { label: "PAN No.", value: "AAAAF2698E", code: true },
        ],
      },
      {
        title: "Tax & Regulatory Registrations",
        items: [
          {
            label: "12A – Income tax Act",
            value: "AAAAF2698E25KL01",
            code: true,
          },
          {
            label: "80G – Income tax Act",
            value: "AAAAF2698E24KL01",
            code: true,
          },
          { label: "CSR Registration No.", value: "CSR00001983", code: true },
          { label: "FCRA Registration No.", value: "147121120", code: true },
          {
            label: "Darpan Portal Registration No.",
            value: "WB/2017/0168588",
            code: true,
          },
        ],
      },
    ],
  },
  grantsAndMandates: {
    title: "Grants & Mandate",
    items: [
      {
        organization: "Biotechnology Industry Research Assistance Council",
        imagePath:
          "/grantes%26mandates/Biotechnology%20Industry%20Research%20Assistance%20Council.png",
        subtext: "Supported by open call initiative of Grand Challenge India",
        description:
          "Establishing AI-enabled data-driven linkage between climate change and its impact on health adversities in the fragile geography of “The Sunderbans”, West Bengal.",
        partners:
          "Collaboration Partners: IIT Kharagpur, IIT Guwahati and NIMHANS, Bengaluru.",
      },
      {
        organization: "Department of Science & Technology",
        imagePath:
          "/grantes%26mandates/Department%20of%20Science%20%26%20Technology.webp",
        subtext: "Govt. of India",
        description:
          "Sustainable public health and primary care in resource poor settings through local women and innovative technology – establishment of two (2) digital clinic clusters in Birbhum.",
        status: "Completed in 2021",
      },
      {
        organization:
          "Common Research & Technology Development Hub, IIT Kharagpur",
        imagePath:
          "/grantes%26mandates/Common%20Research%20%26%20Technology%20Development%20Hub.webp",
        description:
          "Advance technology driven, affordable and high quality diagnostic laboratory services for rural community of West Bengal.",
      },
      {
        organization: "BioNEST, IIT Guwahati",
        imagePath: "/grantes%26mandates/BioNEST.webp",
        description:
          "Adoption of frugal diagnostic technology and employment linked allied health professional training especially among the rural community of North East States of India.",
      },
      {
        organization: "Asia Initiatives (USA)",
        imagePath: "/grantes%26mandates/Asia%20Initiatives.png",
        description:
          "NAARI - Novel Assessment for Anaemia, BReast Cancer and Reproductive Tract Infections. This project is being implemented in the district of Birbhum, West Bengal. This project will strengthen the value chain of existing services delivered through Uday clinics.",
      },
      {
        organization: "Federation of Indian Chambers of Commerce & Industry",
        imagePath:
          "/grantes%26mandates/Federation%20of%20Indian%20Chambers%20of%20Commerce%20%26%20Industry.webp",
        subtext: "Millennium Alliance Round 6, an USAID program",
        description:
          "AHP education in South 24 Pgs, accessible and affordable primary care and public health through digital clinic cluster and motorized boat at Sundarbans.",
        status: "Completed in 2024",
      },
      {
        organization: "Bansberia Municipality, Hooghly",
        imagePath: "/grantes%26mandates/Bansberia%20Municipality.webp",
        description:
          "Improve access to high quality, technology driven, affordable healthcare for the community with special emphasis on the vulnerable population.",
      },
      {
        organization: "SUSRUT Eye Foundation & Research Centre",
        imagePath:
          "/grantes%26mandates/SUSRUT%20Eye%20Foundation%20%26%20Research%20Centre.webp",
        description:
          "Improve access to affordable high quality general and speciality eye care services for the rural underserved.",
      },
      {
        organization: "Karkinos Healthcare Pvt. Ltd.",
        imagePath:
          "/grantes%26mandates/Karkinos%20Healthcare%20Pvt.%20Ltd..webp",
        description:
          "Cancer Risk Assessment and Screening across four (4) digital clinic clusters in West Bengal through engagement of trained and certified community health workers.",
        status: "Completed in 2023",
      },
    ],
  },
};
