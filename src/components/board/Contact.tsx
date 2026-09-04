'use client'

import { contact } from '@/content/site-data'
import {
  CheckCircle2,
  GitCommit,
  Heart,
  Link,
  Mail,
  Paperclip
} from 'lucide-react'
import { StickyNote } from '@/components/ui/StickyNote'
import { Pin } from '@/components/ui/Pin'
import { techIconMap } from '@/lib/tech-icons'

const iconMap = {
  github: GitCommit,
  linkedin: Link,
  mail: Mail
}

export function Contact () {
  return (
    <section
      id='contact'
      className='relative min-h-[70vh] flex flex-col items-center justify-center px-6 py-24 scroll-mt-20'
    >
      <h2 className='font-handwritten  text-4xl md:text-5xl text-ink dark:text-ink-dark mb-3'>
        {contact.heading}
      </h2>
      <p className='font-sans text-gray-600 dark:text-text-dark/50 mb-10 text-center max-w-md'>
        {contact.subtext}
      </p>

      <div className='flex flex-wrap justify-center gap-6'>
        {contact.links.map(link => {
          // Map the icon key from your data to the key in techIconMap
          const iconKey =
            link.icon === 'mail'
              ? 'Email'
              : link.icon === 'github'
              ? 'GitHub'
              : link.icon === 'linkedin'
              ? 'LinkedIn'
              : link.icon

          const tech = techIconMap[iconKey]
          if (!tech) return null

          const Icon = tech.Icon

          return (
            <a
              key={link.label}
              href={link.url}
              target={link.icon === 'mail' ? undefined : '_blank'}
              rel='noopener noreferrer'
              className='block'
            >
              <StickyNote
                color={
                  link.icon === 'mail'
                    ? 'yellow'
                    : link.icon === 'github'
                    ? 'white'
                    : 'blue'
                }
                rotate={link.icon === 'linkedin' ? 2 : -2}
                className='w-32 flex flex-col items-center justify-center py-6 hover:scale-105 transition-transform'
              >
                <Pin />
                <Icon
                  size={22}
                  className='mb-2'
                  style={{ color: tech.color }} // uses the brand color from the map
                />
                <span className='font-handwritten text-lg text-ink'>
                  {link.label}
                </span>
              </StickyNote>
            </a>
          )
        })}
      </div>
      <div
        className='relative mt-14 w-full max-w-2xl bg-white dark:bg-card-dark
                rounded-lg shadow-md border border-black/5 dark:border-border-dark
                px-6 py-5 transition-colors duration-700'
      >
        <Paperclip
          size={20}
          className='absolute -top-3 left-6 text-gray-400 dark:text-text-dark/50 -rotate-12'
        />

        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
          <div>
            <h3 className='font-handwritten text-lg text-ink dark:text-ink-dark underline mb-2'>
              Available for
            </h3>
            <div className='flex flex-wrap gap-2'>
              {contact.availableFor.map(item => (
                <span
                  key={item}
                  className='flex items-center gap-1 text-xs font-sans px-3 py-1
                       rounded-full bg-desk dark:bg-desk-dark
                       text-ink dark:text-text-dark border border-black/5 dark:border-border-dark'
                >
                  <CheckCircle2
                    size={12}
                    className='text-green-600 dark:text-accent-dark'
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className='flex items-center gap-1.5 font-handwritten text-base text-ink dark:text-ink-dark whitespace-nowrap'>
            {contact.closingNote}
            <Heart
              size={16}
              className='text-accent dark:text-accent-dark fill-accent dark:fill-accent-dark'
            />
          </div>
        </div>
      </div>

      <footer className='mt-16 text-xs text-gray-400 font-sans'>
        © {new Date().getFullYear()} Krutarth. Built with Next.js & GSAP.
      </footer>
    </section>
  )
}
