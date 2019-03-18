<template>
<div class="content">
    我是第一个组件
    <div class="div"></div>
     我是第一个组件
</div>
</template>

<script>
export default {
  name: 'xxx',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.div{
  width: 100%;
  height: 60px;
  background-color: aqua;
}
</style>