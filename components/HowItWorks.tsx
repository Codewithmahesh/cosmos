import { FadeUp } from './FadeUp'

const STEPS = [
  {
    num: '01',
    title: 'Agent X hits a wall',
    desc: "It reaches a subtask outside its capability — translation, data enrichment, payment processing, whatever it can't handle alone.",
  },
  {
    num: '02',
    title: 'Cosmos finds the best match',
    desc: 'The registry is searched in real time. The best agent is selected dynamically — no hardcoding, no brittle integrations.',
  },
  {
    num: '03',
    title: 'Context passes. Work happens.',
    desc: 'Standardised context packaging ensures Agent Y receives everything it needs. Subtask completes with full context intact.',
  },
  {
    num: '04',
    title: 'Task continues. User sees nothing.',
    desc: 'Result returned seamlessly. Original task resumes. Invisible. Instant. No human in the loop.',
  },
]

export default function HowItWorks() {
  return (
    <section className="section-pad bg-white hairline-t">
      <div className="container-wide">

        <FadeUp>
          <span className="t-label" style={{ marginBottom: '2rem' }}>How It Works</span>
        </FadeUp>

        <FadeUp delay={0.07}>
          <h2 className="t-heading" style={{ marginBottom: '3rem' }}>
            Four steps. Zero friction.
          </h2>
        </FadeUp>

        <FadeUp delay={0.14}>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{
              border: '1px solid rgba(0,0,0,0.08)',
              gap: '1px',
              background: 'rgba(0,0,0,0.08)',
            }}
          >
            {STEPS.map((step) => (
              <div key={step.num} className="bg-white" style={{ padding: '1.875rem 1.625rem' }}>
                <span className="t-num" style={{ display: 'block', marginBottom: '1.75rem' }}>
                  {step.num}
                </span>
                <h3 className="t-title" style={{ marginBottom: '0.625rem' }}>{step.title}</h3>
                <p className="t-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
