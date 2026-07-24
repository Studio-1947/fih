export type OurWorkContent = {
  hero: {
    bannerHook: string;
    bgImagePath: string;
  };
  intro: {
    title: string;
    description: string[];
  };
  benefits: {
    title: string;
    items: string[];
  };
  uniqueness: {
    title: string;
    items: string[];
  };
  pillars: {
    title: string;
    description: string;
  }[];
  clinicWorkflow: {
    title: string;
    steps: {
      title: string;
      description: string;
    }[];
  };
  services: {
    title: string;
    description: string;
    features?: string[];
  }[];
};

export const ourWorkContent: OurWorkContent = {
  hero: {
    bannerHook: "Uday - Doctor at Doorstep",
    bgImagePath: "/floating_image.jpg",
  },
  intro: {
    title: "Our Healthcare Model",
    description: [
      "“Uday” – doctor at doorstep; is our model of digital clinic delivering primary care and public health services to the underserved rural population through its 15 centres (fixed and cycle-based mobile) at Birbhum district of West Bengal and one (1) motor-boat at The Sunderbans (world’s largest delta and mangrove).",
      "It is led by remote doctors, delivered by community health workers (CHW) and supported by two sets of innovative technologies – A Clinical algorithm-driven Electronic Health Record (our own copyrighted software).",
      "Multiple clinical grade & certified diagnostic devices from IIT Kharagpur (Common Research & Technology Development Hub in affordable healthcare).",
    ],
  },
  benefits: {
    title: "How does it benefit patients",
    items: [
      "GP & Specialist consultation",
      "Single-visit, One-stop solution for doctors, medicines, tests, physiotherapy, injections, dressing etc.",
      "Home care delivered by cycle-based mobile units",
      "Average cost/episode (all services included) = Rs. 250/-",
      "Ultra-low band-width requirement – high scalability",
      "Health education & awareness programs, School health survey by CHWs",
      "Disease surveillance programs – cervical cancer, women’s reproductive health",
      "Cohort studies – diabetes, hypertension",
    ],
  },
  uniqueness: {
    title: "Uniqueness",
    items: [
      "Technical evaluation by High-power Committee of IIT Kharagpur.",
      "Doctor-driven(GP & Specialists)& Community Health Worker delivered.",
      "Livelihood generation for rural youth with low formal education.",
      "Innovative frugal diagnostics for the last-mile population.",
      "Health data; Heat maps of diseases, Risk score, Public health policy.",
      "Scalable & Replicable, minimal infrastructure, Easy customisability.",
    ],
  },
  pillars: [
    {
      title: "Disruptive access",
      description:
        "Mobile units reach last-mile, even at ultra low band-width; minimal infrastructure.",
    },
    {
      title: "Integrated care",
      description:
        "Physical dental & mental, capacity-building & behavior change.",
    },
    {
      title: "Democratisation",
      description:
        "Accurate diagnostics, Genuine medicines, GP & Specialists, public health programs.",
    },
    {
      title: "Improved quality",
      description:
        "Data & process-driven, evidence-based, AI-enabled(under development).",
    },
    {
      title: "Affordability",
      description: "Cost lower than current alternatives(direct & indirect).",
    },
    {
      title: "Measurable outcome",
      description:
        "Cohort-based monitoring of NCD & Inf. Diseases, public health survillance.",
    },
  ],
  clinicWorkflow: {
    title: "How does the clinic work",
    steps: [
      {
        title: "Patient arrives",
        description: "",
      },
      {
        title: "Clinical Data Entry",
        description:
          "CHW records patient data as directed by the software algorithm triggered by the symptom",
      },
      {
        title: "Real-time sharing of data",
        description:
          "History & examination data shared with the remote doctor real-time",
      },
      {
        title: "Remote Consultation",
        description:
          "Doctor reviews data, consults patient over video; records advice and shares with CHW",
      },
      {
        title: "Medical action",
        description:
          "CHW undertakes tests and dispenses medicines as advised. Shares reports with doctor real-time",
      },
      {
        title: "Documentation Completion",
        description:
          "The patient receives a printed prescription, signed by the doctor, along with a follow-up appointment where required.",
      },
      {
        title: "Patient departs",
        description: "",
      },
    ],
  },
  services: [
    {
      title: "Physical health",
      description:
        "Comprehensive physical health services supported by digital health records and specialized care.",
      features: [
        "Digital Health (aligned with National Digital Health Mission)",
        "Fixed clinic and cycle borne mobile unit",
        "Community Health Worker led delivery mode",
        "Digital and in-person consultation",
        "Six (6) GP and Seven (7) specialist doctors",
        "Clinical decision-support software (own development - collaboration with Johns Hopkins University USA)",
        "Innovative technologies – frugal diagnostics, LoRaWAN",
        "Diagnostic tests (blood sugar, hemoglobin, ECG) & Medicines",
        "Sanitary napkins, ORS etc.",
        "School Health Program, WASH",
        "Screening program for diabetes, hypertension and heart diseases",
        "Community health education and awareness",
      ],
    },
    {
      title: "Dental health",
      description:
        "Essel Mining & Industries Limited (Aditya Birla Group) has handed a fully equipped custom designed dental van to FIH through their CSR program. Quality dental services is being provided to the rural population of West Bengal.",
    },
    {
      title: "Mental health",
      description:
        "The specialists from NIMHASNS, Bangalore have upskilled over 100 Health Workers as Community Mental Health Workers through an online program. Mental health services are being provided, under supervision of doctors from NIMHANS, into the rural communities.",
    },
  ],
};
