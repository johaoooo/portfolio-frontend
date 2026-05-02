import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { ExternalLink, Github } from 'lucide-react'

export default function ProjectCard({ title, description, tech = [], link, github }) {
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)

  return (
    <div style={{
      background: t.bg.surface,
      border: `1px solid ${t.border.default}`,
      borderRadius: '16px',
      padding: '24px',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.transform = 'translateY(-5px)'
      e.currentTarget.style.borderColor = t.border.accent
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = 'translateY(0)'
      e.currentTarget.style.borderColor = t.border.default
    }}>
      <h3 style={{
        color: t.text.primary,
        fontSize: '1.25rem',
        fontWeight: 600,
        margin: 0
      }}>
        {title}
      </h3>
      
      <p style={{
        color: t.text.secondary,
        fontSize: '0.9rem',
        lineHeight: 1.5,
        margin: 0
      }}>
        {description}
      </p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '4px' }}>
        {tech.map(t => (
          <span key={t} style={{
            background: t.badge.bg,
            color: t.badge.text,
            border: `1px solid ${t.border.accent}`,
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '0.7rem',
            fontWeight: 500
          }}>
            {t}
          </span>
        ))}
      </div>
      
      <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: t.text.accent,
            fontSize: '0.8rem',
            textDecoration: 'none',
            fontWeight: 500
          }}>
            <ExternalLink size={14} /> Voir le site
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: t.text.secondary,
            fontSize: '0.8rem',
            textDecoration: 'none'
          }}>
            <Github size={14} /> Code
          </a>
        )}
      </div>
    </div>
  )
}
