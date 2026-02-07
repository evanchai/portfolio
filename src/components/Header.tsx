import React from 'react'
import { Github, Mail, Sparkles } from 'lucide-react'
import { socialLinks } from '../data/projects'

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-title">
          <Sparkles className="sparkle-icon" size={32} />
          <h1>Ning's Vibe Coding</h1>
        </div>

        <p className="header-subtitle">
          Building delightful AI-powered experiences
        </p>

        <div className="social-links">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="social-link"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </header>
  )
}
