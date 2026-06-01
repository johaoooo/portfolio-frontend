import { useTheme } from '../../context/ThemeContext'
import { useTokens } from '../../theme/tokens'
import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, Tag, ArrowLeft, Sparkles } from 'lucide-react'
import blogPosts from '../../data/blogPosts'

export default function BlogPost() {
  const { id } = useParams()
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)
  
  const article = blogPosts.find(post => post.id === parseInt(id))

  if (!article) {
    return (
      <section style={{
        minHeight: '100vh',
        background: t.bg.page,
        padding: '120px 24px 80px',
        textAlign: 'center'
      }}>
        <h1 style={{ color: t.text.primary }}>Article non trouvé</h1>
        <Link to="/blog" style={{ color: t.text.accent }}>Retour au blog</Link>
      </section>
    )
  }

  return (
    <section style={{
      minHeight: '100vh',
      background: t.bg.page,
      padding: '120px 24px 80px',
      transition: 'background 0.3s'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Bouton retour */}
        <Link to="/blog" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          color: t.text.accent,
          textDecoration: 'none',
          marginBottom: '30px',
          fontSize: '0.9rem'
        }}>
          <ArrowLeft size={16} /> Retour aux articles
        </Link>

        {/* Catégorie */}
        <div style={{
          display: 'inline-block',
          background: t.badge.bg,
          color: t.text.accent,
          border: `1px solid ${t.border.accent}`,
          borderRadius: '20px',
          padding: '4px 12px',
          fontSize: '0.75rem',
          fontWeight: 600,
          marginBottom: '20px'
        }}>
          {article.category}
        </div>

        {/* Titre */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            color: t.text.primary,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            marginBottom: '20px',
            lineHeight: 1.2
          }}
        >
          {article.title}
        </motion.h1>

        {/* Métadonnées */}
        <div style={{
          display: 'flex',
          gap: '24px',
          marginBottom: '30px',
          flexWrap: 'wrap',
          paddingBottom: '20px',
          borderBottom: `1px solid ${t.border.default}`
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: t.text.secondary, fontSize: '0.85rem' }}>
            <Calendar size={16} />
            <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: t.text.secondary, fontSize: '0.85rem' }}>
            <Clock size={16} />
            <span>{article.readTime} min de lecture</span>
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}>
          {article.tags.map(tag => (
            <span key={tag} style={{
              background: t.badge.bg,
              color: t.badge.text,
              border: `1px solid ${t.border.accent}`,
              padding: '5px 12px',
              borderRadius: '20px',
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <Tag size={12} /> {tag}
            </span>
          ))}
        </div>

        {/* Contenu de l'article */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            color: t.text.primary,
            fontSize: '1rem',
            lineHeight: 1.8,
            '& h2': { color: t.text.accent, marginTop: '30px', marginBottom: '15px' },
            '& h3': { color: t.text.primary, marginTop: '25px', marginBottom: '10px' },
            '& p': { marginBottom: '20px' },
            '& ul, & ol': { marginBottom: '20px', paddingLeft: '20px' },
            '& li': { marginBottom: '8px' },
            '& code': { background: t.badge.bg, padding: '2px 6px', borderRadius: '4px', fontSize: '0.85rem' }
          }}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </section>
  )
}
