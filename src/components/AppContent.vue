<template>
    <div class="main clearfix">
        <div class="content col-xs-8">
            <ul class="menu clearfix">
                <router-link
                        to="/article"
                        tag="li">
                    <a href="javascript:void (0)">全部</a>
                </router-link>
                <router-link
                        to="/eliteArticle"
                        tag="li">
                    <a href="javascript:void (0)">精华</a>
                </router-link>
                <li><a href="javascript:void (0)">分享</a></li>
                <li><a href="javascript:void (0)">问答</a></li>
                <li><a href="javascript:void (0)">招聘</a></li>
            </ul>
            <router-view></router-view>
        </div>
        <div class="right-side col-xs-4">
            <div class="panel">
            </div>
        </div>
    </div>
</template>

<style rel="stylesheet/scss" lang="scss">
    @import "../assets/scss/mixin";
    .main{
        width: 90%;
        font-size: 16px;
        margin: 15px auto;
        .col-xs-8{
            padding: 0;
        }
        .content{
            background: #fff;
            .menu {
                margin: 0;
                background: #eee;
                padding: 10px 5px;
                .router-link-active{
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
    }
</style>

<script>
    export default{
      name: 'app-content'
    }
</script>