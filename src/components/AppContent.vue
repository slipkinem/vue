<template>
    <div class="main clearfix">
        <div class="content col-xs-8">
            <ul class="menu clearfix">
                <li class="active"><a href="">全部</a></li>
                <li><a href="">精华</a></li>
                <li><a href="">分享</a></li>
                <li><a href="">问答</a></li>
                <li><a href="">招聘</a></li>
            </ul>
            <app-article></app-article>
        </div>
        <div class="right-side col-xs-4">
            <div class="panel">
            </div>
        </div>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss">
    @import "../assets/scss/mixin";
    .main{
        width: 90%;
        font-size: 16px;
        margin: 15px auto;
        .col-xs-8{
            padding: 0;
        }
    }
    .content{
        background: #fff;
        .menu {
            margin: 0;
            background: #eee;
            padding: 10px 5px;
            .active{
                a{
                    @include btn-active;
                }
            }
            li{
                float: left;
                a{
                    @include btn;
                }
            }
        }
    }
    .right-side .panel{
        width: 100%;
        height: 60px;
        background: #fff;
    }
</style>

<script>
  import AppArticle from './block/article'
  export default {
    name: 'app-content',
    components: {AppArticle}
  }
</script>