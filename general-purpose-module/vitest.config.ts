import { defineConfig } from 'vite'
//import {test} from 'vitest'


// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: false,
    environment: 'jsdom'
  }
})
