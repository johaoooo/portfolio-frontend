import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { ExternalLink, Code, FolderGit2 } from 'lucide-react'

export default function ProjectCard({ title, description, tech = [], link, github }) {
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)

  const badgeBg = t.badge?.bg || (darkMode ? 'rgba(59,130,246,0.1)' : 'rgba(59,130,246,0.09)')
  const badgeText = t.badge?.text || '#3B82F6'
  const borderAccent = t.border?.accent || 'rgba(59,130,246,0.2)'

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6 }}
      style={{
        background: t.bg?.surface || (darkMode ? 'rgba(255,255,255,0.03)' : '#FFFFFF'),
        border: `1px solid ${t.border?.default || 'rgba(59,130,246,0.15)'}`,
        borderRadius: '20px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px',
        transition: 'border-color 0.3s ease',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = t.text.accent}
      onMouseLeave={e => e.currentTarget.style.borderColor = t.border?.default || 'rgba(59,130,246,0.15)'}
    >
      {/* Accent du haut */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: `linear-gradient(90deg, ${t.text.accent}, transparent)`,
        borderRadius: '20px 20px 0 0'
      }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '42px', height: '42px',
          background: badgeBg,
          borderRadius: '12px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: badgeText
        }}>
          <FolderGit2 size={22} />
        </div>
        <h3 style={{ color: t.text?.primary || '#E2E8F0', fontSize: '1.15rem', fontWeight: 600, margin: 0, flex: 1 }}>
          {title}
        </h3>
      </div>
      
      <p style={{ color: t.text?.secondary || '#94A3B8', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
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
      
      <div style={{ display: 'flex', gap: '16px', marginTop: '8px' }}>
        {link && (
          <motion.a
            href={link} target="_blank" rel="noopener noreferrer"
            whileHover={{ gap: '10px' }}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              color: t.text?.accent || '#3B82F6', fontSize: '0.8rem',
              textDecoration: 'none', fontWeight: 500,
              transition: 'gap 0.2s'
            }}
          >
            <ExternalLink size={14} /> Voir le site
          </motion.a>
        )}
        {github && (
          <motion.a
            href={github} target="_blank" rel="noopener noreferrer"
            whileHover={{ gap: '10px' }}
            style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              color: t.text?.secondary || '#94A3B8', fontSize: '0.8rem',
              textDecoration: 'none', transition: 'gap 0.2s'
            }}
          >
            <Code size={14} /> Code
          </motion.a>
        )}
      </div>
    </motion.div>
  )
}
