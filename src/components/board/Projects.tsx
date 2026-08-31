"use client";

import { useRef, useState } from "react";
import { projects } from "@/content/site-data";
import { Project } from "@/types/content";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<Project | null>(null);
  const [filter, setFilter] = useState<"All" | "Frontend" | "Fullstack">("All");

  const visible = projects.filter((p) => filter === "All" || p.tag === filter);

  return (
    <section className="relative min-h-screen bg-desk px-6 md:px-16 py-24">
      <h2 className="font-sans text-sm tracking-widest text-ink/60 uppercase mb-2">
        Projects
      </h2>

      <div className="flex gap-2 mb-10">
        {(["All", "Frontend", "Fullstack"] as const).map((tag) => (
          <button
            key={tag}
            onClick={() => setFilter(tag)}
            className={`text-sm px-3 py-1 rounded-full border transition-colors ${
              filter === tag
                ? "bg-accent text-white border-accent"
                : "border-gray-300 text-gray-600"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-8 relative">
        {visible.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            spotlightRef={spotlightRef}
            onExpand={setExpanded}
          />
        ))}
      </div>

      {/* spotlight drop zone */}
      <div
        ref={spotlightRef}
        className="mt-16 border-2 border-dashed border-accent/40 rounded-lg
                   min-h-[200px] flex items-center justify-center text-gray-400"
      >
        {expanded ? (
          <div className="text-center p-6">
            <h3 className="font-sans text-2xl font-semibold text-ink mb-2">
              {expanded.name}
            </h3>
            <p className="text-gray-600">{expanded.description}</p>
          </div>
        ) : (
          <span>Drag a project here (or tap on mobile)</span>
        )}
      </div>
    </section>
  );
}