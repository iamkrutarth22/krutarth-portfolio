import { projects } from "@/content/site-data";
import { ProjectDetail } from "@/components/board/ProjectDetail";
import { notFound } from "next/navigation";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-desk py-16 px-6">
      <ProjectDetail project={project} />
    </main>
  );
}