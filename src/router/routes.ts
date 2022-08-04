const routes = [
  {
    path: '/',
    component: () => import('../views/home/Home.vue')
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('../views/about/About.vue')
  }
];

export default routes