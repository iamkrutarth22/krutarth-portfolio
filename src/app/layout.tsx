import type { Metadata } from 'next'
import { Caveat, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

const handwritten = Caveat({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-handwritten'
})

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Krutarth — Frontend Developer',
  description:
    'Frontend-focused Full Stack Developer — React, TypeScript, PostgreSQL'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${handwritten.variable} ${sans.variable} font-sans  px-0 md:px-6 lg:px-12 2xl:px-24 bg-background dark:bg-background-dark text-ink dark:text-ink-dark`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
