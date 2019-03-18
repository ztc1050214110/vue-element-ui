<template>
<div class="content">
    我是新页面
    <router-link to="/"> 
    <button @click="butt">点我返回首页</button>
    </router-link> 
    <home></home>
</div>
</template>

<script>
import home from './components/home'
export default {
  name: 'xxx',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
    home
  },
  methods:{
 
  }
}
</script>

<style scoped>

</style>
