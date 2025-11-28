import React from 'react'
import ContactForm from '../components/ContactForm'

export default function ContactPage() {
  return (
    <section className="section container">
      <h2>Contact</h2>
      <div className="card">
        <p>
          For recruitment or collaboration, you can email me or send a message using the form below.
          I check messages regularly and respond to recruiters and collaborators.
        </p>

        <div style={{ marginTop: 12 }}>
          <ContactForm initialEmail="aadil.portfolio@gmail.com" />
        </div>
      </div>
    </section>
  )
}