module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: () => ({
        rme: "url('./src/assets/images/home-page-rme.png')",
        smartlink: "url('/src/assets/images/smartowner.png')"
      })
    }
  },
  plugins: []
};
