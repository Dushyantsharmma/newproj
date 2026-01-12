import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('lucide-react') || id.includes('react-icons')) return 'icons';
          if (id.includes('framer-motion')) return 'motion';
          if (id.includes('react-router-dom')) return 'router';
        },
      },
    },
  },
  // plugins: [react(), splitVendorChunkPlugin()],
})
