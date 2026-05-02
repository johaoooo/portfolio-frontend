import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink, Medal, Sparkles } from 'lucide-react'

const certificationsData = [
  {
    name: 'Administration système Linux',
    issuer: 'OpenClassrooms',
    date: '2025',
    description: 'Maîtrise de l\'administration système sous Linux, gestion des utilisateurs, processus, et sécurisation.'
  },
  {
    name: 'Bootcamp Cybersécurité',
    issuer: 'D-Clic / OIF',
    date: '2026',
    description: 'Formation intensive en cybersécurité offensive et défensive.'
  },
  {
    name: 'Administration Cisco',
    issuer: 'OpenClassrooms',
    date: '2026',
    description: 'Configuration et administration des équipements réseau Cisco.'
  },
  {
    name: 'GitHub',
    issuer: 'OpenClassrooms',
    date: '2026',
    description: 'Gestion de versions, collaboration sur projets, et automatisation avec GitHub Actions.'
  },
  {
    name: 'Docker',
    issuer: 'OpenClassrooms',
    date: '2026',
    description: 'Containerisation d\'applications, orchestration avec Docker Compose.'
  },
  {
    name: 'Windows Server',
    issuer: 'OpenClassrooms',
    date: '2026',
    description: 'Administration de serveurs Windows, Active Directory, et déploiement de services.'
  }
]

export default function Certifications() {
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)

  return (
    <section id="certifications" style={{
      background: t.bg.page,
      padding: '80px 24px',
      transition: 'background 0.3s',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Titre dynamique avec icônes */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}
          >
            <Medal size={28} style={{ color: t.text.accent }} />
            <h2 style={{
              color: t.text.primary,
              fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
              fontWeight: 700,
              margin: 0,
              display: 'inline-block'
            }}>
              Certifications
            </h2>
            <Sparkles size={28} style={{ color: t.text.accent }} />
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              height: '3px',
              background: t.text.accent,
              borderRadius: '2px',
              margin: '12px auto 0'
            }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              color: t.text.secondary,
              fontSize: '0.95rem',
              maxWidth: '600px',
              margin: '16px auto 0'
            }}
          >
            Certifications professionnelles obtenues
          </motion.p>
        </motion.div>

        {/* Grille des certifications */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px'
        }}>
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05, type: "spring", stiffness: 80 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              style={{
                background: t.bg.surface,
                border: `1px solid ${t.border.default}`,
                borderRadius: '20px',
                padding: '24px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '16px'
              }}>
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: '50px',
                    height: '50px',
                    background: t.badge.bg,
                    border: `1px solid ${t.border.accent}`,
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: t.text.accent
                  }}
                >
                  <Award size={24} />
                </motion.div>
                <div>
                  <h3 style={{
                    color: t.text.primary,
                    fontSize: '1rem',
                    fontWeight: 700,
                    margin: 0
                  }}>
                    {cert.name}
                  </h3>
                  <p style={{
                    color: t.text.accent,
                    fontSize: '0.7rem',
                    margin: '5px 0 0 0',
                    fontWeight: 500
                  }}>
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <p style={{
                color: t.text.secondary,
                fontSize: '0.85rem',
                lineHeight: 1.5,
                marginBottom: '16px'
              }}>
                {cert.description}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: t.text.secondary,
                fontSize: '0.75rem'
              }}>
                <Calendar size={14} />
                <span>Obtenue en {cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
