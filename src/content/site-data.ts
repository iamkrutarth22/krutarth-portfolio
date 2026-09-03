import {
  ContactContent,
  HeroContent,
  ProjectCaseStudy,
  TechCategory,
} from "@/types/content";
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

// export const projects: ProjectCaseStudy[] = [
//   {
//     slug: "folio",
//     name: "Folio",
//     subtitle: "Writing & Diagramming Workspace",
//     summary: `Folio is a single-user writing and diagramming workspace — think Notion meets Eraser.io. It combines a rich text editor powered by Tiptap with a freehand canvas powered by Excalidraw, letting users switch between writing prose and sketching diagrams within the same document without losing either state.

// The core engineering challenge was building a production-grade autosave system: instead of naive full-document PUT requests on every keystroke, Folio uses a debounced PATCH endpoint that sends only the changed delta, gated by a version integer for optimistic concurrency control. If the same document is open in two tabs simultaneously, the tab with the stale version gets a 409 conflict response — preventing silent data loss. This is the same pattern used by Notion and Linear under the hood.

// Documents persist their working draft to Redux Persist (localStorage) between sessions, syncing to the backend every 30 seconds or immediately on tab close. The last 10 version snapshots are stored in a separate DocumentVersion table and viewable in the UI, with older snapshots pruned automatically to keep storage bounded.

// Auth is built entirely from scratch — no Auth0, no Firebase. It includes JWT access and refresh tokens with silent refresh via an Axios interceptor, OTP email verification for new signups using Nodemailer + Gmail (with bcrypt-hashed OTPs and a 5-minute expiry), and the foundation for GitHub and Google OAuth via Passport.js. Unverified users are blocked from login at the API level. After OTP verification succeeds, the backend issues a JWT immediately so the user lands in the workspace without a separate login step.`,

//     architecture: `The system is split into a React + TypeScript frontend (Vite) and a Node.js + Express + TypeScript backend, connected via a REST API with JWT authentication.

// Frontend state is managed by Redux Toolkit with Redux Persist for cross-session draft recovery. React Query handles server-state fetching (document list, single document on selection). The document slice tracks the active document, its dirty state, save status, and current mode (text or diagram). A custom useDocumentSync hook reads from a ref — not from React state — to avoid triggering re-renders inside the 30-second interval, which was the root cause of the Excalidraw infinite update loop.

// The Tiptap editor is configured with StarterKit, Underline, CodeBlockLowlight (with syntax highlighting via highlight.js), Blockquote, Placeholder, and a custom BubbleMenu and FloatingMenu. Content is stored as Tiptap JSON.

// Excalidraw is wrapped in a memoized component with a version-sum change detector: on every onChange event, the component sums the version numbers of all elements and skips the Redux dispatch if the sum hasn't changed. This prevents Excalidraw's internal viewport and appState changes from triggering unnecessary re-renders. The collaborators Map is stripped before storing appState in Redux since Maps are not serializable. Diagram state (elements + files) is stored alongside text content in a single structured JSON field: { mode, text: {...tiptap json}, diagram: { elements: [...], files: {...} } }.

// The backend uses Prisma ORM with PostgreSQL on Neon. The schema has six models: User, UserAuth (passwords, refresh tokens, OTP), OAuthAccount (for future OAuth providers), Document, DocumentVersion, and a planned relation for version pruning. The PATCH /documents/:id endpoint performs a version check, creates a DocumentVersion snapshot, updates the document, and prunes snapshots beyond 10 — all within a Prisma transaction to prevent partial writes.

// The Axios interceptor implements a request queue pattern: when a 401 is received, all in-flight requests are paused and queued while a single token refresh request goes out. On success, the queue is drained with the new token. On failure, the user is force-logged out. This prevents race conditions where multiple parallel requests each independently try to refresh the token.`,

//     images: [],

//     tag: "Fullstack",

//     accentColor: "bg-emerald-700",

//     techStack: [
//       "React",
//       "TypeScript",
//       "Vite",
//       "Redux Toolkit",
//       "Redux Persist",
//       "React Query",
//       "Tiptap",
//       "Excalidraw",
//       "Tailwind CSS",
//       "ShadCN UI",
//       "React Hook Form",
//       "Yup",
//       "Axios",
//       "Node.js",
//       "Express",
//       "Prisma ORM",
//       "PostgreSQL",
//       "Neon",
//       "JWT",
//       "Nodemailer",
//       "Bcrypt",
//       "Docker",
//     ],

