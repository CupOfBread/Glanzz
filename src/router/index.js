import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/layout'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: () => import('@/views/Home'),
        meta: { title: '首页', icon: 'tachometer-alt', requireAuth: true },
      },
      {
        path: '/about',
        component: Layout,
        children: [
          {
            path: '/about',
            name: 'about',
            requireAuth: true,
            component: () => import('@/views/About'),
          },
        ],
      },
    ],
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// 挂载路由导航拦截器
router.beforeEach((to, from, next) => {

  if (to.meta.title) {
    document.title = to.meta.title + ' - 面包房的小黑屋'
  }
  // to：将要访问的路径
  // form：从哪个路径跳转而来
  // next：放行

    return next()
  
})

router.afterEach(() => {
  // 保持滚动条在最顶部
  window.scrollTo(0, 0)
})

export default router
