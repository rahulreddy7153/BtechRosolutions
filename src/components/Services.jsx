import Reveal from './Reveal'
import { IconDroplet, IconWrench, IconFilter, IconShield, IconBeaker, IconBolt, IconArrow } from './icons'

const SERVICES = [
  {
    icon: IconDroplet,
    title: 'New Installation',
    desc: 'Site survey, plumbing-safe fitting, and full system setup for homes and offices — done in a single visit.',
  },
  {
    icon: IconWrench,
    title: 'Repair & Troubleshooting',
    desc: 'Leaks, low pressure, odd taste or noise — our technicians diagnose and fix the root cause, not just symptoms.',
  },
  {
    icon: IconFilter,
    title: 'Filter & Membrane Replacement',
    desc: 'Genuine sediment, carbon and RO membrane replacements on schedule to keep purification at spec.',
  },
  {
    icon: IconShield,
    title: 'AMC Plans',
    desc: 'Annual maintenance contracts with scheduled visits, priority support, and parts discounts.',
    tag: 'Popular',
  },
  {
    icon: IconBeaker,
    title: 'Water Quality Testing',
    desc: 'On-site TDS, pH and contaminant testing with a detailed report and improvement recommendations.',
  },
  {
    icon: IconBolt,
    title: 'Emergency Service',
    desc: 'Sudden leak or breakdown? Our rapid-response team reaches most areas within 90 minutes.',
    emergency: true,
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">What We Do</span>
          <h2>End-to-end RO care, handled by one team</h2>
          <p>Every service is backed by certified technicians, genuine parts, and a written work guarantee.</p>
        </Reveal>

        <div className="services-grid reveal-stagger">
          {SERVICES.map((s, i) => (
            <Reveal as="article" key={s.title} className={`service-card ${s.emergency ? 'emergency' : ''}`} style={{ '--i': i }}>
              {s.tag && <span className="service-tag">{s.tag}</span>}
              <div className="service-icon"><s.icon /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <a className="service-link" href="#contact">
                Request service <IconArrow />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
