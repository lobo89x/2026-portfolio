import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project site: match repo name. Root site: VITE_BASE_PATH=/ npm run build
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH ?? (command === 'build' ? '/2026-portfolio/' : '/'),
}));
