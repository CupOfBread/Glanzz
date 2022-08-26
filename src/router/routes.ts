const routes = [
  {
    path: '/',
    component: () => import('../views/home/Home.vue'),
  },
  {
    path: '/about',
    component: () => import('../views/about/About.vue'),
    meta: {
      title: '关于',
    },
  },
  {
    path: '/c',
    component: () => import('../views/category/Category.vue'),
    meta: {
      title: '分类页示例',
    },
  },
  {
    path: '/a',
    component: () => import('../views/article/Article.vue'),
    meta: {
      title: '文章页示例',
    },
  },
  {
    path: '/links',
    component: () => import('../views/links/Links.vue'),
    meta: {
      title: '友人帐',
    },
  },
]

export default routes
