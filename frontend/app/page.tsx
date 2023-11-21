import About from '@/components/main/About'
import Footer from '@/components/main/Footer'
import Hero from '@/components/main/Hero'
import Navbar from '@/components/main/Navbar'
import Skills from '@/components/main/Skills'
import StarsCanvas from '@/components/main/StarsCanvas'
import Testimonials from '@/components/main/Testimonials'
import Work from '@/components/main/Work'

export default function Home() {
  return (
    <>
    <StarsCanvas />
    <main className="w-full">
      <div className="">
        <Navbar />
        <Hero />
        <About />
        <Work />
        <Skills />
        <Testimonials />
        <Footer />
      </div>
    </main>
    </>
  )
}
