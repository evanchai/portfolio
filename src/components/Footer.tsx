import React from 'react'
import { Heart } from 'lucide-react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <p>
        Built with <Heart size={14} className="heart-icon" /> using React + TypeScript + Vite
      </p>
      <p className="footer-copy">© {currentYear} Ning. All rights reserved.</p>
    </footer>
  )
}
