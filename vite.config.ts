import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
// https://vitejs.dev/config/
export default defineConfig({
  base: "/CI-CD/",
  plugins: [react(),tsconfigPaths()],
  build: {
    outDir: "build",
  },
  server: {
    port: 3000
  },
})
