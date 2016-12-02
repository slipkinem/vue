/**
 * Created by slipkinem on 2016/12/2.
 */
'use strict'
import Vue from 'vue'
import * as types from './mutation-types'

export default {
  getArticles ({ commit }) {
    return Vue.http.get('/articles')
      .then(articles => commit(types.GET_ARTICLES, JSON.parse(articles.body)))
  }
}
