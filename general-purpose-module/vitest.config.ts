//import { defineConfig } from 'vite'
//import {test} from 'vitest'
import { defineConfig } from 'vitest/dist/config'


// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: false,
    environment: 'jsdom'
  }
})
