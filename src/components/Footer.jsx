import Logo from './Logo'
import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { darkMode } = useTheme()

  const bg        = darkMode ? '#0A0A0A'              : '#FFFFFF'
  const border    = darkMode ? 'rgba(0,0,255,0.18)'   : 'rgba(25,25,112,0.15)'
  const textMain  = darkMode ? 'rgba(0,0,255,0.55)'   : 'rgba(25,25,112,0.55)'
  const textFaint = darkMode ? 'rgba(0,0,255,0.20)'   : 'rgba(25,25,112,0.20)'

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
        <span style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '0.65rem',
          color: textFaint,
          letterSpacing: '0.1em',
        }}>
          React + Django · Sécurité by design
        </span>
      </div>
    </footer>
  )
}
