import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/SweetBite-Bakery-Fresh-Cakes-Pastries-Sandwiches/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    cssCodeSplit: true,
    sourcemap: false,
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
