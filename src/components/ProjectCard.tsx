import React from 'react'
import { ExternalLink, Code2 } from 'lucide-react'
import { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <a
      href={project.url}
      className="project-card"
      style={{ '--card-color': project.color } as React.CSSProperties}
    >
      <div className="project-card-header">
        <span className="project-emoji">{project.emoji}</span>
        <ExternalLink className="project-link-icon" size={20} />
      </div>

      <h3 className="project-name">{project.name}</h3>

      <p className="project-description">
        {project.descriptionCN}
      </p>

      <div className="project-tech">
        {project.tech.map((tech) => (
          <span key={tech} className="tech-tag">
            <Code2 size={12} />
            {tech}
          </span>
        ))}
      </div>
    </a>
  )
}
