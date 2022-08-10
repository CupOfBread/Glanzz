import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import externalGlobals from 'rollup-plugin-external-globals'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      external: ['vue','vueRouter','axios','vuex'],
      plugins: [
        externalGlobals({
          vue: 'Vue',
          vueRouter: "VueRouter",
          axios: "axios",
          vuex: "Vuex",
        }),
      ],
    },
  },
})
