import { defineConfig } from 'vite'
import loadCssModuleFile from 'vite-plugin-load-css-module'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    loadCssModuleFile({
      include: (id) => id.includes('.less') || id.includes('.scss'),
    }),
  ],
})
