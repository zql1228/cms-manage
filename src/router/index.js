import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  {
    path: '/',
    name: 'Layout',
    meta: { title: '首页' },
    component: Layout,
    children: [
      {
        path: '/home',
        name: 'home',
        meta: { title: '首页' },
        component: () => import('@/pages/home/index.vue')
      },
      {
        path: '/activity',
        name: 'activity',
        meta: { title: '活动管理' },
        children: [
          {
            path: '/',
            component: () => import('@/pages/activity/index.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/decorate',
    name: 'decorate',
    component: () => import('../pages/decorate/index.vue')
  },
  {
    path: '/404',
    name: '404',
    hidden: true,
    component: () => import('@/pages/error-page/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
