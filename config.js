// ============================================
// CONFIGURACIÓN - MUNDIAL 2026 PREDICTOR
// ============================================

// Colores de Transformación ExO
const COLORS = {
  primary: {
    dark: '#1d3a5a',
    blue: '#2563a5'
  },
  accent: {
    teal: '#0f6e56',
    cyan: '#1d9e75',
    coral: '#d85a30',
    purple: '#7f77dd'
  },
  neutral: {
    light: '#f8f9fa',
    white: '#ffffff',
    border: '#e5e5e5'
  }
};

// Configuración de Supabase (opcional)
const SUPABASE_CONFIG = {
  url: import.meta.env.VITE_SUPABASE_URL || '',
  key: import.meta.env.VITE_SUPABASE_ANON_KEY || ''
};

// Sistema de puntos por fase
const POINTS_SYSTEM = {
  groups: 1,
  ro16: 2,
  quarters: 5,
  semis: 10,
  final: 20,
  '3rd': 5
};

// Total de partidos
const TOTAL_MATCHES = 88;

// Configuración de la app
const APP_CONFIG = {
  appName: 'Mundial 2026 Predictor',
  version: '2.0.0',
  author: 'Transformación ExO',
  startDate: '2026-06-11',
  endDate: '2026-07-19',
  maxPredictionScore: 128
};

// Export para módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COLORS, SUPABASE_CONFIG, POINTS_SYSTEM, TOTAL_MATCHES, APP_CONFIG };
}
