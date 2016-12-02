/**
 * Created by slipkinem on 2016/12/2.
 */
'use strict'

import Vuex from 'vuex'
import Vue from 'vue'

import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const state = {
  articles: []
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
