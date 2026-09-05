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
    "Software Developer specializing in React , Next.js , Angular & Node.js, with hands-on experience building full-stack applications using Node.js, TypeScript & PostgreSQL.",
   note: "Open to new opportunities",
  resumeUrl: "/resume/Krutarth_Haldankar_Resume.pdf",
  // public\resume\Krutarth_Haldankar_Resume.pdf
  connectLabel: "Let's Connect",
  photoCaption: "Building with code. Solving real problems.",
  stats: [
    { icon: "briefcase", label: "2+ years", sublabel: "of experience" },
    { icon: "dot", label: "Open to work", sublabel: "new opportunities" },
  ],
};

export const career: CareerEntry[] = [
  {
    index: "001",
    company: "Ciklum",
    role: "Software Engineer",
    detail:
      "Worked as a Software Engineer on a web-based monitoring and management application for Henkel. My primary responsibility was frontend development using Angular and TypeScript, building reusable components, multi-step onboarding flows, sensor management features, dashboards, and data visualizations. I worked with Reactive Forms, RxJS, NgRx, REST APIs, QR-code scanning, and Plotly, while collaborating with backend and cross-functional teams to deliver and maintain production features.",
    period: "Jul 2024 — Oct 2025",
    tech: [
      "Angular",
      "TypeScript",
      "React",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "NgRx",
      "RxJS",
      "Plotly",
    ],
  },
  {
    index: "002",
    company: "Goa Electronics Limited",
    role: "Software Developer",
    detail:
      "Building React/TypeScript frontends for GoaOnline's citizen-services revamp, alongside PostgreSQL stored procedures powering service-specific API endpoints. Implemented OAuth-based SSO — redirect handling, token extraction, composite session generation.",
    period: "Feb 2026 — Present",
    tech: ["React", "TypeScript", "PostgreSQL"],
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
    summary:
      "A single-user writing and diagramming workspace with a production-grade autosave system, optimistic concurrency control, and a fully custom auth stack built from scratch.",
    tagline: "Writing & Diagramming Workspace",
    sections: [
      {
        heading: "Overview",
        body: "Folio is a single-user writing and diagramming workspace — think Notion meets Eraser.io. Each document supports two independent modes: a rich text editor powered by Tiptap and a freehand diagram canvas powered by Excalidraw. Switching modes never loses either state — both are persisted in a single structured JSON field in PostgreSQL as { mode, text: { ...tiptap json }, diagram: { elements: [...], files: {...} } }.",
      },
      {
        heading: "Autosave & Optimistic Concurrency",
        body: "The autosave system is the core engineering talking point. Rather than a naive full-document PUT on every keystroke, Folio uses a 2-second debounced PATCH delta endpoint. Every document carries a version integer. The PATCH handler reads the current version from the DB, compares it to the version sent by the client, and rejects with 409 if they differ — meaning a stale tab can never silently overwrite a newer save. This is the same optimistic concurrency pattern used by Notion and Linear.\n\nOn the frontend, the active document's working draft is written to Redux state on every change, which Redux Persist automatically syncs to localStorage. A custom useDocumentSync hook reads from a ref — not from React state — and runs a setInterval every 30 seconds. Reading via ref prevents the interval from subscribing to Redux rerenders, which was the root cause of an earlier Excalidraw infinite update loop. On tab close, a beforeunload handler triggers an immediate force-sync regardless of the interval timer.",
      },
      {
        heading: "Version History",
        body: "Every successful PATCH creates a snapshot in a separate DocumentVersion table before overwriting the document. The PATCH handler, document update, and snapshot creation all run inside a Prisma transaction — either all succeed or none do, preventing partial writes. After the transaction commits, a cleanup query fetches all versions for that document ordered by savedAt descending, slices beyond index 10, and deletes them in a single deleteMany call. This keeps version history bounded at 10 snapshots regardless of how frequently a user saves.",
      },
      {
        heading: "Authentication — OTP Email Verification",
        body: "Auth is built entirely from scratch with no Auth0 or Firebase. On signup, the user's password is hashed with bcrypt (cost factor 10) and stored in a separate UserAuth table. Immediately after the user row is created, the signup controller generates a cryptographically random 6-digit OTP, hashes it with bcrypt, stores the hash and a 5-minute expiry timestamp in UserAuth, and sends the plain OTP to the user's Gmail via Nodemailer. If the email send fails, the user row is deleted in a rollback so the user can retry signup cleanly — no zombie unverified accounts.\n\nOn OTP verification, the controller compares the submitted plain OTP against the stored hash using bcrypt.compare, checks the expiry timestamp, marks the user as isVerified, clears the OTP fields, and immediately issues a JWT access token and refresh token — skipping the need for a separate login step after verification.",
      },
      {
        heading: "Authentication — JWT & Refresh Token Rotation",
        body: "Access tokens expire in 1 hour, refresh tokens in 7 days. Both are signed with separate secrets (JWT_SECRET and REFRESH_TOKEN_SECRET). On login and on OTP verification, the refresh token is stored in the UserAuth table. On logout, the refresh token is nulled in the DB — making it impossible to reuse even if intercepted.\n\nThe refresh token endpoint verifies the JWT signature, then queries the DB to confirm the token matches what is stored for that userId. This two-step check (cryptographic + DB lookup) means a token that has been revoked via logout is rejected even if it hasn't expired yet.\n\nOn the frontend, an Axios interceptor implements a request queue pattern. When any API call receives a 401, the interceptor sets an isRefreshing flag and queues all subsequent in-flight requests. A single POST /auth/refresh call goes out. On success, the new access token is dispatched to Redux via setAccessToken and the queue is drained — each queued request is retried with the new token. On failure, the queue is rejected, the user is force-logged out, and the browser redirects to /login. Without the queue, multiple parallel 401s would each independently fire a refresh request, causing a race condition where all but the first succeed and the rest get 401 again.",
      },
      {
        heading: "Diagram Canvas — Excalidraw Integration",
        body: "Excalidraw is wrapped in a memoized component to prevent unnecessary remounts. The onChange handler implements a version-sum change detector: on every Excalidraw onChange event, it sums the version field of all elements in the canvas. If the sum matches the previous sum (stored in a ref), the dispatch is skipped entirely. This is critical because Excalidraw fires onChange on viewport pan, zoom, and internal appState changes that don't constitute meaningful content changes — without this guard, every mouse move over the canvas would dispatch to Redux and trigger a rerender loop.\n\nExcalidraw's appState contains a collaborators field typed as a Map, which is not JSON-serializable. This is stripped before dispatching to Redux. When loading saved diagram state back from the DB, the initialData is frozen in a useRef so it is only read on first mount — passing it as a prop would cause Excalidraw to reset its canvas on every parent rerender.",
      },
      {
        heading: "Backend Architecture",
        body: "The backend is Node.js + Express + TypeScript, using Prisma ORM with PostgreSQL hosted on Neon. The schema has five models: User (identity), UserAuth (credentials — passwordHash, refreshToken, otp, otpExpiresAt), OAuthAccount (provider + providerId for future OAuth), Document (title, content as JSONB, version integer), and DocumentVersion (documentId, content snapshot, version, savedAt).\n\nAll routes that require authentication pass through the authenticateUser middleware, which strips the Bearer prefix, verifies the JWT, and attaches the decoded userId to req.userId. Expired tokens return 401 specifically (via jwt.TokenExpiredError instanceof check) rather than 500, so the frontend interceptor can distinguish between auth failures and server errors. The middleware never returns 500 for an expired token — a mistake in the original implementation that broke the refresh flow entirely.",
      },
      {
        heading: "Frontend Architecture",
        body: "The frontend is React 19 + TypeScript with Vite. Global state is managed by Redux Toolkit with two slices: authSlice (isAuthenticated, accessToken, refreshToken, user) and documentSlice (activeDocument, saveStatus). Both are persisted to localStorage via Redux Persist with a whitelist config so only these two slices survive a page refresh.\n\nServer state (document list, single document fetch on selection) is handled by direct async calls via a configured Axios instance rather than React Query mutations, since document state lives in Redux and needs to be dispatched rather than cached locally. React Query is used for auth mutations (login, signup) where the server response maps cleanly to one-shot side effects.\n\nProtected routes are implemented as a ProtectedRoute component that reads accessToken from Redux and renders an Outlet or redirects to /login. The router is extracted to a dedicated router.tsx file and consumed by App.tsx, keeping App clean.",
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
    tagline: "Project & Task Management Dashboard",
    summary:
      "A full-featured task management app with authentication, project management, and real-time task updates — built with React, TypeScript, and a fully mocked REST API layer using MSW.",
    sections: [
      {
        heading: "Overview",
        body: "TaskFlow lets users create projects, manage tasks within them, assign work to team members, and filter by status or assignee. Auth is handled with JWT tokens persisted via Redux, and the entire backend is simulated using Mock Service Worker — no real server required.",
      },
      {
        heading: "Mock API Layer",
        body: "MSW intercepts all HTTP requests at the service worker level and returns realistic responses from an in-memory database seeded with users, projects, and tasks. It handles auth tokens, relational filtering, and proper HTTP error codes — letting the frontend exercise real Axios request/response flows without a backend.",
      },
      {
        heading: "Auth & State Management",
        body: "Redux Toolkit manages auth state, persisted across refreshes with Redux Persist. An Axios instance attaches the Bearer token automatically via a request interceptor. Protected routes redirect unauthenticated users to /login, and logout clears state cleanly.",
      },
      {
        heading: "Optimistic UI & Architecture",
        body: "Task status updates apply instantly via React Query's optimistic update pattern — reverting on error. Components are structured feature-first, with ShadCN primitives at the base, React Query handling all data fetching at the page level, and state kept at the lowest necessary level with no prop drilling.",
      },
    ],
    tech: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Redux Persist",
      "React Query",
      "MSW",
      "Axios",
      "Tailwind CSS",
      "ShadCN UI",
      "React Router DOM",
      "Vite",
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
      "A GSAP-driven portfolio with a pinned scroll-triggered career timeline, a scroll-position-linked dark mode transition, and an infinite draggable project carousel with shareable case-study routes.",
    sections: [
      {
        heading: "Overview",
        body: "The site you're on right now. Built with Next.js App Router and driven almost entirely by GSAP, structured as a corkboard/sticky-note desk metaphor — Hero, Career, Projects, Technologies, and Contact, tied together by a persistent nav bar with scroll-synced active-link highlighting.",
      },
      {
        heading: "Scroll & Animation System",
        body: "The Career section uses a pinned ScrollTrigger with scrub and snap to step through roles cleanly, without the ghosting or lag that comes from a high scrub value. It drives a dark 'terminal' theme transition directly off that same trigger's onEnter/onLeave callbacks — rather than a separate ScrollTrigger instance — to avoid boundary drift between when the pin releases and when the theme should actually change. Smooth scroll site-wide is handled by Lenis, synced to GSAP's own ticker instead of the browser's native scroll, with Lenis exposed via React Context so other components (like modals) can properly stop and start it rather than relying on CSS overflow rules alone. The Projects carousel uses GSAP Draggable with inertia and a wrap-based infinite loop, and disambiguates a click from a drag using Draggable's own onClick threshold rather than manual touch-device detection.",
      },
      {
        heading: "Routing",
        body: "Project case studies use Next.js intercepting routes: opening a project from the board renders the detail view as an in-context overlay with the scroll position underneath preserved, while the exact same URL visited directly — a shared link, a refresh, a search hit — renders as a full standalone page instead. Both entry points share one underlying content component, so there's a single source of truth for each project's write-up regardless of how it's reached.",
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
    { label: "Email", url: "mailto:iamkrutarth1234@gmail.com", icon: "mail" },
    {
      label: "GitHub",
      url: "https://github.com/iamkrutarth22",
      icon: "github",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/krutarth-haldankar-541784214?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: "linkedin",
    },
  ],
  availableFor: [
    "Web Development",
    "Fullstack Development",
    "Freelance Projects",
  ],
  closingNote: "Let's create something impactful!",
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
      "Angular",
      "Redux Toolkit",
      "React Query",
      "Tailwind CSS",
      "GSAP",
      "Framer Motion",
      "Tiptap",
      "Vite",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Prisma ORM", "JWT", "Passport.js"],
  },
  {
    category: "Database & Infra",
    items: ["PostgreSQL", "MySQL", "Neon DB", "Docker"],
  },
  {
    category: "Tooling",
    items: ["Git", "Railway", "Netlify", "Vercel", "ShadCN UI"],
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
