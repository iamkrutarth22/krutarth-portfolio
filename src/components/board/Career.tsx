// 'use client'

// import { useRef, useEffect } from 'react'
// import { career } from '@/content/site-data'
// import { gsap } from '@/lib/gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
// import { StickyNote } from '../ui/StickyNote'
// import { Pin } from '../ui/Pin'
// import { ScrollCue } from '../ui/ScrollCue'
// import { useTheme } from '@/context/ThemeContext'

// gsap.registerPlugin(ScrollTrigger)

// export function Career() {
//   const sectionRef = useRef<HTMLElement>(null)
//   const companyRefs = useRef<(HTMLDivElement | null)[]>([])
//   const noteRefs = useRef<(HTMLDivElement | null)[]>([])
//   const reducedMotion = usePrefersReducedMotion()
//   const { setMode } = useTheme()

//   useEffect(() => {
//     if (reducedMotion || !sectionRef.current) return

//     const ctx = gsap.context(() => {
//       const companies = companyRefs.current.filter(Boolean) as HTMLDivElement[]
//       const notes = noteRefs.current.filter(Boolean) as HTMLDivElement[]
//       if (companies.length === 0) return

//       // Initial states
//       gsap.set(companies, { opacity: 0, y: 80 })
//       gsap.set(notes, { opacity: 0 })
//       gsap.set(companies[0], { opacity: 1, y: 0 })
//       gsap.set(notes[0], { opacity: 1 })

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top top',
//           end: () => `+=${companies.length * 140}%`,
//           scrub: 1.5,          // smooth overall progress
//           pin: true,
//           anticipatePin: 1,
//           onEnter: () => setMode('dark'),
//           onEnterBack: () => setMode('dark'),
//           onLeave: () => setMode('light'),
//           onLeaveBack: () => setMode('light'),
//         },
//       })

//       companies.forEach((_, i) => {
//         if (i === 0) return

//         // 1. Company block scrolls away (up) — parallax / scroll feel
//         tl.to(
//           companies[i - 1],
//           {
//             y: -120,
//             opacity: 0,
//             duration: 0.9,
//             ease: 'power2.inOut',
//           },
//           i
//         )

//         // 2. New company block scrolls in from below
//         tl.fromTo(
//           companies[i],
//           { y: 120, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 0.9,
//             ease: 'power2.out',
//           },
//           i - 0.15
//         )

//         // 3. Sticky note description changes more directly (quick cross-fade)
//         tl.to(
//           notes[i - 1],
//           {
//             opacity: 0,
//             duration: 0.25,          // much shorter = feels direct
//             ease: 'power1.in',
//           },
//           i + 0.1
//         )
//         tl.to(
//           notes[i],
//           {
//             opacity: 1,
//             duration: 0.25,
//             ease: 'power1.out',
//           },
//           i + 0.2
//         )

//         // Hold time so each job is readable
//         tl.to({}, { duration: 0.8 })
//       })
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [reducedMotion, setMode])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 transition-colors duration-700 scroll-mt-20 "
//     >
//       <span
//         className="absolute top-8 left-8 text-md font-handwritten tracking-widest
//                    text-ink/60 dark:text-accent-dark/80 uppercase"
//       >
//         WORK EXPERIENCE
//       </span>

//       {/* ── Company details (yellow border area) ── */}
//       <div className="relative w-full max-w-2xl h-[28%] mb-8">
//         {career.map((entry, i) => (
//           <div
//             key={entry.index}
//             ref={(el) => {
//               companyRefs.current[i] = el
//             }}
//             className="absolute inset-0 flex flex-col justify-center"
//           >
//             <div className=" rounded px-6 py-4 w-fit max-w-full">
//               <span className="font-mono text-lg text-accent dark:text-accent-dark mb-2 block">
//                 {entry.index}
//               </span>
//               <h2 className="font-sans text-5xl md:text-4xl font-semibold text-ink dark:text-ink-dark mb-1">
//                 {entry.company}
//               </h2>
//               <p className="font-handwritten text-lg text-ink dark:text-ink-dark mb-1">
//                 {entry.role}
//               </p>
//               <span className="font-mono text-md text-ink dark:text-accent">
//                 {entry.period}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ── Sticky notes (description only changes) ── */}
//       <div className="relative w-full max-w-2xl h-[45%] flex justify-end">
//         {career.map((entry, i) => (
//           <div
//             key={entry.index}
//             ref={(el) => {
//               noteRefs.current[i] = el
//             }}
//             className="absolute right-0 bottom-0 w-[70%]"
//           >
//             <StickyNote color="coral" rotate={4}>
//               <Pin color="bg-yellow-500" />
//               <h1 className="text-red-800 font-handwritten text-lg underline">
//                 responsibilities
//               </h1>
//               <p className="font-handwritten text-lg text-ink dark:text-neutral-900">
//                 {entry.detail}
//               </p>
//             </StickyNote>
//           </div>
//         ))}
//       </div>

