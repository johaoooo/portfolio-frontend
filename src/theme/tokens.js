export const tokens = {
  dark: {
    bg: {
      page:    '#05080F',
      surface: 'rgba(255,255,255,0.03)',
      nav:     'rgba(255,255,255,0.04)',
    },
    text: {
      primary:   '#E2E8F0',
      secondary:  '#94A3B8',
      accent:    '#10B981',  // Vert émeraude
    },
    border: {
      default: 'rgba(16,185,129,0.15)',
      accent:  'rgba(16,185,129,0.25)',
    },
    badge: {
      bg:   'rgba(16,185,129,0.10)',
      text: '#10B981',
    },
  },
  light: {
    bg: {
      page:    '#F8FAFC',
      surface: '#FFFFFF',
      nav:     '#FFFFFF',
    },
    text: {
      primary:   '#1E293B',
      secondary:  '#475569',
      accent:    '#059669',  // Vert plus soutenu pour le mode clair
    },
    border: {
      default: 'rgba(5,150,105,0.2)',
      accent:  'rgba(5,150,105,0.3)',
    },
    badge: {
      bg:   'rgba(5,150,105,0.12)',
      text: '#059669',
    },
  },
}

export const useTokens = (darkMode) => darkMode ? tokens.dark : tokens.light
