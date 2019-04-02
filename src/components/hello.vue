<template>
  <div class="content">
    <div>我是首页</div>
    <home :nufd="nufd" @fuclick="fuclick"></home>
    <button @click="click">点我触发方法请求数据</button>
    <button @click="skip">点我进入新页面</button>
  <ul>
    <li v-for="item in demas" v-show="ins">{{item.CollTime}}</li>
  </ul>
    
  </div>
</template>

<script>
import axios from "axios";
import home from "./components/home";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      demas: "我是绑定的数据",
      ins:false,
      nufd:[],
    };
  },
  components:{
    home,
  },
  methods: {
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
      console.log("获取vuex的数据")
      console.log(this.$store.state.showFooter)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
