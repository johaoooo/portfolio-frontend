import { useTokens } from '../../theme/tokens'
import { motion } from 'framer-motion'
import { Newspaper, Sparkles } from 'lucide-react'
import ArticleCard from '../../components/blog/ArticleCard'
import blogPosts from '../../data/blogPosts'

export default function BlogList() {
  const t = useTokens()

  return (
    <section style={{
      minHeight: '100vh',
      background: t.bg.page,
      padding: '120px 20px 80px',
      transition: 'background 0.3s'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Titre de la page */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}
          >
            <Newspaper size={32} style={{ color: t.text.accent }} />
            <h1 style={{
              color: t.text.primary,
              fontSize: 'clamp(2rem, 5vw, 2.8rem)',
              fontWeight: 700,
              margin: 0
            }}>
              Blog
            </h1>
            <Sparkles size={32} style={{ color: t.text.accent }} />
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              height: '3px',
              background: t.text.accent,
              borderRadius: '2px',
              margin: '16px auto 0'
            }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            style={{
              color: t.text.secondary,
              fontSize: '1rem',
              maxWidth: '600px',
              margin: '20px auto 0',
              padding: '0 16px'
            }}
          >
            Articles sur la cybersécurité, le développement et les technologies
          </motion.p>
        </motion.div>

        {/* Grille des articles - responsive */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px',
          padding: '0 16px'
        }}>
          {blogPosts.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          section > div > div {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
        }
        
        @media (max-width: 768px) {
          section {
            padding: 100px 16px 60px !important;
          }
          section > div > div {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
            padding: 0 !important;
          }
        }
        
        @media (max-width: 480px) {
          section {
            padding: 90px 12px 40px !important;
          }
        }
      `}</style>
    </section>
  )
}
