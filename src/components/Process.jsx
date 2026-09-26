import Reveal from './Reveal'

const STEPS = [
  { n: '01', title: 'Book', desc: 'Pick a service and time slot online or by phone in under two minutes.' },
  { n: '02', title: 'Confirm', desc: 'We confirm your slot, technician details, and estimated cost by SMS.' },
  { n: '03', title: 'On-site Work', desc: 'A certified technician arrives, carries out the job, and explains everything.' },
  { n: '04', title: 'Quality Check', desc: 'Output water is tested on the spot and results are shared before we leave.' },
]

export default function Process() {
  return (
    <section id="process" style={{ background: 'var(--bg-soft)' }}>
      <div className="container process-wrap">
        <Reveal className="section-head center">
          <span className="eyebrow">How It Works</span>
          <h2>Four steps to spotless water</h2>
          <p>A predictable, transparent process from the first call to the final quality check.</p>
        </Reveal>

        <div className="process-list reveal-stagger">
          {STEPS.map((step, i) => (
            <Reveal as="div" key={step.n} className="process-step" style={{ '--i': i }}>
              <span className="process-num" aria-hidden="true">{step.n}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
