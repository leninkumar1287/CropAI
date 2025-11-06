/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kada: {
          primary: '#B8860B',    // Main brand color
          secondary: '#DAA520',  // Secondary elements
          accent: '#F4BB44',     // High contrast accent
          dark: '#8B6914',       // Hover states
          light: '#F9E076',      // Light accents
          green: '#2E8B57',      // Success states
          orange: '#E67E22',     // Warning states
          blue: '#3498DB',       // Information
          purple: '#8E44AD',     // Special highlights
        },
        gray: {
          50: '#F9FAFB',        // Light backgrounds
          100: '#F3F4F6',       // Subtle backgrounds
          200: '#E5E7EB',       // Borders, dividers
          600: '#4B5563',       // Secondary text
          900: '#111827',       // Primary text
        }
      },
      fontFamily: {
        'unna': ['Unna', 'serif'],     // Primary font
        'inter': ['Inter', 'sans-serif'], // Dashboard font
      },
      backgroundImage: {
        'kada-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #E5D2A2 100%)',
        'kada-hero': 'linear-gradient(135deg, #F9E076 0%, #DAA520 50%, #B8860B 100%)',
      },
      boxShadow: {
        'kada': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'kada-lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
}
