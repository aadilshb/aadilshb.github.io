import React from 'react'

const entries = [
  {
    role: 'Software Development Intern',
    org: 'Kodnest Technologies — Bengaluru',
    dates: 'Feb 2025 — Sep 2025',
    bullets: [
      'Worked on Java, Spring Boot, and MySQL to build and understand backend application workflows.',
      'Contributed to real-world project modules working on both frontend as well as backend.',
      'Gained industry best practices through mentor guidance, improving code quality and development discipline.'
    ]
  },
  {
    role: 'Python Intern',
    org: 'Jumpwhere — Mangalore',
    dates: 'Feb 2025 — May 2025',
    bullets: [
      'Developed and maintained features for a student-portfolio SaaS platform using Python and Django.',
      'Worked in a team, implementing backend logic, data handling, and integration workflows to keep the platform reliable.'
    ]
  },
  {
    role: 'Developer Intern',
    org: 'Hylobiz — Bengaluru',
    dates: 'Oct 2023 — Nov 2023',
    bullets: [
      'Built a WhatsApp message-automation service using FastAPI and the Facebook Graph API.',
      'Gained practical experience in backend automation, API connectivity, and monitoring.'
    ]
  }
]


export default function ExperiencePage() {
  return (
    <section className="section container">
      <h2>Experience</h2>
      <div className="timeline">
        {entries.map((e, i) => (
          <div key={i} className="card">
            <h3>{e.role} <span className="muted">— {e.org}</span></h3>
            <p className="muted">{e.dates}</p>
            <ul>
              {e.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}