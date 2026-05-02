import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Briefcase, Calendar, MapPin, Sparkles, Code, Shield, Cloud, Brain } from 'lucide-react'

export default function About() {
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)

  const formations = [
    {
      title: "Bac +2 en Sécurité Informatique",
      institution: "Institut de Formation et de Recherche en Informatique (IFRI)",
      period: "2016 - 2018",
      location: "Bénin",
      icon: <GraduationCap size={18} />
    }
  ]

  const experiences = [
    {
      title: "Stagiaire Développeur",
      company: "Afi Collection",
      period: "2025 - Présent",
      description: "Développement d'une plateforme e-commerce d'artisanat et sécurisation",
      icon: <Briefcase size={18} />
    },
    {
      title: "Enquêteur agricole & Chef d'équipe",
      company: "DDAEP-O",
      period: "2019 - 2025",
      description: "Collecte de données terrain avec Akvo Flow et Kobocollect, gestion d'équipe",
      icon: <Briefcase size={18} />
    },
    {
      title: "Enquêteur agricole & Chef d'équipe",
      company: "DSA",
      period: "2019 - 2025",
      description: "Enquêtes terrain, analyse statistique, rapports Excel",
      icon: <Briefcase size={18} />
    }
  ]

  const certifications = [
    { name: "Administration système Linux", issuer: "OpenClassrooms", year: "2025" },
    { name: "Bootcamp Cybersécurité", issuer: "D-Clic / OIF", year: "2026" },
    { name: "Administration Cisco", issuer: "OpenClassrooms", year: "2026" },
    { name: "GitHub", issuer: "OpenClassrooms", year: "2026" },
    { name: "Docker", issuer: "OpenClassrooms", year: "2026" },
    { name: "Windows Server", issuer: "OpenClassrooms", year: "2026" }
  ]

  return (
    <section id="about" style={{
      background: t.bg.page,
      padding: '80px 24px',
      transition: 'background 0.3s',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Titre avec icônes et animation */}
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
            <Sparkles size={28} style={{ color: t.text.accent }} />
            <h2 style={{
              color: t.text.primary,
              fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
              fontWeight: 700,
              margin: 0,
              position: 'relative',
              display: 'inline-block'
            }}>
              Mon parcours
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
        </motion.div>

        {/* Grille 2 colonnes avec animations */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '30px'
        }}>
          
          {/* Colonne gauche - Formations & Certifications */}
          <div>
            {/* Formations */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              style={{
                background: t.bg.surface,
                border: `1px solid ${t.border.default}`,
                borderRadius: '20px',
                padding: '24px',
                marginBottom: '24px',
                transition: 'all 0.3s ease'
              }}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: t.text.accent,
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  marginBottom: '20px',
                  paddingBottom: '10px',
                  borderBottom: `1px solid ${t.border.default}`
                }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <GraduationCap size={20} />
                </motion.div>
                Formations
              </motion.h3>
              {formations.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 style={{ color: t.text.primary, fontSize: '1rem', fontWeight: 600, marginBottom: '6px' }}>{f.title}</h4>
                  <p style={{ color: t.text.secondary, fontSize: '0.85rem', marginBottom: '4px' }}>{f.institution}</p>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '0.7rem', color: t.text.secondary }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={12} /> {f.period}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={12} /> {f.location}</span>
                  </div>
                  {i < formations.length - 1 && <hr style={{ margin: '16px 0', borderColor: t.border.default }} />}
                </motion.div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 80 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              style={{
                background: t.bg.surface,
                border: `1px solid ${t.border.default}`,
                borderRadius: '20px',
                padding: '24px'
              }}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: t.text.accent,
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  marginBottom: '20px',
                  paddingBottom: '10px',
                  borderBottom: `1px solid ${t.border.default}`
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Award size={20} />
                </motion.div>
                Certifications
              </motion.h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -3 }}
                    style={{
                      background: t.badge.bg,
                      border: `1px solid ${t.border.accent}`,
                      borderRadius: '30px',
                      padding: '6px 14px',
                      cursor: 'pointer'
                    }}
                  >
                    <span style={{ color: t.text.accent, fontSize: '0.75rem', fontWeight: 500 }}>{cert.name}</span>
                    <span style={{ color: t.text.secondary, fontSize: '0.65rem', marginLeft: '6px' }}>• {cert.year}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Colonne droite - Expériences */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            style={{
              background: t.bg.surface,
              border: `1px solid ${t.border.default}`,
              borderRadius: '20px',
              padding: '24px'
            }}
          >
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: t.text.accent,
                fontSize: '1.2rem',
                fontWeight: 600,
                marginBottom: '20px',
                paddingBottom: '10px',
                borderBottom: `1px solid ${t.border.default}`
              }}
            >
              <motion.div
                animate={{ x: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Briefcase size={20} />
              </motion.div>
              Expériences professionnelles
            </motion.h3>
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                style={{ marginBottom: i < experiences.length - 1 ? '24px' : 0 }}
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '6px' }}
                >
                  <h4 style={{ color: t.text.primary, fontSize: '0.95rem', fontWeight: 600, margin: 0 }}>{exp.title}</h4>
                  <motion.span
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.15 }}
                    style={{
                      color: t.text.accent,
                      fontSize: '0.65rem',
                      background: t.badge.bg,
                      padding: '2px 8px',
                      borderRadius: '20px'
                    }}
                  >
                    {exp.period}
                  </motion.span>
                </motion.div>
                <p style={{ color: t.text.accent, fontSize: '0.8rem', marginBottom: '8px' }}>{exp.company}</p>
                <p style={{ color: t.text.secondary, fontSize: '0.8rem', lineHeight: 1.5, margin: 0 }}>{exp.description}</p>
                {i < experiences.length - 1 && <hr style={{ margin: '20px 0 0', borderColor: t.border.default }} />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  )
}
