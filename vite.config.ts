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
      external: ['vue', 'vueRouter', 'axios', 'vue-demi', 'pinia'],
      plugins: [
        externalGlobals({
          vue: 'Vue',
          vueRouter: 'VueRouter',
          axios: 'Axios',
          'vue-demi': 'VueDemi',
          pinia: 'Pinia',
        }),
      ],
    },
  },
})
