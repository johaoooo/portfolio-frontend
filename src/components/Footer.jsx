import Logo from './Logo'
import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { darkMode } = useTheme()

  // dark: rouge au vin | light: bordeaux profond
  const accent    = darkMode ? '#722F37' : '#5C1F28'
  const accentRgb = darkMode ? '114,47,55' : '92,31,40'

  // Fond explicite pour garantir la visibilité
  const bg        = darkMode ? '#0D0D0D' : '#FAF8F8'
  const border    = `rgba(${accentRgb},0.20)`
  const textMain  = darkMode ? '#8BA0B8' : '#475569'
  const textFaint = darkMode ? '#4A6080' : '#94A3B8'

  return (
    <footer style={{
      borderTop: `1px solid ${border}`,
      padding: '3rem 2rem',
      background: bg,
      transition: 'background 0.35s ease, border-color 0.35s ease',
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Logo size={28} />
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.7rem',
            color: textMain,
            letterSpacing: '0.1em',
          }}>
            DEHAZOUNDE JOSEPH · {new Date().getFullYear()}
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.62rem',
            color: textFaint,
            letterSpacing: '0.08em',
          }}>
            React + Django · Sécurité by design
          </span>
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '0.6rem',
            padding: '0.2rem 0.7rem',
            background: `rgba(${accentRgb},0.10)`,
            border: `1px solid rgba(${accentRgb},0.22)`,
            borderRadius: '20px',
            color: accent,
          }}>
            Cotonou, Bénin
          </span>
        </div>
      </div>
    </footer>
  )
}
