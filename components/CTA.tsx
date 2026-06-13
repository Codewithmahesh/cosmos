import { FadeUp } from './FadeUp'

export default function CTA() {
  return (
    <section className="section-pad bg-black">
      <div className="container-wide">

        <FadeUp>
          <h2 className="t-cta" style={{ marginBottom: '1rem' }}>
            The roads are built.<br />
            Be first to<br />
            build the city.
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p
            className="t-body"
            style={{ color: 'rgba(255,255,255,0.38)', marginBottom: '2.5rem', maxWidth: '22rem' }}
          >
            Free for developers. Always.
          </p>
        </FadeUp>

        <FadeUp delay={0.17}>
          <div style={{ maxWidth: '460px' }}>
            <a
              href="https://tally.so/r/NpOLxl"
              target="_blank"
              rel="noopener noreferrer"
              className="tally-btn-dark"
            >
              Join Waitlist
            </a>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
