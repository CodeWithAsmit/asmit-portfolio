import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="mb-5">
      <h3 className="mb-3">Contact</h3>
      <div className="card p-3">
        <p className="mb-1">Email: <a href="mailto:amclpatna001@gmail.com">amclpatna001@gmail.com</a></p>
        <p className="mb-1">Phone: +91-7004145409</p>
        <div className="mt-3">
          <a className="btn btn-outline-primary me-2" href="https://github.com/CodeWithAsmit" target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn btn-outline-secondary" href="https://linkedin.com/in/asmit-mohan-726230215" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
