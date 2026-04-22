import { useTheme } from '../context/ThemeContext'

export default function Logo({ size = 36 }) {
  const { darkMode } = useTheme()

  return (
    <div style={{
      width: size,
      height: size,
      background: darkMode
        ? 'linear-gradient(135deg, #722F37 0%, #8B3A45 100%)'
        : 'linear-gradient(135deg, #5C1F28 0%, #4A1520 100%)',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: darkMode
        ? '0 0 15px rgba(114,47,55,0.30)'
        : '0 2px 10px rgba(92,31,40,0.20)',
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
