import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Skills } from '@/components/sections/skills'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Contact } from '@/components/sections/contact'
import { Terminal } from '@/components/ui/terminal'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Terminal />
    </div>
  )
}

export default App
