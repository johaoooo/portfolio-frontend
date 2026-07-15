import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { Award, Calendar, Medal, Sparkles } from 'lucide-react'

const certificationsData = [
  {
    name: 'Informatique et Internet',
    issuer: 'Université Numérique Cheikh Hamidou Kane (Force-N)',
    date: '2026',
    description: 'Formation en informatique et internet.',
    status: 'Obtenue'
  },
  {
    name: 'Marketing Digital',
    issuer: 'Université Numérique Cheikh Hamidou Kane (Force-N)',
    date: 'En cours',
    description: 'Formation en marketing digital.',
    status: 'En cours'
  },
  {
    name: 'Bootcamp Cybersécurité',
    issuer: 'Dclic OIF',
    date: 'En cours',
    description: 'Formation intensive en cybersécurité offensive et défensive.',
    status: 'En cours'
  },
  {
    name: 'Ingénierie en Cybersécurité',
    issuer: 'OpenClassrooms',
    date: 'En cours',
    description: 'Parcours complet en ingénierie cybersécurité.',
    status: 'En cours'
  }
]

export default function Certifications() {
  const t = useTokens()

  return (
    <section id="certifications" style={{
      background: t.bg.page,
      padding: '80px 20px',
      transition: 'background 0.3s'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        
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
            style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}
          >
            <Medal size={28} style={{ color: t.text.accent }} />
            <h2 style={{
              color: t.text.primary,
              fontSize: 'clamp(1.8rem, 5vw, 2.2rem)',
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
              fontSize: '0.9rem',
              maxWidth: '600px',
              margin: '16px auto 0'
            }}
          >
            Certifications professionnelles obtenues
          </motion.p>
        </motion.div>

        {/* Grille des certifications - responsive */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
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
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
                marginBottom: '16px',
                flexWrap: 'wrap'
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
                    color: t.text.accent,
                    flexShrink: 0
                  }}
                >
                  <Award size={24} />
                </motion.div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    color: t.text.primary,
                    fontSize: '1rem',
                    fontWeight: 700,
                    margin: 0,
                    lineHeight: 1.3
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
                marginBottom: '16px',
                flex: 1
              }}>
                {cert.description}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: 'auto'
              }}>
                <Calendar size={14} style={{ color: t.text.accent }} />
                <span style={{
                  color: cert.status === 'En cours' ? t.text.accent : t.text.secondary,
                  fontSize: '0.75rem',
                  background: cert.status === 'En cours' ? t.badge.bg : 'transparent',
                  padding: '2px 8px',
                  borderRadius: '20px',
                  display: 'inline-block'
                }}>
                  {cert.status === 'En cours' ? '📖 En cours' : `✅ ${cert.date}`}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #certifications {
            padding: 50px 16px !important;
          }
          #certifications > div {
            padding: 0 !important;
          }
          #certifications > div > div {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          #certifications > div > div {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}
