import { Career } from '@/components/board/Career'
import { Hero } from '@/components/board/Hero'
import { Projects } from '@/components/board/Projects'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export default function Home () {
  return (
    <main>
      <div className='py-3 fixed right-1 px-2 flex justify-end  z-50  '>
        <ThemeToggle />
      </div>
      <Hero />
      <Career />
      <Projects />
      <div className='flex min-h-screen justify-center items-center py-10'>
        jlkjsdlkjlsjdljklskdjljl
      </div>
    </main>
  )
}
