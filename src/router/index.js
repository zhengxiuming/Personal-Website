import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/layout'
const Home = () => import('@/pages/Home')
const About = () => import('@/pages/About')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: { name: 'home' },
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/about',
          name: 'about',
          component: About
        }
      ]
    }
  ]
})
