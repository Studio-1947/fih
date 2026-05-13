export interface EventItem {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
}

export const eventsContent: EventItem[] = [
  {
    id: "nit-meghalaya",
    title: "MoU with NIT Meghalaya",
    description:
      "NIT Meghalaya has signed a Memorandum of Understanding (MoU) with DOT Inc. (Seoul), the Foundation for Innovations in Health (FIH), and a consortium of global universities to train 15 visually impaired individuals as software programmers.",
    image: "/events/MoU%20with%20NIT%20Meghalaya.jpg",
    date: "2025-09-01",
  },
  {
    id: "iit-kharagpur",
    title: "MoU with IIT Kharagpur",
    description:
      "Dr. B.C. Roy Multispecialty Medical Research Centre at IIT Kharagpur has signed a Memorandum of Understanding (MoU) with the Foundation for Innovations in Health (FIH), engaging FIH as the 'Skill and Knowledge Partner' for the Allied Health Professional Education Program at the IIT Kharagpur teaching hospital.",
    image: "/events/MoU%20with%20IIT%20Kharagpur.jpg",
    date: "2025-09-01",
  },
  {
    id: "uday",
    title: "Inauguration of UDAY – Healthcare at the Doorstep",
    description:
      "Hon'ble Member of Parliament Smt. Pratima Mondal (Jaynagar Loksabha Constituency, West Bengal), Shri Abhijit Ghosh, Director (HR & CA) Balmer Lawrie & Co. Ltd., inaugurated Uday — Healthcare at the doorstep, a CSR initiative of Balmer Lawrie & Co. Ltd.",
    image: "/events/Inaguration%20of%20UDAY%20-%20Healthcare%20at%20the%20doorstep.jpg",
    date: "2025-09-01",
  },
  {
    id: "stanford",
    title: "Recognition from Stanford University",
    description:
      "FIH's work is recognized among the top 40 global changemakers by Stanford University.",
    image: "/events/Recognition%20from%20Stanford%20University.png",
    date: "2025-07-01",
  },
  {
    id: "igl-setu",
    title: "Inauguration of IGL SETU Program",
    description:
      "The inauguration of IGL SETU (Skilling, Empowering & Training the Underserved) was held in the esteemed presence of IGL dignitaries. Under this initiative, 180 rural and semi-urban youth will be trained as allied health professionals across the districts of Banda and Fatehpur in Uttar Pradesh.",
    image: "/events/Inauguration%20of%20IGL%20SETU%20program.jpg",
    date: "2025-09-01",
  },
];
