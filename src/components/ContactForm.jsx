import React, { useState } from 'react'

export default function ContactForm({ initialEmail = 'aadil.portfolio@gmail.com' }) {
  const [status, setStatus] = useState(null)
  const FORM_ACTION = 'https://formspree.io/f/movolywr' // replace with your id

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const fd = new FormData(e.target)
    try {
      const res = await fetch(FORM_ACTION, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' }
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Send failed')
      setStatus('sent')
      e.target.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact-block" style={{ marginTop: 12 }}>
      <a className="btn" href={`mailto:${initialEmail}`} style={{ marginBottom: 14 }}>
        <span role="img" aria-hidden>📧</span> Email Me
      </a>

      <form className="contact-grid" onSubmit={handleSubmit} aria-label="Contact form">
        <div className="form-row">
          <label htmlFor="name" className="sr-only">Your name</label>
          <input id="name" name="name" placeholder="Your name" required />
        </div>

        <div className="form-row">
          <label htmlFor="email" className="sr-only">Your email</label>
          <input id="email" name="_replyto" type="email" placeholder="Your email" required />
        </div>

        <div className="form-row form-row-full">
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea id="message" name="message" placeholder="Your message" rows={6} required />
        </div>

        <div className="form-row form-actions">
          <button type="submit" className="btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send'}
          </button>

          <div style={{ marginLeft: 12 }}>
            {status === 'sent' && <div className="form-note success">Thanks — I will reply soon.</div>}
            {status === 'error' && <div className="form-note error">Failed to send — try again later.</div>}
          </div>
        </div>
      </form>

    </section>
  )
}