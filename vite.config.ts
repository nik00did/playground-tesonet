import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      core: path.resolve(__dirname, './src/core'),
    },
  },
  plugins: [react(), tsconfigPaths()],
})
