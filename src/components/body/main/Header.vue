<template>
  <div class="vue-header">
    <header>
      <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-menu nav">
            <div class="navbar-start">
              <!-- navbar items -->
                <router-link to="/">
                    <span class="noWrap title is-1 navbar-brand">{{ title }}</span>
                </router-link>
            </div>
            <div class="navbar-end">
              <!-- navbar items -->
                <h1 class="navbar-item menu is-size-5 has-text-weight-semibold">
                  <router-link to="/about"><\About\></router-link><p>--</p>
                  <div v-show="this.showLogged">
                    <router-link to="/host/1/Classes"><\Hi, {{ nameUser }}\></router-link>
                  </div>
                  <div v-show="!this.showLogged">
                    <router-link to="/login"><\Log-in\></router-link>
                  </div>
                  <p>--</p><router-link to="/Premium"><\Premium\></router-link>
                </h1>
            </div>
          </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showLogged: false,
      nameUser: localStorage.name,
      userId: localStorage.id
    }
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  created () {
    console.log('created')
    this.$bus.$on('logged', () => {
      console.log('created () in header triggered.')
      window.location.reload()
    })
  },
  mounted () {
    this.signedIn()
  },
  methods: {
    signedIn: function () {
      console.log('name:', this.nameUser)
      if (localStorage.id) {
        this.showLogged = true
        console.log('true')
      } else {
        this.showLogged = false
        console.log('false')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style lang="scss" src="bulma"></style> -->

<style scoped>
  .noWrap{
    white-space: nowrap;
    z-index: 1;
    overflow: visible;
  }
  .title{
    padding-left: 15%;
  }
  h1{
    margin-top:-3%;
    opacity: inherit;
    padding-right: 12px;
  }
  header{
    margin-top: 1vh;
    opacity: inherit;
    z-index:1;
    position: relative;
  }
  .nav{
    background-color: off-white;
  }
  .menu{
    padding-left: 5%;
    padding-top: 7%;
    padding-right: 23%;
    padding-bottom: 5%;
    letter-spacing: 3px;
  }
  a{
    padding: 0, 2%;
  }
  img{
    padding-bottom: -5%;
  }
</style>
