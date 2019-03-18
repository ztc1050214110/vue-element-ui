import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/hello'
import newp from '@/components/newp'
import amm from '@/components/amm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: hello
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
