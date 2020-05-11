<style scoped lang="less">
.money {
  width: 100%;
  // height: 3.125rem;
  padding: 0 4.375rem;
  box-sizing: border-box;
  background-color: #7c7364;
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  line-height: 3.125rem;
}
.money_left {
  width: 50%;
  text-align: center;
  color: #ffffff;
  display: flex;
  span {
    font-size: 1.5rem;
    color: #ff9900;
    letter-spacing: 3px;
    margin: 0 1rem;
    padding: 0 1rem;
    border-radius: 3px;
    background-color: rgba(255, 255, 255, 0.9);
    box-shadow: 1px 2px 1px #333 inset;
  }
}
.excursion {
  margin-left: 0.625rem;
}
.money_right {
  width: 24%;
  text-align: center;
  color: #ffffff;
}
.carousel_background {
  width: 100%;
  height: 23rem;
  background-color: #ff9900;
}
.swiperImgCss {
  width: 100%;
  height: 100%;
  background-color: darkcyan;
}
.threeBox {
  width: 90%;
  // height: 6rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
  .item {
    width: 30%;
    height: 100%;
    background-color: #ffffff;
    display: flex;
  }
}
.parcel_i {
  display: flex;
  justify-content: center;
  justify-content: space-around;
}
.bigTxt {
  width: 45%;
  height: 100%;
  color: #ff9a00;
  font-size: 2.25rem;
  font-weight: bold;
  line-height: 6rem;
  text-align: center;
}
.SmallFont {
  width: 45%;
  text-align: center;
  font-size: 0.85rem;
  color: #999999;
  padding: 1.25rem;
  box-sizing: border-box;
  line-height: 1.25rem;
}
.announcement {
  width: 90%;
  margin: 0 auto;
  background-color: #ffffff;
  height: 2.25rem;
  margin-top: 1.25rem;
  font-size: 0.85rem;
  line-height: 2.25rem;
  padding: 0 1.25rem;
  box-sizing: border-box;
}
.head_t {
  color: #999999;
  font-size: 0.65rem;
  margin-right: 1.25rem;
  float: left;
}
.head_t2 {
  color: #ff9900;
  float: right;
}
.longTxt {
  display: block;
  width: 60%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  float: left;
}
.bigForm {
  width: 90%;
  height: 25rem;
  background-color: #ffffff;
  margin: 0 auto;
  border-top: 1px solid #ff9900;
  margin-top: 1.25rem;
  display: flex;
}
.bigForm_left {
  width: 30%;
  height: 100%;
  background-color: #f5f9fa;
  i {
    font-size: 1rem;
    text-align: center;
    display: block;
    line-height: 1.875rem;
    color: #666155;
  }
  .h2 {
    font-size: 1.875rem;
    text-align: center;
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;
  }
}
.bigForm_right {
  width: 70%;
  height: 100%;
}
.right_row {
  width: 100%;
  height: 20%;
  display: flex;
  border-bottom: 1px solid #eeeeee;
  .item1 {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      font-weight: bold;
      color: #8b999d;
      font-size: 2.25rem;
      margin-right: 0.375rem;
      margin-bottom: 10px;
    }
  }
  .item2 {
    width: 50%;
    height: 100%;
    display: flex;
    border-left: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
    span {
      font-size: 1.7rem;
      color: #ff9900;
      margin-right: 0.3rem;
    }
  }
  .item3 {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      margin: 0;
      padding: 0;
      background-color: transparent;
      border: 0px solid transparent;
      outline: none;
      width: 50%;
      height: 40%;
      border-radius: 2px;
      background-color: #ff9900;
      color: #ffffff;
    }
  }
}
.percentage {
  margin-top: 0.3rem;
  color: #999999;
  font-size: 0.75rem;
}
.item2_half {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
//响应式代码开始
//大型显示器
@media screen and (max-width: 1280px) {
}
//中型显示器
@media screen and (min-width: 481px) and (max-width: 1280px) {
  .bigForm_right {
    width: 100%;
    height: 70%;
  }
  .bigForm {
    display: block;
    height: 30rem;
  }
  .money_left span {
    font-size: 1.1rem;
    color: #ff9900;
    letter-spacing: 0px;
    margin: 0 0rem;
    padding: 0 0rem;
    border-radius: 0px;
    background: transparent;
    box-shadow: 0px 0px 0px;
  }
  .money {
    font-size: 0.1rem;
    padding: 0 2rem;
  }
  .money_left {
    width: 80%;
  }
  .threeBox .item {
    display: block;
  }
  .bigTxt {
    line-height: 3rem;
    margin: auto;
    width: 100%;
  }
  .SmallFont {
    margin: auto;
    padding: 0;
    padding-bottom: 0.5rem;
    width: 100%;
  }
  .bigForm_left {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      margin-left: 0.5rem;
      line-height: normal;
    }
    .h2 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 1.2rem;
    }
  }
  .longTxt {
    width: 50%;
  }
}
//小型显示器
@media screen and (max-width: 480px) {
   .right_row .item3 {
       width: 20rem;
    height: 3rem;
    margin: 1.25rem auto;
    margin-top: 6.25rem;
   
   }
  .right_row .item3 button{
    width: 100%;
    height: 100%;
     font-size: 1rem;
  }
  .right_row{
    display: block;
    height: auto;
    padding-top: 1.25rem;
    box-sizing: border-box;
  }
  .right_row{
.item1{
  float: left;
}
.item2{
  float: left;
  width: 70%;
border: 0px;
}
  } 
  .parcel_i {
    margin-top: 1.25rem;
    margin-bottom: 1rem;
  }
  .bigForm {
    display: block;
    // height: 30rem;
    height: auto;
  }
  .bigForm_right {
    width: 100%;
    height: 70%;
  }
  .bigForm_left {
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i {
      margin-left: 1rem;
      line-height: normal;
      display: inline-block;
    }
    .h2 {
      margin-top: 1rem;
      margin-bottom: 0;
    }
  }
  .money_left span {
    font-size: 1.1rem;
    color: #ff9900;
    letter-spacing: 0px;
    margin: 0 0rem;
    padding: 0 0rem;
    border-radius: 0px;
    background: transparent;
    box-shadow: 0px 0px 0px;
  }
  .money {
    font-size: 0.1rem;
    padding: 0 2.5rem;
    display: block;
    line-height: 1.8rem;
  }
  .money_left {
    width: 100%;
    display: block;
  }
  .money_right {
    width: 100%;
    display: block;
  }
  .threeBox {
    display: block;
  }
  .threeBox .item {
    width: 100%;
    height: 30%;
    margin-top: 1.25rem;
  }
  .bigTxt {
    width: 30%;
  }
  .head_gg {
    display: none;
  }
}

