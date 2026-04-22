import Navbar         from './components/Navbar'
import Hero           from './components/Hero'
import About          from './components/About'
import Skills         from './components/Skills'
import Projects       from './components/Projects'
import Certifications from './components/Certifications'
import Contact        from './components/Contact'
import Footer         from './components/Footer'
import { useTheme }   from './context/ThemeContext'

export default function App() {
  const { darkMode } = useTheme()

  return (
    <div style={{
      minHeight: '100vh',
      background: darkMode ? '#0A0A0A' : '#FFFFFF',
      transition: 'background 0.3s ease',
    }}>
      <Navbar />
      <Hero           darkMode={darkMode} />
      <About          darkMode={darkMode} />
      <Skills         darkMode={darkMode} />
      <Projects       darkMode={darkMode} />
      <Certifications darkMode={darkMode} />
      <Contact        darkMode={darkMode} />
      <Footer         darkMode={darkMode} />
    </div>
  )
}