//       <ScrollCue />
//     </section>
//   )
// }

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
  const progressRef = useRef<HTMLDivElement>(null)
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

      // Progress bar starts empty
      gsap.set(progressRef.current, { scaleY: 0, transformOrigin: 'top' })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${companies.length * 140}%`,
          scrub: 1.5,
          pin: true,
          anticipatePin: 1,
          onEnter: () => setMode('dark'),
          onEnterBack: () => setMode('dark'),
          onLeave: () => setMode('light'),
          onLeaveBack: () => setMode('light'),
          onUpdate: (self) => {
            // Update progress bar
            gsap.to(progressRef.current, {
              scaleY: self.progress,
              duration: 0.1,
              ease: 'none',
              overwrite: true,
            })
          },
        },
      })

      companies.forEach((_, i) => {
        if (i === 0) return

        // Company block scrolls away
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

        // New company scrolls in
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

        // Sticky note quick cross-fade
        tl.to(
          notes[i - 1],
          {
            opacity: 0,
            duration: 0.25,
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

        // Hold
        tl.to({}, { duration: 0.8 })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [reducedMotion, setMode])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 transition-colors duration-700 scroll-mt-20"
    >
      {/* ── Progress bar (left side) ── */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 h-[70vh] w-[3px] bg-ink/10 dark:bg-white/10 rounded-full overflow-hidden z-20">
        <div
          ref={progressRef}
          className="w-full h-full bg-accent dark:bg-accent-dark origin-top"
        />
      </div>

      <span
        className="absolute top-8 left-8 text-md font-handwritten tracking-widest
                   text-ink/60 dark:text-accent-dark/80 uppercase"
      >
        WORK EXPERIENCE
      </span>

      {/* Company details */}
      <div className="relative w-full max-w-2xl h-[28%] mb-8">
        {career.map((entry, i) => (
          <div
            key={entry.index}
            ref={(el) => {
              companyRefs.current[i] = el
            }}
            className="absolute inset-0 flex flex-col justify-center"
          >
            <div className="rounded px-6 py-4 w-fit max-w-full">
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

      {/* Sticky notes */}
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



// 'use client'

// import { useRef, useEffect, useState } from 'react'
// import { career } from '@/content/site-data'
// import { gsap } from '@/lib/gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
// import { StickyNote } from '../ui/StickyNote'
// import { Pin } from '../ui/Pin'
// import { ScrollCue } from '../ui/ScrollCue'
// import { useTheme } from '@/context/ThemeContext'

// gsap.registerPlugin(ScrollTrigger)

// export function Career() {
//   const sectionRef = useRef<HTMLElement>(null)
//   const companyRefs = useRef<(HTMLDivElement | null)[]>([])
//   const noteRefs = useRef<(HTMLDivElement | null)[]>([])
//   const reducedMotion = usePrefersReducedMotion()
//   const { setMode } = useTheme()
//   const [activeIndex, setActiveIndex] = useState(0)

//   useEffect(() => {
//     if (reducedMotion || !sectionRef.current) return

//     const ctx = gsap.context(() => {
//       const companies = companyRefs.current.filter(Boolean) as HTMLDivElement[]
//       const notes = noteRefs.current.filter(Boolean) as HTMLDivElement[]
//       if (companies.length === 0) return

//       gsap.set(companies, { opacity: 0, y: 80 })
//       gsap.set(notes, { opacity: 0 })
//       gsap.set(companies[0], { opacity: 1, y: 0 })
//       gsap.set(notes[0], { opacity: 1 })

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top top',
//           end: () => `+=${companies.length * 140}%`,
//           scrub: 1.5,
//           pin: true,
//           anticipatePin: 1,
//           onEnter: () => setMode('dark'),
//           onEnterBack: () => setMode('dark'),
//           onLeave: () => setMode('light'),
//           onLeaveBack: () => setMode('light'),
//           onUpdate: (self) => {
//             // Calculate which step is active
//             const progress = self.progress
//             const index = Math.min(
//               companies.length - 1,
//               Math.floor(progress * companies.length)
//             )
//             setActiveIndex(index)
//           },
//         },
//       })

//       companies.forEach((_, i) => {
//         if (i === 0) return

//         tl.to(companies[i - 1], {
//           y: -120,
//           opacity: 0,
//           duration: 0.9,
//           ease: 'power2.inOut',
//         }, i)

//         tl.fromTo(
//           companies[i],
//           { y: 120, opacity: 0 },
//           { y: 0, opacity: 1, duration: 0.9, ease: 'power2.out' },
//           i - 0.15
//         )

//         tl.to(notes[i - 1], {
//           opacity: 0,
//           duration: 0.25,
//           ease: 'power1.in',
//         }, i + 0.1)

//         tl.to(notes[i], {
//           opacity: 1,
//           duration: 0.25,
//           ease: 'power1.out',
//         }, i + 0.2)

//         tl.to({}, { duration: 0.8 })
//       })
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [reducedMotion, setMode])

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 transition-colors duration-700 scroll-mt-20"
//     >
//       {/* ── Left side step indicator ── */}
//       <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20">
//         {career.map((entry, i) => (
//           <div key={entry.index} className="flex flex-col items-center gap-1">
//             {/* Dot */}
//             <div
//               className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
//                 i === activeIndex
//                   ? 'bg-accent dark:bg-accent-dark scale-125'
//                   : i < activeIndex
//                   ? 'bg-accent/60 dark:bg-accent-dark/60'
//                   : 'bg-ink/20 dark:bg-white/20'
//               }`}
//             />
//             {/* Number (only show on active) */}
//             {i === activeIndex && (
//               <span className="text-[10px] font-mono text-accent dark:text-accent-dark mt-0.5">
//                 {entry.index}
//               </span>
//             )}
//           </div>
//         ))}
//       </div>

