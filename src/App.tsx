import React from 'react'
import { Header } from './components/Header'
import { ProjectCard } from './components/ProjectCard'
import { Footer } from './components/Footer'
import { projects } from './data/projects'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="geometric-bg">
        <div className="shard"></div>
        <div className="shard"></div>
        <div className="shard"></div>
      </div>

      <Header />

      <main className="main">
        <div className="container">
          <section className="projects-section">
            <h2 className="section-title">Vibe Coding Projects</h2>
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
