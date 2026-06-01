import { useTheme } from '../../context/ThemeContext'
import { useTokens } from '../../theme/tokens'
import { motion } from 'framer-motion'
import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ArticleCard({ article }) {
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      style={{
        background: t.bg.surface,
        border: `1px solid ${t.border.default}`,
        borderRadius: '20px',
        padding: '24px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Catégorie */}
      <div style={{
        display: 'inline-block',
        background: t.badge.bg,
        color: t.text.accent,
        border: `1px solid ${t.border.accent}`,
        borderRadius: '20px',
        padding: '4px 12px',
        fontSize: '0.7rem',
        fontWeight: 600,
        marginBottom: '16px',
        alignSelf: 'flex-start'
      }}>
        {article.category}
      </div>

      {/* Titre */}
      <h3 style={{
        color: t.text.primary,
        fontSize: '1.25rem',
        fontWeight: 700,
        marginBottom: '12px',
        lineHeight: 1.3
      }}>
        {article.title}
      </h3>

      {/* Extrait */}
      <p style={{
        color: t.text.secondary,
        fontSize: '0.9rem',
        lineHeight: 1.5,
        marginBottom: '16px',
        flex: 1
      }}>
        {article.excerpt}
      </p>

      {/* Métadonnées */}
      <div style={{
        display: 'flex',
        gap: '16px',
        marginBottom: '16px',
        flexWrap: 'wrap',
        borderTop: `1px solid ${t.border.default}`,
        paddingTop: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: t.text.secondary, fontSize: '0.7rem' }}>
          <Calendar size={12} />
          <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: t.text.secondary, fontSize: '0.7rem' }}>
          <Clock size={12} />
          <span>{article.readTime} min de lecture</span>
        </div>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
        {article.tags.slice(0, 3).map(tag => (
          <span key={tag} style={{
            background: t.badge.bg,
            color: t.badge.text,
            border: `1px solid ${t.border.accent}`,
            padding: '3px 10px',
            borderRadius: '20px',
            fontSize: '0.65rem',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <Tag size={10} /> {tag}
          </span>
        ))}
      </div>

      {/* Lire plus */}
      <Link 
        to={`/blog/${article.id}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          color: t.text.accent,
          textDecoration: 'none',
          fontSize: '0.85rem',
          fontWeight: 600,
          marginTop: 'auto'
        }}
      >
        Lire l'article <ArrowRight size={14} />
      </Link>
    </motion.article>
  )
}
