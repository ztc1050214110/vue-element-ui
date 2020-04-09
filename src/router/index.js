import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import progressBar from '@/pages/progressBar/progressBar'
import newp from '@/components/newp'
import amm from '@/components/amm'
import Layout from '@/pages/Layout/Layout'
import everyday from '@/pages/everyday/everyday'
import married from '@/pages/married/married'
import licaibao from '@/pages/licaibao/licaibao'
import VueWechatTitle from 'vue-wechat-title';

Vue.use(Router)
Vue.use(VueWechatTitle)

export default new Router({
   mode: 'history',  //去掉url中的#
  routes: [
    {
      path: '/',
      name: 'licaibao',
      component: licaibao,
      meta: {
        title: '理财宝响应式'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta: {
        title: '超级猕猴桃'
      }
    },
    {
      path: '/everyday',
      name: 'everyday',
      component: everyday,
      meta: {
        title: '每日优鲜-产地直供优质水果蔬菜生鲜新零售电商平台'
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
