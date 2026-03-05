import { useState, useRef, useEffect } from 'react'
import { Project } from '../data/projects'
import { useTranslation } from '../i18n/LanguageContext'
import { DemoDisplay } from './DemoDisplay'

export const ShowcaseCarousel: React.FC<{ projects: Project[] }> = ({ projects }) => {
  const [idx, setIdx] = useState(0)
  const { t } = useTranslation()
  const touchX = useRef(0)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setIdx(i => Math.max(0, i - 1))
      if (e.key === 'ArrowRight') setIdx(i => Math.min(projects.length - 1, i + 1))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [projects.length])

  const project = projects[idx]

  return (
    <section className="showcase">
      <div className="container showcase-container">
        {/* Mobile tab selector */}
        <div className="showcase-tabs">
          {projects.map((p, i) => (
            <button
              key={p.slug}
              className={`showcase-tab${i === idx ? ' active' : ''}`}
              onClick={() => setIdx(i)}
            >
              <img src={p.image} alt={p.name} className="showcase-tab-icon" />
              <span>{p.name}</span>
            </button>
          ))}
        </div>

        <div
          className="carousel-viewport"
          onTouchStart={e => { touchX.current = e.touches[0].clientX }}
          onTouchEnd={e => {
            const diff = touchX.current - e.changedTouches[0].clientX
            if (Math.abs(diff) > 50) {
              setIdx(i => diff > 0
                ? Math.min(projects.length - 1, i + 1)
                : Math.max(0, i - 1))
            }
          }}
        >
          <div className="carousel-track" style={{ transform: `translateX(-${idx * 100}%)` }}>
            {projects.map((p, i) => (
              <div key={p.slug} className={`carousel-slide${i === idx ? ' active' : ''}`}>
                <div className="showcase-inner v">
                  <div className="showcase-intro">
                    <div className="showcase-icon">
                      <img src={p.image} alt={p.name} />
                    </div>
                    <h2 className="showcase-name">{p.name}</h2>
                    <p className="showcase-tagline">{t(`project.${p.slug}.description`)}</p>
                    <p className="showcase-desc">{t(`project.${p.slug}.intro`)}</p>
                    <a href={p.url} className="showcase-cta" target="_blank" rel="noopener noreferrer">
                      <span>{t('project.viewProject')}</span>
                      <span className="arrow">→</span>
                    </a>
                  </div>
                  <div className="showcase-demo">
                    <DemoDisplay slug={p.slug} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-nav">
          <button
            className="carousel-arrow"
            onClick={() => setIdx(i => Math.max(0, i - 1))}
            disabled={idx === 0}
            aria-label="Previous"
          >←</button>
          <div className="carousel-dots">
            {projects.map((p, i) => (
              <button
                key={p.slug}
                className={`carousel-dot${i === idx ? ' active' : ''}`}
                onClick={() => setIdx(i)}
                aria-label={p.name}
              />
            ))}
          </div>
          <button
            className="carousel-arrow"
            onClick={() => setIdx(i => Math.min(projects.length - 1, i + 1))}
            disabled={idx === projects.length - 1}
            aria-label="Next"
          >→</button>
        </div>
      </div>
    </section>
  )
}
