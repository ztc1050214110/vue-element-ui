<style scoped>

.head_navigation{
  width: 100%;
  height: 70px;
  background-color: #ffffff;
  position: relative;
}
.head_logo{
  width: 107px;
  height: 42px;
  position: absolute;
  top: 20%;
  left: 10%;
}
.head_ul{
  width: 305px;
  height: 70px;
  position: absolute;
  right: 10%;
}
li{
     list-style-type :none;
     float: left;
     width: 25%;
     height: 100%;
}
.head_ul>li{
  text-align: center;
  line-height: 70px;
  color: #969595;
  cursor: pointer;/*鼠标变成手指样式*/

}
.head_ul>li:hover{
  background-color: #eeeeee;
  color: black;
}
.home_bigimg{
  width: 100%;
  height: 820px;
  background-image: url(../img/slider1.jpg);
  background-size: 100%;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.csindex{
 height: 20vh;
 width: 100vh;
  background-color: firebrick;
}
.but_click{
  width: 130px;
  height: 40px;
  border: 1px solid #000000;
  line-height: 40px;
  text-align: center;
  color: #000;
    cursor: pointer;/*鼠标变成手指样式*/
}
.but_click:hover{
  background-color: #e2e2e2;

}
.home_bigimg_box{
  width: 100%;
  height: 451px;
  background: #fbfbfb;
  position: absolute;
  bottom:0;
  display: flex;
  justify-content: center;
align-items: center;
}
.home_bigimg_sma{
  width: 1040px;
  height: 280px;
}
.home_bigimg_sma>img{
  height: 100%;
  width: 420px;
  float: left;
}
.home_bigimg_sma_right{
  height: 100%;
  margin-left: 420px;
  box-sizing: border-box;
  padding-left: 70px;
  position: relative;
  }
  .home_bigimg_p{
    font-size: 14px;
    color: #969595;
    margin-top: 20px;
  }
  .home_bigimg_but{
    width: 122px;
    height: 42px;
    background-color: #313131;
    color: #ffffff;
    text-align: center;
    line-height: 42px;
    position: absolute;
    bottom: 0;
      cursor: pointer;/*鼠标变成手指样式*/
  }
  .home_bigimg_but:hover{
    background: #000000;
    color:#eeeeee;
  }
</style>
<template>

  <div class="">
       <div class="head_navigation">
             <img src="../img/main_logo.png" class="head_logo" @click="logo">
             <ul class="head_ul">
               <li>HOME</li>
               <li>PASRAM</li>
               <li>SMMING</li>
               <li>GPILM</li>
             </ul>
       </div>
       <div class="home_bigimg">
         <h1 style="position: absolute;top: 10%;">{{msg}}</h1>
         <p style="position: absolute;top: 20%;">{{Everything}}</p>
         <div class="but_click" style="position: absolute;top: 30%;" @click="calculate">{{Our}}</div>
         <div class="home_bigimg_box">
           <div class="home_bigimg_sma">
             <img src="../img/blog-item1.jpg" alt="">
             <div class="home_bigimg_sma_right">
               <h2>avada the best agency for ever</h2>
               <p class="home_bigimg_p"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ante ex, fermentum vel libero
                  eget interdum semper libero. Curabitur egestas, arcu id tempor convallis.</p>
                  <div style="margin-top:20px;line-height: 30px;">
                  <div><span>❤</span>&nbsp;&nbsp;&nbsp;Vestibulum pulvinar commodo malesuada.</div>
                  <div><span>❤</span>&nbsp;&nbsp;&nbsp;Pellentesque id massa et ligula convallis porta.</div>
                  <div><span>❤</span>&nbsp;&nbsp;&nbsp;Vivamus sed nunc sed ligula rhoncus sit amet eu elit.</div>
                  <div><span>❤</span>&nbsp;&nbsp;&nbsp;Curabitur in ipsum vel ipsum vehicula congue.</div>
                  </div>
                  <div class="home_bigimg_but">purchase</div>
             </div>
           </div>
         </div>
       </div>
   
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to our avada agency",
      Everything: "Everything you need to have in order to build a stunning website",
      Our: "Our Works",
      demas: "我是绑定的数据",
      ins:false,
      nufd:[],
    };
  },
  components:{
  },
  methods: {
    logo () {
       this.$store.commit("setCity", "点击了logo");
    },
    calculate () {
          //  this.Our = this.$store.state.city
    },
    click() {
      console.log("data里面的数据")
      this.ins =  !this.ins
      var _this = this;
      axios
        .get("https://hi-prms.hld-yun.com/sue/Statisties/GetAlert", {
          params: {
            token:"z2fXSwqkljdcVppt5BAnIUhXJ78m3ChhiROyALqRTke8xou_FNXqNg==.6iC5pe-4cYGKBEf06G3OjFEcj0iJwZJ4IpzsTOu1Eyf5pvIoYnAbyZ-A0A0ZGcqGQZftRX_8-vDbGJmSB1rpDQHUvWZiA0b4fCkYS1i3gMSpdZlLeGEbAN7-GBhkdXTdCn00LZZ-sgjG5AYRbJ0OAdM8zhH_63eRHojqKesU3TG2FwueAvqvZVt1Cc-NSomL8rCv864Pg7UeWTMNhAvLWIdAXcFkZVrK8946W0wSyOSc2pLhs7H9KDE6qi-xKptcLN2lvWi6xjiKxpbXmVqQLDE6qi-xKptc4ib8zMLsn2oOHUGuilBVAeLyQyryQI1yqe9vR1e2E2j-usXAvHOpTbZqQJn_1iQA2MuBeov--_dMhlaQ_tBPZMSRKPsY5VAEMWIiHx8nOkj8EHvjVgZhb-ns6JIpaM198ICdK0pxhKovy6MMqFOg6mgwzg6-dB33a9rmwFzqs1p6M_Fga0rSvegen_CzqNQieYcJfbayoCjk8fGZCs-1VtC-89jorBuvh8bjbowDQTok519vBw23ERlqRlt4ywvcB8iaeYIrAEbgMBpXsUtyWw==.0PKIKyCowNAIG2tEnVvNwluWNfTf4eINe3QUj_dx-EU=",
            BookId: "",
            TerId: "",
            AmmId: "",
            StartTime: "2019-3-1",
            EndTime: "2019-3-18",
            ErcType: "",
            AmmAdd: "",
            Sys_Type: 0,
            Order: 1,
            PageIndex: 2,
            PageSize: 20,
            ReadFlag: -1
          }
        })
        .then(function(response) {
          response = JSON.parse(response.data);
          console.log("后端数据");
          console.log(response.data.rowData);
          _this.demas = response.data.rowData;
          _this.nufd = response.data.rowData
        })
        .catch(function(error) {
          console.log("请求失败");
          console.log(error);
        });
    },
    skip() {
      this.$router.push("/newp");
    },
    fuclick(e){
      console.log("父")
      console.log(e)
    }
  },
    mounted() {
    console.log("获取VUEX的数据")
    console.log(this.$store.state.city)
    this.$store.commit("setCity", "数据改变了");
    this.Our = this.$store.getters.getCityFn
  }
};
</script>


