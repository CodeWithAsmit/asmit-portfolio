import React from 'react'

export default function Skills(){
  const skills = ['C','C++','Java','JavaScript','Python','React','Spring Boot','Docker','SQL']
  return (
    <section id="skills" className="mb-5">
      <h3 className="mb-3">Skills</h3>
      <div className="card p-3">
        <div className="d-flex flex-wrap">
          {skills.map(s=> <span key={s} className="badge bg-secondary me-2 mb-2">{s}</span>)}
        </div>
      </div>
    </section>
  )
}
