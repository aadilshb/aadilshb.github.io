import React, { useEffect, useState } from 'react'
import VideoModal from '../components/VideoModal'

const featured = [
  {
    id: 'sales-savvy',
    title: 'Sales Savvy E-commerce Platform',
    blurb: 'Responsive storefront with Spring Boot APIs, JWT authentication, payment integration and Docker-based deployment.',
    tech: ['React', 'Java', 'Spring Boot', 'MySQL', 'Docker'],
    repo: 'https://github.com/aadilshb/SalesSavvy_Backend',
    demoId: 'Ba4cqKJ4lo4'
  },
  {
    id: 'moneymate',
    title: 'Shop Billing & Inventory System',
    blurb: 'JavaFX desktop app for retail billing, GST-ready invoices, inventory tracking, PDF export, PIN-protected access and backup workflows.',
    tech: ['Java', 'JavaFX', 'SQLite', 'Maven'],
    repo: 'https://github.com/aadilshb/PPZ-Billing-System',         
    demoId: '5PvNpDNgCD8'       
  },
  {
    id: 'student-portfolio',
    title: 'Student Portfolio Management System',
    blurb: 'Django platform for student profiles, application workflows, employer portals and placement tracking developed as a team.',
    tech: ['Python', 'Django', 'SQLite'],
    repo: 'https://github.com/Haseeb-Imtiyaz/student-portfolio',
    demoId: 'IA0y3LBrOY4'
  },
  {
    id: 'paper-summarizer',
    title: 'Research Paper Summarizer',
    blurb: 'As a team, built a fine-tuned BART-based NLP system using Python and Django to summarize and translate long scientific papers.',
    tech: ['Python', 'Django', 'PyTorch', 'BART'],
    repo: '',
    demoId: 'XiSu4w_XMIc'
  }
]

export default function ProjectsPage() {
  const [meta, setMeta] = useState({})
  const [openVideoId, setOpenVideoId] = useState(null)
  const githubUsername = 'aadilshb'

  useEffect(() => {
    // fetch GitHub metadata (stars, language) for projects that have repo URLs
    async function fetchMeta() {
      const newMeta = {}
      for (const p of featured) {
        if (!p.repo) continue
        try {
          // parse repo URL
          const parts = p.repo.split('/')
          const user = parts[3], repo = parts[4]
          if (!user || !repo) continue
          const res = await fetch(`https://api.github.com/repos/${user}/${repo}`)
          if (!res.ok) continue
          const d = await res.json()
          newMeta[p.id] = { stars: d.stargazers_count, language: d.language, url: d.html_url }
        } catch (err) {
          console.warn('Failed to fetch repo meta for', p.id, err)
        }
      }
      setMeta(newMeta)
    }
    fetchMeta()
  }, [])

  function getYoutubeThumb(id) {
    if (!id) return null
    // hqdefault is a good tradeoff
    return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
  }

  return (
    <section className="section container">
      <h2>Projects</h2>
      <p className="muted">Projects reflecting my growing experience in full-stack development, backend systems, and desktop utilities.</p>

      <div className="projects-list">
        {featured.map((p, i) => {
          const thumb = getYoutubeThumb(p.demoId)
          const hasMeta = !!meta[p.id]
          return (
            <article key={p.id} className="project-card fade-up">
              {/* Thumbnail */}
              <div className="project-thumb" role="img" aria-label={`${p.title} thumbnail`}>
                {thumb ? (
                  <button
                    className="thumb-button"
                    onClick={() => p.demoId && setOpenVideoId(p.demoId)}
                    aria-label={`Watch demo for ${p.title}`}
                    style={{ backgroundImage: `url(${thumb})` }}
                  >
                    <div className="thumb-overlay">
                      <div className="play-circle">▶</div>
                    </div>
                  </button>
                ) : (
                  <div className="thumb-placeholder">
                    <div className="placeholder-text">No demo</div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="project-content">
                <h3>{p.title}</h3>
                <p className="muted">{p.blurb}</p>

                <div className="meta" style={{ marginTop: 10 }}>
                  <span style={{ fontWeight: 700 }}>{p.tech.join(' • ')}</span>
                </div>

                <div className="project-actions" style={{ marginTop: 12 }}>
                  {p.repo ? (
                    <a className="btn" href={p.repo} target="_blank" rel="noreferrer">Repository</a>
                  ) : (
                    <span style={{ color: 'var(--muted)', fontSize: 14 }}>Repository not published</span>
                  )}

                  {p.demoId ? (
                    <button className="btn" onClick={() => setOpenVideoId(p.demoId)}>▶ Watch Demo</button>
                  ) : null}

                  {hasMeta && (
                    <div style={{ marginLeft: 12, color: 'var(--muted)', display: 'inline-flex', gap: 12, alignItems: 'center' }}>
                      
                      
                    </div>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <div style={{ marginTop: 20 }} className="card">
        <h3>How I choose projects</h3>
        <p className="muted">
         I like working on end-to-end projects where I can practice backend logic, data handling, and building a clear user flow. I’m also learning how to add important basics like authentication, error handling, and smooth deployment.
        </p>
      </div>

      <VideoModal videoId={openVideoId} open={!!openVideoId} onClose={() => setOpenVideoId(null)} />
    </section>
  )
}