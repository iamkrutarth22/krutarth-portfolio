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
  summary: string;        // 1-2 lines, card + meta description
  tagline?: string;        // short subtitle, you already show this in the modal (image 4)
  sections: {               // structured write-up instead of one string
    heading: string;
    body: string;
  }[];
  tech: string[];           // formalize this — it's already rendering in your screenshot but isn't in the type
  githubUrl?: string;
  demoUrl?: string;
  images?: string[];
  tag: "Frontend" | "Fullstack";
  color: "white" | "blue" | "mint" | "coral" | "yellow";
}

export interface ContactLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "mail";
}

export interface ContactContent {
  heading: string;
  subtext: string;
  links: ContactLink[];
}

export interface TechCategory {
  category: string;
  items: string[];
}