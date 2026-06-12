import { WaitlistForm } from './WaitlistForm'

const TICKER = 'DISCOVERY · TRUST · CONTEXT · ROUTING · PAYMENTS · FAILURE HANDLING · COMMUNICATION ·   '

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col bg-white pt-16 overflow-x-hidden">
      <div className="container-wide flex flex-1 flex-col justify-between py-14 md:py-20">

        {/* Label */}
        <div className="flex items-center gap-2.5">
          <span style={{ color: '#999', fontSize: '9px', lineHeight: 1 }}>●</span>
          <span className="t-label">NOW IN DEVELOPMENT</span>
        </div>

        {/* Headline */}
        <h1 className="t-display">
          The Operating<br />
          System for<br />
          AI Agents
        </h1>

        {/* Marquee + two-column form */}
        <div>
          <div
            className="overflow-hidden hairline-t hairline-b"
            style={{ padding: '9px 0', marginBottom: '2.75rem' }}
          >
            <div className="marquee-inner">
              <span style={{ paddingRight: '3rem' }}>{TICKER}</span>
              <span style={{ paddingRight: '3rem' }} aria-hidden="true">{TICKER}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-20 items-start">
  <p className="t-body  sm:mx-w-2rem " 
  
  style={{ maxWidth: '20rem'
            

   }}
  >
    Cosmos is the missing layer between AI agents — so they can find
    each other, trust each other, and hand off work without breaking.
  </p>

  <div className="w-full min-w-0"  style={{ maxWidth: '20rem'
            

   }} >
    <WaitlistForm variant="light"  />
  </div>
</div>
        </div>

      </div>
    </section>
  )
}
