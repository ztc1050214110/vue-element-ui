<style scoped>

</style>
<template>

  <div class="content">
    <homeTop></homeTop>
    <homeBott></homeBott>
  </div>
</template>

<script>
import axios from "axios";
import homeBott from "./homeBott";
import homeTop from "./homeTop";
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
    homeTop,
    homeBott,
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
    }
  }
};
</script>


