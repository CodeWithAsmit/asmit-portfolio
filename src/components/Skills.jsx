import React from 'react'

export default function Skills(){
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'PHP', 'Pro*C', 'SQL', 'Bash/Shell Scripting']
    },
    {
      title: 'Backend',
      skills: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Spring AOP', 'Spring Cloud', 'Apache Kafka', 'Node.js', 'Express.js', 'Microservices', 'REST APIs']
    },
    {
      title: 'Frontend',
      skills: ['React.js', 'React Router', 'React Context', 'Bootstrap', 'HTML5', 'CSS3']
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Oracle']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS (EC2, RDS, IAM)', 'Docker', 'GitHub Actions', 'Git', 'CI/CD Pipelines']
    },
    {
      title: 'Security',
      skills: ['MS Entra (Azure AD)', 'OAuth2/OIDC', 'JWT', 'Role-Based Access Control', 'SSL/TLS']
    },
    {
      title: 'Testing',
      skills: ['Rest Assured', 'API Testing', 'Test Automation', 'Integration Testing']
    },
    {
      title: 'AI Tools',
      skills: ['FAISS Vector DB', 'Sentence Transformers', 'Pandas', 'MCP Servers', 'Cursor AI']
    },
    {
      title: 'Tools & Methods',
      skills: ['Maven', 'Vite', 'Lombok', 'Tuxedo', 'Linux', 'Agile/Scrum']
    },
    {
      title: 'CS Fundamentals',
      skills: ['Data Structures & Algorithms', 'System Design', 'OOP', 'DBMS']
    }
  ]

  return (
    <section id="skills" className="mb-5">
      <h3 className="mb-4">Technologies and Skills</h3>
      <div className="row g-3">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="col-md-6">
            <div className="card p-4 h-100">
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
