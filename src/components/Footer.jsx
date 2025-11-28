import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Aadil Shihab — Aspiring Software Developer</p>
        <p className="muted">Built with React + Vite • Source: <a href="https://github.com/aadilshb/aadilshb.github.io" target="_blank" rel="noreferrer">GitHub</a></p>
      </div>
    </footer>
  )
}