export type Project = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  description: string;
  image: string;
  status: "active" | "completed" | "upcoming";
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Mission Feeds Initiative",
    slug: "mission-feeds",
    summary: "Providing regular nutritious meals to vulnerable families.",
    description:
      "Mission Feeds is a large-scale feeding initiative focused on providing nutritious meals to widows, children, and low-income families in rural communities.",
    image: "/projects/mission-feeds.jpg",
    status: "active",
  },
  {
    id: "2",
    title: "Empower 1,000 Vulnerable Children",
    slug: "empower-1000-children",
    summary: "Equipping children through education, mentoring and skills training.",
    description:
      "This project supports vulnerable children with school materials, mentorship, leadership training, and psychosocial care.",
    image: "/projects/empower-children.jpg",
    status: "active",
  },
  {
    id: "3",
    title: "Farm Training Expansion",
    slug: "farm-training-expansion",
    summary: "Expanding vocational agricultural trainings in rural areas.",
    description:
      "This project focuses on training young people and women in sustainable farming and agribusiness practices.",
    image: "/projects/farm-training.jpg",
    status: "upcoming",
  },
];
