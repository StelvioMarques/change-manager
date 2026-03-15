import Cursor from '@/components/Cursor'
import Marquee from '@/components/Marqee'
import Hero from '@/components/sections/hero'
import Navbar from '@/components/layout/navbar'
import Footer from '@/components/layout/footer/footer'
import WhyUs from '@/components/sections/why-us'
import CtaSection from '@/components/sections/cta'
import Process from '@/components/sections/process'
import Services from '@/components/sections/services'
import Testimonials from '@/components/sections/testimonials'

export default function Home() {
  return (
    <>
      {/*  <Cursor /> */}
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <WhyUs />
        <Testimonials />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}