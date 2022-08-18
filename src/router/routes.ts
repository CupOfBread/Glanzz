const routes = [
  {
    path: '/',
    component: () => import('../views/home/Home.vue')
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('../views/about/About.vue')
  },
  {
    name: 'c',
    path: '/c',
    component: () => import('../views/category/Category.vue')
  },
  {
    name: 'a',
    path: '/a',
    component: () => import('../views/article/Article.vue')
  }
];

export default routes