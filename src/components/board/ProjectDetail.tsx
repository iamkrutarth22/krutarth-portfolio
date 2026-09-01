import { ProjectCaseStudy } from "@/types/content";

export function ProjectDetail({ project }: { project: ProjectCaseStudy }) {
  return (
    <article className="max-w-2xl mx-auto p-8">
      <h1 className="font-sans text-3xl font-bold text-ink mb-2">{project.name}</h1>
      <p className="text-gray-500 mb-6">{project.summary}</p>
      <div className="prose prose-neutral max-w-none whitespace-pre-line">
        {project.architecture}
      </div>
      {project.images?.map((src, i) => (
        <img key={i} src={src} alt="" className="rounded-lg my-6 w-full" />
      ))}
    </article>
  );
}