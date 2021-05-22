import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layout'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Index',
        component: () => import('@/views/index'),
        meta: { title: '首页', icon: 'tachometer-alt', requireAuth: true },
      }
    ],
  },
  {
    path: '/a',
    component: Layout,
    redirect:'/a/none',
    children: [
      {
        path: '/a/:id',
        name: 'Article',
        requireAuth: true,
        component: () => import('@/views/ArticleDetial'),
      },
    ],
  },
  {
    path: '/p',
    component: Layout,
    children: [
      {
        path: '/p',
        name: 'Page',
        requireAuth: true,
        component: () => import('@/views/Page'),
      },
    ],
  },{
    path: '/c',
    component: Layout,
    children: [
      {
        path: '/c',
        name: 'Category',
        requireAuth: true,
        component: () => import('@/views/Category'),
      },
    ],
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
  
]

const router = createRouter({
  history: createWebHistory(),
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
