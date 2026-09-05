'use client'

import { X, Download } from 'lucide-react'
import { useScrollLock } from '@/hooks/useScrollLock'

export function ResumeModal ({
  url,
  onClose
}: {
  url: string
  onClose: () => void
}) {
  useScrollLock(true)

  return (
    <div
      className='fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 md:p-10'
      onClick={onClose}
    >
      <div
        onClick={e => e.stopPropagation()}
        className='bg-white dark:bg-card-dark rounded-lg shadow-2xl relative
                   w-full max-w-3xl h-[85vh] flex flex-col overflow-hidden'
      >
        <div className='flex items-center justify-between px-4 py-3 border-b border-black/5 dark:border-border-dark'>
          <span className='font-sans text-sm font-medium text-ink dark:text-ink-dark'>
            Resume
          </span>
          <div className='flex items-center gap-3'>
            <a
              href={url}
              download
              className='flex items-center gap-1.5 text-sm text-accent dark:text-accent-dark hover:underline'
            >
              <Download size={16} />
              Download
            </a>
            <button
              onClick={onClose}
              aria-label='Close'
              className='text-gray-500 hover:text-ink dark:hover:text-ink-dark'
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <iframe src={url} className='flex-1 w-full' title='Resume' />
      </div>
    </div>
  )
}
