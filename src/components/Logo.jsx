import { useTokens } from '../theme/tokens'
import { motion } from 'framer-motion'

export default function Logo({ size = 40, animated = true }) {
  const t = useTokens()

  return (
    <motion.div
      whileHover={animated ? { scale: 1.05 } : {}}
      style={{
        width: size,
        height: size,
        borderRadius: '12px',
        background: `linear-gradient(135deg, ${t.text.accent}, #059669)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#05080F',
        fontWeight: 900,
        fontSize: size * 0.45,
        letterSpacing: '-0.5px',
        boxShadow: '0 4px 14px rgba(16, 185, 129, 0.35)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        cursor: 'pointer'
      }}
    >
      JD
    </motion.div>
  )
}

