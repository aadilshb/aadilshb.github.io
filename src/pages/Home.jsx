import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedBlob from '../components/AnimatedBlob'

export default function Home() {
  return (
    <div>
      <section className="hero container">
        <AnimatedBlob />
        <div className="hero-inner">
          <h1 className="fade-up">Hello — I'm <span className="accent">Aadil Shihab</span></h1>
          <p className="lead fade-up fade-up-delay-1">
            I’m a backend-leaning Software Developer who loves turning ideas into fast, reliable systems.
            I work with Java, Python, and databases, and I’m always learning better ways to design APIs, manage data, and build scalable applications.
          </p>
          <div className="hero-ctas fade-up fade-up-delay-2">
            <Link className="btn" to="/projects">Featured Projects</Link>
            <Link className="btn ghost" to="/contact">Get in touch</Link>
          </div>
        </div>
      </section>

      <section className="section container">
        <h2 className="fade-up">Explore</h2>
        <div className="preview-grid">
          <Link className="card fade-up fade-up-delay-1" to="/about">
            <h3>About</h3>
            <p className="muted">Who I am and how I approach engineering problems.</p>
          </Link>

          <Link className="card fade-up fade-up-delay-2" to="/experience">
            <h3>Experience</h3>
            <p className="muted">Internships and real-world experience where I built various services.</p>
          </Link>

          <Link className="card fade-up fade-up-delay-3" to="/projects">
            <h3>Projects</h3>
            <p className="muted">Selected projects — desktop and web apps I developed and maintained.</p>
          </Link>

          <Link className="card fade-up fade-up-delay-4" to="/skills">
            <h3>Skills & Languages</h3>
            <p className="muted">Technical tools and spoken languages I work with.</p>
          </Link>
        </div>
      </section>

      <section className="section container">
        <h2 className="fade-up">Spotlight</h2>
        <div className="card fade-up fade-up-delay-2">
          <h3>Sales Savvy E-Commerce Platform</h3>
          <p className="muted">
            A full-stack online store with React, Spring Boot APIs, JWT auth, product management, and Razorpay-powered payments.
          </p>
          <div style={{ marginTop: 12 }}>
            <Link className="btn" to="/projects">See project details</Link>
          </div>
        </div>
      </section>
    </div>
  )
}