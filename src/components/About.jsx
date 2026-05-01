import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { User, GraduationCap, Award, Target, Code, Shield, Briefcase, Sparkles } from 'lucide-react'

export default function About() {
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)

  const cards = [
    {
      title: "À propos",
      icon: <User size={24} />,
      description: "Passionné par la cybersécurité et le développement fullstack, je combine expertise technique et vision stratégique pour créer des solutions innovantes et sécurisées.",
      color: t.text.accent
    },
    {
      title: "Formations",
      icon: <GraduationCap size={24} />,
      description: "Master en Cybersécurité • Licence en Informatique • Certifications OWASP, DevOps, et IA.",
      color: t.text.accent
    },
    {
      title: "Certifications",
      icon: <Award size={24} />,
      description: "OWASP Top 10 • DevOps Engineer (Docker/Kubernetes) • Certifications en cours : CISSP, CEH.",
      color: t.text.accent
    }
  ]

  return (
    <section id="about" style={{
      background: t.bg.page,
      padding: '80px 24px',
      transition: 'background 0.3s'
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto'
      }}>
        {/* Titre de la section avec icône */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginBottom: '48px'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '16px'
          }}>
            <Briefcase size={28} style={{ color: t.text.accent }} />
            <h2 style={{
              color: t.text.primary,
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: 700,
              margin: 0
            }}>
              Mon parcours
            </h2>
            <Sparkles size={28} style={{ color: t.text.accent }} />
          </div>
          <p style={{
            color: t.text.secondary,
            fontSize: '1rem',
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Découvrez mon parcours professionnel et académique
          </p>
        </motion.div>

        {/* Cartes */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                background: t.bg.surface,
                border: `1px solid ${t.border.default}`,
                borderRadius: '16px',
                padding: '28px',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.borderColor = t.border.accent
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = t.border.default
              }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                background: t.badge.bg,
                border: `1px solid ${t.border.accent}`,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
                color: t.text.accent
              }}>
                {card.icon}
              </div>
              
              <h3 style={{
                color: t.text.primary,
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '16px'
              }}>
                {card.title}
              </h3>
              
              <p style={{
                color: t.text.secondary,
                fontSize: '0.9rem',
                lineHeight: 1.6,
                margin: 0
              }}>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
