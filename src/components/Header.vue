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
                <h1 class="navbar-item menu">
                  <a href="#"> <\About\>
                  </a> -- <a href="#"> <\Premium\>
                  </a> --||--
                  <a href="#"><\log-in\></a>
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
  h1{
    margin-top:-3%;
    opacity: inherit;
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
    padding-right: 45%;
    padding-bottom: 5%;
    letter-spacing: 3px;
    word-spacing: 5px;
  }
  a{
    padding: 0, 2%;
  }
</style>
