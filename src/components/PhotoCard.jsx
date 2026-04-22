/**
 * PhotoCard.jsx — sombre & pro
 *
 * - Photo circulaire dégagée, rien qui la chevauche
 * - Anneau décoratif subtil bleu nuit
 * - Badges Disponible + OWASP repositionnés pour ne pas couvrir la photo
 * - Fenêtres de code glassmorphism en DESSOUS de la photo comme décor
 * - Stats strip en bas
 */

import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useRef } from 'react'
import PropTypes from 'prop-types'

const CODE_WINDOWS = [
  {
    id: 'w1',
    title: 'recon.py',
    dot: '#EF4444',
    lines: ['def scan(host):', '  ports = nmap(host)', '  return report(ports)'],
  },
  {
    id: 'w2',
    title: 'auth.js',
    dot: '#22C55E',
    lines: ['const sign = (payload) =>', '  jwt.sign(payload, SECRET,', '  { expiresIn: "2h" })'],
  },
  {
    id: 'w3',
    title: 'vuln.sh',
    dot: '#F59E0B',
    lines: ['nmap -sV --script vuln', '-p 80,443,8080', '-oN output.txt $HOST'],
  },
]

const CodeWindow = ({ win, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.45, ease: 'easeOut' }}
    style={{
      background: 'rgba(15,23,42,0.75)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(99,130,180,0.18)',
      borderRadius: '9px',
      overflow: 'hidden',
      fontFamily: '"JetBrains Mono", monospace',
      flex: '1 1 140px',
      minWidth: 0,
    }}
  >
    {/* Barre titre */}
    <div style={{
      display: 'flex', alignItems: 'center', gap: 5,
      padding: '5px 9px',
      background: 'rgba(255,255,255,0.04)',
      borderBottom: '1px solid rgba(99,130,180,0.1)',
    }}>
      {['#EF4444','#F59E0B', win.dot].map((c, i) => (
        <div key={i} style={{ width: 7, height: 7, borderRadius: '50%', background: c, flexShrink: 0 }} />
      ))}
      <span style={{ fontSize: '0.58rem', color: 'rgba(148,163,184,0.6)', marginLeft: 4, letterSpacing: '0.04em' }}>
        {win.title}
      </span>
    </div>
    {/* Lignes */}
    <div style={{ padding: '6px 9px', display: 'flex', flexDirection: 'column', gap: 2 }}>
      {win.lines.map((line, i) => (
        <div key={i} style={{ display: 'flex', gap: 7 }}>
          <span style={{ fontSize: '0.52rem', color: 'rgba(99,130,180,0.3)', userSelect: 'none', minWidth: 9 }}>{i + 1}</span>
          <span style={{
            fontSize: '0.56rem',
            color: i === 0 ? '#7CB9E8' : 'rgba(148,163,184,0.7)',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {line}
          </span>
        </div>
      ))}
    </div>
  </motion.div>
)

CodeWindow.propTypes = {
  win: PropTypes.object.isRequired,
  delay: PropTypes.number.isRequired,
}

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.4rem' }}
    >
      {/* ── Photo + badges ── */}
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
          position: 'absolute', inset: -10, borderRadius: '50%',
          border: '1px solid rgba(99,130,180,0.15)',
          zIndex: 1,
        }} />
        {/* Anneau intérieur */}
        <div style={{
          position: 'absolute', inset: -3, borderRadius: '50%',
          border: '1.5px solid rgba(99,130,180,0.25)',
          zIndex: 1,
        }} />

        {/* Photo */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '50%',
          overflow: 'hidden',
          border: '3px solid rgba(99,130,180,0.3)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 4px 16px rgba(0,0,0,0.3)',
          zIndex: 3,
        }}>
          <img
            src="/images/profile.jpeg"
            alt="Dehazounde Joseph"
            style={{
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: '50% 20%',
              filter: 'brightness(0.95) saturate(1.05)',
            }}
            onError={(e) => {
              e.currentTarget.src = 'https://ui-avatars.com/api/?name=Joseph+Dehazounde&background=0F172A&color=7CB9E8&size=260&bold=true&length=2'
            }}
          />
          {/* Vignette basse */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: 'linear-gradient(180deg, transparent 55%, rgba(5,8,15,0.4) 100%)',
          }} />
        </div>

        {/* Badge Disponible — sous la photo, côté gauche */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0 }}
          style={{
            position: 'absolute',
            bottom: -14, left: -50,
            background: 'rgba(10,18,30,0.88)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(34,197,94,0.25)',
            borderRadius: 12,
            padding: '7px 12px',
            display: 'flex', alignItems: 'center', gap: 8,
            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            zIndex: 8,
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.35, 1], opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E', flexShrink: 0 }}
          />
          <div>
            <div style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.7rem', fontWeight: 600, color: '#E2E8F0', lineHeight: 1.3 }}>
              Disponible
            </div>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.52rem', color: '#475569' }}>
              Open to work
            </div>
          </div>
        </motion.div>

        {/* Badge OWASP — sous la photo, côté droit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
          style={{
            position: 'absolute',
            bottom: -14, right: -44,
            background: 'rgba(10,18,30,0.88)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(245,158,11,0.22)',
            borderRadius: 10,
            padding: '7px 11px',
            display: 'flex', alignItems: 'center', gap: 7,
            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            zIndex: 8,
          }}
        >
          <div style={{ background: 'rgba(245,158,11,0.12)', borderRadius: 5, padding: '2px 7px' }}>
            <span style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.58rem', fontWeight: 700, color: '#F59E0B', letterSpacing: '0.06em' }}>
              OWASP
            </span>
          </div>
          <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.6rem', fontWeight: 600, color: '#92400E' }}>
            Certifié
          </span>
        </motion.div>
      </motion.div>

      {/* ── Fenêtres de code en dessous ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          display: 'flex', gap: '8px',
          width: '100%', maxWidth: 340,
          marginTop: '2rem',
        }}
      >
        {CODE_WINDOWS.map((win, i) => (
          <CodeWindow key={win.id} win={win} delay={0.9 + i * 0.12} />
        ))}
      </motion.div>

      {/* ── Stats strip ── */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        style={{
          display: 'flex',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(99,130,180,0.12)',
          borderRadius: 12,
          overflow: 'hidden',
          width: '100%', maxWidth: 340,
        }}
      >
        {[
          { value: '5+', label: 'Projets' },
          { value: '20+', label: 'CVE' },
          { value: '100%', label: 'Sécurisé' },
        ].map((s, i) => (
          <div key={s.label} style={{
            flex: 1, padding: '10px 0', textAlign: 'center',
            borderRight: i < 2 ? '1px solid rgba(99,130,180,0.1)' : 'none',
          }}>
            <div style={{ fontFamily: '"Syne", sans-serif', fontSize: '1rem', fontWeight: 800, color: '#E2E8F0', lineHeight: 1, marginBottom: 3 }}>
              {s.value}
            </div>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.5rem', color: '#475569', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

PhotoCard.propTypes = { darkMode: PropTypes.bool }
PhotoCard.defaultProps = { darkMode: true }
