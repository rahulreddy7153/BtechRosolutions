import Reveal from './Reveal'
import { IconPin } from './icons'

const AREAS = [
  'Mansarovar', 'Sanganer', 'Pratap Nagar', 'Muhana Mandi', 'Bhankrota',
  'Ajmer Road', 'Vaishali Nagar', 'Durgapura', 'Gopalpura', 'Sodala', 'Mangyawas',
]

export default function Coverage() {
  return (
    <section id="coverage" className="coverage-section" style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">Service Area</span>
          <h2>Nearby Areas We Cover in Jaipur</h2>
          <p>
            Based in Mansarovar, our technicians reach these localities and nearby areas
            with same-day slots and rapid-response for emergency call-outs.
          </p>
        </Reveal>

        <div className="area-grid reveal-stagger">
          {AREAS.map((area, i) => (
            <Reveal as="div" key={area} className="area-chip" style={{ '--i': i }}>
              <span className="area-chip-icon"><IconPin width={18} height={18} /></span>
              <span>{area}</span>
            </Reveal>
          ))}
        </div>

        <p className="coverage-note">
          Don&rsquo;t see your area listed? <a href="#contact">Contact us</a> &mdash; we&rsquo;re
          expanding coverage across Jaipur every quarter.
        </p>
      </div>
    </section>
  )
}
