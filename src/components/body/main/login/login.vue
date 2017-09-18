<template>
  <div class="container">

    <div class="container">
      <div class="columns">
        <div class="column is-one-third"></div>
        <div class="column">
          <p class="has-text-centered title-padding">
            <h1 class="title is-2">Log-in</h1>
          </p>
        </div>
        <div class="column"></div>
      </div>
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
            Login
          </button>
          <br>
          <div class="signup-lnk">
            <router-link to="/Signup"><\hey, need to sign-up?\></router-link>
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
  margin-top: 7%;
}
.login-btn{
  margin: 5%;
}
.signup-lnk{
  margin: 5%;
  padding-bottom: 15%;
}

</style>
