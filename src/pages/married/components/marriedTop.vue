<style scoped>
.content{
 box-sizing: border-box;
 padding: .875rem;
}
.search{
  height: 2.25rem;
  width: 100%;
  display: flex;
}
.searchBox{
  height: 100%;
  width: 19.0625rem;
  display: flex;
  background-color: #eeeeee;
}
input{  
    background:none;  
    outline:none;  
    border:none;
    height: 100%;
    width: 17rem;
    padding-left:.875rem;
}
.el-icon-search{
  font-size: 1.5rem;
  margin-top: .25rem;
  margin-left: .625rem;
}
.el-icon-location-outline{
   font-size: 1.5rem;
  margin-top: .25rem;
  margin-left: .625rem;
  color: #29bcd4;
}
.bigLogoBox{
  width: 100%;
  height: 5rem;
  /* background-color: #29bcd4; */
  display: flex;
}
.bigLogoBox>div{
width: 20%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center; 
align-items: center; 
}
.BigImg{
  width: 3.125rem;
  height: 3.125rem;
  display: block;
  border-radius: 100%;
}
.BigImg2{
  width: 1.5rem;
  height:1.5rem;
  display: block;
}
.hotel{
    display: block;
    margin-top: .4rem;
}
.preference{
  width: 100%;
  height: 1.875rem;
  /* background-color: firebrick; */
  display: flex;
  position: relative;
}
.today{
  box-sizing: border-box;
  padding: .4rem;
  color: #666666;
  text-align: center;
  border: .0625rem solid #666666;
  border-radius: .25rem;
}
.more{
  color: #666666;
   box-sizing: border-box;
  padding: .4rem;
  position: absolute;
  right: .625rem;
}
.Peking{
  width: 100%;
  height: 10.625rem;
  margin-top: .625rem;
  display: flex;
  justify-content: space-between;
}
.bothSides{
  width: 49%;
  height: 100%;
}
.bothSides>img{
  width: 100%;
  height: 6.25rem;
  border-radius: .625rem;
}
.text_1{
  font-size: .9rem;
}
.text_2{
  font-size: .8rem;
  color: #555555;
  overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
}
.text_3{
  font-size:1rem;
  font-weight: bold;
  color: #ff7452;
}
.text_3>span{
   font-size:.9rem;
  font-weight: none;
}
.slideshow{
  width: 100%;
  height: 7.5rem;
  margin-top: 1rem;
}
.disp_fenx{
  background-image: url('../../../img/b1.jpg');
  background-size: 100% 100%;
  border-radius: .625rem;
}
</style>
<template>
<div class="content">
  <!-- 搜索框 -->
<div class="search">
  <div class="searchBox">
    <i class="el-icon-search"></i>
    <input type="text" style="border:none;" maxlength="30" placeholder="搜索景点门票">
  </div>
  <i class="el-icon-location-outline"></i>
</div>
<!-- 大logo -->
<div class="bigLogoBox">
  <div v-for="item in 5">
    <img class="BigImg" src="../../../img/jd.png" alt="">
    <div class="hotel">酒店</div>
  </div>
</div>
<!-- 小logo -->
<div class="bigLogoBox">
  <div v-for="item in 5">
    <img class="BigImg2" src="../../../img/cm.png" alt="">
    <div class="hotel">草莓</div>
  </div>
</div>
<!-- 今日特惠 -->
<div class="preference">
<div class="today" style=" color:#ffffff;background-color: #17c0c8;border:0px;">今日特惠</div>
<div class="today" style=" margin-left: .5rem;margin-right: .5rem;">今日特惠</div>
<div class="today">特惠一日游</div>
<div class="more">更多 ></div>
</div>
<!-- 大图配字 -->
<div class="Peking" v-for="item in 2">
  <div class="bothSides" v-for="item in 2">
    <img src="../../../img/cd.jpg" alt="">
    <div class="text_1">北京 - 泰国 7日游</div>
    <div class="text_2">快乐双十一，快乐跟团游，限时优惠~~~~~~~~~~~~~~</div>
    <div class="text_3">￥1965 <span>起</span></div>
  </div>
</div>
<!-- 广告轮播 -->
<div class="slideshow">
    <div class="swiper-container" style="height:100%">
        <div class="swiper-wrapper">
          <div class="swiper-slide disp_fenx" v-for="item in 3">
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
</div>
</div>
</template>

<script>
  import Swiper from "swiper";
  import "swiper/dist/css/swiper.min.css";
import axios from "axios";

export default {
  name: "HelloWorld",
  data() {
    return {
    };
  },
  components: {
  },
  methods: {
  },
    mounted () {
    var mySwiper = new Swiper(".swiper-container", {
        delay: 500,
        autoplay: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });
    
  }
};
</script>


