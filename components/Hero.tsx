import { FadeUp } from './FadeUp'

const TICKER = 'DISCOVERY · TRUST · CONTEXT · ROUTING · PAYMENTS · FAILURE HANDLING · COMMUNICATION ·   '

export default function Hero() {
  return (
    <section className="flex flex-col overflow-x-hidden md:min-h-screen">
      <div className="hero-inner w-full flex flex-col gap-8">

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

          <div className="w-full lg:max-w-[480px]">
            <p className="text-[#333] text-lg md:text-xl font-normal leading-relaxed">
              Cosmos is the missing layer between AI agents — so they can find each other, trust each other, and hand off work without breaking.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}