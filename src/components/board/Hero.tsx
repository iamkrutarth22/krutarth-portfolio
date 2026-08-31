'use client'

import { useContext, useEffect, useRef } from 'react'
import { hero } from '@/content/site-data'
import { StickyNote } from '@/components/ui/StickyNote'
import { Pin } from '@/components/ui/Pin'
import { Paperclip, Download } from 'lucide-react'
import { gsap } from '@/lib/gsap'
import { SplitText } from 'gsap/SplitText'
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion'
import Image from 'next/image'
import { ScrollCue } from '../ui/ScrollCue'

export function Hero () {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const taglineRef = useRef<HTMLParagraphElement>(null)
  const noteRef = useRef<HTMLDivElement>(null)
  const noteRef2 = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reducedMotion) return

    const ctx = gsap.context(() => {
      const split = new SplitText(headlineRef.current, {
        type: 'chars,words'
      })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from(split.chars, { opacity: 0, y: 20, stagger: 0.02, duration: 0.5 })
        .from(taglineRef.current, { opacity: 0, y: 15, duration: 0.4 }, '-=0.2')
        .fromTo(
          noteRef.current,
          { opacity: 0, scale: 0.85, rotate: -8 },
          { opacity: 1, scale: 1, rotate: -2, duration: 0.5 },
          '-=0.15'
        )
        .fromTo(
          noteRef2.current,
          { opacity: 0, scale: 0.85, rotate: -8 },
          { opacity: 1, scale: 1, rotate: 3, duration: 0.5 },
          '-=0.30'
        )
        .from(buttonRef.current, { opacity: 0, y: 10, duration: 0.4 }, '-=0.2')
    }, sectionRef)

    return () => ctx.revert()
  }, [reducedMotion])

  return (
    <div
      className='relative min-h-[95vh] flex flex-col items-center justify-center
                bg-desk dark:bg-desk-dark overflow-hidden px-6 transition-colors duration-700'
    >
      <div className='flex justify-between '>
        <section
          ref={sectionRef}
          className='relative min-h-[70vh] flex flex-col items-start justify-center px-6 md:px-16
                  transition-colors duration-700 '
        >
          {/* Main note card */}
          <div
            className='relative bg-white dark:bg-card-dark shadow-lg dark:shadow-black/40
                   rounded-sm p-8 md:p-12 max-w-xl transition-colors duration-700 '
          >
            <Pin />
            <h1
              ref={headlineRef}
              className='font-handwritten text-4xl md:text-5xl text-ink dark:text-ink-dark
                     mb-4 transition-colors duration-700'
            >
              {hero.greeting.replace('👋', '')}
              <span className='inline-block animate-wave origin-[70%_70%]'>
                👋
              </span>
            </h1>
            <p
              ref={taglineRef}
              className='font-sans text-base md:text-lg text-gray-700 dark:text-text-dark
                     transition-colors duration-700'
            >
              {hero.tagline}
            </p>
          </div>

          <div ref={noteRef}>
            <StickyNote
              color='yellow'
              rotate={-2}
              className='mt-6 max-w-xs  transition-all duration-700'
            >
              <Pin color='bg-blue-500' />
              <p className='font-handwritten text-lg text-ink dark:text-neutral-900'>
                {hero.note}
              </p>
            </StickyNote>
          </div>

          <a
            ref={buttonRef}
            href={hero.resumeUrl}
            download
            className='mt-6 inline-flex items-center gap-2 bg-accent dark:bg-accent-dark text-white
                   dark:text-card-dark px-5 py-2.5 rounded-full shadow-md hover:scale-105 transition-transform
                   dark:shadow-black/40'
          >
            <Paperclip size={16} />
            Resume
            <Download size={16} />
          </a>
        </section>
        <div ref={noteRef2} className='max-md:hidden  flex items-center '>
          <StickyNote
            color='white'
            rotate={4}
            className='mt-6 max-w-xs  transition-all duration-700 '
          >
            <Pin color='bg-green-500' />
            <Image
              src='/my-image.jpeg'
              alt='User Image'
              width={300}
              height={300}
            />
          </StickyNote>
        </div>
      </div>
       <ScrollCue />
    </div>
  )
}
