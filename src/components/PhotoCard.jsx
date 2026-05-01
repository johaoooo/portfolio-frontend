import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'

export default function PhotoCard() {
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)

  return (
    <div style={{
      width: '100%',
      maxWidth: '250px',
      margin: '0 auto',
      aspectRatio: '1/1',
      borderRadius: '50%',
      overflow: 'hidden',
      background: `linear-gradient(135deg, ${t.text.accent}, ${t.text.accent}66)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `3px solid ${t.text.accent}`,
      boxShadow: `0 10px 30px rgba(0,0,0,0.2)`
    }}>
      <img
        src="/images/profile.jpeg"
        alt="Joseph Dehazounde"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'top center',
          display: 'block'
        }}
      />
    </div>
  )
}
