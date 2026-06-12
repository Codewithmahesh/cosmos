import { FadeUp } from './FadeUp'

const CARDS = [
  {
    title: 'No discovery',
    desc: 'Agent X has no way to find Agent Y, even when Y could complete the task perfectly.',
  },
  {
    title: 'No trust',
    desc: "Without identity verification, agents can't verify who — or what — they're handing work to.",
  },
  {
    title: 'No coordination',
    desc: 'No handoff protocol. No payment rail. No failure recovery. Just a dead end.',
  },
]

export default function Problem() {
  return (
    <section className="section-pad bg-white hairline-t">
      <div className="container-wide">

        <FadeUp>
          <span className="t-label" style={{ marginBottom: '2rem' }}>The Problem</span>
        </FadeUp>

        <FadeUp delay={0.07}>
          <h2 className="t-heading" style={{ maxWidth: '720px', marginBottom: '1.25rem' }}>
            Your agent fails. You hardcode a fix.
            It breaks next week. Repeat.
          </h2>
        </FadeUp>

        <FadeUp delay={0.13}>
          <p className="t-body" style={{ maxWidth: '560px', marginBottom: '3rem' }}>
            AI agents are being built everywhere. But when Agent X hits a task outside its
            capability, it has no way to find Agent Y. No discovery. No trust. No handoff.
            No payment. Just failure — or a human stepping in manually.
          </p>
        </FadeUp>

        <FadeUp delay={0.19}>
          <div
            className="grid grid-cols-1 sm:grid-cols-3"
            style={{
              border: '1px solid rgba(0,0,0,0.08)',
              gap: '1px',
              background: 'rgba(0,0,0,0.08)',
            }}
          >
            {CARDS.map((card) => (
              <div key={card.title} className="bg-white" style={{ padding: '1.875rem 1.625rem' }}>
                <h3 className="t-title" style={{ marginBottom: '0.5rem' }}>{card.title}</h3>
                <p className="t-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
