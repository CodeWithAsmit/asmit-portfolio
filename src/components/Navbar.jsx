import React from 'react'

export default function Navbar({ theme, setTheme }) {
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  const scrollTo = id => document.getElementById(id).scrollIntoView({ behavior: 'smooth' })

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-white bg-opacity-50 py-3 mb-4">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="/profile.jpg" alt="Asmit" width="48" height="48" className="rounded-circle me-2" />
          <div>
            <div className="fw-bold">Asmit Mohan</div>
            <small className="text-muted">Software Engineer</small>
          </div>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item"><button className="btn btn-link nav-link" onClick={() => scrollTo('about')}>About</button></li>
            <li className="nav-item"><button className="btn btn-link nav-link" onClick={() => scrollTo('experience')}>Experience</button></li>
            <li className="nav-item"><button className="btn btn-link nav-link" onClick={() => scrollTo('projects')}>Projects</button></li>
            <li className="nav-item"><button className="btn btn-link nav-link" onClick={() => scrollTo('contact')}>Contact</button></li>
            <li className="nav-item"><button className="btn btn-outline-primary ms-2" onClick={toggle}>{theme==='dark'?'🌙':'☀️'}</button></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
