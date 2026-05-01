import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'

// Icônes personnalisées
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

export default function Footer() {
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <GithubIcon />, url: 'https://github.com/johaoooo', label: 'GitHub' },
    { icon: <LinkedinIcon />, url: 'https://linkedin.com/in/dehazounde-joseph', label: 'LinkedIn' },
    { icon: <MailIcon />, url: 'mailto:josephdehazounde@gmail.com', label: 'Email' }
  ]

  return (
    <footer style={{
      background: t.bg.page,  // Changé : utilise la même couleur que le Hero
      borderTop: `1px solid ${t.border.default}`,
      padding: '48px 24px 24px',
      transition: 'background 0.3s, border-color 0.3s'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {/* Liens sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            marginBottom: '32px'
          }}
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: t.badge.bg,
                border: `1px solid ${t.border.accent}`,
                borderRadius: '50%',
                color: t.text.accent,
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = t.text.accent
                e.currentTarget.style.color = darkMode ? '#05080F' : '#fff'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = t.badge.bg
                e.currentTarget.style.color = t.text.accent
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {social.icon}
            </a>
          ))}
        </motion.div>

        {/* Navigation rapide */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            flexWrap: 'wrap',
            marginBottom: '32px'
          }}
        >
          {['Accueil', 'Compétences', 'Projets', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item === 'Accueil' ? 'hero' : item === 'Compétences' ? 'skills' : item === 'Projets' ? 'projects' : 'contact'}`}
              style={{
                color: t.text.secondary,
                textDecoration: 'none',
                fontSize: '0.85rem',
                transition: 'color 0.2s'
              }}
              onMouseEnter={e => e.currentTarget.style.color = t.text.accent}
              onMouseLeave={e => e.currentTarget.style.color = t.text.secondary}
            >
              {item}
            </a>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            paddingTop: '24px',
            borderTop: `1px solid ${t.border.default}`,
            color: t.text.secondary,
            fontSize: '0.75rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            flexWrap: 'wrap'
          }}
        >
          <span>© {currentYear} Joseph Dehazounde.</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Fait avec <span style={{ color: '#e25555' }}>♥</span> pour la cybersécurité
          </span>
        </motion.div>
      </div>
    </footer>
  )
}
