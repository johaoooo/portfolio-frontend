import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import PhotoCard from './PhotoCard'

export default function Hero() {
  const { darkMode } = useTheme()
  const t = useTokens()
  
  const texts = [
    'Analyste en cybersécurité',
    'Fullstack developer',
    'Marketeur',
    'Technicien en maintenance informatique'
  ]

  const [currentText, setCurrentText] = useState(texts[0])
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  
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
        setLoopNum(prev => prev + 1)
        typingSpeed = 500
      }
      
      timeout = setTimeout(handleTyping, typingSpeed)
    }
    
    timeout = setTimeout(handleTyping, 100)
    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, loopNum])
  
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: t.bg.page,
      transition: 'background 0.3s',
      padding: '100px 20px 60px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Effet de glow */}
      <div style={{
        position: 'absolute',
        top: '-20%',
        right: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: `radial-gradient(circle, var(--accent-15) 0%, transparent 70%)`,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-20%',
        left: '-10%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: `radial-gradient(circle, var(--accent-10) 0%, transparent 70%)`,
        pointerEvents: 'none'
      }} />

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        background: `linear-gradient(135deg, ${t.bg.surface}, ${t.bg.surface}88)`,
        border: `1px solid ${t.border.default}`,
        borderRadius: '40px',
        padding: '60px 70px',
        transition: 'all 0.3s ease',
        boxShadow: darkMode
          ? '0 20px 40px rgba(0,0,0,0.3), 0 0 80px rgba(16,185,129,0.05)'
          : '0 20px 40px rgba(0,0,0,0.05)',
        backdropFilter: 'blur(10px)',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 0.7fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-left"
            style={{ textAlign: 'left' }}
          >
            <h1 style={{
              color: t.text.primary,
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: '16px',
              letterSpacing: '-0.5px'
            }}>
              Joseph{' '}
              <span style={{
                background: `linear-gradient(135deg, ${t.text.accent}, #34D399)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                DEHAZOUNDE
              </span>
            </h1>
            <div style={{
              color: t.text.secondary,
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              fontWeight: 400,
              marginBottom: '32px',
              minHeight: '2em'
            }}>
              <span style={{
                color: t.text.accent,
                display: 'inline-block',
                minWidth: '280px',
                textAlign: 'left',
                fontWeight: 600
              }} className="dynamic-text">
                {currentText}
                <span style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '1.1em',
                  backgroundColor: t.text.accent,
                  marginLeft: '4px',
                  animation: 'blink 1s step-end infinite',
                  verticalAlign: 'middle'
                }} />
              </span>
            </div>
            
            <div className="hero-buttons" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <ScrollLink
                to="projects"
                smooth duration={500}
                offset={-70}
                className="hero-btn"
                style={{
                  background: `linear-gradient(135deg, ${t.text.accent}, #059669)`,
                  color: '#05080F',
                  padding: '13px 30px',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-block',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 4px 20px rgba(16, 185, 129, 0.35)'
                }}
              >
                Voir mes projets
              </ScrollLink>
              <ScrollLink
                to="contact"
                smooth duration={500}
                offset={-70}
                className="hero-btn"
                style={{
                  background: t.badge.bg,
                  border: `1px solid ${t.border.accent}`,
                  color: t.text.accent,
                  padding: '13px 30px',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'inline-block',
                  transition: 'all 0.2s'
                }}
              >
                Me contacter
              </ScrollLink>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px'
            }}
          >
            <div style={{ width: '100%', maxWidth: '280px', margin: '0 auto' }}>
              <PhotoCard />
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <h2 style={{
                color: t.text.primary,
                fontSize: '1.4rem',
                fontWeight: 600,
                marginBottom: '6px'
              }}>
                Joseph <span style={{ color: t.text.accent }}>DEHAZOUNDE</span>
              </h2>
              <p style={{
                color: t.text.accent,
                fontSize: '0.75rem',
                letterSpacing: '1px'
              }}>
                Analyste en cybersécurité & fullstack dev
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  )
}
