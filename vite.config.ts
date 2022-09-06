import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import externalGlobals from 'rollup-plugin-external-globals'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
  },
  build: {
    rollupOptions: {
      external: [
        'vue',
        'vue-router',
        'axios',
        'vue-demi',
        'pinia',
        'marked',
        'highlight.js',
      ],
      plugins: [
        externalGlobals({
          vue: 'Vue',
          'vue-router': 'VueRouter',
          axios: 'axios',
          'vue-demi': 'VueDemi',
          pinia: 'Pinia',
          marked: 'marked',
          'highlight.js': 'hljs',
        }),
      ],
    },
  },
})
