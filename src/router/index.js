import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import newp from '@/components/newp'
import amm from '@/components/amm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/newp',
      name: 'newp',
      component: newp
    },
    {
      path: '/amm',
      name: 'amm',
      component: amm
    }
  ]
})