//     githubUrl: "https://github.com/iamkrutarth22/fullstack-poc",
//     liveUrl: undefined,
//   },
//   {
//     slug: "taskflow",
//     name: "TaskFlow",
//     subtitle: "Project Management Dashboard",
//     summary:
//       "Built end-to-end in a short, focused timeframe — auth flow, dashboard, project details, task filtering, and theming. Backend fully decoupled via a seeded MSW mock-API layer.",
//     architecture: `TaskFlow's backend is fully decoupled via a seeded MSW mock-API layer...`,
//     images: [],
//     tag: "Frontend",
//     accentColor: "bg-amber-500",
//     techStack: [
//       "React",
//       "TypeScript",
//       "Redux Toolkit",
//       "MSW",
//       "Tailwind CSS",
//       "Docker",
//     ],
//     githubUrl: "https://github.com/iamkrutarth22/taskflow-krutarth-haldankar",
//     // liveUrl: omitted — shows "Demo coming soon"
//   },
//   {
//     slug: "portfolio",
//     name: "This Portfolio",
//     subtitle: "Interactive Developer Portfolio",
//     summary:
//       "The site you're on right now — a GSAP-driven portfolio with a pinned scroll-triggered career section, a scroll-position-linked dark mode transition, an infinite draggable project carousel, and shareable case-study routes.",
//     architecture: `Built with Next.js App Router and driven almost entirely by GSAP. The Career section uses a pinned ScrollTrigger with scrub + snap to step through roles without ghosting or lag, and drives a dark "terminal" theme transition directly off that same trigger's onEnter/onLeave — avoiding the boundary drift that comes from using two separate triggers for animation and theme. Smooth scroll is handled by Lenis, synced to GSAP's own ticker rather than the browser's native scroll. This Projects carousel uses GSAP Draggable with inertia and a wrap-based infinite loop, with click-vs-drag correctly disambiguated via Draggable's own onClick threshold rather than manual touch detection. Project detail pages use Next.js intercepting routes, so opening a project from the board renders as an in-context overlay, while the same URL visited directly renders as a full standalone page.`,
//     images: [],
//     tag: "Frontend",
//     accentColor: "bg-teal-500",
//     techStack: ["Next.js", "TypeScript", "GSAP", "Lenis", "Tailwind CSS"],
//     githubUrl: "https://github.com/iamkrutarth22/krutarth-portfolio",
//     // liveUrl: add once deployed
//   },
// ];

