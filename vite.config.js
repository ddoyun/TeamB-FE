import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import basicSsl from '@vitejs/plugin-basic-ssl';
import dns from 'dns';
dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      { find: '@components', replacement: resolve(__dirname, 'src/components') },
      { find: '@styles', replacement: resolve(__dirname, 'src/styles') },
      { find: '@hooks', replacement: resolve(__dirname, 'src/Hooks') },
      { find: '@atom', replacement: resolve(__dirname, 'src/Atoms') },
      { find: '@api', replacement: resolve(__dirname, 'src/api') },
      { find: '@utils', replacement: resolve(__dirname, 'src/utils') },
    ],
  },
  server: { https: true, host: 'localhost' },
});
