import { Project } from '../data/projects'
import { useTranslation } from '../i18n/LanguageContext'

interface ProjectCardProps {
  project: Project
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useTranslation()

  return (
    <a href={project.url} className="proj-card rv" target="_blank" rel="noopener noreferrer">
      <div className="proj-image-wrap">
        <img src={project.image} alt={project.name} className="proj-image" />
      </div>
      <div className="proj-info">
        <h3>{project.name}</h3>
        <p>{t(`project.${project.slug}.description`)}</p>
      </div>
      <div className="proj-footer">
        <span>{t('project.viewProject')}</span>
        <span className="arrow">→</span>
      </div>
    </a>
  )
}
