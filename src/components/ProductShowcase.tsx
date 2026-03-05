import { Project } from '../data/projects'
import { useTranslation } from '../i18n/LanguageContext'

interface Props {
  project: Project
  reverse?: boolean
  alt?: boolean
}

export const ProductShowcase: React.FC<Props> = ({ project, reverse, alt }) => {
  const { t } = useTranslation()

  return (
    <section className={`showcase${alt ? ' showcase-alt' : ''}`}>
      <div className="container showcase-container">
        <div className={`showcase-inner${reverse ? ' reverse' : ''}`}>
          <div className="showcase-intro rv">
            <div className="showcase-icon">
              <img src={project.image} alt={project.name} />
            </div>
            <h2 className="showcase-name">{project.name}</h2>
            <p className="showcase-tagline">{t(`project.${project.slug}.description`)}</p>
            <p className="showcase-desc">{t(`project.${project.slug}.intro`)}</p>
            <a
              href={project.url}
              className="showcase-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t('project.viewProject')}</span>
              <span className="arrow">→</span>
            </a>
          </div>
          <div className="showcase-demo rv">
            <div className="device-frame">
              <div className="device-bar">
                <div className="device-dots">
                  <span /><span /><span />
                </div>
                <div className="device-url">{project.url.replace('https://', '')}</div>
              </div>
              <iframe
                src={project.url}
                title={project.name}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
