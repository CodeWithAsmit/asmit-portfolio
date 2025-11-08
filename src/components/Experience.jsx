import React from 'react'

export default function Experience(){
  const items = [
    {
      role: 'Software Engineer',
      company: 'Amdocs',
      period: 'July 2025 – Present',
      bullets: [
        'Led the conversion of legacy FOCUS/FEX mainframe programs to Python for four enterprise applications. Developed a custom Python-based converter to automate and accelerate the migration process.',
        'Consistently delivered projects ahead of schedule using GitHub Copilot and Tabnine for rapid prototyping and code generation, ensuring full alignment with business requirements while maintaining high standards of code quality.',
        'Modernized legacy mainframe interfaces by migrating to Spring Boot and React.js Stack, using PostgreSQL DB on AWS servers. Containerized services with Docker and GitHub Actions for efficient and scalable deployment.'
      ]
    },
    {
      role: 'Associate Software Engineer',
      company: 'Amdocs',
      period: 'Sep 2023 – June 2025',
      bullets: [
        'Successfully delivered high-quality, low-defect code across multiple AT&T projects, including Broadband Facts, Auto Unlock, Next Up Anytime, 5G and Connected Car IoT.',
        'Developed Tuxedo services using C and Pro*C for seamless Unix integration and efficient SQL-based data access in high-performance transactional systems.',
        'Automated Unix batch jobs and daemon processes using Pro*C, Shell Scripting, and SQL, streamlining workflows and enhancing system reliability and enterprise integration.',
        'Used Git/GitHub for version control, agile methodologies, code reviews, and team collaboration, ensuring smooth delivery and cross-functional coordination.'
      ]
    }
  ]
  return (
    <section id="experience" className="mb-5">
      <h3 className="mb-4">Experience</h3>
      <div className="row g-4">
        {items.map((it, idx) => (
          <div key={it.role} className="col-12">
            <div className="card p-4 experience-card">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
                <div className="mb-2 mb-md-0">
                  <h4 className="fw-bold mb-1">{it.role} <span className="text-primary">— {it.company}</span></h4>
                  <div className="text-muted">{it.period}</div>
                </div>
              </div>
              <ul className="experience-list mb-0">
                {it.bullets.map((b, bulletIdx) => (
                  <li key={bulletIdx} className="experience-bullet">{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
