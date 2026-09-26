import { useEffect, useState } from 'react'
import Reveal from './Reveal'
import { IconCheck, IconPhone, IconMail, IconPin, IconClock, IconX } from './icons'

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/btechrosolutions@gmail.com'

const SERVICE_TYPES = [
  'New Installation',
  'Repair / Troubleshooting',
  'Filter & Membrane Replacement',
  'AMC Enrollment',
  'Water Quality Testing',
  'Emergency Service',
]

const INITIAL = { name: '', phone: '', email: '', area: '', serviceType: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  else if (values.name.trim().length < 2) errors.name = 'Name looks too short.'

  if (!values.phone.trim()) errors.phone = 'Please enter a phone number.'
  else if (!/^[0-9+\-\s()]{7,15}$/.test(values.phone.trim())) errors.phone = 'Enter a valid phone number.'

  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    const next = { ...values, [name]: value }
    setValues(next)
    if (touched[name]) {
      setErrors(validate(next))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors(validate(values))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setTouched({ name: true, phone: true, email: true })

    if (Object.keys(nextErrors).length > 0) return

    setStatus('sending')

    const payload = new FormData()
    payload.append('Name', values.name.trim())
    payload.append('Phone', values.phone.trim())
    if (values.email.trim()) payload.append('Email', values.email.trim())
    if (values.area.trim()) payload.append('Area / Locality', values.area.trim())
    if (values.serviceType) payload.append('Service Type', values.serviceType)
    payload.append('Message', values.message.trim() || 'No additional details provided.')
    payload.append('_subject', `New enquiry from ${values.name.trim()} — BTech RO Solutions website`)
    payload.append('_template', 'table')
    payload.append('_captcha', 'false')

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: payload,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setValues(INITIAL)
      setTouched({})
    } catch (err) {
      setStatus('error')
    }
  }

  const fieldError = (name) => touched[name] && errors[name]

  const closeSuccess = () => setStatus('idle')

  useEffect(() => {
    if (status !== 'success') return
    const timer = setTimeout(closeSuccess, 6000)
    return () => clearTimeout(timer)
  }, [status])

  return (
    <>
    <section id="contact">
      <div className="container contact-inner">
        <Reveal className="contact-info-card">
          <span className="eyebrow" style={{ color: 'var(--accent)' }}>Get In Touch</span>
          <h3>Talk to a technician today</h3>
          <p>Reach out for a free inspection quote, an AMC service recommendation, or an emergency call-out.</p>
          <div className="contact-info-list">
            <div className="contact-info-item">
              <span className="icon-wrap"><IconPhone /></span>
              <div><strong>7976574641</strong><span>Mon&ndash;Sun, 7am&ndash;10pm</span></div>
            </div>
            <div className="contact-info-item">
              <span className="icon-wrap"><IconMail /></span>
              <div><strong>btechrosolutions@gmail.com</strong><span>Replies within 2 hours</span></div>
            </div>
            <div className="contact-info-item">
              <span className="icon-wrap"><IconPin /></span>
              <div><strong>Mansarovar, Jaipur</strong><span>Walk-ins welcome</span></div>
            </div>
            <div className="contact-info-item">
              <span className="icon-wrap"><IconClock /></span>
              <div><strong>24/7 Emergency Line</strong><span>Rapid response teams on call</span></div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <form className="contact-form" noValidate onSubmit={handleSubmit}>
            <div className="form-row two">
              <div className={`field ${fieldError('name') ? 'has-error' : ''}`}>
                <label htmlFor="name">Full Name</label>
                <input
                  id="name" name="name" type="text" placeholder="Jane Doe"
                  value={values.name} onChange={handleChange} onBlur={handleBlur}
                  aria-invalid={!!fieldError('name')}
                  aria-describedby={fieldError('name') ? 'name-error' : undefined}
                />
                {fieldError('name') && <span className="field-error" id="name-error">{errors.name}</span>}
              </div>
              <div className={`field ${fieldError('phone') ? 'has-error' : ''}`}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  id="phone" name="phone" type="tel" placeholder="+91 98765 43210"
                  value={values.phone} onChange={handleChange} onBlur={handleBlur}
                  aria-invalid={!!fieldError('phone')}
                  aria-describedby={fieldError('phone') ? 'phone-error' : undefined}
                />
                {fieldError('phone') && <span className="field-error" id="phone-error">{errors.phone}</span>}
              </div>
            </div>

            <div className="form-row two">
              <div className={`field ${fieldError('email') ? 'has-error' : ''}`}>
                <label htmlFor="email">Email Address <span className="optional-tag">(optional)</span></label>
                <input
                  id="email" name="email" type="email" placeholder="you@example.com"
                  value={values.email} onChange={handleChange} onBlur={handleBlur}
                  aria-invalid={!!fieldError('email')}
                  aria-describedby={fieldError('email') ? 'email-error' : undefined}
                />
                {fieldError('email') && <span className="field-error" id="email-error">{errors.email}</span>}
              </div>
              <div className="field">
                <label htmlFor="area">Area / Locality <span className="optional-tag">(optional)</span></label>
                <input
                  id="area" name="area" type="text" placeholder="Mansarovar"
                  value={values.area} onChange={handleChange} onBlur={handleBlur}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="serviceType">Service Type <span className="optional-tag">(optional)</span></label>
                <select
                  id="serviceType" name="serviceType"
                  value={values.serviceType} onChange={handleChange} onBlur={handleBlur}
                >
                  <option value="">Select a service&hellip;</option>
                  {SERVICE_TYPES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="message">How can we help you? <span className="optional-tag">(optional)</span></label>
                <textarea
                  id="message" name="message" placeholder="Tell us about your RO system and the issue or request..."
                  value={values.message} onChange={handleChange} onBlur={handleBlur}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
            </button>

            {status === 'error' && (
              <div className="form-status form-status-error" role="alert">
                Something went wrong sending your enquiry. Please call us directly at{' '}
                <a href="tel:7976574641">7976574641</a>.
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>

    {status === 'success' && (
      <div className="modal-overlay" role="presentation" onClick={closeSuccess}>
        <div
          className="modal-card"
          role="dialog"
          aria-modal="true"
          aria-labelledby="enquiry-success-title"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={closeSuccess} aria-label="Close">
            <IconX />
          </button>
          <span className="contact-success-icon"><IconCheck /></span>
          <h3 id="enquiry-success-title">Thank you! Your enquiry has been received.</h3>
          <p>A BTech RO Solutions technician will call you back shortly. For anything urgent, call us directly.</p>
          <a href="tel:7976574641" className="btn btn-primary">
            <IconPhone /> Call 7976574641
          </a>
        </div>
      </div>
    )}
    </>
  )
}
