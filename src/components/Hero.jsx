import WaveDivider from './WaveDivider'

const RADIUS = 80
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

export default function Hero() {
  const purity = 99 // %
  const offset = CIRCUMFERENCE * (1 - purity / 100)

  return (
    <section className="hero" id="top">
      <WaveDivider className="hero-wave" fill="var(--blue-100)" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Certified RO Technicians</span>
          <h1>Pure water, on your schedule &mdash; guaranteed.</h1>
          <p className="lede">
            From new installations to same-day emergency repairs, BTech RO Solutions keeps your
            reverse osmosis system running at peak purity with certified technicians
            and reliable after-service support in Mansarovar, Jaipur.
          </p>
          <div className="hero-actions">
            <a href="tel:7976574641" className="btn btn-primary">Call 7976574641</a>
            <a href="#contact" className="btn btn-secondary">Send an Enquiry</a>
          </div>
          <div className="hero-trust">
            <div><strong>9,500+</strong><span>Installations</span></div>
            <div><strong>5+ yrs</strong><span>In Service</span></div>
            <div><strong>4.9/5</strong><span>Avg. Rating</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="gauge-card">
            <div className="gauge-top">
              <span>Live Output Quality</span>
              <span>TDS Meter</span>
            </div>
            <div className="gauge-ring-wrap">
              <svg viewBox="0 0 200 200">
                <circle className="gauge-track" cx="100" cy="100" r={RADIUS} />
                <circle
                  className="gauge-progress"
                  cx="100" cy="100" r={RADIUS}
                  style={{ '--gauge-offset': offset }}
                />
              </svg>
              <div className="gauge-center">
                <strong>{purity}%</strong>
                <span>Purity Index</span>
              </div>
              <span className="gauge-drop" aria-hidden="true" style={{ left: '48%' }} />
            </div>
            <div className="gauge-footer">
              <div><strong>12 ppm</strong><span>Output TDS</span></div>
              <div><strong>0.01&micro;m</strong><span>Filtration</span></div>
              <div><strong>A+</strong><span>Safety Grade</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
