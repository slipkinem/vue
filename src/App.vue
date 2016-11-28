<template>
  <div id="app">
    <app-header></app-header>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Hello from './components/Hello'
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import AppContent from './components/AppContent'

export default {
  name: 'app',
  components: {
    Hello, AppFooter, AppHeader, AppContent
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
