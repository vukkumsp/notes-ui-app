import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/notes-ui-app/', //this is required for deployment on GitHub Pages without a custom domain
  plugins: [react()],
})
