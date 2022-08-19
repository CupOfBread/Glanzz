const routes = [
  {
    path: '/',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/about',
    component: () => import('../views/about/About.vue')
  },
  {
    path: '/c',
    component: () => import('../views/category/Category.vue')
  },
  {
    path: '/a',
    component: () => import('../views/article/Article.vue')
  },
  {
    path: '/links',
    component: () => import('../views/links/Links.vue')
  }
];

export default routes