import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/sprint3-front-end/',
  plugins: [react()],
})
