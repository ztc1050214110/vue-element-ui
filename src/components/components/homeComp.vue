<template>
<div class="content">

    我是第一个组件
    <div class="div">{{nufd[0]}}
      <button @click="fu">子组件传递给父组件</button>
    </div>
     我是第一个组件
</div>
</template>

<script>
export default {
  name: 'xxx',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      boss:"子组件数据11111111111111",
    }
  },
  props:['nufd'],
  methods:{
    fu(){
      this.$emit('fuclick',this.boss)
    }
  }
}
</script>

<style scoped>

</style>