import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'

import Login from '@/views/login/Index'
import Layout from '@/views/layout/Index'
import Home from '@/views/home/Home'
import Articles from '../views/articles/Index'
import Images from '../views/images/Index'
import Publish from '../views/publish/Index'
import Comments from '../views/comments/Index'
import Fans from '../views/fans/Index'
import Settings from '../views/settings/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    // name: 'Layout', // 存在默认子路由,就不对父路由定义 name 值, 防止报错
    component: Layout,
    children: [
      {
        path: '', // 默认 / 会加载 当前路由给 router-view
        name: 'Home',
        component: Home
      },
      {
        path: '/articles',
        name: 'Articles',
        component: Articles
      },
      {
        path: '/images',
        name: 'Images',
        component: Images
      },
      {
        path: '/publish',
        name: 'Publish',
        component: Publish
      },
      {
        path: '/comments',
        name: 'Comments',
        component: Comments
      },
      {
        path: '/fans',
        name: 'Fans',
        component: Fans
      },
      {
        path: '/settings',
        name: 'Settings',
        component: Settings
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, form, next) => {
  NProgress.start()
  next()
})

router.afterEach(transition => {
  NProgress.done()
})

export default router
