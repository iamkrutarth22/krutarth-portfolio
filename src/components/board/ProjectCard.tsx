"use client";

import { useRef, useState } from "react";
import { Project } from "@/types/content";
import { StickyNote } from "@/components/ui/StickyNote";
import { Pin } from "@/components/ui/Pin";
import { useDraggable } from "@/hooks/useDraggable";
import { useIsTouchDevice } from "@/hooks/useIsTouchDevice";
import { Move } from "lucide-react";

export function ProjectCard({
  project,
  spotlightRef,
  onExpand,
}: {
  project: Project;
  spotlightRef: React.RefObject<HTMLElement | null>;
  onExpand: (project: Project) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isTouch = useIsTouchDevice();

  useDraggable({
    cardRef,
    spotlightRef,
    onDropInSpotlight: () => onExpand(project),
    enabled: !isTouch, // desktop: drag. touch: tap instead (handled below)
  });

  return (
    <div
      ref={cardRef}
      onClick={() => isTouch && onExpand(project)}
      className="cursor-grab active:cursor-grabbing touch-none"
    >
      <StickyNote color={project.color} rotate={-3}>
        <Pin />
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-sans text-xl font-semibold text-ink">
            {project.name}
          </h3>
          <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent">
            {project.tag}
          </span>
        </div>
        <p className="font-sans text-sm text-gray-600">{project.description}</p>
        <span className="mt-3 flex items-center gap-1 text-xs text-gray-400">
          <Move size={12} />
          {isTouch ? "Tap to expand" : "Drag to spotlight"}
        </span>
      </StickyNote>
    </div>
  );
}