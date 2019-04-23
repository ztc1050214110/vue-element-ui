<style scoped>
.head_navigation {
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  position: relative;
}
.head_logo {
  width: 107px;
  height: 42px;
  position: absolute;
  top: 20%;
  left: 10%;
}
.head_ul {
  width: 305px;
  height: 70px;
  position: absolute;
  right: 10%;
}
li {
  list-style-type: none;
  float: left;
  width: 25%;
  height: 100%;
}
.head_ul > li {
  text-align: center;
  line-height: 70px;
  color: #969595;
  cursor: pointer; /*鼠标变成手指样式*/
}
.head_ul > li:hover {
  background-color: #eeeeee;
  color: black;
}
</style>
<template>
  <div class="">
    <div class="head_navigation">
      <img src="../img/main_logo.png" class="head_logo" @click="logo">
      <ul class="head_ul">
        <li @click="home">HOME</li>
        <li @click="pasram">PASRAM</li>
        <li>SMMING</li>
        <li>GPILM</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
   
    };
  },
  components:{
  },
  methods: {
    logo () {
      console.log("点击了logo")
       this.$store.commit("setCity", "点击了logo");
    },
    home (){
      console.log("跳转到超级猕猴桃")
      this.$router.push("/");
    },
    pasram () {
      console.log("跳转到超级水果茶")
      this.$router.push({
        name:'progressBar',
        params:{
          id:'886'
        }
        });
    }
  }
};
</script>
