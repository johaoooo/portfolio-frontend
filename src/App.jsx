import { useTheme } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

function AppContent() {
  const { darkMode } = useTheme()

  return (
    <div style={{
      minHeight: '100vh',
      background: darkMode ? '#05080F' : '#F8FAFC',
      transition: 'background 0.3s ease',
      position: 'relative',
      zIndex: 1
    }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  )
}

function App() {
  return <AppContent />
}

export default App
