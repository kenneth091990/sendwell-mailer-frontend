import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "",
  // root: 'src',
  build: {
    outDir: '/var/www/html/staging-mailer',
    emptyOutDir: true,
  },
  server: {
    host: true,
    port: 3500
  },
  preview: {
    host: true,
    port: 3500,
  },
})
