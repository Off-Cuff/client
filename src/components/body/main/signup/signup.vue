<template>
  <div class="container">

    <div class="container">
      <div class="columns">
        <div class="column is-one-third"></div>
        <div class="column">
          <p class="has-text-centersied title-padding">
            <h1 class="title is-2">Sign-up</h1>
          </p>
        </div>
        <div class="column"></div>
      </div>
    </div>

    <div class="field login-btn">
      <p class="control has-icons-left has-icons-right">
        <input class="input is-large" type="email" placeholder="Name">
      </p>
    </div>
    <div class="field login-btn">
      <p class="control has-icons-left has-icons-right">
        <input class="input is-large" type="email" placeholder="Email">
      </p>
    </div>
    <div class="field login-btn">
      <p class="control has-icons-left">
        <input class="input is-large" type="password" placeholder="Password">
      </p>
    </div>
    <div class="columns">
      <div class="column is-one-third"></div>
      <div class="column">
        <p class="control has-text-centered">
          <button class="button is-primary is-large login-btn">
            Signup
          </button>
          <br>
          <div class="signup-lnk">
            <router-link to="/">back home</router-link>
          </div>
        </p>
      </div>
      <div class="column"></div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" src="bulma"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title-padding{
  margin-top: 5%;
}
.login-btn{
  margin: 5%;
}
.signup-lnk{
  margin: 5%;
  padding-bottom: 5%;
}

</style>
