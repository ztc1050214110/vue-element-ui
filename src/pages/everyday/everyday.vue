<style scoped lang="less">
    .content {
        height: 100%;
        width: 100%;
        background-color: #eeeeee;
    }
    .homeIMG {
        width: 100%;
    }
    // .backIMG {
    //     width: 100%;
    //     height: 800px;
    //     background-image: url("https://www.missfresh.cn/img/home/header.jpg");
    //     background-size: 100%;
    //     position: relative;
    //     ul {
    //         font-size: 15px;
    //         font-family: SourceHanSansCN-Regular;
    //         font-weight: 400;
    //         width: 500px;
    //         position: absolute;
    //         left: 46%;
    //         top: 6%;
    //         display: flex;
    //         justify-content: space-around;
    //         li {
    //             list-style-type: none;
    //             color: #fff;
    //             line-height: 30px;
    //             opacity: 0.9;
    //             cursor: pointer;
    //         }
    //     }
    // }
    @media (min-width: 400px) {
        .backIMG {
            width: 100%;
            height: 800px;
            position: relative;
            background-color: #ffffff;
        }
    }
    @media (min-width: 800px) {
        .backIMG {
            width: 100%;
            height: 800px;
            position: relative;
            background-color: red;
        }
    }
    @media (min-width: 1200px) {
        .backIMG {
            width: 100%;
            height: 800px;
            background-image: url("https://www.missfresh.cn/img/home/header.jpg");
            background-size: 100%;
            background-color: red;
            position: relative;
            ul {
                font-size: 15px;
                font-family: SourceHanSansCN-Regular;
                font-weight: 400;
                width: 500px;
                position: absolute;
                left: 46%;
                top: 6%;
                display: flex;
                justify-content: space-around;
                li {
                    list-style-type: none;
                    color: #fff;
                    line-height: 30px;
                    opacity: 0.9;
                    cursor: pointer;
                }
            }
        }
    }
    .homeLogo {
        width: 170px;
        height: 70px;
        position: absolute;
        top: 3%;
        left: 2%;
    }
    .language {
        width: 100px;
        position: absolute;
        left: 90%;
        top: 7%;
        display: flex;
        justify-content: space-around;
        color: #fff;
        opacity: 0.9;
        cursor: pointer;
    }
    .parcel_left {
        position: absolute;
        top: 22%;
        left: 6%;
        color: #ffffff;
        font-size: 40px;
        font-family: SourceHanSansCN-Regular;
        p {
            font-size: 24px;
        }
    }
    .code {
        margin-top: 30px;
        display: flex;
        p {
            font-size: 14px;
        }
    }
    .QRcode {
        width: 140px;
        height: 140px;
    }
</style>
<template>
    <div class="content">
        <div class="backIMG">
            <img src="https://www.missfresh.cn/img/logowhite.png" class="homeLogo" alt="">
            <ul>
                <li>
                    首页
                </li>
                <li>
                    APP下载
                </li>
                <li>
                    优鲜企业购
                </li>
                <li>
                    加盟微仓
                </li>
                <li>
                    新闻动态
                </li>
                <li>
                    联系我们
                </li>
            </ul>
            <div class="language">
                <div>中文</div>
                <div>|</div>
                <div>English</div>
            </div>
            <div class="parcel_left">
                <h1>精选2,000款商品</h1>
                <h1>最快1小时送达</h1>
                <p style="margin-top: 60px;">新人注册领取30元礼包</p>
                <p>扫码下载app购买</p>
                <div class="code">
                    <div class="code_item">
                        <img class="QRcode" src="https://www.missfresh.cn/img/home/iosma.png" alt="">
                        <p>ios下载</p>
                    </div>
                    <div class="code_item" style="margin-left:30px;">
                        <img class="QRcode" src="https://www.missfresh.cn/img/home/anzhuo.png" alt="">
                        <p>安卓下载</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //https://www.missfresh.cn/
    import {
        WOW
    } from "wowjs";
    import axios from "axios";
    export default {
        name: "HelloWorld",
        data() {
            return {
            };
        },
        components: {},
        methods: {},
        mounted() {}
    };
</script>


