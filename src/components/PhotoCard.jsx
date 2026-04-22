/**
 * PhotoCard.jsx
 * Dark  : noir + bleu pur  #0000FF
 * Light : blanc + bleu nuit #191970
 */

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'
import PropTypes from 'prop-types'

export default function PhotoCard({ darkMode }) {
  const cardRef = useRef(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 180, damping: 22 })
  const springY = useSpring(rotateY, { stiffness: 180, damping: 22 })

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    rotateY.set(((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 6)
    rotateX.set(-((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * 6)
  }
  const handleMouseLeave = () => { rotateX.set(0); rotateY.set(0) }

  const t = darkMode ? {
    accent:      '#0000FF',
    accent2:     '#3333FF',
    ring1:       'rgba(0, 0, 255, 0.18)',
    ring2:       'rgba(0, 0, 255, 0.32)',
    photoBorder: 'rgba(0, 0, 255, 0.40)',
    shadow:      '0 20px 60px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,255,0.18)',
    vignette:    'linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.5) 100%)',
    badgeBg:     'rgba(0, 0, 255, 0.10)',
    badgeBorder: 'rgba(0, 0, 255, 0.28)',
    badgeColor:  '#5555FF',
    descColor:   '#777777',
  } : {
    accent:      '#191970',
    accent2:     '#0F0F5A',
    ring1:       'rgba(25, 25, 112, 0.15)',
    ring2:       'rgba(25, 25, 112, 0.28)',
    photoBorder: 'rgba(25, 25, 112, 0.35)',
    shadow:      '0 20px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(25,25,112,0.15)',
    vignette:    'linear-gradient(180deg, transparent 55%, rgba(255,255,255,0.2) 100%)',
    badgeBg:     'rgba(25, 25, 112, 0.07)',
    badgeBorder: 'rgba(25, 25, 112, 0.25)',
    badgeColor:  '#191970',
    descColor:   '#888888',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.4rem' }}
    >
      {/* Photo */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: springX, rotateY: springY,
          transformStyle: 'preserve-3d', perspective: 1000,
          position: 'relative',
          width: 260, height: 260,
        }}
      >
        {/* Anneau extérieur */}
        <div style={{
          position: 'absolute', inset: -12, borderRadius: '50%',
          border: `1px solid ${t.ring1}`,
          zIndex: 1, transition: 'border-color 0.35s',
        }} />
        {/* Anneau intérieur */}
        <div style={{
          position: 'absolute', inset: -4, borderRadius: '50%',
          border: `1.5px solid ${t.ring2}`,
          zIndex: 1, transition: 'border-color 0.35s',
        }} />

        {/* Photo */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          overflow: 'hidden',
          border: `3px solid ${t.photoBorder}`,
          boxShadow: t.shadow,
          zIndex: 3, transition: 'border-color 0.35s, box-shadow 0.35s',
        }}>
          <img
            src="/images/profile.jpeg"
            alt="Dehazounde Joseph"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: '50% 20%',
              filter: darkMode
                ? 'brightness(0.92) saturate(1.05)'
                : 'brightness(1.02) saturate(1.05)',
            }}
            onError={(e) => {
              e.currentTarget.src = 'https://ui-avatars.com/api/?name=Joseph+Dehazounde&background=0A0A0A&color=0000FF&size=260&bold=true&length=2'
            }}
          />
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: t.vignette,
            transition: 'background 0.35s',
          }} />
        </div>
      </motion.div>

      {/* Badges + description */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.8rem',
          marginTop: '0.5rem',
        }}
      >
        <div style={{ display: 'flex', gap: '0.55rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['Cybersécurité', 'DevOps', 'IA'].map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + i * 0.12 }}
              style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.7rem',
                fontWeight: 600,
                color: t.badgeColor,
                background: t.badgeBg,
                border: `1px solid ${t.badgeBorder}`,
                borderRadius: '20px',
                padding: '0.32rem 0.85rem',
                letterSpacing: '0.03em',
                transition: 'all 0.35s',
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: '0.73rem',
            fontWeight: 400,
            color: t.descColor,
            textAlign: 'center',
            lineHeight: 1.65,
            maxWidth: 290,
            margin: 0,
            fontStyle: 'italic',
            transition: 'color 0.35s',
          }}
        >
          Je développe des solutions numériques sur mesure et innovantes.
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

PhotoCard.propTypes = { darkMode: PropTypes.bool }
PhotoCard.defaultProps = { darkMode: true }
