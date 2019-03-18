<template>
  <div class="content">
    <div>我是首页</div>
    <home :nufd="nufd"></home>
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
// import { constants } from 'http2';
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      demas: "我是绑定的数据",
      ins:false,
      nufd:100,
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
            token:"z2fXSwqkljdcVppt5BAnIUhXJ78m3ChhiROyALqRTke8xou_FNXqNg==.6iC5pe-4cYFrbwkDvycDOiW_rVLr5UEMCwuhZQPBJWB6DxVCuDWi25HkD00NwYgzYAg_pG03qr7bGJmSB1rpDQHUvWZiA0b4fCkYS1i3gMSpdZlLeGEbAKjjlAQ1r1OEg8QVqgXs-fJ32Gv0_FHOlNM8zhH_63eRHojqKesU3TG2FwueAvqvZVt1Cc-NSomL8rCv864Pg7WGQHVpnMkW8K9ADeDYhLHvcfSDeD_YCJSc2pLhs7H9KDE6qi-xKptcLN2lvWi6xjiKxpbXmVqQLDE6qi-xKptc4ib8zMLsn2oOHUGuilBVAeLyQyryQI1yqe9vR1e2E2j-usXAvHOpTbZqQJn_1iQA2MuBeov--_dMhlaQ_tBPZMxu27Nnvk6PRh_itEaMTob8EHvjVgZhb-ns6JIpaM198ICdK0pxhKovy6MMqFOg6mgwzg6-dB33a9rmwFzqs1p6M_Fga0rSvegen_CzqNQieYcJfbayoCjk8fGZCs-1VtC-89jorBuvh8bjbowDQTok519vBw23ERlqRlt4ywvcB8iaeYIrAEbgMBpXsUtyWw==.kh-hZMcO8k9rrtFFXl034BAyEg1tvfC8sqsYCLKNPhE=",
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
        })
        .catch(function(error) {
          console.log("请求失败");
          console.log(error);
        });
    },
    skip() {
      this.$router.push("/newp");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
