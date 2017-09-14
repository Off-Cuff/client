<template>
  <div id="app">
    <app-header v-bind:title = 'title'></app-header>
    <router-view ></router-view>
    <app-footer v-bind:title = 'title'></app-footer>
  </div>
</template>

<script>
import Header from './components/Body/Main/Header.vue'
import Footer from './components/Body/Main/Footer.vue'

export default {
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 3%;
}

</style>
