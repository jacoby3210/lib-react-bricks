import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {viteConsolePro} from 'vite-plugin-console-pro'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    viteConsolePro({exclude: ["node_modules"]}),
  ],
})
