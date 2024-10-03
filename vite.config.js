import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import consolePro from 'vite-plugin-console-pro'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    consolePro({exclude: ["node_modules"]}),
  ],
})
