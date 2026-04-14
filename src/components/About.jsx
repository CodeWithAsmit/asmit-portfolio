import React from 'react'

export default function About(){
  return (
    <section id="about" className="mb-5">
      <div className="card p-4">
        <h3>About Me</h3>
        <p className="text-muted">Full-Stack Software Engineer with 2+ years of experience building scalable enterprise applications using Java, Spring
          Boot, React, and AWS. Experienced in microservices architecture, event-driven systems (Kafka), and backend
          performance optimization. Strong foundation in data structures, system design, and modern AI-powered developer tools.
          Additionally, experienced in mainframe modernization projects, bridging legacy systems with modern cloud-native
          architectures to deliver scalable, future-ready solutions.</p>
        <div className="row">
          <div className="col-md-8">
            <ul className="list-unstyled">
              <li><strong>Location:</strong> Pune, India</li>
              <li><strong>Email:</strong> amclpatna001@gmail.com</li>
              <li><strong>Phone:</strong> +91 7004145409</li>
              <li><strong>Education:</strong> MCA — MNNIT Allahabad (CPI: 8.4/10)</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Tech highlights</h5>
            <div>
              {['Java', 'Spring Boot', 'React.js', 'TypeScript', 'AWS', 'Kafka', 'Docker', 'PostgreSQL'].map(s=>(
                <span key={s} className="badge bg-light me-1 mb-1">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
