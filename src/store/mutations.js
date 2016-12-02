/**
 * Created by slipkinem on 2016/12/2.
 */
'use strict'
import * as types from './mutation-types'

export default {
  [types.GET_ARTICLES] (state, articles) {
    state.articles = articles
  }
}
