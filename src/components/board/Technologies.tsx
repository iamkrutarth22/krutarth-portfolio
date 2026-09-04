'use client'

import { useRef, useEffect } from 'react'
import { technologies } from '@/content/site-data'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { StickyNote } from '../ui/StickyNote'
import { Pin } from '../ui/Pin'
import { techIconMap } from '@/lib/tech-icons'

gsap.registerPlugin(ScrollTrigger)

const noteColors = ['yellow', 'mint', 'coral', 'blue', 'white'] as const
const rotations = [-3, 2, -2, 3, -1.5]

export function Technologies () {
  const sectionRef = useRef<HTMLElement>(null)
  const noteRefs = useRef<(HTMLDivElement | null)[]>([])
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return

    const ctx = gsap.context(() => {
      const notes = noteRefs.current.filter(Boolean) as HTMLDivElement[]

      gsap.set(notes, { opacity: 0, y: 40 })

      gsap.to(notes, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <section
      ref={sectionRef}
      id='skills'
      className='relative  min-h-screen 
                 px-6 md:px-16 py-24 transition-colors duration-700 scroll-mt-20'
    >
      <span className='font-handwritten pt-10 text-sm tracking-widest text-ink/60 dark:text-accent-dark/80 uppercase mb-2 block'>
        Technologies
      </span>
      <h2 className='font-handwritten text-3xl md:text-4xl font-bold text-ink dark:text-ink-dark mb-12'>
        Stuff I&apos;ve worked with
      </h2>

      <div className='flex max-md:px-20 flex-wrap gap-x-3 gap-y-6 items-start'>
        {technologies.map((group, i) => (
          <div
            key={group.category}
            ref={el => {
              noteRefs.current[i] = el
            }}
            className='w-72 '
          >
            <StickyNote
              color={noteColors[i % noteColors.length]}
              rotate={rotations[i % rotations.length]}
            >
              <Pin />
              <h3 className='font-handwritten text-lg text-ink dark:text-neutral-900 underline mb-3'>
                {group.category}
              </h3>
              <div className='grid grid-cols-3 gap-2'>
                {group.items.map(tech => {
                  const entry = techIconMap[tech]
                  if (!entry) return null
                  const { Icon, color } = entry
                  return (
                    
                    <div
                      key={tech}
                      className='flex flex-col items-center gap-1 bg-white/60 
                   rounded-lg py-2 px-1'
                    >
                      <Icon size={22} style={{ color }} />
                      <span className='text-[10px] font-sans text-ink dark:text-neutral-900 text-center leading-tight'>
                        {tech}
                      </span>
                    </div>
                  )
                })}
              </div>
            </StickyNote>
          </div>
        ))}
      </div>
    </section>
  )
}
