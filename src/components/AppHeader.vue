<template>
    <nav>
        <div class="container">
            <a class="brand" href="#">
                <img class="logo" :src="logoSrc" alt="">
            </a>
            <div class="menu">
                <span>{{user}}</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#">注册</a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#">登录</a>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/scss/style";
    nav {
        width: 100%;
        height: 60px;
        line-height: 60px;
        background: $defaultBgColor;
        .container{
            width: 1200px;
            min-width: 960px;
            max-width: 1400px;
        }
        .brand{
            width: 120px;
            display: block;
            float: left;

        }
        .logo{
            width: 100%;
        }
        .menu {
            float: right;
            font-size: 14px;
            color: #fff;
            a{
                color: #ccc;
            }
        }
    }
</style>

<script>
  export default {
    name: 'app-header',
    data () {
      return {
        user: 'slipkinem',
        logoSrc: '//o4j806krb.qnssl.com/public/images/cnodejs_light.svg'
      }
    }
  }
</script>