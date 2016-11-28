import Vue from 'vue'
import App from './App'
import StyleInjector from './StyleInjector.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App, StyleInjector }
})
