import { useTranslation } from '../i18n/LanguageContext'

export const LanguageToggle: React.FC = () => {
  const { lang, setLang } = useTranslation()

  return (
    <button
      className="lang-toggle"
      onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
      aria-label="Switch language"
    >
      {lang === 'en' ? '中' : 'EN'}
    </button>
  )
}
