export type StoryCategory = "Feeding" | "Empowerment" | "Discipleship";
export type FarmItemType = "Product" | "Training";
export type TripType = "Commercial" | "Mission";

export interface Story {
  id: string;
  title: string;
  category: StoryCategory;
  excerpt: string;
  image: string;
  date: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface FarmItem {
  id: string;
  title: string;
  type: FarmItemType;
  description: string;
  image: string;
  priceLabel: string;
  inStock: boolean;
}

export interface Trip {
  id: string;
  title: string;
  type: TripType;
  date: string;
  description: string;
}


export const MOCK_STORIES: Story[] = [
  {
    id: "story-1",
    title: "Community Outreach Program",
    category: "Feeding",
    excerpt:
      "A large community received hot meals, groceries, and prayer support during our quarterly outreach.",
    image: "/about.jpeg",
    date: "2025-02-10",
  },
  {
    id: "story-2",
    title: "Youth Skill Empowerment Bootcamp",
    category: "Empowerment",
    excerpt:
      "Young adults were trained in digital skills, tailoring, and soap production to help them become self-reliant.",
    image: "/image2.jpg",
    date: "2025-03-18",
  },
  {
    id: "story-3",
    title: "Rural Bible Discipleship Class",
    category: "Discipleship",
    excerpt:
      "Weekly discipleship classes were launched in three rural communities to strengthen spiritual growth.",
    image: "/image8.jpeg",
    date: "2025-04-05",
  },
  {
    id: "story-4",
    title: "Emergency Food Relief Mission",
    category: "Feeding",
    excerpt:
      "Rapid response feeding mission delivered food packs to families affected by seasonal flooding.",
    image: "/about.jpeg",
    date: "2025-05-22",
  },
];


export const MOCK_PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Mission to Empower 1000 Needy",
    description:
      "A mission to empower 1000 needy people with food, clothing, and prayer support.",
    image: "/project1.jpeg",
  },
  {
    id: "story-2",
    title: "Peace of Land with Peace of Mind", 
    description:
      "Mission farmgate. Own a prime land today with prime opportunities.",
    image: "/project2.jpeg",
  },
  
];



export const MOCK_FARM_ITEMS: FarmItem[] = [
  {
    id: "farm-1",
    title: "Full grown Chicken",
    type: "Product",
    description:
      "Full grown chicken for sale.",
    image: "/image6.jpeg",
    priceLabel: "₦20,000 ",
    inStock: true,
  },
  {
    id: "farm-5",
    title: "Liquid Soap",
    type: "Product",
    description:
      "Freshly made liquid soap for personal use.",
    image: "/soap2.jpeg",
    priceLabel: "₦15,000 per 5liters",
    inStock: true,
  },
  {
    id: "farm-6",
    title: "Full Grown Turkey",
    type: "Product",
    description:
      "Full grown turkey for sale.",
    image: "/image7.jpeg",
    priceLabel: "₦60,000",
    inStock: true,
  },
  {
    id: "farm-7",
    title: "Medicinal Plant Nursery",
    type: "Product",
    description:
      "Medicinal plant nursery for sale.",
    image: "/gallery3.png",
    priceLabel: "₦20,000",
    inStock: true,
  },
  {
    id: "farm-8",
    title: "Chicken Farming Training",
    type: "Training",
    description:
      "Hands-on training program teaching modern chicken farming techniques.",
    image: "/image6.jpeg",
    priceLabel: "₦15,000 per session",
    inStock: true,
  },
  {
    id: "farm-2",
    title: "Rabbit Farming Training",
    type: "Training",
    description:
      "Hands-on training program teaching modern rabbit farming techniques.",
    image: "/image5.jpeg",
    priceLabel: "₦15,000 per session",
    inStock: true,
  },
  {
    id: "farm-3",
    title: "Soap Making Workshop",
    type: "Training",
    description:
      "Practical class teaching liquid and bar soap production for income generation.",
    image: "/soap2.jpeg",
    priceLabel: "₦8,000 per participant",
    inStock: false,
  },
  {
    id: "farm-4",
    title: "Medicinal Plant Nursery",
    type: "Training",
    description:
      "Hands-on training program teaching modern medicinal plant nursery techniques.",
    image: "/gallery3.png",
    priceLabel: "₦30,000 per participant",
    inStock: true,
  },
];



export const MOCK_TRIPS: Trip[] = [
  {
    id: "trip-1",
    title: "Northern Nigeria Rural Missions Tour",
    type: "Mission",
    date: "2025-06-15",
    description:
      "A 10-day mission trip focused on evangelism, medical outreach, and food distribution.",
  },
  {
    id: "trip-2",
    title: "Cross River Eco-Tourism Experience",
    type: "Commercial",
    date: "2025-07-20",
    description:
      "A guided tourism trip exploring waterfalls, wildlife, and cultural heritage sites.",
  },
  {
    id: "trip-3",
    title: "Village Church Planting Journey",
    type: "Mission",
    date: "2025-08-05",
    description:
      "A faith-focused trip aimed at planting churches and training local leaders.",
  },
  {
    id: "trip-4",
    title: "Jos Plateau Adventure & Outreach",
    type: "Commercial",
    date: "2025-09-12",
    description:
      "A blended travel and outreach experience combining tourism with community service.",
  },
];


export interface ImpactStat {
  id: string;
  label: string;
  value: string;
}

export const IMPACT_STATS: ImpactStat[] = [
  {
    id: "stat-1",
    label: "Meals Served",
    value: "3,200+",
  },
  {
    id: "stat-2",
    label: "Youth Empowered",
    value: "850+",
  },
  {
    id: "stat-3",
    label: "Communities Reached",
    value: "40+",
  },
  {
    id: "stat-4",
    label: "Mission Trips",
    value: "25+",
  },
];



export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-1",
    name: "Rev. Emmanuel Okorie",
    role: "Founder & President",
    image: "/team/founder.jpg",
  },
  {
    id: "team-2",
    name: "Grace Nwafor",
    role: "Programs Coordinator",
    image: "/team/programs.jpg",
  },
  {
    id: "team-3",
    name: "Daniel Chukwu",
    role: "Farm & Training Supervisor",
    image: "/team/farm.jpg",
  },
];



export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export const PARTNERS: Partner[] = [
  {
    id: "partner-1",
    name: "Harvest Initiative",
    logo: "/partners/harvest.png",
  },
  {
    id: "partner-2",
    name: "FaithWorks Africa",
    logo: "/partners/faithworks.png",
  },
  {
    id: "partner-3",
    name: "Hope Builders",
    logo: "/partners/hopebuilders.png",
  },
];

