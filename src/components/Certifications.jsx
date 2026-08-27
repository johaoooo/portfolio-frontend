import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'

const certificationsData = [
  {
    name: 'Informatique et Internet',
    issuer: 'Université Numérique Cheikh Hamidou Kane (Force-N)',
    description: 'Formation en informatique et internet.',
    status: 'Obtenue'
  },
  {
    name: 'Marketing Digital',
    issuer: 'Université Numérique Cheikh Hamidou Kane (Force-N)',
    description: 'Formation en marketing digital et stratégie web.',
    status: 'Obtenue'
  },
  {
    name: 'Intelligence Artificielle',
    issuer: 'Université Numérique Cheikh Hamidou Kane (Force-N)',
    description: 'Formation aux fondamentaux et usages pratiques de l\'intelligence artificielle.',
    status: 'Obtenue'
  },
  {
    name: 'Bootcamp Cybersécurité',
    issuer: 'Dclic OIF',
    description: 'Formation intensive en cybersécurité offensive et défensive.',
    status: 'En cours'
  },
  {
    name: 'Google Cybersecurity Certificate',
    issuer: 'Google / Coursera',
    description: 'Certification professionnelle en cybersécurité, détection des menaces et analyse SIEM.',
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
        
        {/* Titre dynamique */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <h2 style={{
            color: t.text.primary,
            fontSize: 'clamp(1.8rem, 5vw, 2.2rem)',
            fontWeight: 700,
            margin: 0,
            display: 'inline-block'
          }}>
            Certifications
          </h2>
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
              <div style={{ marginBottom: '14px' }}>
                <h3 style={{
                  color: t.text.primary,
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  margin: '0 0 6px 0',
                  lineHeight: 1.3
                }}>
                  {cert.name}
                </h3>
                <p style={{
                  color: t.text.accent,
                  fontSize: '0.78rem',
                  margin: 0,
                  fontWeight: 600
                }}>
                  {cert.issuer}
                </p>
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
                <span style={{
                  color: cert.status === 'En cours' ? t.text.accent : t.text.secondary,
                  fontSize: '0.75rem',
                  background: cert.status === 'En cours' ? t.badge.bg : 'transparent',
                  padding: '2px 8px',
                  borderRadius: '20px',
                  display: 'inline-block'
                }}>
                  {cert.status === 'En cours' ? 'En cours' : 'Obtenue'}
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
