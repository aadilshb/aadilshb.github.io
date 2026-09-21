import React from 'react'

export default function AboutPage() {
  return (
    <section className="section container">
     <h2>About</h2>
      <div className="card">
        <p>
          I’m a software developer with a strong interest in backend engineering and building software that is reliable, efficient, and maintainable. 
          I work primarily with Java and Python, along with data structures, databases, and web technologies, and 
          I enjoy turning ideas into practical, well-structured applications.

I’m particularly interested in writing clean code, building reliable APIs, and solving problems through thoughtful software design. 
I’m continuously learning new tools and best practices to improve the way I build and maintain software.  
          <br /><br />
          I feel most satisfied when I get the required functionality working smoothly, with clean code. 
          I’m continuously learning new tools and best practices to improve how I build software.
        </p>

        <h3 style={{ marginTop: 18 }}>Education</h3>
        <ul>
          <li>
            <strong>B.E. Computer Science & Engineering</strong> — MITE  
            <br />Class of 2025 • CGPA: 8.75
          </li>
          <li style={{ marginTop: 8 }}>
            <strong>12th Grade</strong> — P E S Vidyalaya  
            <br />Year of Passout: 2021 • Percentage: 95.8%
          </li>
          <li style={{ marginTop: 8 }}>
            <strong>10th Grade</strong> — Ursuline English Medium School  
            <br />Year of Passout: 2019 • Percentage: 93.8%
          </li>
        </ul>

        <h3 style={{ marginTop: 18 }}>Interests</h3>
        <p className="muted">
          Backend systems, REST API design, data handling, system design principles, 
          software architecture, and problem solving.
        </p>
      </div>

    </section>
  )
}