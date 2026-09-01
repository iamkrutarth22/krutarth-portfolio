import { HeroContent, ProjectCaseStudy } from "@/types/content";
import { CareerEntry } from "@/types/content";

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
    detail:
      "ciklum is a global software engineering and technology partner that provides end-to-end solutions for businesses. As a Software Engineer at Ciklum, I was responsible for developing and maintaining web applications, collaborating with cross-functional teams, and implementing best practices in software development.",
    period: "Jul 2024 — Oct 2025",
    tech: [
      "Angular",
      "React",
      "Node.js",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
    ],
  },
  {
    index: "002",
    company: "Goa Electronics Limited",
    role: "Software Engineer",
    detail:
      "Goa Electronics Limited is a leading manufacturer of electronic components and systems. As a Software Engineer at Goa Electronics, I was responsible for developing and maintaining software solutions, collaborating with cross-functional teams, and implementing best practices in software development.",
    period: "Feb 2026 — Present",
    tech: ["React", "JavaScript", "PostgreSQL"],
  },
];

// export const projects: Project[] = [
//   {
//     id: "folio",
//     name: "Folio",
//     tag: "Fullstack",
//     description: "A Notion-style writing + diagramming workspace with real-time save conflict handling.",
//     color: "white",
//   },
//   {
//     id: "taskflow",
//     name: "TaskFlow",
//     tag: "Frontend",
//     description: "A project management dashboard with drag-and-drop task boards.",
//     color: "blue",
//   },
// ];
export const projects: ProjectCaseStudy[] = [
  {
    slug: "folio",
    name: "Folio",
    subtitle: "Writing & Diagramming Workspace",
    summary: "Single-user document workspace combining a TipTap rich-text editor with an embedded Excalidraw canvas, together with real-time auto-save and export.",
    architecture: `Folio combines a Tiptap rich-text editor with an embedded Excalidraw canvas, toggled per document...`,
    images: [],
    tag: "Fullstack",
    accentColor: "bg-blue-500",
    techStack: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "TipTap", "Excalidraw"],
    githubUrl: "https://github.com/iamkrutarth22/fullstack-poc",
    // liveUrl: omitted — shows "Demo coming soon"
  },
  {
    slug: "taskflow",
    name: "TaskFlow",
    subtitle: "Project Management Dashboard",
    summary: "Built end-to-end in a short, focused timeframe — auth flow, dashboard, project details, task filtering, and theming. Backend fully decoupled via a seeded MSW mock-API layer.",
    architecture: `TaskFlow's backend is fully decoupled via a seeded MSW mock-API layer...`,
    images: [],
    tag: "Frontend",
    accentColor: "bg-amber-500",
    techStack: ["React", "TypeScript", "Redux Toolkit", "MSW", "Tailwind CSS", "Docker"],
    githubUrl: "https://github.com/iamkrutarth22/taskflow-krutarth-haldankar",
    // liveUrl: omitted — shows "Demo coming soon"
  },
  {
    slug: "portfolio",
    name: "This Portfolio",
    subtitle: "Interactive Developer Portfolio",
    summary: "The site you're on right now — a GSAP-driven portfolio with a pinned scroll-triggered career section, a scroll-position-linked dark mode transition, an infinite draggable project carousel, and shareable case-study routes.",
    architecture: `Built with Next.js App Router and driven almost entirely by GSAP. The Career section uses a pinned ScrollTrigger with scrub + snap to step through roles without ghosting or lag, and drives a dark "terminal" theme transition directly off that same trigger's onEnter/onLeave — avoiding the boundary drift that comes from using two separate triggers for animation and theme. Smooth scroll is handled by Lenis, synced to GSAP's own ticker rather than the browser's native scroll. This Projects carousel uses GSAP Draggable with inertia and a wrap-based infinite loop, with click-vs-drag correctly disambiguated via Draggable's own onClick threshold rather than manual touch detection. Project detail pages use Next.js intercepting routes, so opening a project from the board renders as an in-context overlay, while the same URL visited directly renders as a full standalone page.`,
    images: [],
    tag: "Frontend",
    accentColor: "bg-teal-500",
    techStack: ["Next.js", "TypeScript", "GSAP", "Lenis", "Tailwind CSS"],
    githubUrl: "https://github.com/iamkrutarth22/krutarth-portfolio",
    // liveUrl: add once deployed
  },
];