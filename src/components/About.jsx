import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Calendar, MapPin, Sparkles, Shield, Code, Users, Wrench, Award, Target, BookOpen, Cpu } from 'lucide-react'

export default function About() {
  const t = useTokens()

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
    { name: "Informatique et Internet", issuer: "Force-N", status: "Obtenue", logo: "/logos/force-n.svg" },
    { name: "Marketing Digital", issuer: "Force-N", status: "Obtenue", logo: "/logos/force-n.svg" },
    { name: "Intelligence Artificielle", issuer: "Force-N", status: "Obtenue", logo: "/logos/force-n.svg" },
    { name: "Bootcamp Cybersécurité", issuer: "Dclic OIF", status: "En cours", logo: "/logos/dclic.svg" },
    { name: "Google Cybersecurity Certificate", issuer: "Google / Coursera", status: "En cours", logo: "/logos/coursera.svg" }
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
          <h2 style={{
            color: t.text.primary,
            fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
            fontWeight: 700,
            margin: 0,
            display: 'inline-block'
          }}>
            Mon parcours
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
              color: t.text.accent,
              fontSize: '1.3rem',
              fontWeight: 600,
              marginBottom: '24px',
              paddingBottom: '12px',
              borderBottom: `2px solid ${t.border.accent}`
            }}>
              Formations
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {formations.map((f, i) => (
                <div key={i}>
                  <h4 style={{ color: t.text.primary, fontSize: '1rem', fontWeight: 600, marginBottom: '6px' }}>{f.title}</h4>
                  <p style={{ color: t.text.secondary, fontSize: '0.85rem', marginBottom: '4px' }}>{f.institution}</p>
                  <div style={{ fontSize: '0.75rem', color: t.text.secondary }}>
                    <span>{f.location}</span>
                  </div>
                  {i < formations.length - 1 && <hr style={{ margin: '16px 0 0', borderColor: t.border.default }} />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications - avant Expériences */}
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
              color: t.text.accent,
              fontSize: '1.3rem',
              fontWeight: 600,
              marginBottom: '24px',
              paddingBottom: '12px',
              borderBottom: `2px solid ${t.border.accent}`
            }}>
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
                    padding: '10px 20px',
                    flex: '1 1 auto',
                    minWidth: '220px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  {cert.logo && (
                    <img
                      src={cert.logo}
                      alt={cert.issuer}
                      style={{ width: '22px', height: '22px', objectFit: 'contain', flexShrink: 0 }}
                    />
                  )}
                  <div>
                    <div style={{ fontWeight: 600, color: t.text.accent, fontSize: '0.85rem' }}>{cert.name}</div>
                    <div style={{ fontSize: '0.75rem', color: t.text.secondary, marginTop: '2px' }}>
                      {cert.issuer}
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
              color: t.text.accent,
              fontSize: '1.3rem',
              fontWeight: 600,
              marginBottom: '24px',
              paddingBottom: '12px',
              borderBottom: `2px solid ${t.border.accent}`
            }}>
              Expériences professionnelles
            </h3>
            <div style={{ position: 'relative', paddingLeft: '24px' }}>
              {/* Ligne de timeline */}
              <div style={{
                position: 'absolute',
                left: '7px',
                top: '4px',
                bottom: '4px',
                width: '2px',
                background: `linear-gradient(to bottom, var(--text-accent), var(--accent-33))`,
                borderRadius: '2px'
              }} />
              {experiences.map((exp, i) => (
                <div key={i} style={{ position: 'relative', paddingBottom: i < experiences.length - 1 ? '28px' : '4px', paddingLeft: '20px' }}>
                  {/* Point de la timeline */}
                  <div style={{
                    position: 'absolute',
                    left: '-20px',
                    top: '4px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: t.text.accent,
                    border: `3px solid ${t.bg.page}`,
                    boxShadow: `0 0 0 2px ${t.text.accent}`
                  }} />
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
                  <p style={{ color: t.text.accent, fontSize: '0.85rem', marginBottom: '6px', fontWeight: 500 }}>{exp.company}</p>
                  <p style={{ color: t.text.secondary, fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{exp.description}</p>
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
