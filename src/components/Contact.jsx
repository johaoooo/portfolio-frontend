import { useTheme } from '../context/ThemeContext'
import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle, Sparkles, Code, CheckCircle, Loader } from 'lucide-react'

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Contact() {
  const { darkMode } = useTheme()
  const t = useTokens()
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    const form = e.target
    const data = new FormData(form)
    try {
      await fetch('https://formspree.io/f/xpwzbkqw', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
      setSent(true)
      form.reset()
    } catch {
      alert('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

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
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}
          >
            <MessageCircle size={28} style={{ color: t.text.accent }} />
            <h2 style={{
              color: t.text.primary,
              fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
              fontWeight: 700,
              margin: 0,
              display: 'inline-block'
            }}>
              Contact
            </h2>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles size={28} style={{ color: t.text.accent }} />
            </motion.div>
          </motion.div>
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
            N'hésitez pas à me contacter pour toute collaboration ou opportunité
          </motion.p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          
          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            style={{
              background: t.bg.surface,
              border: `1px solid ${t.border.default}`,
              borderRadius: '20px',
              padding: '28px',
              transition: 'all 0.3s ease'
            }}
          >
            <h3 style={{ color: t.text.primary, fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px' }}>
              Envoyez-moi un message
            </h3>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '40px 20px' }}
              >
                <CheckCircle size={48} style={{ color: t.text.accent, marginBottom: '16px' }} />
                <p style={{ color: t.text.primary, fontSize: '1.1rem', fontWeight: 600 }}>Message envoyé !</p>
                <p style={{ color: t.text.secondary, fontSize: '0.9rem' }}>Merci, je vous répondrai dans les plus brefs délais.</p>
                <button onClick={() => setSent(false)} style={{
                  marginTop: '16px',
                  background: 'none',
                  border: `1px solid ${t.text.accent}`,
                  color: t.text.accent,
                  padding: '8px 20px',
                  borderRadius: '40px',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: 500
                }}>
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '16px' }}>
                  <input type="text" name="name" required placeholder="Votre nom" style={{
                    width: '100%', padding: '12px 16px',
                    background: t.bg.page, border: `1px solid ${t.border.default}`,
                    borderRadius: '12px', color: t.text.primary, fontSize: '0.9rem',
                    outline: 'none', fontFamily: 'inherit',
                    transition: 'border-color 0.2s'
                  }}
                    onFocus={e => e.target.style.borderColor = t.text.accent}
                    onBlur={e => e.target.style.borderColor = t.border.default}
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <input type="email" name="email" required placeholder="Votre email" style={{
                    width: '100%', padding: '12px 16px',
                    background: t.bg.page, border: `1px solid ${t.border.default}`,
                    borderRadius: '12px', color: t.text.primary, fontSize: '0.9rem',
                    outline: 'none', fontFamily: 'inherit',
                    transition: 'border-color 0.2s'
                  }}
                    onFocus={e => e.target.style.borderColor = t.text.accent}
                    onBlur={e => e.target.style.borderColor = t.border.default}
                  />
                </div>
                <div style={{ marginBottom: '24px' }}>
                  <textarea name="message" required rows={4} placeholder="Votre message" style={{
                    width: '100%', padding: '12px 16px',
                    background: t.bg.page, border: `1px solid ${t.border.default}`,
                    borderRadius: '12px', color: t.text.primary, fontSize: '0.9rem',
                    outline: 'none', resize: 'vertical', fontFamily: 'inherit',
                    transition: 'border-color 0.2s'
                  }}
                    onFocus={e => e.target.style.borderColor = t.text.accent}
                    onBlur={e => e.target.style.borderColor = t.border.default}
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    background: loading ? t.text.secondary : t.text.accent,
                    color: darkMode ? '#05080F' : '#fff',
                    padding: '12px 24px',
                    border: 'none',
                    borderRadius: '40px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    opacity: loading ? 0.7 : 1
                  }}
                >
                  {loading ? <Loader size={18} className="spin" /> : <Send size={18} />}
                  {loading ? 'Envoi...' : 'Envoyer'}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Infos de contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <motion.div
              whileHover={{ y: -5 }}
              style={{
                background: t.bg.surface,
                border: `1px solid ${t.border.default}`,
                borderRadius: '20px',
                padding: '28px',
                transition: 'all 0.3s ease'
              }}
            >
              <h3 style={{ color: t.text.primary, fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px' }}>Coordonnées</h3>
              {contactInfo.map((info, index) => (
                <div key={info.label} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: index < contactInfo.length - 1 ? '20px' : 0 }}>
                  <div style={{ width: '40px', height: '40px', background: t.badge.bg, border: `1px solid ${t.border.accent}`, borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: t.text.accent }}>
                    {info.icon}
                  </div>
                  <div>
                    <p style={{ color: t.text.secondary, fontSize: '0.7rem', margin: 0 }}>{info.label}</p>
                    {info.link ? (
                      <a href={info.link} style={{ color: t.text.primary, textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>{info.value}</a>
                    ) : (
                      <p style={{ color: t.text.primary, fontSize: '0.9rem', fontWeight: 500, margin: 0 }}>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              style={{
                background: t.bg.surface,
                border: `1px solid ${t.border.default}`,
                borderRadius: '20px',
                padding: '28px',
                transition: 'all 0.3s ease'
              }}
            >
              <h3 style={{ color: t.text.primary, fontSize: '1.25rem', fontWeight: 600, marginBottom: '24px' }}>Réseaux sociaux</h3>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -3 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: t.badge.bg,
                      border: `1px solid ${t.border.accent}`,
                      borderRadius: '40px',
                      padding: '8px 16px',
                      color: t.text.accent,
                      textDecoration: 'none',
                      fontSize: '0.85rem',
                      fontWeight: 500
                    }}
                  >
                    {social.icon} {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
