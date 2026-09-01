import type { Metadata } from 'next'
import { Caveat, Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import { SmoothScrollProvider } from '@/components/effects/SmoothScrollProvider'

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
  children,
  modal
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${handwritten.variable} ${sans.variable} font-sans`}>
        <ThemeProvider>
          <SmoothScrollProvider>
            {children}
            {modal}
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
