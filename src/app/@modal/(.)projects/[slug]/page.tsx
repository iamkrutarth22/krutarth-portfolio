"use client";

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { projects } from "@/content/site-data";
import { ProjectDetail } from "@/components/board/ProjectDetail";
import { X } from "lucide-react";

export default function ProjectModal({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const router = useRouter();
  const { slug } = use(params); // unwrap the Promise — required in Next 16, even client-side

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-y-auto py-12"
      onClick={() => router.back()}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-card-dark rounded-lg shadow-2xl relative max-h-[85vh] overflow-y-auto"
      >
        <button
          onClick={() => router.back()}
          className="sticky top-4 left-full -mr-8 mt-4 bg-white dark:bg-card-dark rounded-full p-2 shadow"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        <ProjectDetail project={project} />
      </div>
    </div>
  );
}