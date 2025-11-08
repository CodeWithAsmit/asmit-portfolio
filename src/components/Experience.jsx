import React from 'react'

export default function Experience(){
  const items = [
    {
      role: 'Software Engineer',
      company: 'Amdocs',
      period: 'Jul 2025 – Present',
      bullets: [
        'Led conversion of legacy FOCUS/FEX mainframe programs to Python for four enterprise apps.',
        'Modernized interfaces to Spring Boot + React, containerized with Docker and CI with GitHub Actions.'
      ]
    },
    {
      role: 'Associate Software Engineer',
      company: 'Amdocs',
      period: 'Sep 2023 – Jun 2025',
      bullets: [
        'Delivered low-defect code for AT&T products (Broadband Facts, Next Up Anytime, IoT).',
        'Built Tuxedo services using C and Pro*C; automated batch workflows with shell and SQL.'
      ]
    }
  ]
  return (
    <section id="experience" className="mb-5">
      <h3 className="mb-3">Experience</h3>
      <div className="row g-3">
        {items.map(it=>(
          <div key={it.role} className="col-12">
            <div className="card p-3">
              <div className="d-flex justify-content-between">
                <div>
                  <div className="fw-bold">{it.role} <span className="text-primary">— {it.company}</span></div>
                  <div className="text-muted">{it.period}</div>
                </div>
              </div>
              <ul className="mt-2">
                {it.bullets.map(b=> <li key={b} className="text-muted">{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
