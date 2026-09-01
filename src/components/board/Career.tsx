'use client'

import { useRef, useEffect } from 'react'
import { career } from '@/content/site-data'
import { gsap } from '@/lib/gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import { StickyNote } from '../ui/StickyNote'
import { Pin } from '../ui/Pin'
import { ScrollCue } from '../ui/ScrollCue'
import { useTheme } from '@/context/ThemeContext'

gsap.registerPlugin(ScrollTrigger)

export function Career() {
  const sectionRef = useRef<HTMLElement>(null)
  const companyRefs = useRef<(HTMLDivElement | null)[]>([])
  const noteRefs = useRef<(HTMLDivElement | null)[]>([])
  const reducedMotion = usePrefersReducedMotion()
  const { setMode } = useTheme()

  useEffect(() => {
    if (reducedMotion || !sectionRef.current) return

    const ctx = gsap.context(() => {
      const companies = companyRefs.current.filter(Boolean) as HTMLDivElement[]
      const notes = noteRefs.current.filter(Boolean) as HTMLDivElement[]
      if (companies.length === 0) return

      // Initial states
      gsap.set(companies, { opacity: 0, y: 80 })
      gsap.set(notes, { opacity: 0 })
      gsap.set(companies[0], { opacity: 1, y: 0 })
      gsap.set(notes[0], { opacity: 1 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${companies.length * 140}%`,
          scrub: 1.1,          // smooth overall progress
          pin: true,
          anticipatePin: 1,
          onEnter: () => setMode('dark'),
          onEnterBack: () => setMode('dark'),
          onLeave: () => setMode('light'),
          onLeaveBack: () => setMode('light'),
        },
      })

      companies.forEach((_, i) => {
        if (i === 0) return

        // 1. Company block scrolls away (up) — parallax / scroll feel
        tl.to(
          companies[i - 1],
          {
            y: -120,
            opacity: 0,
            duration: 0.9,
            ease: 'power2.inOut',
          },
          i
        )

        // 2. New company block scrolls in from below
        tl.fromTo(
          companies[i],
          { y: 120, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power2.out',
          },
          i - 0.15
        )

        // 3. Sticky note description changes more directly (quick cross-fade)
        tl.to(
          notes[i - 1],
          {
            opacity: 0,
            duration: 0.25,          // much shorter = feels direct
            ease: 'power1.in',
          },
          i + 0.1
        )
        tl.to(
          notes[i],
          {
            opacity: 1,
            duration: 0.25,
            ease: 'power1.out',
          },
          i + 0.2
        )

        // Hold time so each job is readable
        tl.to({}, { duration: 0.8 })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [reducedMotion, setMode])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 transition-colors duration-700"
    >
      <span
        className="absolute top-8 left-8 text-md font-handwritten tracking-widest
                   text-ink/60 dark:text-accent-dark/80 uppercase"
      >
        WORK EXPERIENCE
      </span>

      {/* ── Company details (yellow border area) ── */}
      <div className="relative w-full max-w-2xl h-[28%] mb-8">
        {career.map((entry, i) => (
          <div
            key={entry.index}
            ref={(el) => {
              companyRefs.current[i] = el
            }}
            className="absolute inset-0 flex flex-col justify-center"
          >
            <div className=" rounded px-6 py-4 w-fit max-w-full">
              <span className="font-mono text-lg text-accent dark:text-accent-dark mb-2 block">
                {entry.index}
              </span>
              <h2 className="font-sans text-5xl md:text-4xl font-semibold text-ink dark:text-ink-dark mb-1">
                {entry.company}
              </h2>
              <p className="font-handwritten text-lg text-ink dark:text-ink-dark mb-1">
                {entry.role}
              </p>
              <span className="font-mono text-md text-ink dark:text-accent">
                {entry.period}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Sticky notes (description only changes) ── */}
      <div className="relative w-full max-w-2xl h-[45%] flex justify-end">
        {career.map((entry, i) => (
          <div
            key={entry.index}
            ref={(el) => {
              noteRefs.current[i] = el
            }}
            className="absolute right-0 bottom-0 w-[70%]"
          >
            <StickyNote color="coral" rotate={4}>
              <Pin color="bg-yellow-500" />
              <h1 className="text-red-800 font-handwritten text-lg underline">
                responsibilities
              </h1>
              <p className="font-handwritten text-lg text-ink dark:text-neutral-900">
                {entry.detail}
              </p>
            </StickyNote>
          </div>
        ))}
      </div>

      <ScrollCue />
    </section>
  )
}