<style scoped lang="less">
.content{
 margin-top: 6px;
}
.About{
    width: 90%;
    height: 12.5rem;
    background-color: #ffffff;
    margin: 0 auto;
    display: flex;
    img{
        width:10rem;
        height: 2rem;
        filter: grayscale(100%);
        margin-top: 2.5rem;
        margin-left: 3.4375rem;
    }
}
.list{
    width: 60%;
    height: 100%;
    margin-left: 10%;
    display: flex;
    justify-content: space-between ;
    .item{
        width: 12%;
        height: 100%;
        padding-top: 2.5rem;
        box-sizing: border-box;
        line-height: 1.625rem;
    cursor:pointer

    }
}
.we{
    color: #000;
    font-size: 14px;
}
.we2{
    color: #666666;
    font-size: 12px;
    display: block;
}
.bottLogo{
    width: 100%;
    height: 9.375rem;
    background-color: #eeeeee;
    display: flex;
    flex-direction: column;
justify-content: center; 
align-items: center; 
    }
    .logoBox{
        width: 40%;
        height: 40%;
        display: flex;
        justify-content: space-around;
        img{
            width: 5rem;
            height: 100%;
        }
    }
    .bottTXT{
        color: #999999;
        font-size: .75rem;
        margin-top: .8rem;
    }
    //响应式代码开始
//大型显示器
@media screen and (max-width: 1280px) {

}
//中型显示器
@media screen and (min-width: 481px) and (max-width: 1280px) {
.About>img{
    display: none;
}
.list{
    width: 100%;
    margin-left: 0%;
    justify-content: space-around;
    .item{
        width: 18%;
        padding-left: 5%;
        box-sizing: border-box;
    }
}
}
//小型显示器
@media screen and (max-width: 480px) {
  .About>img{
    display: none;
}
.list{
    width: 100%;
    margin-left: 0%;
    justify-content: space-around;
    .item{
        width: 18%;
              padding-left: 5%;
        box-sizing: border-box;
    }
}
}
//响应式代码结束
</style>
<template>
    <div class="content">
        <div class="About">
            <img src="../img/logo@1x.png" alt="">
            <div class="list">
                <div class="item">
                    <div class="we">关于我们</div>
                    <a class="we2">公司介绍</a>
                    <a class="we2">业务介绍</a>
                    <a class="we2">业务模式</a>
                    <a class="we2">合作机构</a>
                    <a class="we2">服务协议</a>
                </div>
                <div class="item">
                    <div class="we">风险防范</div>
                    <a class="we2">账户安全</a>
                    <a class="we2">安全保障</a>
                </div>
                <div class="item">
                    <div class="we">理财产品</div>
                    <a class="we2">固定期限</a>
                    <a class="we2">债券/散标</a>
                </div>
                <div class="item">
                    <div class="we">交易帮助</div>
                    <a class="we2">购买</a>
                    <a class="we2">赎回</a>
                    <a class="we2">提现</a>
                </div>
                <div class="item">
                    <div class="we">机构服务</div>
                    <a class="we2">机构中心</a>
                    <a class="we2">合作联系</a>
                </div>
            </div>
        </div>
        <!-- 底部图标 -->
        <div class="bottLogo">
            <div class="logoBox">
                <img src="https://img-blog.csdn.net/20161101053409110" alt="">
                <img src="https://img-blog.csdn.net/20161101052848639" alt="">
                <img src="https://img-blog.csdn.net/20161101052854749" alt="">
                <img src="https://img-blog.csdn.net/20161101052858530" alt="">
                <img src="https://img-blog.csdn.net/20161101052902812" alt="">
                <img src="https://img-blog.csdn.net/20161101053013437" alt="">
            </div>
            <div class="bottTXT">北京某互联网金融公司版权所有 2015-2020</div>
        </div>
    </div>
</template>

<script>
export default {
  name: "xys",
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {}
};
</script>


