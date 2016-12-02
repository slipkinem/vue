/**
 * Created by slipkinem on 2016/12/1.
 */
'use strict'
import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/block/article.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/article', component: Article
    },
    {
      // 懒加载
      path: '/eliteArticle', component: resolve => require(['../components/block/eliteArticle.vue'], resolve)
    },
    {
      path: '*', redirect: '/article'
    }
  ]
})
