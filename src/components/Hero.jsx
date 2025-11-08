import React from 'react'

export default function Hero(){
  return (
    <section id="hero" className="row align-items-center mb-5">
      <div className="col-md-6">
        <h1 className="display-5 fw-bold">Hi, I'm <span style={{color:'#0d6efd'}}>Asmit Mohan</span></h1>
        <p className="lead text-muted">Dynamic Software Engineer with 1.5+ years of experience in full-cycle software development. I modernize legacy systems and build full-stack apps with React & Spring Boot.</p>
        <div className="mt-4">
          <a className="btn btn-primary me-2" href="https://drive.google.com/demo-resume-link" target="_blank" rel="noreferrer">Download Resume</a>
          <a className="btn btn-outline-secondary me-2" href="https://github.com/CodeWithAsmit" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn btn-outline-secondary" href="https://linkedin.com/in/asmit-mohan-726230215" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="col-md-6 text-center">
        <img src="/profile.jpg" alt="Asmit" className="hero-img shadow-lg" />
      </div>
    </section>
  )
}
