/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A365D',
        secondary: '#2A628F',
        accent: '#FFC107',
        danger: '#DC3545',
        success: '#28A745',
        warning: '#FF9800',
        'neutral-100': '#F8F9FA',
        'neutral-200': '#E9ECEF',
        'neutral-300': '#DEE2E6',
        'neutral-400': '#CED4DA',
        'neutral-500': '#ADB5BD',
        'neutral-600': '#6C757D',
        'neutral-700': '#495057',
        'neutral-800': '#343A40',
        'neutral-900': '#212529',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
};