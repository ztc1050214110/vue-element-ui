
import { constants } from 'http2';
import { constants } from 'http2';
import { constants } from 'http2';
<style scoped>
.four_icon {
  width: 100%;
  height: 350px;
  background-color: #ffffff;
}
.four_listBox {
  width: 1080px;
  height: 100%;
  margin: auto;
  box-sizing: border-box;
  padding: 40px 0px;
  display: flex;
  justify-content: space-around;
}
.four_listBox > li {
  width: 20%;
  height: 100%;
  float: left;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer; /*鼠标变成手指样式*/
}
.circle {
  width: 90px;
  height: 90px;
  border-radius: 100%;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circle_immigration {
  width: 90px;
  height: 90px;
  border-radius: 100%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000;
}
.four_listBox p {
  padding: 2px;
}
.four_listBox h3 {
  padding: 12px;
}
.SHOW {
  width: 100%;
  height: 920px;
  padding: 80px 120px;
  text-align: center;
  background: #fbfbfb;
}
.SHOW h2 {
  text-transform: uppercase;
  font-size: 2.369em;
  font-weight: 300;
}
.SHOW p {
  color: #969595;
  font-size: 16px;
}
.clamp {
  width: 100%;
  height: 310px;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
.clampLisi {
  height: 100%;
  width: 30%;
  position: relative;
}
.clampLisi img {
  width: 100%;
  height: 74%;
  cursor: pointer; /*鼠标变成手指样式*/
  transition: all 0.6s; /*所有属性变化在0.6秒内执行动画*/
}
.clampLisi img:hover {
  transform: scale(1.4); /*鼠标放上之后元素变成1.4倍大小*/
}
.clampLisi p:nth-child(2) {
  color: #474747;
  position: absolute;
  bottom: 14%;
  /* left: 0%; */
}
.clampLisi p:nth-child(3) {
  color: #969595;
  font-size: 14px;
  position: absolute;
  bottom: 8%;
}
.clampLisi p:nth-child(4) {
  color: #969595;
  font-size: 18px;
  position: absolute;
  right: 0%;
  bottom: 12%;
  cursor: pointer; /*鼠标变成手指样式*/
}
.carousel_background {
  width: 100%;
  height: 300px;
  background-image: url(../img/twitter-feed-bg.jpg);
  background-size: 100%;
}
.disp_fenx {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.swiper_txt {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  line-height: 50px;
}
</style>
<template>
  <div class="content">
    <div class="four_icon">
      <ul class="four_listBox">
        <!-- for循环动态加载class -->
        <li
          v-for="(item,index) in ulArr"
          :data-index="index"
          @mouseenter="immigration(index)"
          @mouseleave="shift_come(index)"
        >
          <div :class="itemID == index ? 'circle':'circle_immigration'">
            <Icon :type="item.type" size="55" :color="itemID == index? '#fff':'#000'"/>
          </div>
          <h3>{{item.Responsive}}</h3>
          <p>Class aptent taciti sociosqu ad litora</p>
          <p>torquent conubia nostra, per</p>
          <p>inceptos himenaeos.</p>
        </li>
      </ul>
    </div>
    <div class="SHOW">
      <h2>show off our portfolio</h2>
      <p>Absolutely Stunning Design & Functionality</p>
      <div class="clamp">
        <div class="clampLisi" v-for="(item,index) in clampArr">
          <img :src=" item.img" alt="" :id="index" @click="imgIndex(index)">
          <p>Oliver a Note</p>
          <p>Fashion</p>
          <p>
            <Icon type="md-heart"/>&nbsp;576
          </p>
        </div>
      </div>
      <div class="clamp">
        <div class="clampLisi" v-for="(item,index) in clampArr2">
          <img :src=" item.img" alt="" :id="index+3" @click="imgIndex(index+3)">
          <p>Oliver a Note</p>
          <p>Fashion</p>
          <p>
            <Icon type="md-heart"/>&nbsp;576
          </p>
        </div>
      </div>
    </div>
    <div class="carousel_background">
      <div class="swiper-container" style="height:100%">
        <div class="swiper-wrapper">
          <div class="swiper-slide disp_fenx" v-for="item in 3">
            <div class="swiper_txt">
              <Icon type="logo-github" size="50"/>
              <h3>free stock photos: 74 best sites to find Awesome free images</h3>
              <p>@themewagon</p>
              <p>2 days ago on Twitter.com</p>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev swiper-button-white" style="margin-left:100px;"></div>
        <!--左箭头-->
        <div class="swiper-button-next swiper-button-white" style="margin-right:100px"></div>
        <!--右箭头-->
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "homeBott",
  data() {
    return {
      value: 0,
      fff: "#ffffff",
      Icon: true,
      ulArr: [
        {
          id: "0",
          type: "ios-aperture",
          Responsive: "Responsive & Multi-purpose"
        },
        {
          id: "1",
          type: "logo-angular",
          Responsive: "Swedcdive & Multi-purpose"
        },
        {
          id: "2",
          type: "ios-albums",
          Responsive: "Csefggve & Multi-purpose"
        },
        {
          id: "3",
          type: "logo-apple",
          Responsive: "Zasdfrve & Multi-purpose"
        }
      ],
      itemID: null,
      clampArr: [
        { img: require("../img/portfolio1.jpg") },
        { img: require("../img/portfolio2.jpg") },
        { img: require("../img/portfolio3.jpg") }
      ],
      clampArr2: [
        { img: require("../img/portfolio4.jpg") },
        { img: require("../img/portfolio5.jpg") },
        { img: require("../img/portfolio6.jpg") }
      ]
    };
  },
  methods: {
    imgIndex(index) {
      console.log("你点击的是第" + (index + 1) + "幅图");
    },
    immigration(index) {
      this.Icon = false;
      this.itemID = index;
    },
    shift_come(index) {
      this.Icon = true;
      this.itemID = null;
    }
  },
  mounted() {
    console.log(this.ulArr);
    console.log(this.clampArr);
    var mySwiper = new Swiper(".swiper-container", {
      delay: 500,
      autoplay: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>
