import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'
import { Lang, languages, translations } from './translations'

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function detectLanguage(): Lang {
  const stored = localStorage.getItem('lang')
  if (stored && languages.includes(stored as Lang)) {
    return stored as Lang
  }

  const browserLangs = navigator.languages ?? [navigator.language]
  for (const bl of browserLangs) {
    const prefix = bl.split('-')[0].toLowerCase()
    if (languages.includes(prefix as Lang)) {
      return prefix as Lang
    }
  }

  return 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLanguage)

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem('lang', newLang)
  }, [])

  const t = useCallback(
    (key: string): string => {
      return translations[lang][key] ?? translations['en'][key] ?? key
    },
    [lang]
  )

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
    document.title = translations[lang]['meta.title']

    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) {
      metaDesc.setAttribute('content', translations[lang]['meta.description'])
    }
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useTranslation must be used within LanguageProvider')
  return ctx
}
