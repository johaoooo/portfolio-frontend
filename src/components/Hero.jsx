import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ArrowUpRight } from 'lucide-react'
import PhotoCard from './PhotoCard'

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-grid">
          
          {/* Gauche - Texte */}
          <div className="hero-content">
            <h2 className="hero-greeting">Bonjour, je suis</h2>
            <h1 className="hero-name">Joseph Dehazounde</h1>
            <p className="hero-description">
              Passionné de sécurité offensive &amp; défensive.
            </p>
            <div className="hero-buttons">
              <Link to="projects" smooth duration={500} className="hero-btn-primary">
                Voir les projets <ArrowUpRight size={14} />
              </Link>
              <Link to="contact" smooth duration={500} className="hero-btn-secondary">
                Me contacter
              </Link>
            </div>
          </div>
          
          {/* Droite - Photo + Compétences */}
          <div className="hero-right">
            <div className="hero-photo">
              <PhotoCard />
            </div>
            <div className="hero-skills">
              <span className="hero-skill">Pentesting</span>
              <span className="hero-skill-sep">•</span>
              <span className="hero-skill">DevOps</span>
              <span className="hero-skill-sep">•</span>
              <span className="hero-skill">IA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
