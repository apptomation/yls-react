/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Tech Blue
        'primary': '#1E40AF', // Deep tech blue
        'primary-50': '#EFF6FF',
        'primary-100': '#DBEAFE',
        'primary-500': '#3B82F6',
        'primary-700': '#1D4ED8',
        'primary-900': '#1E3A8A',

        // Secondary Colors - Professional Gray
        'secondary': '#64748B',
        'secondary-100': '#F1F5F9',
        'secondary-200': '#E2E8F0',
        'secondary-300': '#CBD5E1',
        'secondary-600': '#475569',
        'secondary-700': '#334155',

        // Accent Colors - Innovation Cyan
        'accent': '#06B6D4',
        'accent-100': '#CFFAFE',
        'accent-500': '#06B6D4',
        'accent-600': '#0891B2',

        // Background Colors
        'background': '#FAFAFA',
        'surface': '#FFFFFF',

        // Text Colors
        'text-primary': '#1E293B',
        'text-secondary': '#64748B',

        // Status Colors
        'success': '#059669',
        'success-100': '#D1FAE5',
        'success-500': '#10B981',

        'warning': '#D97706',
        'warning-100': '#FEF3C7',
        'warning-500': '#F59E0B',

        'error': '#DC2626',
        'error-100': '#FEE2E2',
        'error-500': '#EF4444',

        // Border Colors
        'border': '#E2E8F0',
        'border-focus': '#1E40AF',
      },
      fontFamily: {
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'caption': ['Inter', 'system-ui', 'sans-serif'],
        'data': ['JetBrains Mono', 'Consolas', 'Monaco', 'monospace'],
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      borderRadius: {
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'skeleton': 'skeleton-loading 1.5s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        'skeleton-loading': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'slideUp': {
          'from': { transform: 'translateY(100px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        'fadeIn': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-tech': 'linear-gradient(135deg, #1E40AF 0%, #06B6D4 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1E293B 0%, #334155 100%)',
      },
      boxShadow: {
        'tech': '0 10px 40px -10px rgba(30, 64, 175, 0.3)',
        'glow': '0 0 30px rgba(6, 182, 212, 0.3)',
        'elevation-1': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'elevation-2': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'elevation-3': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
