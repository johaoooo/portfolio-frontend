import { useTheme } from '../context/ThemeContext'

export default function Logo({ size = 36 }) {
  const { darkMode } = useTheme()
  
  return (
    <div style={{
      width: size,
      height: size,
      background: darkMode 
        ? 'linear-gradient(135deg, #00D4FF 0%, #C9A84C 100%)'
        : 'linear-gradient(135deg, #0052CC 0%, #7C3AED 100%)',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: darkMode 
        ? '0 0 15px rgba(0,212,255,0.3)'
        : '0 2px 10px rgba(0,82,204,0.2)',
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
