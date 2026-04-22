import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import { ArrowRight, FolderGit2, ShieldCheck, Code2, Award, Sparkles } from 'lucide-react'
import { Link } from 'react-scroll'
import { useTheme } from '../context/ThemeContext'
import { useState } from 'react'

export default function Projects() {
  const { darkMode } = useTheme()
  const [filter, setFilter] = useState('all')

  // Tokens
  const accent      = darkMode ? '#0000FF'              : '#191970'
  const accentAlpha = darkMode ? 'rgba(0,0,255,0.08)'   : 'rgba(25,25,112,0.08)'
  const accentBrd   = darkMode ? 'rgba(0,0,255,0.18)'   : 'rgba(25,25,112,0.18)'
  const sectionBg   = darkMode ? '#0A0A0A'              : '#F0F0FA'
  const cardBg      = darkMode ? 'rgba(5,5,20,0.65)'    : 'rgba(255,255,255,0.75)'
  const textMuted   = darkMode ? '#8BA0B8'              : '#475569'
  const textFaint   = darkMode ? '#4A6080'              : '#64748B'
  const lineTop     = darkMode ? 'rgba(0,0,255,0.25)'   : 'rgba(25,25,112,0.20)'
  const glowColor   = darkMode ? 'rgba(0,0,255,0.05)'   : 'rgba(25,25,112,0.06)'

  const stats = {
    total:        projects.length,
    secured:      projects.filter(p => p.security && p.security.length > 0).length,
    technologies: [...new Set(projects.flatMap(p => p.stack || []))].length,
  }

  const filters = [
    { id: 'all',      label: 'Tous',          icon: FolderGit2  },
    { id: 'security', label: 'Cybersécurité', icon: ShieldCheck },
    { id: 'fullstack', label: 'Fullstack',    icon: Code2        },
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : filter === 'security'
      ? projects.filter(p => p.security && p.security.length > 0)
      : projects

  return (
    <section id="projects" style={{
      padding: '7rem 0',
      background: sectionBg,
      position: 'relative',
      overflow: 'hidden',
      transition: 'background 0.35s ease',
    }}>

      {/* Ligne supérieure */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: `linear-gradient(90deg, transparent, ${lineTop}, transparent)`,
      }} />

      {/* Lueurs */}
      <div style={{
        position: 'absolute', top: '20%', right: '-5%',
        width: '30%', height: '40%',
        background: `radial-gradient(ellipse, ${glowColor}, transparent 70%)`,
        borderRadius: '50%', filter: 'blur(80px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-5%',
        width: '25%', height: '35%',
        background: `radial-gradient(ellipse, ${glowColor}, transparent 70%)`,
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
            background: accentAlpha,
            border: `1px solid ${accentBrd}`,
            padding: '0.5rem 1.5rem', borderRadius: '50px', marginBottom: '1.5rem',
          }}>
            <FolderGit2 size={16} color={accent} />
            <span style={{
              fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem',
              letterSpacing: '0.15em', color: accent, textTransform: 'uppercase',
            }}>Réalisations</span>
            <div style={{ width: '4px', height: '4px', background: accent, borderRadius: '50%', opacity: 0.5 }} />
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.65rem', color: accent }}>
              {stats.total} projets
            </span>
          </div>

          <h2 style={{
            fontFamily: 'Syne, sans-serif', fontWeight: 800,
            fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
            color: darkMode ? '#F1F5F9' : '#0F172A',
            marginBottom: '1rem',
          }}>
            Mes derniers <span style={{ color: accent }}>projets</span>
          </h2>

          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: textMuted, maxWidth: '580px', margin: '0 auto', lineHeight: 1.6 }}>
            Des solutions concrètes alliant développement robuste et sécurité intégrée
          </p>

          {/* Séparateur */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
            <div style={{ width: '40px', height: '2px', background: `linear-gradient(90deg, transparent, ${accent})` }} />
            <div style={{ width: '8px', height: '8px', background: accent, borderRadius: '50%', opacity: 0.6 }} />
            <div style={{ width: '40px', height: '2px', background: `linear-gradient(90deg, ${accent}, transparent)` }} />
          </div>
        </motion.div>

        {/* Mini stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}
        >
          {[
            { icon: ShieldCheck, label: 'Projets sécurisés', value: `${stats.secured}/${stats.total}`, color: accent,     desc: 'OWASP compliant',    rgb: darkMode ? '0,0,255' : '25,25,112' },
            { icon: Code2,       label: 'Technologies',      value: `${stats.technologies}+`,          color: '#C9A84C',  desc: 'stack moderne',      rgb: '201,168,76'  },
            { icon: Award,       label: 'Bonnes pratiques',  value: '100%',                            color: '#8B5CF6',  desc: 'sécurité by design', rgb: '139,92,246'  },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.02 }}
              style={{
                display: 'flex', alignItems: 'center', gap: '1rem',
                background: cardBg, backdropFilter: 'blur(12px)',
                padding: '0.8rem 1.8rem', borderRadius: '20px',
                border: `1px solid ${accentBrd}`,
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: '45px', height: '45px',
                background: `rgba(${stat.rgb}, 0.10)`,
                borderRadius: '14px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <stat.icon size={22} color={stat.color} />
              </div>
              <div>
                <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.6rem', fontWeight: 700, color: stat.color, lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', color: textMuted }}>{stat.label}</div>
                <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.55rem', color: textFaint }}>{stat.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}
        >
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.6rem 1.3rem',
                background: filter === f.id ? accentAlpha : 'transparent',
                border: `1px solid ${filter === f.id ? accent : accentBrd}`,
                borderRadius: '40px',
                fontFamily: 'DM Sans, sans-serif', fontSize: '0.8rem',
                fontWeight: filter === f.id ? 600 : 400,
                color: filter === f.id ? accent : textMuted,
                cursor: 'pointer', transition: 'all 0.3s ease',
              }}
            >
              <f.icon size={14} />
              <span>{f.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Grille projets */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
          gap: '2rem', marginBottom: '4rem',
        }}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: 'center' }}
        >
          <div style={{
            background: cardBg, backdropFilter: 'blur(12px)',
            borderRadius: '28px', padding: '2.5rem',
            border: `1px solid ${accentBrd}`,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Sparkles size={20} color={accent} />
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.7rem', letterSpacing: '0.1em', color: accent }}>
                PRÊT À COLLABORER ?
              </span>
            </div>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: textMuted, marginBottom: '1.5rem' }}>
              Vous avez un projet en tête ? Discutons de vos besoins en toute sécurité.
            </p>
            <Link to="contact" smooth duration={600} offset={-70}>
              <button
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                  background: accent,
                  border: 'none', padding: '0.9rem 2.2rem', borderRadius: '50px',
                  fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', fontWeight: 600,
                  color: '#FFFFFF', cursor: 'pointer', transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.opacity = '.88' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)';    e.currentTarget.style.opacity = '1'   }}
              >
                Discutons de votre projet
                <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
