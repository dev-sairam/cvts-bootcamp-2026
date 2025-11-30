import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/cvts-bootcamp-2026/",
  server: {
    port: 3000,
    open: true
  }
})
