<style scoped lang="less">
.progress_bar {
  width: 100%;
  height: 420px;
  background-color: #f9f9f9;
  padding: 60px;
}
.left {
  float: left;
  width: 50%;
  height: 100%;
  h1 {
    font-size: 50rpx;
    text-transform: uppercase;
    font-weight: 300;
  }
  p {
    color: #969595;
    line-height: 20px;
    font-size: 16px;
    margin-top: 40px;
  }
}
.right {
  float: right;
  width: 46%;
  height: 100%;
  div {
    height: 30px;
  }
  p {
    font-size: 16px;
    color: #969595;
  }
}
.carousel {
  width: 100%;
  height: 250px;
  background-color: #ffffff;
  padding: 50px 0;
  div {
    width: 100%;
    height: 100%;
    // padding: 0 200px;
  }
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
  justify-content: space-around;
  color: #ffffff;
  line-height: 50px;
  image {
    width: 20%;
    height: 100%;
  }
}

</style>
<template>
  <div class="content">
    <div class="progress_bar">
      <div class="left">
        <h1>show off your skills</h1>
        <p>
          Integer ac metus non ipsum congue tincidunt ut id lacus. Duis suscipit odio non lacus aliquam, eget
          faucibus enim posuere. Aenean ut lectus ipsum. Pellentesque sit amet elementum velit. Ut sapien ante,
          suscipit a auctor in, consectetur eu nibh. Etiam interdum consectetur lacus ut iaculis. In luctus magna
          vitae ultricies consequat.
        </p>
        <p>
          In et blandit erat, ut gravida ante. Etiam ut est at dolor vehicula tempus quis ut augue. Duis nec ipsum ex.
          Sed in libero sit amet metus placerat commodo ut vitae nisi. Maecenas sit amet elit augue. Pellentesque
          pellentesque lacus eu fringilla dignissim. Aliquam consequat nec sapien quis tempor.
        </p>
      </div>
      <div class="right" @click="timer">
        <p>Mobile Application</p>
        <Progress :percent="value" stroke-width="20" stroke-color="#2db7f5"/>
        <div></div>
        <p>Website Design</p>
        <Progress :percent="value2" stroke-width="20" stroke-color="#19be6b"/>
        <div></div>
        <p>Development</p>
        <Progress :percent="value3" stroke-width="20" stroke-color="#ff9900"/>
        <div></div>
        <p>Branding</p>
        <Progress :percent="value4" stroke-width="20" stroke-color="#ed4014"/>
      </div>
    </div>
    <div class="carousel">
      <div>
        <div class="swiper-container" style="height:100%;height:100%" id="swiper4">
          <div class="swiper-wrapper">
            <div class="swiper-slide disp_fenx">
              <div class="swiper_txt">
                <img src="../../../img/sponsor1.png" alt="">
                <img src="../../../img/sponsor2.png" alt="">
                <img src="../../../img/sponsor3.png" alt="">
              </div>
            </div>
            <div class="swiper-slide disp_fenx">
              <div class="swiper_txt">
                <img src="../../../img/sponsor4.png" alt="">
                <img src="../../../img/sponsor5.png" alt="">
                <img src="../../../img/sponsor6.png" alt="">
              </div>
            </div>
          </div>
          <!-- <div class="swiper-button-prev swiper-button-white" style="margin-left:100px;"></div> -->
          <!--左箭头-->
          <!-- <div class="swiper-button-next swiper-button-white" style="margin-right:100px"></div> -->
          <!--右箭头-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
let i = 0;
export default {
  name: "HelloWorld",
  data() {
    return {
      timer: "",
      value: 5,
      value2: 40,
      value3: 60,
      value4: 80
    };
  },
  components: {},
  methods: {
    get() {
      this.value++;
      this.value2++;
      this.value3++;
      this.value4++;
      if (this.value == 100) {
        this.value = 0;
      }
      if (this.value2 == 100) {
        this.value2 = 0;
      }
      if (this.value3 == 100) {
        this.value3 = 0;
      }
      if (this.value4 == 100) {
        this.value4 = 0;
      }
    }
  },
  mounted() {
    // 开启动态效果
    // this.timer = setInterval(this.get, 100);
    var mySwiper = new Swiper("#swiper4", {
      delay: 50,
      autoplay: true,
      loop: true,
    effect : 'flip',
  flipEffect: {
    slideShadows : true,
    limitRotation : true,
  },
    });
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
