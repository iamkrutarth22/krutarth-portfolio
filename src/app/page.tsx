import { Career } from '@/components/board/Career'
import { Contact } from '@/components/board/Contact'
import { Hero } from '@/components/board/Hero'
import { Navbar } from '@/components/board/Navbar'
import { Projects } from '@/components/board/Projects'
import { Technologies } from '@/components/board/Technologies'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

export default function Home () {
  return (
    <main>
      {/* <div className='py-3 fixed right-1 px-2 flex justify-end  z-50  '>
      <ThemeToggle />
      </div> */}
      <Navbar />
      <Hero />
      <Projects />
      <Career />
      <Technologies/>
      <Contact/>
    </main>
  )
}
