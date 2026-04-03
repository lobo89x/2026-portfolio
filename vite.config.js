import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Custom domain / root hosting: VITE_BASE_PATH=/ in CI. Local dev defaults to '/'.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH ?? '/',
}));
