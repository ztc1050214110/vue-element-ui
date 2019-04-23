<template>
  <div id="app"  v-bind:style="{minWidth:screenWidth+'px'}">
    <router-view v-wechat-title="$route.meta.title"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: {
    screenWidth: document.body.clientWidth,
  },
  watch:{
screenWidth(val){
    // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
    if(!this.timer){
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function(){
            // 打印screenWidth变化的值
            console.log("赋值的宽度")
            console.log(that.screenWidth)
            that.timer = false
        },400)
    }
}
},
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;

        console.log(window.screenWidth)
        console.log(that.screenWidth)
      })();
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
  min-width: 1400px;
  min-height: 900px;
}
* {
  margin: 0;
  padding: 0;
}
</style>
