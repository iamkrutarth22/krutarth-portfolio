'use client'

import { useRef, useEffect } from 'react'
import { gsap } from '@/lib/gsap'
import { X } from 'lucide-react'
import { ProjectDetail } from '@/components/board/ProjectDetail'
import { useLenis } from '@/components/effects/SmoothScrollProvider'
import { useRouter } from 'next/navigation'
import { projects } from '@/content/site-data'
import { use } from 'react'

export default function ProjectModal ({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const router = useRouter()
  const { slug } = use(params)
  const lenis = useLenis()
  const project = projects.find(p => p.slug === slug)

  const modalRef = useRef<HTMLDivElement>(null)
  const sparkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    lenis?.stop()
    document.body.style.overflow = 'hidden'

    return () => {
      lenis?.start()
      document.body.style.overflow = ''
    }
  }, [lenis])

  // Spark animation
  useEffect(() => {
    if (!sparkRef.current) return

    const spark = sparkRef.current

    // Rotate the conic gradient continuously
    const tween = gsap.to(spark, {
      '--spark-angle': '360deg',
      duration: 3.2,
      ease: 'none',
      repeat: -1
    })

    return () => {
      tween.kill()
    }
  }, [])

  if (!project) return null

  return (
    <div
      className='fixed inset-0 z-50 bg-black/50 flex items-start justify-center py-12'
      onClick={() => router.back()}
    >
      <div
        ref={modalRef}
        onClick={e => e.stopPropagation()}
        data-lenis-prevent
        className='relative w-full max-w-3xl mx-4'
      >
        {/* Spark layer */}
        <div
          ref={sparkRef}
          className='absolute -inset-0.5 rounded-lg pointer-events-none'
          style={{
            background: `conic-gradient(
      from var(--spark-angle, 0deg),
      transparent 0%,
      transparent 58%,
      var(--spark-core) 68%,
      var(--spark-glow) 76%,
      var(--spark-core) 84%,
      transparent 92%,
      transparent 100%
    )`,
            filter: 'blur(4px)',
            opacity: 1
          }}
        />

        {/* Sharp spark line */}
        <div
          className='absolute -inset-px rounded-lg pointer-events-none'
          style={{
            background: `conic-gradient(
      from var(--spark-angle, 0deg),
      transparent 0%,
      transparent 60%,
      var(--spark-core) 70%,
      var(--spark-glow) 77%,
      var(--spark-core) 84%,
      transparent 92%,
      transparent 100%
    )`,
            mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
            WebkitMaskComposite: 'xor',
            padding: '2px'
          }}
        />

        {/* Actual modal content */}
        <div
          className='relative bg-white dark:bg-card-dark rounded-lg shadow-2xl
                     max-h-[85vh] overflow-y-auto scrollbar-hide'
        >
          <button
            onClick={() => router.back()}
            className='sticky top-4 float-right mr-4 mt-4 z-10
                     flex  items-center justify-center gap-1 text-ink dark:text-ink-dark opacity-80 cursor-pointer'
            aria-label='Close'
          >
            <span className='font-handwritten  text-xl text-center'>close</span>
            <X size={18} />
          </button>

          <ProjectDetail project={project} />
        </div>
      </div>
    </div>
  )
}
