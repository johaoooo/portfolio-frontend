import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import ProjectCard from './ProjectCard'

// Icône GitHub personnalisée
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

const projects = [
  {
    title: 'Plateforme de Pentest',
    description: 'Outil automatisé de tests d\'intrusion avec rapports détaillés',
    tech: ['Python', 'Docker', 'Nmap'],
    github: 'https://github.com/johaoooo/pentest-platform',
    demo: '#',
    image: '🔒'
  },
  {
    title: 'Dashboard DevOps',
    description: 'Interface de monitoring et déploiement continu pour infrastructures cloud',
    tech: ['React', 'Node.js', 'Kubernetes'],
    github: 'https://github.com/johaoooo/devops-dashboard',
    demo: '#',
    image: '📊'
  },
  {
    title: 'Assistant IA',
    description: 'Chatbot intelligent pour l\'analyse de logs de sécurité',
    tech: ['Python', 'TensorFlow', 'FastAPI'],
    github: 'https://github.com/johaoooo/ai-assistant',
    demo: '#',
    image: '🤖'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.h2 
          className="projects-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Mes Derniers Projets
        </motion.h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          padding: 5rem 1.5rem;
          background: #05080F;
        }

        .projects-container {
          max-width: 1160px;
          margin: 0 auto;
        }

        .projects-title {
          text-align: center;
          font-size: clamp(1.8rem, 5vw, 2.5rem);
          font-weight: 700;
          color: #E2E8F0;
          margin-bottom: 3rem;
          position: relative;
        }

        .projects-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: #7CB9E8;
          border-radius: 2px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 3rem 1rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .projects-section {
            padding: 2rem 0.8rem;
          }

          .projects-grid {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  )
}
