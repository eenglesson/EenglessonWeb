/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBlack: '#000000',
        primaryWhite: '#FFFFFF',
        dark70: '#666666',
        dark50: '#969696',
        grey30: '#CCCCCC',
        grey20: '#E3E3E3',
        grey05: '#F0F0F0',
        customLight: 'rgba(241, 241, 241, 0.9)',
      },
      fontSize: {
        display: ['64px', '1.2'],
        h1: ['40px', '1.4'],
        h2: ['32px', '1.4'],
        h3: ['24px', '1.4'],
        h4: ['18px', '1.4'],
        bodyDefault: ['16px', '1.4'],
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      keyframes: {
        // Animation for the first line when opening
        line1Open: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '30%': { transform: 'translateY(4px) rotate(0deg)' }, // Translate down
          '100%': { transform: 'translateY(4px) rotate(-45deg)' }, // Rotate
        },
        // Animation for the second line when opening
        line2Open: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '30%': { transform: 'translateY(-4px) rotate(0deg)' }, // Translate up
          '100%': { transform: 'translateY(-4px) rotate(45deg)' }, // Rotate
        },
        // Animation for the first line when closing
        line1Close: {
          '0%': { transform: 'translateY(4px) rotate(-45deg)' },
          '40%': { transform: 'translateY(4px) rotate(0deg)' }, // Rotate back
          '100%': { transform: 'translateY(0) rotate(0deg)' }, // Translate back
        },
        // Animation for the second line when closing
        line2Close: {
          '0%': { transform: 'translateY(-4px) rotate(45deg)' },
          '40%': { transform: 'translateY(-4px) rotate(0deg)' }, // Rotate back
          '100%': { transform: 'translateY(0) rotate(0deg)' }, // Translate back
        },
      },
      animation: {
        line1Open: 'line1Open 0.5s forwards',
        line2Open: 'line2Open 0.5s forwards',
        line1Close: 'line1Close 0.5s forwards',
        line2Close: 'line2Close 0.5s forwards',
      },
    },
  },
  plugins: [],
};
