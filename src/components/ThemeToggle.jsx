import { useTheme } from '../context/ThemeContext'
import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme()

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
        borderRadius: '10px',
        background: darkMode 
          ? 'rgba(114, 47, 55, 0.10)' 
          : 'rgba(0, 0, 0, 0.05)',
        border: `1px solid ${darkMode ? 'rgba(114, 47, 55, 0.22)' : 'rgba(0, 0, 0, 0.1)'}`,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.05)'
        e.currentTarget.style.background = darkMode 
          ? 'rgba(114, 47, 55, 0.22)' 
          : 'rgba(0, 0, 0, 0.1)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.background = darkMode 
          ? 'rgba(114, 47, 55, 0.10)' 
          : 'rgba(0, 0, 0, 0.05)'
      }}
    >
      {darkMode ? (
        <Sun size={18} color="#FCD34D" />
      ) : (
        <Moon size={18} color="#722F37" />
      )}
    </button>
  )
}
