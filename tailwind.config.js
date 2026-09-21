/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta exacta de la ilustración del usuario
        meadow: {
          navbar: '#85984e',   // Verde oliva del navbar
          card: '#cbd99e',     // Verde pistacho suave del card del héroe
          text: '#6c7c39',     // Verde oscuro del título "Descubriendo bit a bit"
          darkbtn: '#354212',  // Verde muy oscuro del botón "¿Qué más?"
          honey: '#e59828',    // Dorado miel del panal de abejas
          sky: '#bcdbf0',      // Azul acuarela del cielo
          ground: '#9cb567',   // Verde colinas
          light: '#f5f7eb',    // Fondo marfil suave
        },
        // Mapeo retrocompatible
        palette: {
          olive: '#85984e',
          amber: '#e59828',
          cream: '#cbd99e',
          sand: '#e1d5bf',
          espresso: '#354212',
        }
      },
      fontFamily: {
        serif: ['Young Serif', 'Fraunces', 'Georgia', 'serif'],
        display: ['Young Serif', 'Fraunces', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'equalizer': 'equalizer 1s ease-in-out infinite',
      },
      keyframes: {
        'equalizer': {
          '0%, 100%': { height: '6px' },
          '50%': { height: '18px' },
        }
      }
    },
  },
  plugins: [],
}
