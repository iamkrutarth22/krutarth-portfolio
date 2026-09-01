'use client'

import { useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { StickyNote } from '@/components/ui/StickyNote'
import { Pin } from '@/components/ui/Pin'
import { projects } from '@/content/site-data'
import { ScrollCue } from '../ui/ScrollCue'
import { ProjectCard } from './ProjectCard'

gsap.registerPlugin(ScrollTrigger)

const LOOPS = 3 // creates previous + next sets for seamless infinite feel

export function Projects () {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const cards = Array.from({ length: LOOPS }).flatMap(() => projects)
  const totalCards = cards.length

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return

    const ctx = gsap.context(() => {
      const track = trackRef.current!
      const section = sectionRef.current!

      // Measure one set of cards
      const firstCard = track.children[0] as HTMLElement
      const cardWidth = firstCard.offsetWidth + 40 // width + gap
      const singleSetWidth = cardWidth * projects.length

      // Start in the middle of the duplicated set
      gsap.set(track, { x: -singleSetWidth })

      // Main horizontal movement driven by vertical scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${singleSetWidth * 1.8}`, // adjust length of scroll
          scrub: 1.1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      })

      // Move the whole track to the left
      tl.to(track, {
        x: -singleSetWidth * 2,
        ease: 'none'
      })

      // Optional: slight vertical offset animation so cards feel like they "rise" into center
      gsap.utils.toArray<HTMLElement>(track.children).forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: i % 2 === 0 ? 40 : 70 }, // staggered starting height
          {
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              end: 'bottom bottom',
              scrub: true
            }
          }
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className='relative h-screen overflow-hidden '
    >
      <span className='absolute top-8 left-8 font-handwritten  text-md tracking-widest  text-ink/60 dark:text-accent-dark/80 uppercase z-20'>
        Projects
      </span>

      <div className='absolute inset-0 flex items-center'>
        <div
          ref={trackRef}
          className='flex gap-10 px-10 will-change-transform'
          style={{ paddingLeft: '15vw', paddingRight: '15vw' }}
        >
          {cards.map((project, i) => {
            const realIndex = i % projects.length

            return (
              <div
                key={`${project.slug}-${i}`}
                data-slug={project.slug}
                onClick={() => router.push(`/projects/${project.slug}`)}
                className='w-80 shrink-0 cursor-pointer transition-transform duration-300 hover:scale-[1.03]'
                style={{
                  transform: `translateY(${(i % 3) * 18}px)`
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.scale = '1.3'
                  e.currentTarget.style.zIndex = '50'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.scale = '1'
                  e.currentTarget.style.zIndex = '1'
                }}
              >
                <ProjectCard
                  key={`${project.slug}-${i}`}
                  project={project}
                  index={(i % projects.length) + 1}
                />
                {/* <StickyNote color={project.color}>
                  <Pin />
                  <span className='font-mono text-xs text-accent'>
                    ({String(realIndex + 1).padStart(2, '0')})
                  </span>
                  <h3 className='font-sans text-2xl font-semibold text-ink mt-1 mb-2'>
                    {project.name}
                  </h3>
                  <p className='font-sans text-sm text-gray-600 mb-4'>
                    {project.summary}
                  </p>
                  <span className='font-sans text-xs text-accent underline'>
                    View project →
                  </span>
                </StickyNote> */}
              </div>
            )
          })}
        </div>
      </div>
      <ScrollCue />
    </section>
  )
}
