import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { FolderGit2, Sparkles, Code, Shield, Cloud, Brain } from 'lucide-react'
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
    title: 'Saveurs d\'Agojiés',
    description: 'Plateforme culinaire et e-boutique de spécialités gastronomiques locales',
    tech: ['React', 'Node.js'],
    link: 'https://saveurs-d-agojies.vercel.app/',
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
    link: 'https://afishop-y9ww.vercel.app/',
    github: 'https://github.com/johaoooo'
  }
]

export default function Projects() {
  const t = useTokens()

  return (
    <section id="projects" style={{
      background: t.bg.page,
      padding: '80px 24px',
      transition: 'background 0.3s',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        
        {/* Titre dynamique avec icônes */}
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
            Projets
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
              fontSize: '0.95rem',
              maxWidth: '600px',
              margin: '16px auto 0'
            }}
          >
            Découvrez mes réalisations récentes
          </motion.p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
