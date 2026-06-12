import { FadeUp } from './FadeUp'

const EVENTS = [
  { date: 'Nov 2024', title: 'Anthropic launches MCP',             sub: 'Agent-to-tool standard',                 highlight: false },
  { date: 'Mar 2025', title: 'OpenAI adopts MCP',                  sub: '22M downloads in weeks',                highlight: false },
  { date: 'Apr 2025', title: 'Google launches A2A',                sub: 'Agent-to-agent standard, 50+ partners',  highlight: false },
  { date: '2026',     title: '40% of enterprise apps have agents', sub: 'Mainstream adoption',                   highlight: false },
  { date: 'NOW →',    title: 'Nobody built the marketplace',       sub: 'Window is wide open',                   highlight: true  },
]

export default function WhyNow() {
  return (
    <section className="section-pad bg-white hairline-t">
      <div className="container-wide">

        <FadeUp>
          <span className="t-label" style={{ marginBottom: '2rem' }}>Why Now</span>
        </FadeUp>

        <FadeUp delay={0.07}>
          <h2 className="t-heading" style={{ maxWidth: '640px', marginBottom: '3rem' }}>
            The roads just got built.
            Nobody has built the city yet.
          </h2>
        </FadeUp>

        <FadeUp delay={0.14}>
          <div className="hairline-t">
            {EVENTS.map((ev) => (
              <div
                key={ev.date}
                className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-6"
                style={{
                  padding: '1.25rem 0 1.25rem 1rem',
                  borderBottom: '1px solid rgba(0,0,0,0.08)',
                  borderLeft: ev.highlight
                    ? '3px solid #000'
                    : '3px solid transparent',
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-body), 'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: '13px',
                    color: ev.highlight ? '#000' : '#aaa',
                    minWidth: '8.5rem',
                    flexShrink: 0,
                  }}
                >
                  {ev.date}
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0.625rem' }}>
                  <span className="t-event">{ev.title}</span>
                  <span
                    style={{
                      fontFamily: "var(--font-body), 'Inter', sans-serif",
                      fontSize: '13px',
                      color: '#aaa',
                    }}
                  >
                    {ev.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
