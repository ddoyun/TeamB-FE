import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '@components', replacement: resolve(__dirname, 'src/components') },
      { find: '@styles', replacement: resolve(__dirname, 'src/styles') },
      { find: '@hooks', replacement: resolve(__dirname, 'src/Hooks') },
      { find: '@atom', replacement: resolve(__dirname, 'src/Atoms') },
    ],
  },
});
