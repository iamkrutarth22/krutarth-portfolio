'use client'

import { useRef } from 'react'
import { career } from '@/content/site-data'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect } from 'react'
import { useSectionTheme } from '@/hooks/useSectionTheme'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { StickyNote } from '../ui/StickyNote'
import { Pin } from '../ui/Pin'
import { ScrollCue } from '../ui/ScrollCue'
import { useTheme } from '@/context/ThemeContext'
gsap.registerPlugin(ScrollTrigger)

export function Career () {
  const sectionRef = useRef<HTMLElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const reducedMotion = usePrefersReducedMotion()
  const { setMode } = useTheme()

  // drives the light/dark ThemeContext based on scroll position through this section
  // useSectionTheme(sectionRef as React.RefObject<HTMLElement>)

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return

    const ctx = gsap.context(() => {
      const steps = stepRefs.current.filter(Boolean) as HTMLDivElement[]

      gsap.set(steps.slice(1), { opacity: 0, y: 40, pointerEvents: 'none' })
      gsap.set(steps[0], { pointerEvents: 'auto' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${steps.length * 100}%`,
          scrub: 0.3,
          pin: true,
          anticipatePin: 1,
          snap: {
            snapTo: progress => {
              // snap to whichever step's "hold" window is nearest
              const stepCount = steps.length
              return Math.round(progress * (stepCount - 1)) / (stepCount - 1)
            },
            duration: 0.4,
            ease: 'power1.inOut'
          },
          onEnter: () => setMode('dark'),
          onEnterBack: () => setMode('dark'),
          onLeave: () => setMode('light'),
          onLeaveBack: () => setMode('light')
        }
      })

      steps.forEach((step, i) => {
        if (i === 0) return
        tl.to(steps[i - 1], {
          opacity: 0,
          y: -40,
          duration: 0.3,
          onStart: () => gsap.set(steps[i - 1], { pointerEvents: 'none' })
        })
          .to(
            step,
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              onStart: () => gsap.set(step, { pointerEvents: 'auto' })
            },
            '<'
          )
          // hold each step fully visible for a stretch before the next transition starts
          .to({}, { duration: 0.4 })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [reducedMotion, setMode])

  return (
    <section
      ref={sectionRef}
      className='relative min-h-screen flex flex-col items-center justify-center
                 bg-desk dark:bg-desk-dark overflow-hidden px-6 transition-colors duration-700 '
    >
      <span
        className='absolute top-8 left-8 text-sm font-handwritten tracking-widest
                        text-ink/60 dark:text-accent-dark/80 uppercase'
      >
        WORK EXPERIENCE
      </span>

      <div className='relative w-full max-w-2xl h-[60%]  '>
        {career.map((entry, i) => (
          <div
            key={entry.index}
            ref={el => {
              stepRefs.current[i] = el
            }}
            className='absolute inset-0 flex flex-col justify-between'
          >
            <div>
              <span className='font-mono text-lg text-accent dark:text-accent-dark mb-3'>
                {entry.index}
              </span>
              <h2
                className='font-sans text-5xl md:text-4xl font-semibold
                            text-ink dark:text-ink-dark mb-2'
              >
                {entry.company}
              </h2>
              <p className='font-handwritten text-lg text-ink dark:text-ink-dark  mb-1'>
                {entry.role}
              </p>
              <span
                className='font-mono text-md text-ink
               dark:text-accent'
              >
                {entry.period}
              </span>
            </div>
            <div className='flex justify-end flex-col items-end'>
              <StickyNote color='coral' rotate={4} className='w-[70%]'>
                <Pin color='bg-yellow-500' />
                <h1 className='text-red-800 font-handwritten text-lg underline '>
                  responsibilities
                </h1>

                <p className='font-handwritten text-lg text-ink dark:text-neutral-900'>
                  {entry.detail}
                </p>
              </StickyNote>
            </div>
          </div>
        ))}
      </div>
      <ScrollCue />
    </section>
  )
}
