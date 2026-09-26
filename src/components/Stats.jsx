import Reveal from './Reveal'
import { useCountUp } from '../hooks/useCountUp'

const STATS = [
  { value: 9500, suffix: '+', label: 'Installations Done' },
  { value: 5, suffix: '+', label: 'Years in Service' },
  { value: 64, suffix: '+', label: 'Certified Technicians' },
  { value: 4.9, suffix: '/5', label: 'Average Rating', decimal: true },
]

function StatItem({ stat }) {
  const [ref, value] = useCountUp(stat.decimal ? stat.value * 10 : stat.value)
  const display = stat.decimal ? (value / 10).toFixed(1) : value.toLocaleString()
  return (
    <div className="stat-item" ref={ref}>
      <strong>{display}{stat.suffix}</strong>
      <span>{stat.label}</span>
    </div>
  )
}

export default function Stats() {
  return (
    <section aria-label="Company statistics" style={{ paddingBlock: 'var(--space-7)' }}>
      <Reveal className="stats-band">
        <div className="stats-inner">
          <div className="stats-grid">
            {STATS.map((stat) => (
              <StatItem key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
