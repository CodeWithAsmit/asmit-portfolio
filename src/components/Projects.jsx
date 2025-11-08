import React from 'react'

export default function Projects(){
  const projects = [
    {
      title: 'Lauded Arts',
      subtitle: 'Hack36-Project',
      event: 'Hack36 College Hackathon',
      tech: ['HTML', 'CSS', 'Bootstrap', 'Node.js', 'Express.js', 'EJS', 'MongoDB'],
      description: 'Built Lauded Arts at Hack36 college Hackathon using HTML, CSS, Bootstrap, Node.js, Express.js, EJS and MongoDB - an e-commerce platform for small artists to upload and sell paintings. Promoted "Vocal for Local" by helping lesser-known artists gain visibility and monetize their art.',
      link: 'https://github.com/CodeWithAsmit/Hack36-Project'
    },
    {
      title: 'Meme It',
      subtitle: 'MemeIT',
      event: 'Avishkar Tech Event',
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'MySQL'],
      description: 'Created Meme It for Avishkar Tech Event using HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL, a web app that lets users customize memes with text, templates, and collages to express creativity.',
      link: 'https://github.com/CodeWithAsmit/MemeIT_PHP'
    }
  ]
  return (
    <section id="projects" className="mb-5">
      <h3 className="mb-4">College Projects</h3>
      <div className="row g-4">
        {projects.map((p, idx) => (
          <div key={idx} className="col-12">
            <div className="card p-4 project-card">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-3">
                <div className="mb-2 mb-md-0">
                  <h4 className="fw-bold mb-1">{p.title} <span className="text-muted fw-normal">— {p.subtitle}</span></h4>
                  <div className="text-muted small">{p.event}</div>
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
