import React from 'react'
import { Header } from './components/Header'
import { ProjectCard } from './components/ProjectCard'
import { Footer } from './components/Footer'
import { projects } from './data/projects'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <div className="container">
          <section className="projects-section">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
