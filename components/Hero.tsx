import { FadeUp } from './FadeUp'
import { WaitlistForm } from './WaitlistForm'

const TICKER = 'DISCOVERY · TRUST · CONTEXT · ROUTING · PAYMENTS · FAILURE HANDLING · COMMUNICATION ·   '

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col pt-6 overflow-x-hidden">
      {/* Removed flex-1 and justify-between, using fixed padding and consistent gaps instead */}
      <div className="container-wide w-full flex flex-col py-12 md:py-20 gap-8">

        {/* Label */}
        <div className="w-full">
          <div className="flex items-center gap-2.5">
            <span style={{ color: '#999', fontSize: '9px', lineHeight: 1 }}>●</span>
            <span className="t-label">NOW IN DEVELOPMENT</span>
          </div>
        </div>

        {/* Headline */}
        <div className="">
          <h1 className="t-display">
            The Operating<br />
            System for<br />
            AI Agents
          </h1>
        </div>

        {/* Marquee + Sub-sections wrapper */}
        <div className="w-full">
          <div
            className="overflow-hidden hairline-t hairline-b"
            style={{
              padding: '9px 0',
              marginBottom: '2rem', // Reduced margin slightly to close up the layout space
            }}
          >
            <div className="marquee-inner">
              <span style={{ paddingRight: '3rem' }}>{TICKER}</span>
              <span
                style={{ paddingRight: '3rem' }}
                aria-hidden="true"
              >
                {TICKER}
              </span>
            </div>
          </div>

          {/* Sub-headline and Waitlist Form Container */}
          <div className="flex flex-col gap-8 lg:flex-row lg:justify-between lg:items-start w-full">
            
            {/* Left Column: Paragraph Text */}
            <div className="w-full lg:max-w-[480px]">
              <p className="text-[#333] text-lg md:text-xl font-normal leading-relaxed">
                Cosmos is the missing layer between AI agents — so they can find each other, trust each other, and hand off work without breaking.
              </p>
            </div>
            
            {/* Right Column: Waitlist Input Block */}
            <div className="w-full sm:max-w-[400px] lg:max-w-[460px] lg:ml-auto">
              <WaitlistForm variant="light" />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}