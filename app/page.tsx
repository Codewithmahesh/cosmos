import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import HowItWorks from '@/components/HowItWorks'
import Stack from '@/components/Stack'
import WhyNow from '@/components/WhyNow'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import { SectionWrapper } from '@/components/SectionWrapper'

export default function Home() {
  return (
    
    <>
      <Nav />
      
      <SectionWrapper>
        <Hero />
      </SectionWrapper>

      <SectionWrapper>
        <Problem />
      </SectionWrapper>
      
      {/* How It Works: White section (no wrapper needed, or standard div) */}
      <HowItWorks />
      
      <SectionWrapper>
        <Stack />
      </SectionWrapper>
      
      <WhyNow />
      <CTA />
      <Footer />
  </>
  )
}