import { HeroContent } from "@/types/content";
import { CareerEntry } from "@/types/content";
import { Project } from "@/types/content";

export const hero: HeroContent = {
  greeting: "Hey, I'm Krutarth 👋",
  tagline:
    "Frontend-focused Full Stack Developer — React,Node.js,Next.js, TypeScript, PostgreSQL",
  note: "Currently building at a govtech company",
  resumeUrl: "/resume.pdf",
};

export const career: CareerEntry[] = [
  {
    index: "001",
    company: "Ciklum ",
    role: "Software Engineer",
    detail:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged.",
    period: "Jul 2024 — Oct 2025",
    tech:["Angular","React","Node.js","Next.js","TypeScript","PostgreSQL"]
  },
  {
    index: "002",
    company: "Goa Electronics Limited",
    role: "Software Engineer",
    detail: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged.",
    period: "Feb 2026 — Present",
    tech:["React","JavaScript","PostgreSQL"]
  },
];

export const projects: Project[] = [
  {
    id: "folio",
    name: "Folio",
    tag: "Fullstack",
    description: "A Notion-style writing + diagramming workspace with real-time save conflict handling.",
    color: "white",
  },
  {
    id: "taskflow",
    name: "TaskFlow",
    tag: "Frontend",
    description: "A project management dashboard with drag-and-drop task boards.",
    color: "blue",
  },
];