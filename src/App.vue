<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view></router-view> -->
    <app-header v-bind:title = 'title'></app-header>
    <app-background></app-background>
    <app-buttons></app-buttons>
    <app-footer v-bind:title = 'title'></app-footer>


  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import BackgroundImage from './components/LandingPage/BackgroundImage.vue'
import Buttons from './components/LandingPage/Buttons.vue'
export default {
  // name: 'app'
  data () {
    return {
      title: 'Off-the-Cuff'
    }
  },
  components: {
    'app-header': Header,
    'app-background': BackgroundImage,
    'app-footer': Footer,
    'app-buttons': Buttons
  }

}
</script>

<style lang="scss" src="bulma"></style>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
