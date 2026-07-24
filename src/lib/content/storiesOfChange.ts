export type StorySection = {
  heading: string;
  paragraphs: string[];
  imagePath?: string;
};

export type Testimonial = {
  name: string;
  description: string;
  imagePath: string;
};

export type StoriesOfChangeContent = {
  hero: {
    bannerHook: string;
    title: string;
    description: string;
    bgImagePath: string;
  };
  sections: StorySection[];
  testimonials: Testimonial[];
};

export const storiesOfChangeContent: StoriesOfChangeContent = {
  hero: {
    bannerHook:
      "Healthcare That Reaches You… Even in the hard-to-reach Remote Corners of Sundarbans",
    title: "Floating Digital Clinic at Sundarbans",
    description:
      "The Sundarbans Biosphere Reserve is the world’s largest delta and mangrove forest, spanning 9,630 sq. km, including over 4,200 sq. km of ecologically critical mangroves. This unique landscape is divided into 102 islands, of which 54 are inhabited, supporting a population of more than 4.4 million people, many of whom live in extreme isolation with limited access to essential services.",
    bgImagePath: "/stories_of_change/floating digital clinic.jpg",
  },
  sections: [
    {
      heading: "A region on the frontlines of climate change",
      imagePath: "/floating/IMG20231130153542 (1).jpg",
      paragraphs: [
        "The Sundarbans faces recurrent climate disasters due to its fragile geography. Cyclones such as Cyclone Amphan, Cyclone Yaas, Cyclone Fani, and Cyclone Bulbul have caused widespread devastation, resulting in loss of lives, large-scale displacement, and economic damage of nearly USD 20 billion.",
        "Rising sea levels, increasing salinity, coastal erosion, and frequent tidal flooding continue to disrupt livelihoods and intensify poverty. These conditions significantly impact public health, while simultaneously making access to healthcare even more difficult.",
      ],
    },
    {
      heading: "Bridging the healthcare gap",
      imagePath: "/floating/IMG20220519145411 (1).jpg",
      paragraphs: [
        "To address this critical need, the Floating Digital Clinic was introduced, an innovative solution designed to overcome geographical barriers and deliver healthcare directly to underserved communities.",
        "A purpose-modified, fully equipped medical boat travels across six remote islands, providing accessible primary healthcare services. Onboard, professionally certified health workers, trained from local SC/ST communities, deliver essential care, supported by real-time consultations with qualified doctors and specialists through a digital platform.",
      ],
    },
    {
      heading: "Impact that matters",
      imagePath: "/floating/impact-that-matters.webp",
      paragraphs: [
        "This model ensures that even the most vulnerable populations receive timely, quality healthcare, right where they are. Beyond service delivery, it creates local employment, builds community capacity, and strengthens resilience in one of the most climate-vulnerable regions in the world.",
      ],
    },
    // {
    //   heading: "A Scalable Model for the Future",
    //   imagePath: "/floating/IMG20230131134813 (1).jpg",
    //   paragraphs: [
    //     "The success of the Floating Digital Clinic lies in its integration of the 3T Model: Training local youth, leveraging deep-science Technology, and implementing Task-shifting to ensure medical expertise reaches the last mile.",
    //     "This data-driven approach allows for real-time monitoring of patient outcomes and environmental impacts, making it a replicable blueprint for remote healthcare delivery globally.",
    //   ],
    // },
  ],
  testimonials: [
    {
      name: "Dhina Mardi",
      description:
        "Dhina Mardi, 59 years old, a resident of Khairabad Village, Rajnagar Block, Birbhum was suffering from high blood pressure and weakness. Referred by another patient, she visited our digital clinic “Uday” in Rajnagar, Birbhum. She was diagnosed with hypertension and received treatment from our clinic. Dhina is doing well now and happy with the care. She further recommends the clinic and the services to everyone else in her village.",
      imagePath: "/stories_of_change/testomonial/Dhina Mardi.jpg",
    },
    {
      name: "Sushama Mondal",
      description:
        "Sushama Mondal, 41 yrs, resident of Kumirmari at The Sunderban Islands, was suffering from tiredness and loss of hair; when, prompted by her neighbour, she visited “Uday”, the floating digital primary care clinic in Sunderban. She was diagnosed with Hypothyroidism, received treatment and is well now. She attends regular follow-up.",
      imagePath: "/stories_of_change/testomonial/Sushama Mondal.jpg",
    },
    {
      name: "Trupti Minde",
      description:
        "Trupti’s journey began when she learned about School for Skills: Allied Health Sciences (SFS), Raigad, a unit of Foundation for Innovations in Health. She received high-quality training at SFS in the domain of healthcare, a field she had always been passionate about. Support from Mahanagar Gas Limited (MGL) allowed Trupti to focus solely on her training without the burden of financial stress. She excelled, gaining not only knowledge but also confidence in her abilities. She is currently employed as Doula Nurse at Cloud Nine Hospital, Vashi, earning a monthly salary of ₹20,000. Trupti’s success inspired others in and around her village — many followed in her footsteps, seeking opportunities that once seemed out of reach, bringing a new sense of hope and prosperity to Mahad.",
      imagePath: "/stories_of_change/testomonial/Trupti Minde.jpg",
    },
    {
      name: "Sonali Vilas Pawar",
      description:
        "She is a 18 year old girl from Sheargaon village of Mahad, Raigad. After completing class XII, she started working in a small shop as a Helper to support her family. She could not pursue higher education due to financial challenges. Once she got the opportunity to enrol for the healthcare training program at ''School for Skills: Allied Health Sciences, Raigad'', she immediately took admission. She completed ''General Duty Assistant'' course and she was certified by Healthcare Sector Skill Council. Her course fee was sponsored by Mahanagar Gas Limited through their CSR program. She is now working as a Nursing Assistant in Healing Hand Clinic, Pune. Her monthly remuneration is Rs. 12000/-",
      imagePath: "/stories_of_change/testomonial/Sonali Vilas Pawar.jpg",
    },
    {
      name: "Sanju Adhikary",
      description:
        "After completing graduation, he was unemployed & could not pursue higher studies due to financial constraints. He pursued ‘Emergency Medical Technician – Basic’ course at School for Skills: Allied Health Sciences, Chuchura centre, Hooghly, West Bengal. At present, he is working at Apollo Hospitals Enterprise Limited in Chennai as ‘Public Relationship Officer’ with a monthly salary of Rs.20,000/-.",
      imagePath: "/stories_of_change/testomonial/Sanju Adhikary.jpg",
    },
    {
      name: "Sangita Mandal",
      description:
        "She pursued ‘Medical Laboratory Technology’ course at School for Skills: Healthcare & Technology at IIT Guwahati. She got selected for a project under ICMR- National Institute of Nutrition on ‘’Diet and Biomarkers Survey in India’’, funded by ICMR. She has been selected as Project Lab Technician with a monthly salary of Rs.18,000/-",
      imagePath: "/stories_of_change/testomonial/Sangita Mandal.jpg",
    },
    {
      name: "Tajmina Khatun",
      description:
        "Overcoming socioeconomic vulnerability, she is now employed at Tata Medical Centre, Kolkata as Healthcare Assistant (HCA), with a monthly salary of Rs. 15,818/-. She pursued ‘General Duty Assistant’ course at School for Skills: Allied Health Sciences, Sonarpur, South 24 Pargana, West Bengal. She was financially supported by the Thoughtshop Foundation.",
      imagePath: "/stories_of_change/testomonial/Tajmina Khatun.jpg",
    },
    {
      name: "Samapti Halder",
      description:
        "After completing class XII, she could not pursue higher studies due to financial constraints. She pursued ‘General Duty Assistant’ course at School for Skills: Allied Health Sciences, Sonarpur centre, South 24 Pargana, West Bengal. At present, she is working at RG Stone City Clinic, Kolkata as ''Clinic Attendant'' with a monthly salary of Rs. 11,000/-.",
      imagePath: "/stories_of_change/testomonial/Samapti Halder.jpg",
    },
    {
      name: "John Mary Subba",
      description:
        "She is from Kalimpong. Overcoming the geographical barrier and financial constraints, she is currently working in Cloud Nine Hospital, Bangalore with a monthly salary of Rs. 19,000/-",
      imagePath: "/stories_of_change/testomonial/John Mary Subba.jpg",
    },
    {
      name: "Raj Anil Fule",
      description:
        "He lost his parents at a very young age. He was supported by Prakash Institute and completed his class X. After completion, he was engaged in informal sector self-employment. He pursued ''General Duty Assistant'' course from ''School for Skills: Allied Health Sciences, Nagpur''. His course fee was sponsored by Western Coalfields Ltd. (Coal India Ltd.) through their CSR program. Currently, he is working in Ratna Memorial Hospital, Pune as a certified ''Patient Care Assistant'' with a monthly CTC of Rs.15,000/-.",
      imagePath: "/stories_of_change/testomonial/Raj Anil Fule.jpg",
    },
    {
      name: "Achal Ramesh Jadhao",
      description:
        "She belongs to the Banjara community (NT). She pursued ''General Duty Assistant'' course from ''School for Skills: Allied Health Sciences, Nagpur''. Her course fee was sponsored by Western Coalfields Ltd. (Coal India Ltd.) through their CSR program. Currently, she is working in Ratna Memorial Hospital, Pune as a certified ''Patient Care Assistant'' with a monthly CTC of Rs.15,000/-.",
      imagePath: "/stories_of_change/testomonial/Achal Ramesh Jadhao.jpg",
    },
    {
      name: "Puspalata Mondal",
      description:
        "She is a certified Frontline Health Worker. She has one daughter. Currently, she is delivering primary care and public health to the last mile population of Sundarbans through the Floating Digital Clinic. She is working along with husband in this digital clinic program.",
      imagePath: "/stories_of_change/testomonial/Puspalata Mondal.jpg",
    },
    {
      name: "Aanchal and Prachi",
      description:
        "Growing up in the remote villages of Fatehpur, Uttar Pradesh, Aanchal and Prachi aspired to build independent and meaningful careers despite limited opportunities in their communities. They enrolled in a structured healthcare skill development programme at the School for Skills: Allied Health Sciences, Fatehpur, a unit of Foundation for Innovations in Health, which equipped them with comprehensive theoretical knowledge, hands-on practical training, and workplace readiness. Financial support from Indraprastha Gas Limited (IGL) allowed them to complete their training without the burden of economic constraints. Both now serve as Patient Care Assistants at Medanta Hospital, Lucknow, earning a monthly salary of ₹14,000. Their journey demonstrates that with access to quality skill development and determination, girls from rural communities can overcome barriers and build successful professional careers.",
      imagePath: "/stories_of_change/testomonial/Aanchal and Prachi.jpg",
    },
    {
      name: "Komal Dnyaneshwar Somkuwar",
      description:
        "Komal always aspired to build a meaningful career in the healthcare sector, but limited opportunities and financial constraints made her goal seem distant. Her life took a positive turn when she enrolled in the School for Skills: Allied Health Sciences (SFS), Nagpur, a unit of Foundation for Innovations in Health. The structured training programme equipped her with the technical expertise, practical exposure, and professional values essential for a career in patient care, and support extended by Western Coalfields Limited (WCL) enabled her to study without financial hardship. She is currently employed as Patient Care Assistant Supervisor at Ruby Hall Clinic, Pune, earning a monthly salary of ₹20,000. Her achievement has become a source of encouragement for many young people in her community.",
      imagePath: "/stories_of_change/testomonial/Komal Dnyaneshwar Somkuwar.jpg",
    },
    {
      name: "Shilpa Devanand Khobragade",
      description:
        "Shilpa transformed her aspiration of working in healthcare into reality through the training received at the School for Skills: Allied Health Sciences (SFS), Nagpur, a unit of Foundation for Innovations in Health. With the financial support of Western Coalfields Limited (WCL), she successfully completed her skill development programme and gained the confidence and practical knowledge needed to begin her professional journey. Today, Shilpa is employed as Supervisor at Shree Anandpur Charitable Trust Diagnostic Center, Pune, earning a monthly salary of ₹25,000. Her journey is an inspiring example of how the right training and support can lead to sustainable employment and a brighter future.",
      imagePath: "/stories_of_change/testomonial/Shilpa Devanand Khobragade.jpg",
    },
    {
      name: "Simi Patar",
      description:
        "Hailing from a small village in Dibrugarh, Simi Patar dreamed of building a career that would allow her to serve her community while achieving financial independence. She enrolled at the School for Skills: Allied Health Sciences (SFS), Dibrugarh, where she received quality training, practical exposure, and the confidence to pursue a profession in healthcare. With the support of Brahmaputra Cracker & Polymer Limited (BCPL), Simi successfully completed her training and secured employment at Dibrugarh Cancer Centre, earning a monthly salary of ₹11,550 — an important milestone in her journey toward a stable and dignified livelihood. Her journey serves as an inspiration for others in her village.",
      imagePath: "/stories_of_change/testomonial/Simi Patar.jpg",
    },
  ],
};
