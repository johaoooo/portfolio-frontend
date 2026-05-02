import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageCircle, Sparkles, Code } from 'lucide-react'

// Icône LinkedIn personnalisée (car lucide-react ne l'exporte pas correctement)
const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Contact() {
  const { darkMode } = useTheme()
  const t = useTokens(darkMode)

  const contactInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: 'josephdehazounde@gmail.com', link: 'mailto:josephdehazounde@gmail.com' },
    { icon: <Phone size={20} />, label: 'Téléphone', value: '01 62 10 86 94', link: 'tel:+33162108694' },
    { icon: <MapPin size={20} />, label: 'Localisation', value: 'Porto-Novo, Bénin', link: null }
  ]

  const socialLinks = [
    { icon: <Code size={20} />, name: 'GitHub', url: 'https://github.com/johaoooo' },
    { icon: <LinkedinIcon />, name: 'LinkedIn', url: 'https://linkedin.com/in/dehazounde-joseph' }
  ]

  return (
    <section id="contact" style={{
      background: t.bg.page,
      padding: '80px 24px',
      transition: 'background 0.3s'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <MessageCircle size={28} style={{ color: t.text.accent }} />
            <h2 style={{ color: t.text.primary, fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, margin: 0 }}>
              Contact
            </h2>
            <Sparkles size={28} style={{ color: t.text.accent }} />
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ background: t.bg.surface, border: `1px solid ${t.border.default}`, borderRadius: '16px', padding: '28px' }}
          >
            <h3 style={{ color: t.text.primary, fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px' }}>
              Envoyez-moi un message
            </h3>
            <form action="#" method="POST">
              <div style={{ marginBottom: '16px' }}>
                <input type="text" placeholder="Votre nom" style={{ width: '100%', padding: '12px 16px', background: t.bg.page, border: `1px solid ${t.border.default}`, borderRadius: '8px', color: t.text.primary, fontSize: '0.9rem', outline: 'none' }} />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <input type="email" placeholder="Votre email" style={{ width: '100%', padding: '12px 16px', background: t.bg.page, border: `1px solid ${t.border.default}`, borderRadius: '8px', color: t.text.primary, fontSize: '0.9rem', outline: 'none' }} />
              </div>
              <div style={{ marginBottom: '24px' }}>
                <textarea rows={4} placeholder="Votre message" style={{ width: '100%', padding: '12px 16px', background: t.bg.page, border: `1px solid ${t.border.default}`, borderRadius: '8px', color: t.text.primary, fontSize: '0.9rem', outline: 'none', resize: 'vertical', fontFamily: 'inherit' }} />
              </div>
              <button type="submit" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: t.text.accent, color: darkMode ? '#05080F' : '#fff', padding: '12px 24px', border: 'none', borderRadius: '8px', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer' }}>
                <Send size={18} /> Envoyer
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div style={{ background: t.bg.surface, border: `1px solid ${t.border.default}`, borderRadius: '16px', padding: '28px' }}>
              <h3 style={{ color: t.text.primary, fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px' }}>Coordonnées</h3>
              {contactInfo.map((info, index) => (
                <div key={info.label} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: index < contactInfo.length - 1 ? '20px' : 0 }}>
                  <div style={{ width: '40px', height: '40px', background: t.badge.bg, border: `1px solid ${t.border.accent}`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.text.accent }}>{info.icon}</div>
                  <div>
                    <p style={{ color: t.text.secondary, fontSize: '0.7rem', margin: 0 }}>{info.label}</p>
                    {info.link ? <a href={info.link} style={{ color: t.text.primary, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>{info.value}</a> : <p style={{ color: t.text.primary, fontSize: '0.9rem', fontWeight: 500, margin: 0 }}>{info.value}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: t.bg.surface, border: `1px solid ${t.border.default}`, borderRadius: '16px', padding: '28px' }}>
              <h3 style={{ color: t.text.primary, fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px' }}>Réseaux sociaux</h3>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: t.badge.bg, border: `1px solid ${t.border.accent}`, borderRadius: '30px', padding: '8px 16px', color: t.text.accent, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500 }}>
                    {social.icon} {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
