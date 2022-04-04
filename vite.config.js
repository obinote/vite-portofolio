import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/vite-portofolio/',
  resolve: {
    alias: {
      '@css': path.resolve(__dirname, './src/assets/style')
    }
  },
  plugins: [react()]
});
