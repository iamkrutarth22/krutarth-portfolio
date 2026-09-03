import { GitBranch, ArrowUpRight } from 'lucide-react'
import { ProjectCaseStudy } from '@/types/content'

export function ProjectDetail ({ project }: { project: ProjectCaseStudy }) {
  return (
    <article className='max-w-2xl mx-auto p-8 scrollbar-hide'>
      <h1 className='font-sans text-3xl font-bold text-ink dark:text-ink-dark mb-2'>
        {project.name}
      </h1>

      {project.tagline && (
        <p className='font-handwritten text-lg italic text-accent dark:text-accent-dark mb-4'>
          {project.tagline}
        </p>
      )}

      <p className='text-gray-500 dark:text-text-dark/70 mb-6 leading-relaxed'>
        {project.summary}
      </p>

      <div className='flex flex-wrap gap-1.5 mb-6'>
        {project.tech.map(tech => (
          <span
            key={tech}
            className='text-[11px] font-mono px-2 py-1 rounded-full
                       bg-gray-100 dark:bg-desk-dark text-gray-600 dark:text-text-dark'
          >
            {tech}
          </span>
        ))}
      </div>

      <div className='flex items-center gap-5 mb-8 text-sm'>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1.5 text-gray-500 dark:text-text-dark
                       hover:text-ink dark:hover:text-ink-dark transition-colors'
          >
            <GitBranch size={16} />
            GitHub
          </a>
        )}

        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-1.5 text-accent dark:text-accent-dark hover:underline'
          >
            Live Demo <ArrowUpRight size={14} />
          </a>
        ) : (
          <span className='text-gray-300 dark:text-text-dark/30'>
            Demo coming soon
          </span>
        )}
      </div>

      <div className='space-y-8'>
        {project.sections.map(section => (
          <section key={section.heading}>
            <h2 className='font-sans text-lg font-semibold text-ink dark:text-ink-dark mb-2'>
              {section.heading}
            </h2>
            <div className='prose prose-neutral dark:prose-invert max-w-none whitespace-pre-line text-gray-600 dark:text-text-dark leading-relaxed'>
              {section.body}
            </div>
          </section>
        ))}
      </div>

      {project.images && project.images.length > 0 && (
        <div className='mt-8 space-y-6'>
          {project.images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${project.name} screenshot ${i + 1}`}
              className='rounded-lg w-full'
            />
          ))}
        </div>
      )}
    </article>
  )
}
