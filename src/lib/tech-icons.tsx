import {
  SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiRedux,
  SiReactquery, SiTailwindcss, SiGreensock, SiNodedotjs, SiExpress,
  SiPrisma, SiJsonwebtokens, SiPostgresql, SiDocker, SiGit,
  SiGithubactions, SiFigma, SiExcalidraw,
  SiGithub,
  SiAngular,
  SiFramer,
  SiVite,
  SiMysql,
  SiRailway,
  SiVercel,
  SiNetlify,
  SiGsap,
} from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Database, Lock, ShieldCheck, TestTube2, Component, Mail } from "lucide-react";
import { IconType } from "react-icons";

interface TechIcon {
  Icon: IconType | React.ComponentType<{ size?: number; className?: string }>;
  color: string; // real brand hex where confirmed, neutral fallback otherwise
}

export const techIconMap: Record<string, TechIcon> = {
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  SQL: { Icon: Database, color: "#4E4E4E" }, // no dedicated brand mark — generic icon
  React: { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#000000" },
  "Redux Toolkit": { Icon: SiRedux, color: "#764ABC" },
  "React Query": { Icon: SiReactquery, color: "#FF4154" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  Angular: { Icon: SiAngular, color: "#DD0031" },
  GSAP: { Icon: SiGsap, color: "#88CE02" },
  "Framer Motion": { Icon: SiFramer, color: "#0055FF" }, // no confirmed 
  // Simple Icons entry — placeholder
  Vite: { Icon: SiVite, color: "#646CFF" }, // no confirmed Simple Icons entry — placeholder
  Excalidraw: { Icon: SiExcalidraw, color: "#6965DB" },
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  Express: { Icon: SiExpress, color: "#000000" },
  "Prisma ORM": { Icon: SiPrisma, color: "#2D3748" },
  JWT: { Icon: SiJsonwebtokens, color: "#000000" },
  "Passport.js": { Icon: Lock, color: "#34E27A" }, // no confirmed Simple Icons entry — placeholder
  PostgreSQL: { Icon: SiPostgresql, color: "#4169E1" },
  MySQL: { Icon: SiMysql, color: "#4479A1" }, // no confirmed Simple Icons entry — placeholder
  "Neon DB": { Icon: Database, color: "#00E599" }, // verify — Neon's Simple Icons entry is uncertain
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Railway: { Icon: SiRailway, color: "#FF0000" }, // no confirmed Simple ]
  Vercel: { Icon: SiVercel, color: "#000000" }, // no confirmed Simple Icons entry — placeholder
  Netlify: { Icon: SiNetlify, color: "#00C7B7" }, // no confirmed Simple Icons entry — placeholder
  //Icons entry — placeholder 
  Git: { Icon: SiGit, color: "#F05032" },
  "GitHub Actions": { Icon: SiGithubactions, color: "#2088FF" },
  MSW: { Icon: TestTube2, color: "#FF6A33" }, // no confirmed Simple Icons entry — placeholder
  "ShadCN UI": { Icon: ShieldCheck, color: "#000000" }, // no confirmed Simple Icons entry — placeholder
  Figma: { Icon: SiFigma, color: "#F24E1E" },


  GitHub: { Icon: SiGithub, color: "#181717" },
  LinkedIn: { Icon: FaLinkedin, color: "#0A66C2" },
  Email: { Icon: Mail, color: "#EA4335" },
};