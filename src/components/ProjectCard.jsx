import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'

export default function ProjectCard({ title, description, tags = [], link }) {
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)

  return (
    <article style={{
      background: t.bg.surface,
      border: `1px solid ${t.border.default}`,
      borderRadius: '16px', padding: '24px',
      display: 'flex', flexDirection: 'column', gap: '12px',
      transition: 'all 0.3s ease',
    }}
    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <h3 style={{
        color: t.text.primary,
        fontSize: '1.25rem', fontWeight: 600, margin: 0,
      }}>
        {title}
      </h3>

      <p style={{
        color: t.text.secondary,
        fontSize: '0.875rem', lineHeight: 1.6, margin: 0,
      }}>
        {description}
      </p>

      {tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
          {tags.map(tag => (
            <span key={tag} style={{
              background: t.badge.bg,
              color: t.badge.text,
              border: `1px solid ${t.border.accent}`,
              padding: '4px 12px', borderRadius: '30px', fontSize: '0.75rem',
              fontWeight: 500,
            }}>
              {tag}
            </span>
          ))}
        </div>
      )}

      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" style={{
          color: t.text.accent,
          fontSize: '0.85rem', textDecoration: 'none',
          marginTop: 'auto', fontWeight: 500,
          display: 'inline-flex', alignItems: 'center', gap: '4px'
        }}>
          Voir le projet →
        </a>
      )}
    </article>
  )
}
