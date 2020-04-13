<style scoped lang="less">
.nav1 {
  width: 100%;
  height: 1.875rem;
  background-color: #555;
  border-bottom: 1px solid #ecc000;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: #ffffff;
  }
  a:hover {
    color: #cd0200;
  }
  ul {
    margin-right: 1.25rem;
    li {
      display: inline-block;
      padding: 0 1rem;
    }
    li + li {
      border-left: 1px solid #999;
    }
  }
}

.telephone {
  margin-left: 1.25rem;
  font-size: 0.75rem;
}
.nav2 {
  width: 100%;
  // height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    margin-left: 0.625rem;
  }
  ul {
    margin-right: 1.25rem;
    height: 100%;
    li {
      height: 100%;
      line-height: 3.5rem;
      display: inline-block;
      padding: 0 1.25rem;
      a {
        color: #7c7a65;
        font-size: 1rem;
        font-weight: bold;
      }
      a:hover {
        color: #cd0200;
      }
    }
    li + li {
      border-left: 1px solid #f0ede9;
    }
  }
}
//响应式代码开始
//大型显示器
@media screen and (max-width: 1280px) {
  .nav1 {
    background-color: #555;
  }
}
//中型显示器
@media screen and (min-width: 481px) and (max-width: 1280px) {
  .nav1 {
    background-color: darkcyan;
    ul > li {
      padding: 0.5rem;
    }
  }
  .nav2 {
    flex-direction: column;
    padding-top: 1rem;
    box-sizing: border-box;
    ul li {
      padding: 0 0.8rem;
    }
  }
}
//小型显示器
@media screen and (max-width: 480px) {
  .nav1 {
    background-color: sienna;
    li:nth-child(3) {
      display: none;
    }
    li:nth-child(4) {
      display: none;
    }
  }
  .telephone {
    display: none;
  }

  .nav2 ul li:nth-child(1) {
    display: none;
  }
  .nav2 {
    flex-direction: column;
    padding-top: 1rem;
    box-sizing: border-box;
    ul li {
      padding: 0 0.8rem;
    }
  }
}
//响应式代码结束
</style>
<template>
  <div class="content">
    <header>
      <div class="nav1">
        <div class="telephone">理财热线: 400-8888-8888</div>
        <ul>
          <li>
            <a href="">登录</a>
          </li>
          <li>
            <a href="">快速注册</a>
          </li>
          <li>
            <a href="">关于</a>
          </li>
          <li>
            <a href="">帮助</a>
          </li>
          <li>
            <a href="">下载APP</a>
          </li>
        </ul>
      </div>
      <div class="nav2">
        <img src="../img/logo@1x.png" alt="">
        <ul>
          <li>
            <a href="">首页</a>
          </li>
          <li>
            <a href="">投资频道</a>
          </li>
          <li>
            <a href="">理财频道</a>
          </li>
          <li>
            <a href="">新手专区</a>
          </li>
          <li>
            <a href="">安全保障</a>
          </li>
        </ul>
      </div>
    </header>
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


