import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import progressBar from '@/pages/progressBar/progressBar'
import newp from '@/components/newp'
import amm from '@/components/amm'
import Layout from '@/pages/Layout/Layout'
import married from '@/pages/married/married'
import VueWechatTitle from 'vue-wechat-title';

Vue.use(Router)
Vue.use(VueWechatTitle)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: {
        title: '超级猕猴桃'
      }
    },
    {
      path: '/married',
      name: 'married',
      component: married,
      meta: {
        title: '去哪儿(移动端)'
      }
    },
    {
      path: '/Layout',
      name: 'Layout',
      component: Layout,
      meta: {
        title: '响应式布局'
      }
    },
    {
      path: '/progressBar',
      name: 'progressBar',
      component: progressBar,
      meta: {
        title: '超级水果茶'
      }
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
