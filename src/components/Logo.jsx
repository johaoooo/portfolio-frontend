import { useTheme } from '../context/ThemeContext'

export default function Logo({ size = 36 }) {
  const { darkMode } = useTheme()

  return (
    <div style={{
      width: size,
      height: size,
      background: darkMode
        ? 'linear-gradient(135deg, #0000FF 0%, #3333FF 100%)'
        : 'linear-gradient(135deg, #191970 0%, #0F0F5A 100%)',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: darkMode
        ? '0 0 15px rgba(0,0,255,0.30)'
        : '0 2px 10px rgba(25,25,112,0.20)',
    }}>
      <span style={{
        fontFamily: 'Syne, sans-serif',
        fontSize: size * 0.55,
        fontWeight: 800,
        color: '#FFFFFF',
      }}>JD</span>
    </div>
  )
}
