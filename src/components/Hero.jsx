import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import PhotoCard from './PhotoCard'

export default function Hero() {
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)
  
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  const texts = [
    'Cybersécurité',
    'Développement Web',
    'Réseaux',
    'Intelligence Artificielle'
  ]
  
  useEffect(() => {
    let timeout
    const handleTyping = () => {
      const fullText = texts[loopNum % texts.length]
      const updatedText = isDeleting 
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1)
      
      setCurrentText(updatedText)
      
      let typingSpeed = isDeleting ? 50 : 100
      
      if (!isDeleting && updatedText === fullText) {
        typingSpeed = 2000
        setIsDeleting(true)
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        typingSpeed = 500
      }
      
      timeout = setTimeout(handleTyping, typingSpeed)
    }
    
    timeout = setTimeout(handleTyping, 100)
    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, loopNum, texts])
  
  useEffect(() => {
    if (currentText === '' && !isDeleting && loopNum === 0) {
      setCurrentText('Cybersécurité')
    }
  }, [])
  
  // Effet de suivi de souris pour le fond
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: t.bg.page,
      transition: 'background 0.3s',
      padding: '100px 20px 60px',
      fontFamily: 'Calibri, "Segoe UI", Arial, sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Effet de fond dynamique qui suit la souris */}
      <div style={{
        position: 'absolute',
        width: '150%',
        height: '150%',
        background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, ${t.text.accent}08, transparent 50%)`,
        pointerEvents: 'none',
        transition: 'background 0.1s ease'
      }} />
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        background: t.bg.surface,
        border: `1px solid ${t.border.default}`,
        borderRadius: '40px',
        padding: '60px 70px',
        transition: 'all 0.3s ease',
        boxShadow: darkMode ? '0 20px 40px rgba(0,0,0,0.3)' : '0 20px 40px rgba(0,0,0,0.05)',
        backdropFilter: 'blur(10px)'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 0.7fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.h1
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                color: t.text.primary,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: '20px',
                fontFamily: 'Calibri, "Segoe UI", Arial, sans-serif'
              }}
            >
              <span style={{ color: t.text.accent }}>Expert</span>
              <br />
              en{' '}
              <span style={{
                color: t.text.accent,
                display: 'inline-block',
                minWidth: '220px'
              }}>
                {currentText}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  style={{
                    display: 'inline-block',
                    width: '3px',
                    height: '1em',
                    backgroundColor: t.text.accent,
                    marginLeft: '4px',
                    verticalAlign: 'middle'
                  }} />
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{
                color: t.text.secondary,
                fontSize: '1.1rem',
                lineHeight: 1.6,
                marginBottom: '30px',
                fontFamily: 'Calibri, "Segoe UI", Arial, sans-serif',
                maxWidth: '500px'
              }}
            >
              Passionné par la cybersécurité offensive et le développement fullstack, 
              je construis des applications robustes et sécurisées. Également autodidacte, 
              je me forme constamment aux nouvelles technologies.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap'
              }} className="hero-buttons"
            >
              <ScrollLink
                to="projects"
                smooth duration={500}
                offset={-70}
                style={{
                  background: t.text.accent,
                  color: darkMode ? '#05080F' : '#fff',
                  padding: '12px 28px',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}
                whileHover={{ scale: 1.05, boxShadow: `0 5px 20px ${t.text.accent}40` }}
              >
                Voir mes projets
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth duration={500}
                offset={-70}
                style={{
                  background: 'transparent',
                  border: `2px solid ${t.text.accent}`,
                  color: t.text.accent,
                  padding: '12px 28px',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-block'
                }}
                whileHover={{ scale: 1.05, background: t.text.accent, color: darkMode ? '#05080F' : '#fff' }}
              >
                Me contacter
              </ScrollLink>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px'
            }}
          >
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: '100%',
                maxWidth: '300px',
                margin: '0 auto'
              }}
            >
              <PhotoCard />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{ textAlign: 'center' }}
            >
              <h2 style={{
                color: t.text.primary,
                fontSize: '1.4rem',
                fontWeight: 600,
                marginBottom: '6px',
                fontFamily: 'Calibri, "Segoe UI", Arial, sans-serif'
              }}>
                Joseph <span style={{ color: t.text.accent }}>Dehazounde</span>
              </h2>
              <p style={{
                color: t.text.accent,
                fontSize: '0.75rem',
                letterSpacing: '1px',
                fontFamily: 'Calibri, "Segoe UI", Arial, sans-serif'
              }}>
                EXPERT CYBERSÉCURITÉ & FULLSTACK DEV
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @media (min-width: 769px) {
          #hero { padding: 100px 20px 80px !important; }
          #hero > div { padding: 60px 70px !important; }
          .hero-buttons { justify-content: flex-start !important; }
        }
        
        @media (max-width: 768px) {
          #hero { padding: 90px 16px 40px !important; }
          #hero > div { padding: 30px 25px !important; }
          #hero > div > div { grid-template-columns: 1fr !important; gap: 30px !important; text-align: center !important; }
          .hero-buttons { justify-content: center !important; }
        }
      `}</style>
    </section>
  )
}
