import { FadeUp } from './FadeUp'
import { TallyButton } from './TallyButton'

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
            <TallyButton className="tally-btn-dark">Join Waitlist</TallyButton>
          </div>
        </FadeUp>

      </div>
    </section>
  )
}
