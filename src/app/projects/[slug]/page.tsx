import { projects } from "@/content/site-data";
import { ProjectDetail } from "@/components/board/ProjectDetail";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-desk scrollbar-hide">
      <header className="sticky top-0 z-10 bg-desk/90 backdrop-blur-sm border-b border-black/5 px-6 py-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-ink hover:text-accent transition-colors"
        >
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>
      </header>
      <div className="py-16 px-6">
        <ProjectDetail project={project} />
      </div>
    </main>
  );
}