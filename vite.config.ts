import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://mhowitz.com/',
  plugins: [react()],
  publicDir: 'public',
})
