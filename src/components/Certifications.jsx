import { motion } from 'framer-motion'
import { CircleCheck, Clock, Shield, Award, TrendingUp, Target, ExternalLink } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react'

const statusMap = {
  obtained:      { icon: CircleCheck, color: '#4ADE80', label: 'Obtenu',   bg: 'rgba(74,222,128,0.1)',  border: 'rgba(74,222,128,0.3)'  },
  'in-progress': { icon: Clock,       color: '#FCD34D', label: 'En cours', bg: 'rgba(252,211,77,0.1)',  border: 'rgba(252,211,77,0.3)'  },
  target:        { icon: Target,      color: '#8B5CF6', label: 'Objectif', bg: 'rgba(139,92,246,0.08)', border: 'rgba(139,92,246,0.2)'  },
}

const certificationsData = [
  // ── Développement Web ─────────────────────────────────────────────
  {
    name: "HTML & CSS",
    issuer: "OpenClassrooms",
    period: "2023",
    status: "obtained",
    description: "Bases solides du web : structuration sémantique, mise en page responsive, animations CSS.",
    skills: ["HTML5", "CSS3", "Responsive", "Flexbox"],
    category: "dev",
  },
  {
    name: "JavaScript",
    issuer: "OpenClassrooms",
    period: "2023",
    status: "obtained",
    description: "Langage du web : manipulation du DOM, fetch API, programmation asynchrone (async/await).",
    skills: ["ES6+", "DOM", "Async/Await", "Fetch API"],
    category: "dev",
  },
  {
    name: "React.js",
    issuer: "OpenClassrooms",
    period: "2024",
    status: "obtained",
    description: "Développement d'interfaces modernes avec hooks, context API, React Router et Vite.",
    skills: ["React 18", "Hooks", "Context API", "Vite"],
    category: "dev",
  },
  {
    name: "Node.js & API REST",
    issuer: "OpenClassrooms",
    period: "2024",
    status: "obtained",
    description: "Conception d'APIs RESTful avec Express, authentification JWT et gestion des middlewares.",
    skills: ["Node.js", "Express", "REST API", "JWT"],
    category: "dev",
  },
  {
    name: "Python",
    issuer: "OpenClassrooms",
    period: "2023",
    status: "obtained",
    description: "Programmation Python : structures de données, POO, scripting et automatisation.",
    skills: ["Python 3", "POO", "Scripting", "Automatisation"],
    category: "dev",
  },
  {
    name: "Django & Django REST",
    issuer: "OpenClassrooms",
    period: "2024",
    status: "obtained",
    description: "Développement backend complet : modèles, vues, sérialiseurs, permissions et déploiement.",
    skills: ["Django 4", "DRF", "PostgreSQL", "Déploiement"],
    category: "dev",
  },
  {
    name: "SQL & Bases de données",
    issuer: "OpenClassrooms",
    period: "2023",
    status: "obtained",
    description: "Conception de schémas relationnels, requêtes complexes, optimisation et sécurité des données.",
    skills: ["SQL", "PostgreSQL", "MySQL", "Modélisation"],
    category: "dev",
  },
  {
    name: "Git & GitHub",
    issuer: "OpenClassrooms",
    period: "2023",
    status: "obtained",
    description: "Versionnage de code, gestion de branches, pull requests et workflows collaboratifs.",
    skills: ["Git", "GitHub", "CI/CD", "Branching"],
    category: "dev",
  },
  // ── Cybersécurité & Infrastructure ────────────────────────────────
  {
    name: "Administration Linux",
    issuer: "Force-N Sénégal",
    period: "2024",
    status: "obtained",
    description: "Administration système Linux : gestion des utilisateurs, services, permissions et automatisation bash.",
    skills: ["Linux", "Bash", "Systemd", "Permissions"],
    category: "sec",
  },
  {
    name: "Virtualisation",
    issuer: "Force-N Sénégal",
    period: "2024",
    status: "obtained",
    description: "Déploiement et gestion de machines virtuelles avec VirtualBox et VMware. Configuration réseau isolée.",
    skills: ["VirtualBox", "VMware", "Snapshots", "Réseau VM"],
    category: "sec",
  },
  {
    name: "Réseaux",
    issuer: "Force-N Sénégal",
    period: "2024",
    status: "obtained",
    description: "Modèle OSI, protocoles TCP/IP, configuration de routeurs, switches, VLAN et pare-feu.",
    skills: ["TCP/IP", "VLAN", "Firewall", "Routage"],
    category: "sec",
  },
  {
    name: "Intrusion Web & Pentest",
    issuer: "OIF / D-CLIC",
    period: "2025",
    status: "obtained",
    description: "Tests d'intrusion sur DVWA et OWASP Juice Shop : XSS, SQLi, CSRF, Burp Suite, Nmap, Metasploit.",
    skills: ["Burp Suite", "Nmap", "Metasploit", "OWASP Top 10"],
    category: "sec",
  },
  {
    name: "Cryptographie",
    issuer: "OIF / D-CLIC",
    period: "2025",
    status: "obtained",
    description: "Chiffrement symétrique et asymétrique, hachage, certificats TLS/SSL et gestion des clés.",
    skills: ["AES", "RSA", "TLS/SSL", "Hachage"],
    category: "sec",
  },
  {
    name: "Docker",
    issuer: "Autodidacte",
    period: "2025",
    status: "obtained",
    description: "Conteneurisation d'applications, Dockerfile, docker-compose et déploiement multi-services.",
    skills: ["Docker", "Compose", "Images", "Conteneurs"],
    category: "dev",
  },
]

