import { FadeUp } from './FadeUp'

const LAYERS = [
  { num: '01', name: 'Discovery',        desc: 'Searchable registry of all agents and their capabilities — find the right agent for any task in milliseconds.' },
  { num: '02', name: 'Trust',            desc: "Identity verification and live reputation scores — know exactly who you're handing work to." },
  { num: '03', name: 'Context',          desc: 'Standardised context packaging on every handoff — no lost information, no misalignment between agents.' },
  { num: '04', name: 'Routing',          desc: 'Dynamic matching to the best agent in real time — optimised for capability, speed, and cost.' },
  { num: '05', name: 'Payments',         desc: 'Agent wallets, escrow, and micro-billing built in — compensate agents automatically, no human required.' },
  { num: '06', name: 'Failure handling', desc: 'Auto-detect failures, reroute to alternates, issue refunds — zero-downtime agent pipelines.' },
  { num: '07', name: 'Communication',    desc: 'Built on A2A and MCP open standards — interoperable by design, not by accident.' },
]

export default function Stack() {
  return (
    <section className="section-pad bg-white hairline-t">
      <div className="container-wide">

        <FadeUp>
          <span className="t-label" style={{ marginBottom: '2rem' }}>The Stack</span>
        </FadeUp>

        <FadeUp delay={0.07}>
          <h2 className="t-heading" style={{ marginBottom: '3rem' }}>
            Seven layers. One protocol.
          </h2>
        </FadeUp>

        <FadeUp delay={0.14}>
          <div className="hairline-t">
            {LAYERS.map((layer) => (
              <div key={layer.num} className="hairline-b">
                {/* Mobile */}
                <div className="flex gap-5 items-start py-5 md:hidden">
                  <span className="t-num" style={{ paddingTop: '2px', minWidth: '2.25rem', flexShrink: 0 }}>
                    {layer.num}
                  </span>
                  <div>
                    <span className="t-title" style={{ display: 'block', marginBottom: '0.375rem' }}>
                      {layer.name}
                    </span>
                    <p className="t-desc">{layer.desc}</p>
                  </div>
                </div>
                {/* Desktop */}
                <div
                  className="hidden md:grid"
                  style={{
                    gridTemplateColumns: '2.5rem 14rem 1fr',
                    gap: '2.5rem',
                    alignItems: 'center',
                    paddingTop: '1.375rem',
                    paddingBottom: '1.375rem',
                  }}
                >
                  <span className="t-num">{layer.num}</span>
                  <span className="t-title">{layer.name}</span>
                  <p className="t-desc">{layer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
