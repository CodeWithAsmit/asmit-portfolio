import React from 'react'

export default function Skills(){
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C', 'C++', 'Java', 'JavaScript', 'Python', 'Pro*C', 'Shell Scripting', 'SQL']
    },
    {
      title: 'Web and Frameworks',
      skills: ['Bootstrap', 'React.js', 'Node.js', 'Spring Boot', 'Spring Security', 'Spring AI', 'Spring Cloud', 'Apache Kafka', 'Microservices', 'REST API']
    },
    {
      title: 'DB and DevOps',
      skills: ['Oracle', 'PostgreSQL', 'MongoDB', 'MySQL', 'Git', 'GitHub', 'Docker', 'GitHub Actions', 'AWS', 'Tuxedo']
    },
    {
      title: 'Computer Science Concepts',
      skills: ['Data Structures and Algorithms', 'Operating System', 'Object-Oriented Programming', 'Database Management System']
    }
  ]

  return (
    <section id="skills" className="mb-5">
      <h3 className="mb-4">Technologies and Skills</h3>
      <div className="row g-3">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="col-12">
            <div className="card p-4">
              <h5 className="mb-3 fw-bold">{category.title}</h5>
              <div className="d-flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span key={skill} className="badge skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
