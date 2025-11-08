import React from 'react'

export default function Projects(){
  const projects = [
    {title:'Lauded Arts (Hack36)', desc:'E-commerce for small artists using Node/Express/MongoDB', link:'https://github.com/CodeWithAsmit/Hack36-Project'},
    {title:'Meme It', desc:'Meme generator using PHP/JS/MySQL', link:'https://github.com/CodeWithAsmit/MemeIT_PHP'}
  ]
  return (
    <section id="projects" className="mb-5">
      <h3 className="mb-3">Projects</h3>
      <div className="row">
        {projects.map(p=>(
          <div key={p.title} className="col-md-6">
            <div className="card p-3 mb-3">
              <h5>{p.title}</h5>
              <p className="text-muted">{p.desc}</p>
              <a href={p.link} target="_blank" rel="noreferrer">View on GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