//       <span className="absolute top-8 left-8 text-md font-handwritten tracking-widest text-ink/60 dark:text-accent-dark/80 uppercase">
//         WORK EXPERIENCE
//       </span>

//       {/* Company details */}
//       <div className="relative w-full max-w-2xl h-[28%] mb-8">
//         {career.map((entry, i) => (
//           <div
//             key={entry.index}
//             ref={(el) => {
//               companyRefs.current[i] = el
//             }}
//             className="absolute inset-0 flex flex-col justify-center"
//           >
//             <div className="rounded px-6 py-4 w-fit max-w-full">
//               <span className="font-mono text-lg text-accent dark:text-accent-dark mb-2 block">
//                 {entry.index}
//               </span>
//               <h2 className="font-sans text-5xl md:text-4xl font-semibold text-ink dark:text-ink-dark mb-1">
//                 {entry.company}
//               </h2>
//               <p className="font-handwritten text-lg text-ink dark:text-ink-dark mb-1">
//                 {entry.role}
//               </p>
//               <span className="font-mono text-md text-ink dark:text-accent">
//                 {entry.period}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Sticky notes */}
//       <div className="relative w-full max-w-2xl h-[45%] flex justify-end">
//         {career.map((entry, i) => (
//           <div
//             key={entry.index}
//             ref={(el) => {
//               noteRefs.current[i] = el
//             }}
//             className="absolute right-0 bottom-0 w-[70%]"
//           >
//             <StickyNote color="coral" rotate={4}>
//               <Pin color="bg-yellow-500" />
//               <h1 className="text-red-800 font-handwritten text-lg underline">
//                 responsibilities
//               </h1>
//               <p className="font-handwritten text-lg text-ink dark:text-neutral-900">
//                 {entry.detail}
//               </p>
//             </StickyNote>
//           </div>
//         ))}
//       </div>

//       <ScrollCue />
//     </section>
//   )
// }