import { useTranslation } from '../i18n/LanguageContext'

export const Footer: React.FC = () => {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <span>&copy; {currentYear} ning.codes</span>
      <span className="made">
        <span className="heart"></span>
        {t('footer.tagline')}
      </span>
    </footer>
  )
}
