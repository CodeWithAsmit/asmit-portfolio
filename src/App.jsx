import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'dark' } catch { return 'dark' }
  })

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="bg-light dark-bg text-dark dark-text">
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="container py-5">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <footer className="text-center text-muted py-4">© {new Date().getFullYear()} Asmit Mohan — Built with React + Vite + Bootstrap</footer>
      </main>
    </div>
  )
}
