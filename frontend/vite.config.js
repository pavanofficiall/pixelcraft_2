import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensures the base path is correct (use "/" for root-level deployment)
  build: {
    outDir: 'dist', // Output directory for build files
    sourcemap: true, // Helpful for debugging production builds
  },
  server: {
    port: 3000, // Local dev server port
    open: true, // Opens browser automatically during development
  },
});
