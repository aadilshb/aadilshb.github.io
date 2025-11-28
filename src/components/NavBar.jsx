import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="site-header" role="banner">
      <div className="nav">
        <div className="brand">Aadil Shihab</div>
        <nav className="nav-links" role="navigation" aria-label="Main">
          <NavLink to="/" end className={({isActive})=> isActive ? 'active' : ''}>Home</NavLink>
          <NavLink to="/about" className={({isActive})=> isActive ? 'active' : ''}>About</NavLink>
          <NavLink to="/experience" className={({isActive})=> isActive ? 'active' : ''}>Experience</NavLink>
          <NavLink to="/projects" className={({isActive})=> isActive ? 'active' : ''}>Projects</NavLink>
          <NavLink to="/skills" className={({isActive})=> isActive ? 'active' : ''}>Skills & Languages</NavLink>
          <NavLink to="/contact" className={({isActive})=> isActive ? 'active' : ''}>Contact</NavLink>
          <a href="https://github.com/aadilshb" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/aadil-shihab-a73583255/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="/resume_portfolio.pdf" download="Aadil_Shihab_Resume.pdf" rel="noreferrer">Download Resume</a>
        </nav>
      </div>
    </header>
  )
}