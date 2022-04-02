module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: () => ({
        rme: "url('./src/assets/images/home-page-rme.png')",
        smartlink: "url('/src/assets/images/smartowner.png')"
      }),
      animation: {
        blob: 'blob 5s infinite'
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)'
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.2)'
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.8)'
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)'
          }
        }
      }
    }
  },
  plugins: []
};
