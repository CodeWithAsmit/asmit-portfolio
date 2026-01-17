import React from 'react'
import profileImg from '/profile.jpg'

export default function Hero(){
  return (
    <section id="hero" className="row align-items-center mb-5">
      <div className="col-md-6">
        <h1 className="display-5 fw-bold">Hi, I'm <span className="hero-name">Asmit Mohan</span></h1>
        <p className="lead text-muted">Full Stack Engineer with 2+ years of experience building enterprise web applications using Java, Spring Boot, React.js, and AWS. Skilled in microservices architecture, event-driven systems with Kafka, and AI-powered developer tools.</p>
        <div className="mt-4">
          <a className="btn btn-primary me-2" href="https://drive.google.com/file/d/1jljFLErnzV2oBgxg7nsfpAfXadQBZlm0/view?usp=sharing" target="_blank" rel="noreferrer">Download Resume</a>
          <a className="btn btn-outline-secondary me-2" href="https://github.com/CodeWithAsmit" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn btn-outline-secondary" href="https://linkedin.com/in/asmit-mohan-726230215" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="col-md-6 text-center">
        <img src={profileImg} alt="Asmit" className="hero-img shadow-lg" />
      </div>
    </section>
  )
}