//响应式代码结束
</style>
<template>
  <div>
    <div class="money">
      <div class="money_left">
        <div>平台累计成交金额
          <span>2644</span>万元
        </div>
        <div class="excursion">近7日成交金额
          <span>1888</span>万元
        </div>
      </div>
      <div class="money_right">查看运营报告</div>
    </div>
    <!-- 轮播 -->
    <div class="carousel_background">
      <div class="swiper-container" style="height:100%">
        <div class="swiper-wrapper">
          <div class="swiper-slide disp_fenx" v-for="item in swiperImg">
            <img :src="item" alt="" class="swiperImgCss">
          </div>
        </div>
        <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- 三个格子 -->
    <div class="threeBox">
      <div class="item" v-for="iten in 3">
        <div class="bigTxt">安全</div>
        <div class="SmallFont">
          <div>国家AAA信用平台</div>
          <div>银行资金托管</div>
          <div>上市公司背景保障</div>
        </div>
      </div>
    </div>
    <!-- 公告 -->
    <div class="announcement">
      <span class="head_t">最新公告:
        <span class="head_gg">2015-10-10</span>
      </span>
      <span
        class="longTxt"
      >海外留学生陆续收到祖国漂洋过海寄来的健康包，包里有中药、口罩等，让人倍感温暖。爱丁堡龙比亚大学留学生笛箫称，在街头派发的时候，引来英国本地人的好奇围观，“就像家人发糖，别人家的孩子没有一样自豪</span>
      <span class="head_t2">更多公告</span>
    </div>
    <!-- 大型表格 -->
    <div class="bigForm">
      <div class="bigForm_left">
        <div class="h2">固定期限产品</div>
        <div class="parcel_i">
          <i>甄选优质基金</i>
          <i>甄选优质基金</i>
          <i>甄选优质基金</i>
        </div>
      </div>
      <div class="bigForm_right">
        <div class="right_row" v-for="item in 5">
          <div class="item1">
            <span>3</span>个月
          </div>
          <div class="item2">
            <div class="item2_half">
              <div>约定年化收益率:</div>
              <div class="percentage">
                <span>3.50%</span>起
              </div>
            </div>
            <div class="item2_half">
              <div>总成交额:</div>
              <div class="percentage">
                <span>2018</span>万元
              </div>
            </div>
          </div>
          <div class="item3">
            <button>购买</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  name: "xys",
  data() {
    return {
      swiperImg: [
        require("../img/ad001-l.png"),
        require("../img/ad001-l.png"),
        require("../img/ad001-l.png")
      ]
    };
  },
  components: {},
  methods: {},
  mounted() {
    console.log(this.ulArr);
    console.log(this.clampArr);
    var mySwiper = new Swiper(".swiper-container", {
      delay: 100,
      autoplay: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>


