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
      accent:    '#3B82F6',  // Bleu dominant
    },
    border: {
      default: 'rgba(59,130,246,0.15)',
      accent:  'rgba(59,130,246,0.25)',
    },
    badge: {
      bg:   'rgba(59,130,246,0.10)',
      text: '#3B82F6',
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
      accent:    '#3B82F6',  // Bleu dominant
    },
    border: {
      default: 'rgba(59,130,246,0.15)',
      accent:  'rgba(59,130,246,0.20)',
    },
    badge: {
      bg:   'rgba(59,130,246,0.09)',
      text: '#3B82F6',
    },
  },
}

export const useTokens = (darkMode) => darkMode ? tokens.dark : tokens.light
