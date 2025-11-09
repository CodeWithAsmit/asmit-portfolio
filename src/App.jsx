import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './styles.css'

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light'
    } catch {
      return 'light'
    }
  })

  // Apply theme to body element
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-bs-theme', theme);  // Bootstrap’s built-in toggle
    localStorage.setItem('theme', theme);
  }, [theme]);  

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="container py-5">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <footer className="text-center text-muted py-4">
          © {new Date().getFullYear()} Asmit Mohan | Personal Portfolio
        </footer>
      </main>
    </div>
  )
}
