import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { ExternalLink, Code } from 'lucide-react'

export default function ProjectCard({ title, description, tech = [], link, github }) {
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)

  // Styles avec vérification de l'existence des tokens
  const badgeBg = t.badge?.bg || (darkMode ? 'rgba(59,130,246,0.1)' : 'rgba(59,130,246,0.09)')
  const badgeText = t.badge?.text || '#3B82F6'
  const borderAccent = t.border?.accent || 'rgba(59,130,246,0.2)'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8, scale: 1.02 }}
      style={{
        background: t.bg?.surface || (darkMode ? 'rgba(255,255,255,0.03)' : '#FFFFFF'),
        border: `1px solid ${t.border?.default || 'rgba(59,130,246,0.15)'}`,
        borderRadius: '16px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        cursor: 'pointer'
      }}
    >
      <h3 style={{ color: t.text?.primary || '#E2E8F0', fontSize: '1.25rem', fontWeight: 600, margin: 0 }}>
        {title}
      </h3>
      
      <p style={{ color: t.text?.secondary || '#94A3B8', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>
        {description}
      </p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
        {tech.map(tag => (
          <span key={tag} style={{
            background: badgeBg,
            color: badgeText,
            border: `1px solid ${borderAccent}`,
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '0.7rem',
            fontWeight: 500
          }}>
            {tag}
          </span>
        ))}
      </div>
      
      <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            color: t.text?.accent || '#3B82F6', fontSize: '0.8rem', textDecoration: 'none', fontWeight: 500
          }}>
            <ExternalLink size={14} /> Voir le site
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            color: t.text?.secondary || '#94A3B8', fontSize: '0.8rem', textDecoration: 'none'
          }}>
            <Code size={14} /> Code
          </a>
        )}
      </div>
    </motion.div>
  )
}
