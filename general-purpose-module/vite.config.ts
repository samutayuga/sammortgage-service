import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve("src",'src/components/index.jsx'),
      name: 'general-purpose-module',
      fileName: (format)=>`general-purpose-module.${format}.js`
    },
    rollupOptions: {
      external: ['react','react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },
  plugins: [react()],
})
