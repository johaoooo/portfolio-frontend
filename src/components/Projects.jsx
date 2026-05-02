import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { FolderGit2, Sparkles } from 'lucide-react'
import ProjectCard from './ProjectCard'

const PROJECTS = [
  {
    title: 'CNIB Platform',
    description: 'Plateforme de cours en ligne',
    tech: ['React', 'Django'],
    link: 'https://cnib-platform-c5ru.vercel.app/',
    github: 'https://github.com/johaoooo'
  },
  {
    title: 'Xobo Ticket',
    description: 'Plateforme de réservation de tickets pour stands d\'exposition',
    tech: ['React', 'Django'],
    link: 'https://xobo-ticket.vercel.app/',
    github: 'https://github.com/johaoooo'
  },
  {
    title: 'Gold Platform (Golden Invest)',
    description: 'Plateforme de mise en relation entre investisseurs et innovateurs',
    tech: ['Next.js', 'Django'],
    link: 'https://gold-platform-ecru.vercel.app/',
    github: 'https://github.com/johaoooo'
  },
  {
    title: 'AgroTrust',
    description: 'Plateforme qui met en relation les agriculteurs avec les acheteurs',
    tech: ['React', 'Django'],
    link: 'https://agrotrust-two.vercel.app/',
    github: 'https://github.com/johaoooo'
  },
  {
    title: 'MacBenin',
    description: 'Plateforme e-commerce d\'artisanat',
    tech: ['React', 'Django'],
    link: 'https://macbenin-frontend.vercel.app/',
    github: 'https://github.com/johaoooo'
  }
]

export default function Projects() {
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)

  return (
    <section id="projects" style={{
      background: t.bg.page, padding: '80px 24px',
      transition: 'background 0.3s',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <FolderGit2 size={28} style={{ color: t.text.accent }} />
            <h2 style={{ color: t.text.primary, fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, margin: 0 }}>
              Projets
            </h2>
            <Sparkles size={28} style={{ color: t.text.accent }} />
          </div>
          <p style={{ color: t.text.secondary, fontSize: '1rem', maxWidth: '600px', margin: '0 auto' }}>
            Découvrez mes réalisations récentes
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
