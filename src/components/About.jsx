import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { GraduationCap, Award, Briefcase, Calendar, MapPin, Sparkles, Code, Shield, Cloud, Brain, Users, Wrench, BookOpen, ChevronRight } from 'lucide-react'

export default function About() {
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)

  const formations = [
    {
      title: "Baccalauréat Série D",
      institution: "CSP Hamadou Hampâté Bâ",
      period: "2011",
      location: "Bénin",
      icon: <GraduationCap size={18} />
    }
  ]

  const experiences = [
    {
      title: "Stagiaire Cybersécurité & Dev Web",
      company: "Maison Afi Collection",
      period: "Avr. 2026 - Présent",
      description: "Mise à jour des équipements informatiques, sensibilisation aux bonnes pratiques, audit de sécurité, développement d'un site e-commerce artisanal (React JS / Node JS).",
      icon: <Briefcase size={18} />
    },
    {
      title: "Auditeur Sécurité Web",
      company: "XoboEvent",
      period: "Mars 2026",
      description: "Reconnaissance, collecte d'informations, analyse des vulnérabilités, tests d'intrusion web, rédaction du rapport d'audit.",
      icon: <Shield size={18} />
    },
    {
      title: "Développeur Plateforme Xobo Ticket",
      company: "XoboEvent",
      period: "Mars 2026",
      description: "Conception de plateforme de réservation de tickets pour stands d'exposition, développement frontend (React JS) et backend (Node JS), déploiement.",
      icon: <Code size={18} />
    },
    {
      title: "Technicien Maintenance Logicielle",
      company: "Freelance",
      period: "2019 - 2024",
      description: "Installation/mise à jour de systèmes d'exploitation Windows/Linux, configuration logicielle, suppression de virus, maintenance complète.",
      icon: <Wrench size={18} />
    },
    {
      title: "Formateur Informatique",
      company: "Freelance",
      period: "2023 - Présent",
      description: "Formation en informatique générale et développement web.",
      icon: <Users size={18} />
    }
  ]

  const certifications = [
    { name: "Informatique et Internet", issuer: "Université Numérique Cheikh Hamidou Kane (Force-N)", year: "2026", status: "Obtenue" },
    { name: "Marketing Digital", issuer: "Université Numérique Cheikh Hamidou Kane (Force-N)", year: "En cours", status: "En cours" },
    { name: "Bootcamp Cybersécurité", issuer: "Dclic OIF", year: "En cours", status: "En cours" },
    { name: "Ingénierie en Cybersécurité", issuer: "OpenClassrooms", year: "En cours", status: "En cours" }
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
        
        {/* Titre */}
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

        {/* Grille 2 colonnes */}
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
              whileHover={{ y: -5 }}
              style={{
                background: t.bg.surface,
                border: `1px solid ${t.border.default}`,
                borderRadius: '20px',
                padding: '24px',
                marginBottom: '24px'
              }}
            >
              <h3 style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: t.text.accent,
                fontSize: '1.2rem',
                fontWeight: 600,
                marginBottom: '20px',
                paddingBottom: '10px',
                borderBottom: `1px solid ${t.border.default}`
              }}>
                <GraduationCap size={20} />
                Formation académique
              </h3>
              {formations.map((f, i) => (
                <div key={i}>
                  <h4 style={{ color: t.text.primary, fontSize: '1rem', fontWeight: 600, marginBottom: '6px' }}>{f.title}</h4>
                  <p style={{ color: t.text.secondary, fontSize: '0.85rem', marginBottom: '4px' }}>{f.institution}</p>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '0.7rem', color: t.text.secondary }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={12} /> {f.period}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={12} /> {f.location}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 80 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              style={{
                background: t.bg.surface,
                border: `1px solid ${t.border.default}`,
                borderRadius: '20px',
                padding: '24px'
              }}
            >
              <h3 style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: t.text.accent,
                fontSize: '1.2rem',
                fontWeight: 600,
                marginBottom: '20px',
                paddingBottom: '10px',
                borderBottom: `1px solid ${t.border.default}`
              }}>
                <Award size={20} />
                Formations & Certifications
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    style={{
                      background: t.badge.bg,
                      border: `1px solid ${t.border.accent}`,
                      borderRadius: '30px',
                      padding: '8px 16px',
                      width: '100%'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                      <span style={{ color: t.text.accent, fontSize: '0.8rem', fontWeight: 600 }}>{cert.name}</span>
                      <span style={{ 
                        color: cert.status === 'En cours' ? t.text.accent : t.text.secondary, 
                        fontSize: '0.65rem',
                        background: cert.status === 'En cours' ? t.badge.bg : 'transparent',
                        padding: '2px 8px',
                        borderRadius: '20px'
                      }}>
                        {cert.status === 'En cours' ? '📖 En cours' : `✅ ${cert.year}`}
                      </span>
                    </div>
                    <p style={{ color: t.text.secondary, fontSize: '0.7rem', marginTop: '4px' }}>{cert.issuer}</p>
                  </div>
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
            whileHover={{ y: -5 }}
            style={{
              background: t.bg.surface,
              border: `1px solid ${t.border.default}`,
              borderRadius: '20px',
              padding: '24px'
            }}
          >
            <h3 style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: t.text.accent,
              fontSize: '1.2rem',
              fontWeight: 600,
              marginBottom: '20px',
              paddingBottom: '10px',
              borderBottom: `1px solid ${t.border.default}`
            }}>
              <Briefcase size={20} />
              Expériences professionnelles
            </h3>
            {experiences.map((exp, i) => (
              <div key={i} style={{ marginBottom: i < experiences.length - 1 ? '24px' : 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '6px' }}>
                  <h4 style={{ color: t.text.primary, fontSize: '0.95rem', fontWeight: 600, margin: 0 }}>{exp.title}</h4>
                  <span style={{
                    color: t.text.accent,
                    fontSize: '0.65rem',
                    background: t.badge.bg,
                    padding: '2px 8px',
                    borderRadius: '20px'
                  }}>
                    {exp.period}
                  </span>
                </div>
                <p style={{ color: t.text.accent, fontSize: '0.8rem', marginBottom: '8px' }}>{exp.company}</p>
                <p style={{ color: t.text.secondary, fontSize: '0.8rem', lineHeight: 1.5, margin: 0 }}>{exp.description}</p>
                {i < experiences.length - 1 && <hr style={{ margin: '16px 0 0', borderColor: t.border.default }} />}
              </div>
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
