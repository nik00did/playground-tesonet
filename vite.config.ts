import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      core: path.resolve(__dirname, './src/core'),
      uiKit: path.resolve(__dirname, './src/uiKit'),
    },
  },
  plugins: [react(), tsconfigPaths(), tailwindcss()],
})
