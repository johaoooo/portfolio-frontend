import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Calendar, MapPin, Sparkles, Shield, Code, Users, Wrench, Award, Target, BookOpen, Cpu } from 'lucide-react'

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
    },
    {
      title: "Sécurité Informatique (2 ans)",
      institution: "IFRI - Institut de Formation et de Recherche en Informatique (UAC)",
      period: "2016 - 2018",
      location: "Bénin",
      icon: <Shield size={18} />
    }
  ]

  const certifications = [
    { name: "Informatique et Internet", issuer: "Force-N", year: "2026", status: "Obtenue", icon: <Award size={16} /> },
    { name: "Marketing Digital", issuer: "Force-N", year: "En cours", status: "En cours", icon: <Target size={16} /> },
    { name: "Bootcamp Cybersécurité", issuer: "Dclic OIF", year: "En cours", status: "En cours", icon: <Shield size={16} /> },
    { name: "Ingénierie en Cybersécurité", issuer: "OpenClassrooms", year: "En cours", status: "En cours", icon: <BookOpen size={16} /> }
  ]

  const experiences = [
    {
      title: "Stagiaire Cybersécurité & Dev Web",
      company: "Maison Afi Collection",
      period: "Avr. 2026 - Présent",
      description: "Mise à jour des équipements informatiques, sensibilisation aux bonnes pratiques, audit de sécurité, développement d'un site e-commerce artisanal (React JS / Node JS).",
      icon: <Code size={16} />
    },
    {
      title: "Auditeur Sécurité Web",
      company: "XoboEvent",
      period: "Mars 2026",
      description: "Reconnaissance, collecte d'informations, analyse des vulnérabilités, tests d'intrusion web, rédaction du rapport d'audit.",
      icon: <Shield size={16} />
    },
    {
      title: "Développeur Plateforme Xobo Ticket",
      company: "XoboEvent",
      period: "Mars 2026",
      description: "Conception de plateforme de réservation de tickets pour stands d'exposition, développement frontend (React JS) et backend (Node JS), déploiement.",
      icon: <Code size={16} />
    },
    {
      title: "Technicien Maintenance Logicielle",
      company: "Freelance",
      period: "2019 - 2024",
      description: "Installation/mise à jour de systèmes d'exploitation Windows/Linux, configuration logicielle, suppression de virus, maintenance complète.",
      icon: <Wrench size={16} />
    },
    {
      title: "Formateur Informatique",
      company: "Freelance",
      period: "2023 - Présent",
      description: "Formation en informatique générale et développement web.",
      icon: <Users size={16} />
    }
  ]

  return (
    <section id="about" style={{
      background: t.bg.page,
      padding: '80px 24px',
      transition: 'background 0.3s'
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

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}>
          
          {/* Formations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{
              background: t.bg.surface,
              border: `1px solid ${t.border.default}`,
              borderRadius: '20px',
              padding: '28px'
            }}
          >
            <h3 style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: t.text.accent,
              fontSize: '1.3rem',
              fontWeight: 600,
              marginBottom: '24px',
              paddingBottom: '12px',
              borderBottom: `2px solid ${t.border.accent}`
            }}>
              <GraduationCap size={24} />
              Formations
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {formations.map((f, i) => (
                <div key={i}>
                  <h4 style={{ color: t.text.primary, fontSize: '1rem', fontWeight: 600, marginBottom: '6px' }}>{f.title}</h4>
                  <p style={{ color: t.text.secondary, fontSize: '0.85rem', marginBottom: '4px' }}>{f.institution}</p>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '0.7rem', color: t.text.secondary }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={12} /> {f.period}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><MapPin size={12} /> {f.location}</span>
                  </div>
                  {i < formations.length - 1 && <hr style={{ margin: '16px 0 0', borderColor: t.border.default }} />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              background: t.bg.surface,
              border: `1px solid ${t.border.default}`,
              borderRadius: '20px',
              padding: '28px'
            }}
          >
            <h3 style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: t.text.accent,
              fontSize: '1.3rem',
              fontWeight: 600,
              marginBottom: '24px',
              paddingBottom: '12px',
              borderBottom: `2px solid ${t.border.accent}`
            }}>
              <Award size={24} />
              Certifications
            </h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              {certifications.map((cert, i) => (
                <div
                  key={i}
                  style={{
                    background: t.badge.bg,
                    border: `1px solid ${t.border.accent}`,
                    borderRadius: '40px',
                    padding: '12px 20px',
                    flex: '1 1 auto',
                    minWidth: '220px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  <div style={{ color: t.text.accent }}>{cert.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, color: t.text.accent, fontSize: '0.85rem' }}>{cert.name}</div>
                    <div style={{ fontSize: '0.65rem', color: t.text.secondary, marginTop: '2px' }}>
                      {cert.issuer} • {cert.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Expériences professionnelles */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              background: t.bg.surface,
              border: `1px solid ${t.border.default}`,
              borderRadius: '20px',
              padding: '28px'
            }}
          >
            <h3 style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              color: t.text.accent,
              fontSize: '1.3rem',
              fontWeight: 600,
              marginBottom: '24px',
              paddingBottom: '12px',
              borderBottom: `2px solid ${t.border.accent}`
            }}>
              <Briefcase size={24} />
              Expériences professionnelles
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {experiences.map((exp, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '6px' }}>
                    <h4 style={{ color: t.text.primary, fontSize: '1rem', fontWeight: 600, margin: 0 }}>{exp.title}</h4>
                    <span style={{
                      color: t.text.accent,
                      fontSize: '0.7rem',
                      background: t.badge.bg,
                      padding: '3px 10px',
                      borderRadius: '20px'
                    }}>
                      {exp.period}
                    </span>
                  </div>
                  <p style={{ color: t.text.accent, fontSize: '0.85rem', marginBottom: '8px' }}>{exp.company}</p>
                  <p style={{ color: t.text.secondary, fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>{exp.description}</p>
                  {i < experiences.length - 1 && <hr style={{ margin: '20px 0 0', borderColor: t.border.default }} />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about {
            padding: 60px 16px !important;
          }
          #about > div > div {
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  )
}