export const projects: ProjectCaseStudy[] = [
  {
    slug: "folio",
    name: "Folio",
    tagline: "Writing & Diagramming Workspace",
    summary:
      "A single-user writing and diagramming workspace — think Notion meets Eraser.io — with a production-grade autosave system built from scratch.",
    sections: [
      {
        heading: "Overview",
        body: "Folio is a single-user writing and diagramming workspace — think Notion meets Eraser.io. It combines a rich text editor powered by Tiptap with a freehand canvas powered by Excalidraw, letting users switch between writing prose and sketching diagrams within the same document without losing either state.",
      },
      {
        heading: "Autosave & Conflict Resolution",
        body: "The core engineering challenge was building a production-grade autosave system: instead of naive full-document PUT requests on every keystroke, Folio uses a debounced PATCH endpoint that sends only the changed delta, gated by a version integer for optimistic concurrency control. If the same document is open in two tabs simultaneously, the tab with the stale version gets a 409 conflict response — preventing silent data loss. This is the same pattern used by Notion and Linear under the hood.",
      },
      {
        heading: "Data Persistence",
        body: "Documents persist their working draft to Redux Persist (localStorage) between sessions, syncing to the backend every 30 seconds or immediately on tab close. The last 10 version snapshots are stored in a separate DocumentVersion table and viewable in the UI, with older snapshots pruned automatically to keep storage bounded.",
      },
      {
        heading: "Authentication",
        body: "Auth is built entirely from scratch — no Auth0, no Firebase. It includes JWT access and refresh tokens with silent refresh via an Axios interceptor, OTP email verification for new signups using Nodemailer + Gmail (with bcrypt-hashed OTPs and a 5-minute expiry), and the foundation for GitHub and Google OAuth via Passport.js. Unverified users are blocked from login at the API level. After OTP verification succeeds, the backend issues a JWT immediately so the user lands in the workspace without a separate login step.",
      },
      {
        heading: "Frontend Architecture",
        body: "The frontend is React + TypeScript (Vite), with state managed by Redux Toolkit and Redux Persist for cross-session draft recovery, and React Query handling server-state fetching. The document slice tracks the active document, its dirty state, save status, and current mode (text or diagram). A custom useDocumentSync hook reads from a ref — not from React state — to avoid triggering re-renders inside the 30-second interval, which was the root cause of an earlier Excalidraw infinite update loop.\n\nThe Tiptap editor is configured with StarterKit, Underline, CodeBlockLowlight (with syntax highlighting via highlight.js), Blockquote, Placeholder, and a custom BubbleMenu and FloatingMenu. Content is stored as Tiptap JSON.",
      },
      {
        heading: "Diagram Canvas (Excalidraw)",
        body: "Excalidraw is wrapped in a memoized component with a version-sum change detector: on every onChange event, the component sums the version numbers of all elements and skips the Redux dispatch if the sum hasn't changed. This prevents Excalidraw's internal viewport and appState changes from triggering unnecessary re-renders. The collaborators Map is stripped before storing appState in Redux since Maps are not serializable. Diagram state (elements + files) is stored alongside text content in a single structured JSON field: { mode, text: {...tiptap json}, diagram: { elements: [...], files: {...} } }.",
      },
      {
        heading: "Backend & Database",
        body: "The backend is Node.js + Express + TypeScript with Prisma ORM on PostgreSQL (Neon). The schema has six models: User, UserAuth (passwords, refresh tokens, OTP), OAuthAccount (for future OAuth providers), Document, DocumentVersion, and a planned relation for version pruning. The PATCH /documents/:id endpoint performs a version check, creates a DocumentVersion snapshot, updates the document, and prunes snapshots beyond 10 — all within a Prisma transaction to prevent partial writes.",
      },
      {
        heading: "Token Refresh Strategy",
        body: "The Axios interceptor implements a request queue pattern: when a 401 is received, all in-flight requests are paused and queued while a single token refresh request goes out. On success, the queue is drained with the new token. On failure, the user is force-logged out. This prevents race conditions where multiple parallel requests each independently try to refresh the token.",
      },
    ],
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Redux Toolkit",
      "Redux Persist",
      "React Query",
      "Tiptap",
      "Excalidraw",
      "Tailwind CSS",
      "ShadCN UI",
      "React Hook Form",
      "Yup",
      "Axios",
      "Node.js",
      "Express",
      "Prisma ORM",
      "PostgreSQL",
      "Neon",
      "JWT",
      "Nodemailer",
      "Bcrypt",
      "Docker",
    ],
    githubUrl: "https://github.com/iamkrutarth22/fullstack-poc",
    demoUrl: undefined,
    images: [],
    tag: "Fullstack",
    color: "white",
  },
  {
    slug: "taskflow",
    name: "TaskFlow",
    tagline: "Project Management Dashboard",
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry, standard since the 1500s.",
    sections: [
      {
        heading: "Overview",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      },
      {
        heading: "Mock API Layer",
        body: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text.",
      },
      {
        heading: "Auth & Theming",
        body: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words and discovered the undoubtable source in classical literature, a section from De Finibus Bonorum et Malorum by Cicero, written in 45 BC.",
      },
    ],
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "MSW",
      "Tailwind CSS",
      "Docker",
    ],
    githubUrl: "https://github.com/iamkrutarth22/taskflow-krutarth-haldankar",
    demoUrl: undefined,
    images: [],
    tag: "Frontend",
    color: "blue",
  },
  {
    slug: "portfolio",
    name: "This Portfolio",
    tagline: "Interactive Developer Portfolio",
    summary:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry, standard since the 1500s.",
    sections: [
      {
        heading: "Overview",
        body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      },
      {
        heading: "Scroll & Animation System",
        body: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures.",
      },
      {
        heading: "Routing",
        body: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text — always use a generator that can be trusted.",
      },
    ],
    tech: ["Next.js", "TypeScript", "GSAP", "Lenis", "Tailwind CSS"],
    githubUrl: "https://github.com/iamkrutarth22/krutarth-portfolio",
    demoUrl: undefined,
    images: [],
    tag: "Frontend",
    color: "mint",
  },
];

export const contact: ContactContent = {
  heading: "Let's build something",
  subtext: "Open to frontend and fullstack roles — reach out.",
  links: [
    { label: "Email", url: "mailto:your-email@example.com", icon: "mail" },
    {
      label: "GitHub",
      url: "https://github.com/iamkrutarth22",
      icon: "github",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/your-actual-handle",
      icon: "linkedin",
    },
  ],
};

export const technologies: TechCategory[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "SQL"],
  },
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "GSAP",
      "Tiptap",
      "Excalidraw",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Prisma ORM", "JWT", "Passport.js"],
  },
  {
    category: "Database & Infra",
    items: ["PostgreSQL", "Neon", "Docker"],
  },
  {
    category: "Tooling",
    items: ["Git", "GitHub Actions", "MSW", "ShadCN UI", "Figma"],
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
