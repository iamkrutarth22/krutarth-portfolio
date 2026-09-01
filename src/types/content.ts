export interface HeroContent {
  greeting: string;
  tagline: string;
  note: string;
  resumeUrl: string;
}

export interface CareerEntry {
  index: string;
  company: string;
  role: string;
  detail: string;
  period: string;
  tech: string[];
}

// export interface ProjectCaseStudy {
//   slug: string;
//   name: string;
//   summary: string;
//   architecture: string;
//   images?: string[];
//   tag: "Frontend" | "Fullstack";
//   color: "white" | "blue" | "mint" | "coral" | "yellow";
// }

export interface ProjectCaseStudy {
  slug: string;
  name: string;
  subtitle: string;       // short italic tagline, e.g. "Writing & Diagramming Workspace"
  summary: string;
  architecture: string;
  images?: string[];
  tag: "Frontend" | "Fullstack";
  accentColor: string;    // Tailwind bg class for the top bar, e.g. "bg-blue-500"
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;       // omit if there's no live demo yet
}