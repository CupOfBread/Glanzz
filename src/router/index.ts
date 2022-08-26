import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    document.documentElement.scrollTop = 0
    if (to.meta.title) {
      document.title = to.meta.title + ' - Glanzz'
    } else {
      document.title = 'Glanzz'
    }
  },
  routes,
})

export default router
