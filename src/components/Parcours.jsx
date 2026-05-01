import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react'

const parcoursData = [
  {
    type: 'formation',
    title: 'Master en Cybersécurité',
    institution: 'Université de Technologie',
    location: 'Paris, France',
    date: '2023 - 2025',
    description: 'Spécialisation en sécurité offensive, audit de sécurité et cryptographie.',
    icon: <GraduationCap size={20} />
  },
  {
    type: 'formation',
    title: 'Licence Informatique',
    institution: 'Faculté des Sciences',
    location: 'Abidjan, Côte d\'Ivoire',
    date: '2020 - 2023',
    description: 'Fondamentaux du développement web, algorithmique et bases de données.',
    icon: <GraduationCap size={20} />
  },
  {
    type: 'certification',
    title: 'Certification OWASP Top 10',
    institution: 'OWASP Foundation',
    location: 'En ligne',
    date: '2024',
    description: 'Maîtrise des vulnérabilités web et des bonnes pratiques de sécurité.',
    icon: <Award size={20} />
  },
  {
    type: 'certification',
    title: 'DevOps Engineer - Docker & Kubernetes',
    institution: 'Linux Foundation',
    location: 'En ligne',
    date: '2023',
    description: 'Containerisation, orchestration et CI/CD.',
    icon: <Award size={20} />
  }
]

export default function Parcours() {
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)

  return (
    <section id="parcours" style={{
      background: t.bg.page,
      padding: '80px 24px',
      transition: 'background 0.3s'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        {/* Titre de la section */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            color: t.text.primary,
            textAlign: 'center',
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: 700,
            marginBottom: '48px'
          }}
        >
          Parcours & Formation
        </motion.h2>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Ligne verticale */}
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: 'calc(100% - 40px)',
            background: t.border.accent,
            top: '20px'
          }} />

          {parcoursData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                marginBottom: '40px',
                position: 'relative'
              }}
            >
              {/* Carte */}
              <div style={{
                width: 'calc(50% - 30px)',
                background: t.bg.surface,
                border: `1px solid ${t.border.default}`,
                borderRadius: '16px',
                padding: '20px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.borderColor = t.border.accent
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = t.border.default
              }}>
                {/* En-tête avec icône et type */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '12px'
                }}>
                  <span style={{ color: t.text.accent }}>
                    {item.icon}
                  </span>
                  <span style={{
                    color: t.text.accent,
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {item.type === 'formation' ? 'FORMATION' : 'CERTIFICATION'}
                  </span>
                </div>

                {/* Titre */}
                <h3 style={{
                  color: t.text.primary,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  marginBottom: '8px'
                }}>
                  {item.title}
                </h3>

                {/* Institution */}
                <p style={{
                  color: t.text.accent,
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  marginBottom: '8px'
                }}>
                  {item.institution}
                </p>

                {/* Date et lieu */}
                <div style={{
                  display: 'flex',
                  gap: '16px',
                  marginBottom: '12px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: t.text.secondary,
                    fontSize: '0.7rem'
                  }}>
                    <Calendar size={12} />
                    <span>{item.date}</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    color: t.text.secondary,
                    fontSize: '0.7rem'
                  }}>
                    <MapPin size={12} />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  color: t.text.secondary,
                  fontSize: '0.85rem',
                  lineHeight: 1.5,
                  margin: 0
                }}>
                  {item.description}
                </p>
              </div>

              {/* Point sur la timeline */}
              <div style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '12px',
                height: '12px',
                background: t.text.accent,
                borderRadius: '50%',
                border: `2px solid ${t.bg.page}`,
                top: '20px'
              }} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #parcours > div > div {
            flex-direction: column;
            align-items: center;
          }
          #parcours > div > div > div {
            width: 100%;
            margin-bottom: 20px;
          }
          #parcours > div > div > div:last-child {
            margin-bottom: 0;
          }
        }
      `}</style>
    </section>
  )
}
