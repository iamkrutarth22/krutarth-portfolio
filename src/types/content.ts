export interface HeroContent {
  greeting: string;
  tagline: string;
  note: string;
  resumeUrl: string;
}

export interface CareerEntry {
  index: string;       // "001", "002"
  company: string;
  role: string;
  detail: string;
  period: string;
  tech: string[]; // List of technologies used in the role
}


export interface Project {
  id: string;
  name: string;
  tag: "Frontend" | "Fullstack";
  description: string;
  color: "white" | "blue";
}