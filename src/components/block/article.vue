<template>
    <div class="inner">
        <div id="topic-list">
            <div class="cell clearfix" v-for="article in articles">
                <div class="col-xs-2 user-avatar reply-count">
                    <img src="../../assets/img/logo.png" alt="">
                    94/1694
                </div>
                <div class="col-xs-7 topic_title">
                    <span class="topic-top">置顶</span>
                    <a href="">{{article.title}}</a>
                </div>
                <div class="col-xs-2">
                    <a href="">{{article.author}}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" rel="stylesheet/scss">
    @import "../../assets/scss/mixin";
    .cell{
        font-size: 16px;
        padding: 10px;
        cursor: pointer;
        color: #000;
        a{
            color: #888;
            text-decoration:none;
        }
        &:hover{
            background: #eee;
        }
        .topic_title{
            text-align: left;
            margin-left: 1px;
            .topic-top{
                @include btn;
                @include btn-active;
            }
        }
       .user-avatar{
           img{
               padding: 1px;
               width: 30px;
               margin-right: 10px;
           }
       }
       border-bottom: 1px solid #f0f0f0;
       &:last-child{
           border-bottom: 0;
       }
    }
</style>

<script>
  import {mapState, mapActions} from 'vuex'
  export default {
    created () {
      this.getArticles()
    },
    computed: {
      ...mapState(['articles'])
    },
    methods: {
      ...mapActions(['getArticles'])
    }
  }
</script>