export default function Certifications() {
  const { darkMode } = useTheme()
  const [hoveredCard, setHoveredCard] = useState(null)
  const [filter, setFilter] = useState('all')

  const accent      = darkMode ? '#722F37'              : '#5C1F28'
  const accentAlpha = darkMode ? 'rgba(114,47,55,0.10)' : 'rgba(92,31,40,0.08)'
  const accentBrd   = darkMode ? 'rgba(114,47,55,0.22)' : 'rgba(92,31,40,0.18)'
  const cardBg      = darkMode ? 'rgba(5,5,20,0.65)'    : 'rgba(255,255,255,0.85)'
  const sectionBg   = darkMode ? '#0A0A0A'              : '#FAF8F8'
  const textMuted   = darkMode ? '#8BA0B8'              : '#475569'
  const textTitle   = darkMode ? '#F1F5F9'              : '#0F172A'
  const glowColor1  = darkMode ? 'rgba(114,47,55,0.06)' : 'rgba(92,31,40,0.05)'
  const glowColor2  = darkMode ? 'rgba(114,47,55,0.04)' : 'rgba(92,31,40,0.03)'

  const filters = [
    { id: 'all', label: 'Toutes' },
    { id: 'dev', label: 'Développement' },
    { id: 'sec', label: 'Cybersécurité' },
  ]

  const filtered = filter === 'all'
    ? certificationsData
    : certificationsData.filter(c => c.category === filter)

  const stats = {
    total:    certificationsData.length,
    obtained: certificationsData.filter(c => c.status === 'obtained').length,
    dev:      certificationsData.filter(c => c.category === 'dev').length,
    sec:      certificationsData.filter(c => c.category === 'sec').length,
  }

  return (
    <section id="certifications" style={{
      padding: '7rem 0',
      background: sectionBg,
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.35s ease',
    }}>
      {/* Lueurs */}
      <div style={{
        position: 'absolute', top: '10%', right: '-10%',
        width: '40%', height: '50%',
        background: `radial-gradient(circle, ${glowColor1}, transparent)`,
        borderRadius: '50%', filter: 'blur(80px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', left: '-5%',
        width: '30%', height: '40%',
        background: `radial-gradient(circle, ${glowColor2}, transparent)`,
        borderRadius: '50%', filter: 'blur(80px)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', position: 'relative', zIndex: 2 }}>

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            background: accentAlpha, border: `1px solid ${accentBrd}`,
            padding: '0.5rem 1.5rem', borderRadius: '50px', marginBottom: '1.5rem',
          }}>
            <Award size={16} color={accent} />
            <span style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem',
              letterSpacing: '0.15em', color: accent, textTransform: 'uppercase',
            }}>Certifications</span>
          </div>

          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            color: textTitle, marginBottom: '1rem',
          }}>
            Mes <span style={{ color: accent }}>certifications</span>
          </h2>

          <p style={{
            fontFamily: 'DM Sans, sans-serif', fontSize: '1rem',
            color: textMuted, maxWidth: '600px', margin: '0 auto',
          }}>
            {stats.obtained} certifications obtenues couvrant le développement fullstack et la cybersécurité
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}
        >
          {[
            { label: 'Total',          value: stats.total,    color: accent,    icon: Award       },
            { label: 'Obtenues',       value: stats.obtained, color: '#4ADE80', icon: CircleCheck },
            { label: 'Développement',  value: stats.dev,      color: '#C9A84C', icon: Shield      },
            { label: 'Cybersécurité',  value: stats.sec,      color: '#8B5CF6', icon: Target      },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4, scale: 1.02 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.8rem',
                background: cardBg, backdropFilter: 'blur(12px)',
                padding: '0.8rem 1.5rem', borderRadius: '18px',
                border: `1px solid ${accentBrd}`,
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: '40px', height: '40px',
                background: `${stat.color}18`,
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <stat.icon size={20} color={stat.color} />
              </div>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.5rem', fontWeight: 700, color: stat.color, lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', color: textMuted }}>{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3rem', flexWrap: 'wrap' }}
        >
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              style={{
                padding: '0.5rem 1.3rem',
                background: filter === f.id ? accentAlpha : 'transparent',
                border: `1px solid ${filter === f.id ? accent : accentBrd}`,
                borderRadius: '40px',
                fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem',
                fontWeight: filter === f.id ? 600 : 400,
                color: filter === f.id ? accent : textMuted,
                cursor: 'pointer', transition: 'all 0.25s ease',
              }}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grille */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem', marginBottom: '3rem',
        }}>
          {filtered.map((cert, i) => {
            const status     = statusMap[cert.status]
            const StatusIcon = status.icon
            const isHovered  = hoveredCard === i

            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  background: cardBg, backdropFilter: 'blur(12px)',
                  borderRadius: '20px', padding: '1.4rem',
                  border: `1px solid ${isHovered ? accent : accentBrd}`,
                  transition: 'all 0.3s ease',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                }}
              >
                {/* Header carte */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.9rem' }}>
                  <div style={{
                    width: '50px', height: '50px',
                    background: `linear-gradient(135deg, ${status.color}22, ${status.color}08)`,
                    borderRadius: '14px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: `1px solid ${status.color}30`,
                  }}>
                    <Award size={24} color={status.color} />
                  </div>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.35rem',
                    padding: '0.22rem 0.7rem',
                    background: status.bg, borderRadius: '30px',
                    border: `1px solid ${status.border}`,
                  }}>
                    <StatusIcon size={11} color={status.color} />
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem', color: status.color }}>
                      {status.label}
                    </span>
                  </div>
                </div>

                <h3 style={{
                  fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem',
                  color: textTitle, marginBottom: '0.2rem',
                }}>{cert.name}</h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.6rem' }}>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: accent }}>{cert.issuer}</span>
                  <span style={{ width: '3px', height: '3px', background: textMuted, borderRadius: '50%' }} />
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.62rem', color: textMuted }}>{cert.period}</span>
                </div>

                <p style={{
                  fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem',
                  color: textMuted, lineHeight: 1.5, marginBottom: '0.9rem',
                }}>
                  {cert.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} style={{
                      fontFamily: 'JetBrains Mono, monospace', fontSize: '0.58rem',
                      padding: '0.18rem 0.55rem',
                      background: accentAlpha,
                      borderRadius: '10px', color: accent,
                      border: `1px solid ${accentBrd}`,
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Feuille de route */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            background: cardBg, backdropFilter: 'blur(12px)',
            borderRadius: '24px', padding: '2rem',
            border: `1px solid ${accentBrd}`,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', marginBottom: '1rem' }}>
            <TrendingUp size={18} color={accent} />
            <span style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem',
              letterSpacing: '0.1em', color: accent,
            }}>Prochains objectifs</span>
          </div>
          <p style={{
            textAlign: 'center', fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.85rem', color: textMuted, marginBottom: '1.2rem',
          }}>
            Certifications internationales visées d'ici fin 2026
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.8rem', flexWrap: 'wrap' }}>
            {['CEH', 'OSCP', 'CompTIA Security+', 'CISSP'].map((cert, i) => (
              <span key={i} style={{
                fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem',
                padding: '0.3rem 0.9rem',
                background: accentAlpha,
                borderRadius: '20px', color: accent,
                border: `1px solid ${accentBrd}`,
              }}>
                {cert}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
