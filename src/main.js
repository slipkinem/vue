import Vue from 'vue'
import App from './App'
import StyleInjector from './StyleInjector.vue'
import VueResource from 'vue-resource'
import router from './routers'
import store from './store'

/* eslint-disable no-new */
Vue.use(VueResource)

new Vue({
  el: '#app',
  router,
  store,
  ...App,
  StyleInjector
})
