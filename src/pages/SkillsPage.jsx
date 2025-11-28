import React from 'react'

const tech = {
  languages: ['Java', 'Python', 'SQL'],
  frameworks: ['Spring Boot', 'JavaFX', 'Django', 'React'],
  tools: ['REST APIs', 'System Design', 'Docker', 'HTML/CSS']
}

const spoken = [
  { name: 'English', level: 'Fluent', color: '#60a5fa' },
  { name: 'Hindi', level: 'Fluent', color: '#fb923c' },
  { name: 'Japanese', level: 'Conversational', color: '#f43f5e' },
  { name: 'Malayalam', level: 'Native', color: '#34d399' }
]

function SkillGroup({ title, items }) {
  return (
    <div style={{ marginTop: 18 }}>
      <h3 style={{ margin: '6px 0' }}>{title}</h3>
      <div className="skills-list">
        {items.map((s, i) => (
          <div className="skill-pill" key={i}>{s}</div>
        ))}
      </div>
    </div>
  )
}

export default function SkillsPage() {
  return (
    <section className="section container">
      <h2>Technical Skills & Languages</h2>

      <div className="card fade-up">
        <p className="muted">Grouped skill categories for quick scanning.</p>

        {/* TECHNICAL SKILLS */}
        <SkillGroup title="Programming Languages" items={tech.languages} />
        <SkillGroup title="Frameworks & Libraries" items={tech.frameworks} />
        <SkillGroup title="Tools & Concepts" items={tech.tools} />

       {/* SPOKEN LANGUAGES */}
        <div style={{ marginTop: 32 }}>
        <div
            style={{
            fontSize: '1.05rem',
            fontWeight: 800,
            color: 'white',
            marginBottom: '6px',
            display: 'inline-block',
            position: 'relative'
            }}
            className="fade-up"
        >
            Spoken Languages
            <span
            style={{
                content: '',
                display: 'block',
                height: '3px',
                width: '70%',
                marginTop: '4px',
                borderRadius: '999px',
                background: 'linear-gradient(90deg, var(--accent-2), var(--accent-1))',
                boxShadow: '0 4px 14px rgba(124,58,237,0.22)',
                opacity: 0.8
            }}
            />
        </div>

        <div
            style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '14px',
            marginTop: '18px'
            }}
        >
            {spoken.map((s, idx) => (
            <div
                key={idx}
                className="fade-up"
                style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                padding: '14px 16px',
                borderRadius: '16px',
                backdropFilter: 'blur(6px)',
                boxShadow: '0 6px 20px rgba(0,0,0,0.25)',
                transition: 'transform .25s cubic-bezier(.2,.9,.3,1), box-shadow .25s ease',
                }}
                onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)'
                e.currentTarget.style.boxShadow = '0 16px 38px rgba(0,0,0,0.32)'
                }}
                onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)'
                }}
            >
                <div
                style={{
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: s.color,
                    marginBottom: '2px'
                }}
                >
                {s.name}
                </div>
                <div style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                {s.level}
                </div>
            </div>
            ))}
        </div>
    </div>
</div>
    </section>
  )
}