<template>
  <div class="vue-header">
    <header>
      <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-menu nav">
            <div class="navbar-start">
              <!-- navbar items -->
              <a class="navbar-item" href="#">
                <h1 class="title is-1 navbar-brand">{{ title }}</h1>
              </a>
            </div>
            <div class="navbar-end">
              <!-- navbar items -->
                <h1 class="navbar-item menu is-size-5 has-text-weight-semibold">
                  <router-link to="/about"><\About\></router-link>

                  </a> -- <a href="#"> <\Premium\>
                  </a> --
                  <a href="#"><\Log-in\></a>
                </h1>
            </div>
          </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- <style lang="scss" src="bulma"></style> -->

<style scoped>
  .title{
    padding-left: 15%
  }
  h1{
    margin-top:-3%;
    opacity: inherit;
    padding-right: 15px;
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
    /*padding-left:35%;*/
    padding-top: 7%;
    padding-right: 10em;
    padding-bottom: 5%;
    letter-spacing: 3px;
  }
  a{
    padding: 0, 2%;
  }
</style>
