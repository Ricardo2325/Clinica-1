
import { Hero } from '@/components/sections/Hero'
import { Filosofia } from '@/components/sections/Filosofia'
import { Servicios } from '@/components/sections/Servicios'
import { AntesDespues } from '@/components/sections/AntesDespues'
import { Testimonios } from '@/components/sections/Testimonios'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      
      <section id="inicio">
        <Hero />
      </section>
      <Filosofia />
      <Servicios />
      <AntesDespues />
      <Testimonios />
      <FinalCTA />
      <Footer />
    </main>
  )
}
