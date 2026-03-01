import { Fragment, useEffect } from 'react'
import { LanguageToggle } from './components/LanguageToggle'
import { ProjectCard } from './components/ProjectCard'
import { Footer } from './components/Footer'
import { projects, socialLinks } from './data/projects'
import { useTranslation } from './i18n/LanguageContext'
import './App.css'

/** Converts *text* markers to <em>text</em> */
function renderEmphasis(text: string) {
  return text.split(/\*(.*?)\*/).map((part, i) =>
    i % 2 === 1 ? <em key={i}>{part}</em> : part
  )
}

function App() {
  const { t } = useTranslation()

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('v')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    document.querySelectorAll('.rv').forEach((el) => obs.observe(el))

    return () => obs.disconnect()
  }, [])

  return (
    <div className="scroll-wrapper">
      <div className="lang-toggle-wrap">
        <LanguageToggle />
      </div>

      {/* Screen 1 — Hero */}
      <section className="hero">
        <div className="container wide">
          <div className="hero-content">
            <h1>{renderEmphasis(t('hero.title'))}</h1>
            <p className="hero-desc">
              {t('hero.subtitle').split('\n').map((line, i, arr) => (
                <Fragment key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </Fragment>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* Screen 2 — Projects + About */}
      <section className="screen-two">
        <div className="container">
          <section className="projects-sec" id="projects">
            <div className="projects-grid stagger">
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </section>

          <section className="about-sec" id="about">
            <div className="about-content">
              <p className="about-text rv">
                {renderEmphasis(t('about.text'))}
              </p>
              <div className="about-aside rv">
                <div className="aside-block">
                  <div className="aside-label">{t('about.approach.label')}</div>
                  <div className="aside-val">{t('about.approach.value')}</div>
                </div>
                <div className="aside-block">
                  <div className="aside-label">{t('about.status.label')}</div>
                  <div className="aside-val">{t('about.status.value')}</div>
                </div>
                <div className="aside-block">
                  <div className="aside-label">{t('about.contact.label')}</div>
                  <div className="contact-links">
                    <a href={`mailto:${socialLinks.email}`}>✉ {t('contact.email')}</a>
                    <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                      ◉ {t('contact.linkedin')}
                    </a>
                  </div>
                </div>
                <div className="aside-block">
                  <div className="aside-label">{t('thoughts.label')}</div>
                  <a href="/thoughts" className="thoughts-link">{t('thoughts.viewAll')}</a>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </section>
    </div>
  )
}

export default App
