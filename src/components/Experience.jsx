import React from 'react'

export default function Experience(){
  const items = [
    {
      role: 'Software Engineer',
      company: 'Amdocs',
      period: 'Sep 2023 – Present',
      bullets: [
        'Architected and developed Clyde from scratch, a full-stack enterprise data management platform replacing legacy mainframe systems, using Spring Boot 3.4 (Java 21) backend with React 19 + TypeScript frontend for AT&T.',
        'Implemented secure REST APIs with Spring Security and MS Entra (Azure AD) OAuth2/OIDC integration, featuring role-based access control using @PreAuthorize annotations for Admin/User authorization.',
        'Built reusable React components including protected routes, form validation, and responsive data tables using React Context, React Router, and Bootstrap 5 for state management and navigation.',
        'Deployed on AWS EC2 with AWS RDS (PostgreSQL) using IAM authentication and SSL/TLS encryption; containerized with Docker and automated builds/deployments via GitHub Actions CI/CD pipelines.',
        'Utilized Spring AOP for centralized logging, performance monitoring, and exception handling; developed dynamic queries with Spring Data JPA and JdbcTemplate using parameterized queries to prevent SQL injection.',
        'Built test automation frameworks using React, Spring Boot, and Rest Assured for API testing, ensuring comprehensive test coverage and reliable deployments.',
        'Led the conversion of legacy FOCUS/FEX mainframe programs to Python for 5 enterprise applications, reducing migration time by 60% through a custom Python-based automation converter.',
        'Leveraged Cursor AI for rapid prototyping with custom MCP servers, rules, and personas; built an intelligent code navigation tool using FAISS vector database and Sentence Transformers for semantic search.',
        'Followed Agile/Scrum methodology with sprint planning, daily standups, and retrospectives. Conducted code reviews and mentored team members on best practices for clean, maintainable code.',
        'Successfully delivered 5+ AT&T projects including Broadband Facts, Auto Unlock, Next Up Anytime, 5G, and Connected Car IoT with high code quality and thorough testing.'
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
