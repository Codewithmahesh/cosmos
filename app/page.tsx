import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import Stack from '@/components/Stack'
import WhyNow from '@/components/WhyNow'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-white">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Stack />
      <WhyNow />
      <CTA />
      <Footer />
    </main>
  )
}
