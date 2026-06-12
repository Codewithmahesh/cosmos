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

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {LAYERS.map((layer, i) => (
            <FadeUp
              key={layer.num}
              delay={0.14 + i * 0.07}
              className={
                i === LAYERS.length - 1 && LAYERS.length % 2 !== 0
                  ? 'sm:col-span-2'
                  : ''
              }
            >
              <div
                style={{
                  background: '#000',
                  padding: '2rem',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.14), 0 1px 4px rgba(0,0,0,0.08)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.875rem',
                  boxSizing: 'border-box',
                }}
              >
                <span
                  className="t-num"
                  style={{ color: 'rgba(255,255,255,0.3)' }}
                >
                  {layer.num}
                </span>

                <span
                  className="t-title"
                  style={{ color: '#fff', fontSize: '1.0625rem' }}
                >
                  {layer.name}
                </span>

                <p
                  className="t-desc"
                  style={{ color: 'rgba(255,255,255,0.5)', marginTop: 'auto', paddingTop: '0.25rem' }}
                >
                  {layer.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  )
}
