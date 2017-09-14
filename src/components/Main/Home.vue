<template>
  <div id="app">
    <app-background></app-background>
  </div>
</template>

<script>
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  // name: 'app'
  data () {
    return {
      title: 'Off-the-Cuff'
    }
  },
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>

<style lang="scss" src="bulma"></style>

<style lang="scss">
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
h1{
  border-color: black;
}
</style>
