<style scoped  lang="less">
.gray_background {
  width: 100%;
  height: 190px;
  background-image: url(../img/about-bg.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.return {
  width: 20%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 22%;
}
.return > a {
  font-size: 16px;
  margin: 0 10px;
  color: #c7c4c0;
  z-index: 100;
}
.return > a:hover {
  color: #ffffff;
}
.return > img {
  width: 10px;
  height: 10px;
}
.shade {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  position: absolute;
  top: 0;
  bottom: 0;
}
.article {
  width: 100%;
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.article > p {
  line-height: 30px;
  color: #969595;
}
.article > h1:first-child {
  position: absolute;
  top: 10%;
  font-weight: normal;
  font-size: 30px;
}
.article > h1:last-child {
  position: absolute;
  bottom: 10%;
  font-weight: normal;
  font-size: 30px;
}
.personalInformation {
  height: 550px;
  width: 78%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  .borderX {
    width: 80%;
    height: 1px;
    margin: auto;
    margin-top: 16px;
    background: #969595;
  }
  & > div {
    width: 30%;
    height: 100%;
    text-align: center;
    .parcel {
      border: 1px solid #969595;
      border-top: 0px;
      margin-top: -6px;
    }
    .box {
      margin: auto;
      width: 130px;
      height: 34px;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      & > div {
        width: 34px;
        height: 34px;
        border-radius: 100%;
        border: 1px solid #969595;
        background: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
          background: #969595;
        }
      }
    }
    p {
      color: #969595;
      font-size: 14px;
    }
    h4 {
      font-size: 20px;
      font-weight: normal;
      color: #000000;
      box-sizing: border-box;
      padding-top: 20px;
      margin-bottom: 14px;
    }
    .img {
      width: 100%;
      height: 350px;
      position: relative;
      top: 0;
    }
  }
}
</style>
<template>
  <div class="content">
    <div class="gray_background">
      <div class="shade"></div>
      <div class="return">
        <a href="#">HOME</a>
        <img src="../img/daas22.png" alt="">
        <a href="#">ABOUT US</a>
      </div>
    </div>
    <div class="article">
      <h1>OUR STORY</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed elit eu ipsum
        aliquam mattis ac eget tortor. Lorem ipsum dolor sit amet,
      </p>
      <p>
        consectetur adipiscing elit. Nullam interdum at neque sed lobortis. Fusce hendrerit in er
        at a ullamcorper. Donec tincidunt ornare rutrum.
      </p>
      <p>
        Vestibulum quis risus vitae velit vulputate tristique. Donec nec tortor metus. Cum soci
        is natoque penatibus et magnis dis parturient
      </p>
      <p>montes, nascetur ridiculus mus. Quisque blandit mauris in orci iaculis, non fermentum nisl.</p>
      <h1>OUR DESIGNATION</h1>
    </div>
    <div class="personalInformation">
      <!-- 第一份 -->
      <div>
         <div class="img">
        <div class="swiper-container" style="height:100%;height:100%" id="swiper1">
          <div class="swiper-wrapper">
            <div class="swiper-slide disp_fenx">
              <div class="swiper_txt">
                <img src="../img/520.png" alt="" style="  width: 100%;height: 350px;"> 
              </div>
            </div>
            <div class="swiper-slide disp_fenx">
              <div class="swiper_txt">
                <img src="../img/520.png" alt="" style="  width: 100%;height: 350px;"> 
              </div>
            </div>
            <div class="swiper-slide disp_fenx">
              <div class="swiper_txt">
                <img src="../img/520.png" alt="" style="  width: 100%;height: 350px;"> 
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="parcel">
          <h4>David Martin</h4>
          <p>Phasellus sit amet tristique ligula. Donec</p>
          <p>iaculis leo suscipit ultricies</p>
          <div class="borderX"></div>
          <div class="box">
            <div>
              <Icon type="ios-finger-print"  size="20" />
            </div>
            <div>
              <Icon type="ios-color-palette-outline" id="1" size="20"/>
            </div>
            <div>
              <Icon type="ios-flower-outline" id="2" size="20"/>
            </div>
          </div>
        </div>
      </div>
      <!-- 第二份 -->
      <div>
         <div class="img">
        <div class="swiper-container" style="height:100%;height:100%" id="swiper2">
          <div class="swiper-wrapper">
            <div class="swiper-slide disp_fenx">
              <div class="swiper_txt">
                <img src="http://img1.imgtn.bdimg.com/it/u=1481887723,3657687046&fm=26&gp=0.jpg" alt="" style="  width: 100%;height: 350px;"> 
              </div>
            </div>
            <div class="swiper-slide disp_fenx">
              <div class="swiper_txt">
                <img src="http://img.zcool.cn/community/01ad395c714a4ba801213f2678ae27.jpg@260w_195h_1c_1e_1o_100sh.jpg" alt="" style="  width: 100%;height: 350px;"> 
              </div>
            </div>
            <div class="swiper-slide disp_fenx">
              <div class="swiper_txt">
                <img src="http://img5.imgtn.bdimg.com/it/u=137063313,3433189430&fm=11&gp=0.jpg" alt="" style="  width: 100%;height: 350px;"> 
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="parcel">
          <h4>David Martin</h4>
          <p>Phasellus sit amet tristique ligula. Donec</p>
          <p>iaculis leo suscipit ultricies</p>
          <div class="borderX"></div>
          <div class="box">
            <div>
              <Icon type="ios-finger-print"  size="20" />
            </div>
            <div>
              <Icon type="ios-color-palette-outline" id="1" size="20"/>
            </div>
            <div>
              <Icon type="ios-flower-outline" id="2" size="20"/>
            </div>
          </div>
        </div>
      </div>
      <!-- 第三份 -->
      <div>
         <div class="img">
        <div class="swiper-container" style="height:100%;height:100%" id="swiper3">
          <div class="swiper-wrapper">
            <div class="swiper-slide disp_fenx">
              <div class="swiper_txt">
                <img src="../img/520.png" alt="" style="  width: 100%;height: 350px;"> 
              </div>
            </div>
            <div class="swiper-slide disp_fenx">
              <div class="swiper_txt">
                <img src="../img/520.png" alt="" style="  width: 100%;height: 350px;"> 
              </div>
            </div>
            <div class="swiper-slide disp_fenx">
              <div class="swiper_txt">
                <img src="../img/520.png" alt="" style="  width: 100%;height: 350px;"> 
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="parcel">
          <h4>David Martin</h4>
          <p>Phasellus sit amet tristique ligula. Donec</p>
          <p>iaculis leo suscipit ultricies</p>
          <div class="borderX"></div>
          <div class="box">
            <div>
              <Icon type="ios-finger-print"  size="20" />
            </div>
            <div>
              <Icon type="ios-color-palette-outline" id="1" size="20"/>
            </div>
            <div>
              <Icon type="ios-flower-outline" id="2" size="20"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "HelloWorld",
  data() {
    return {
      imgArr: [
        {
          id: 'swiper1',
          img: require("../img/team-member1.jpg"),
          icon: "ios-finger-print"
        },
        {
          id: 'swiper2',
          img: require("../img/team-member2.jpg"),
          icon: "ios-color-palette-outline"
        },
        {
          id: 'swiper3',
          img: require("../img/team-member3.jpg"),
          icon: "ios-flower-outline"
        }
      ],
      state: true,
      imgId: null,
      iconType:'ios-finger-print'
    };
  },
  components: {},
  methods: {
    immigration(e) {
      console.log(e + "移入");
      this.id = e;
      this.state = false;
      this.iconType='md-finger-print'
    },
    shift_come(e) {
      console.log(e + "移出");
      this.id = "";
      this.state = true;
       this.iconType='ios-finger-print'
    }
  },
    mounted() {
    // 开启动态效果
    // this.timer = setInterval(this.get, 100);
    var mySwiper = new Swiper("#swiper1", {
      speed:2000,
       autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
      loop: true,
    effect : 'cube',
  cubeEffect: {
    slideShadows: true,
    shadow: true,
    shadowOffset: 100,
    shadowScale: 0
  },
    });
    var mySwiper = new Swiper("#swiper2", {
      speed:2000,
       autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
      loop: true,
      effect : 'fade',

    });
    var mySwiper = new Swiper("#swiper3", {
      speed:2000,
       autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
      loop: true,
   effect : 'flip',
  flipEffect: {
    slideShadows : true,
    limitRotation : true,
  }
    });
  },
};
</script>
