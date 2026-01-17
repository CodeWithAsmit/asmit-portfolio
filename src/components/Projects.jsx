import React from 'react'

export default function Projects(){
  const personalProjects = [
    {
      title: 'Job Portal Application',
      category: 'Full Stack',
      tech: ['Spring Boot', 'Spring Security', 'JWT', 'OAuth2', 'Apache Tika', 'Spring Mail', 'MySQL'],
      description: 'Built a complete job portal with Spring Boot, Spring Security, JWT authentication, and OAuth2 integration. Implemented resume parsing using Apache Tika, email notifications with Spring Mail, and referral system with MySQL database.',
      link: 'https://github.com/CodeWithAsmit/Java_Projects'
    },
    {
      title: 'Microservices Quiz Platform',
      category: 'Distributed Systems',
      tech: ['Spring Cloud Gateway', 'Eureka Server', 'OpenFeign', 'Spring Boot'],
      description: 'Designed microservices architecture with Spring Cloud Gateway for API routing, Eureka Server for service discovery, and OpenFeign for inter-service communication between Quiz and Question services.',
      link: 'https://github.com/CodeWithAsmit/Java_Projects'
    },
    {
      title: 'Kafka Event Streaming',
      category: 'Event-Driven',
      tech: ['Spring Kafka', 'Docker Compose', 'Zookeeper'],
      description: 'Implemented real-time event streaming with Spring Kafka, featuring dynamic consumer management, topic partitioning, and producer/consumer APIs containerized with Docker Compose.',
      link: 'https://github.com/CodeWithAsmit/Java_Projects'
    }
  ]

  const hackathonProjects = [
    {
      title: 'Lauded Arts',
      subtitle: 'Hack36 Hackathon, MNNIT Allahabad',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Bootstrap'],
      description: 'Built a full-stack e-commerce platform at Hack36 (36-hour hackathon) using Node.js, Express.js, MongoDB, and Bootstrap enabling small artists to upload and sell paintings, promoting "Vocal for Local" initiative.',
      link: 'https://github.com/CodeWithAsmit/Hack36-Project'
    },
    {
      title: 'Meme It',
      subtitle: 'Avishkar Tech Fest Hackathon, MNNIT',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap'],
      description: 'Created a meme generator web application at Avishkar hackathon using PHP, MySQL, JavaScript, and Bootstrap with features for text customization, templates, and collage creation.',
      link: 'https://github.com/CodeWithAsmit/MemeIT_PHP'
    }
  ]

  return (
    <section id="projects" className="mb-5">
      {/* Personal Projects */}
      <h3 className="mb-4">Personal Projects</h3>
      <p className="text-muted mb-3">
        <a href="https://github.com/CodeWithAsmit/Java_Projects" target="_blank" rel="noreferrer" className="text-decoration-none">
          <strong>GitHub Repository: github.com/CodeWithAsmit/Java_Projects</strong>
        </a>
      </p>
      <div className="row g-4 mb-5">
        {personalProjects.map((p, idx) => (
          <div key={idx} className="col-12">
            <div className="card p-4 project-card">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
                <div className="mb-2 mb-md-0">
                  <h4 className="fw-bold mb-1">{p.title} <span className="text-muted fw-normal">— {p.category}</span></h4>
                </div>
              </div>
              <p className="mb-3">{p.description}</p>
              <div className="mb-3">
                <div className="d-flex flex-wrap gap-2">
                  {p.tech.map(tech => (
                    <span key={tech} className="badge skill-badge">{tech}</span>
                  ))}
                </div>
              </div>
              <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-outline-primary">
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Hackathon Projects */}
      <h3 className="mb-4">Hackathon Projects</h3>
      <div className="row g-4">
        {hackathonProjects.map((p, idx) => (
          <div key={idx} className="col-12">
            <div className="card p-4 project-card">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
                <div className="mb-2 mb-md-0">
                  <h4 className="fw-bold mb-1">{p.title}</h4>
                  <div className="text-muted small">{p.subtitle}</div>
                </div>
              </div>
              <p className="mb-3">{p.description}</p>
              <div className="mb-3">
                <div className="d-flex flex-wrap gap-2">
                  {p.tech.map(tech => (
                    <span key={tech} className="badge skill-badge">{tech}</span>
                  ))}
                </div>
              </div>
              <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-outline-primary">
                View on GitHub →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
