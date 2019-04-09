import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import newp from '@/components/newp'
import amm from '@/components/amm'
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
        title: '首页入口'
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
