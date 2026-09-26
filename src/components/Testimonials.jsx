import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import { IconStar } from './icons'

const TESTIMONIALS = [
  {
    quote: 'Same-day repair on a Sunday when our RO unit stopped completely. Technician was clear about the cost upfront.',
    name: 'Priya Nair',
    area: 'Mansarovar, Jaipur',
    rating: 5,
  },
  {
    quote: 'Switched to their AMC service two years ago — no more guessing when the membrane needs changing.',
    name: 'Daniel Osei',
    area: 'Mansarovar, Jaipur',
    rating: 5,
  },
  {
    quote: 'The water quality report after installation was genuinely useful, not just a sales pitch.',
    name: 'Meera Iyer',
    area: 'Mansarovar, Jaipur',
    rating: 4,
  },
  {
    quote: 'Professional install, no mess, and they walked us through the filter change schedule in plain language.',
    name: 'Arjun Rathi',
    area: 'Mansarovar, Jaipur',
    rating: 5,
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const timerRef = useRef(null)

  const go = (next) => setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length)

  useEffect(() => {
    timerRef.current = setInterval(() => go(index + 1), 6000)
    return () => clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index])

  const current = TESTIMONIALS[index]

  return (
    <section aria-roledescription="carousel" aria-label="Customer testimonials">
      <div className="container">
        <Reveal className="section-head center">
          <span className="eyebrow">Customer Stories</span>
          <h2>Trusted by homes and offices across Mansarovar, Jaipur</h2>
        </Reveal>

        <Reveal className="testimonial-wrap">
          <div className="testimonial-quote-mark" aria-hidden="true">&ldquo;</div>
          <div className="testimonial-slide" aria-live="polite">
            <p className="quote">{current.quote}</p>
            <div className="testimonial-author">
              <div className="testimonial-avatar">{current.name.charAt(0)}</div>
              <strong>{current.name}</strong>
              <span>{current.area}</span>
              <div className="testimonial-rating" aria-label={`${current.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} style={{ opacity: i < current.rating ? 1 : 0.25 }} />
                ))}
              </div>
            </div>
          </div>

          <div className="testimonial-controls">
            <button className="testimonial-arrow" onClick={() => go(index - 1)} aria-label="Previous testimonial">&#8592;</button>
            <div className="testimonial-dots">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  className={i === index ? 'active' : ''}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                />
              ))}
            </div>
            <button className="testimonial-arrow" onClick={() => go(index + 1)} aria-label="Next testimonial">&#8594;</button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
