"use client";

import { GitBranch, ArrowUpRight } from "lucide-react";
import { ProjectCaseStudy } from "@/types/content";
import { Pin } from "../ui/Pin";

const colorMap: Record<ProjectCaseStudy["color"], string> = {
  white: "bg-gray-200 dark:bg-border-dark",
  blue: "bg-note-blue",
  mint: "bg-note-mint",
  coral: "bg-note-coral",
  yellow: "bg-note-yellow",
};

const MAX_VISIBLE_TECH = 5;

export function ProjectCard({
  project,
  index,
}: {
  project: ProjectCaseStudy;
  index: number;
}) {
  const visibleTech = project.tech.slice(0, MAX_VISIBLE_TECH);
  const hiddenTechCount = project.tech.length - visibleTech.length;

  return (
    <div
      data-slug={project.slug}
      className="w-80 shrink-0 select-none cursor-pointer rounded-xl overflow-hidden
                 bg-white dark:bg-card-dark shadow-lg dark:shadow-black/40
                 border border-black/5 dark:border-border-dark
                 transition-colors duration-700"
    >
      <Pin />
      <div className={`h-3 ${colorMap[project.color]}`} />

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <span className="font-mono text-xs text-gray-400 dark:text-text-dark/50">
            ({String(index).padStart(2, "0")})
          </span>
          <ArrowUpRight
            size={16}
            className="text-gray-400 dark:text-text-dark/50"
          />
        </div>

        <h3 className="font-sans text-xl font-bold text-ink dark:text-ink-dark mb-1">
          {project.name}
        </h3>

        {project.tagline && (
          <p className="font-handwritten text-sm italic text-accent dark:text-accent-dark mb-3">
            {project.tagline}
          </p>
        )}

        {/* Truncate long summaries */}
        <p className="font-sans text-sm text-gray-600 dark:text-text-dark mb-4 leading-relaxed line-clamp-4">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-1 rounded-full
                         bg-gray-100 dark:bg-desk-dark text-gray-600 dark:text-text-dark"
            >
              {tech}
            </span>
          ))}
          {hiddenTechCount > 0 && (
            <span
              className="text-[11px] font-mono px-2 py-1 rounded-full
                         bg-gray-100 dark:bg-desk-dark text-gray-400 dark:text-text-dark/60"
            >
              +{hiddenTechCount}
            </span>
          )}
        </div>

        <div
          className="flex items-center justify-between pt-3 border-t
                     border-gray-100 dark:border-border-dark text-xs"
        >
          {project.githubUrl ? (
            
           <a   href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-gray-500 dark:text-text-dark
                         hover:text-ink dark:hover:text-ink-dark transition-colors"
            >
              <GitBranch size={14} />
              GitHub
            </a>
          ) : (
            <span />
          )}

          {project.demoUrl ? (
            
             <a href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-accent dark:text-accent-dark hover:underline"
            >
              Live Demo →
            </a>
          ) : (
            <span className="text-gray-300 dark:text-text-dark/30">
              Demo coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}