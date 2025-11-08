import React from 'react'

export default function About(){
  return (
    <section id="about" className="mb-5">
      <div className="card p-4">
        <h3>About Me</h3>
        <p className="text-muted">Dynamic Software Engineer with 1.5+ years of experience delivering client-focused solutions. Skilled in migrating legacy systems (FOCUS/FEX) to modern stacks, building microservices with Spring Boot, and developing interactive frontends using React.</p>
        <div className="row">
          <div className="col-md-8">
            <ul className="list-unstyled">
              <li><strong>Location:</strong> Pune, India</li>
              <li><strong>Email:</strong> amclpatna001@gmail.com</li>
              <li><strong>Phone:</strong> +91-7004145409</li>
              <li><strong>Education:</strong> MCA — NIT Allahabad (CPI: 8.4/10)</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Tech highlights</h5>
            <div>
              {['React','Spring Boot','Python','Docker','Postgres'].map(s=>(
                <span key={s} className="badge bg-light me-1 mb-1">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
