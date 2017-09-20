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
        <input v-model="loginCreds.email" class="input is-large" type="email" placeholder="Email">
      </p>
    </div>
    <div class="field login-btn">
      <p class="control has-icons-left">
        <input v-model="loginCreds.password" class="input is-large" type="password" placeholder="Password">
      </p>
    </div>
    <div class="columns">
      <div class="column is-one-third"></div>
      <div class="column">
        <p class="control has-text-centered">

            <!-- <router-link class="button is-primary is-large login-btn" to=""></router-link> -->

          <br>
          <div class="signup-lnk">
            <button @click.prevent="login" class="button is-primary is-large ">
              Login
              <router-link :to="{name: 'Classes', params: {id: this.userId}}"></router-link>
            </button>
            <div class="signup-lnk">
              <router-link to="signup">hey, need to signup?</router-link>
            </div>
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
      loginCreds: {
        email: '',
        password: ''
      },
      userId: '1'
    }
  },
  methods: {
    login: function () {
      this.$http.post('https://off-cuff.herokuapp.com/auth/login', {
        email: this.loginCreds.email,
        password: this.loginCreds.password
      }).then((data) => {
        this.userId = data.body.host.id
        console.log('this.userId ', this.userId)
        console.log(data)
        this.userId = data.body.host.id
        console.log(this.userId)
        localStorage.token = data.body.token
        console.log('token', localStorage.token)
        localStorage.id = data.body.host.id
        console.log('id', localStorage.id)
        localStorage.name = data.body.host.name
        console.log('name', localStorage.name)
        localStorage.email = data.body.host.email
        console.log('email', localStorage.email)
        alert('Login Successful!')
        // console.log('long', localStorage.token, ' ', localStorage.id, ' ', localStorage.name, ' ', localStorage.email)
        this.userId = data.body.host.id
        this.$router.push({name: 'Classes', params: {id: data.body.host.id}})
      })
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
/*.login-btn{
  margin: 5%;
}*/
.signup-lnk{
  margin: 5%;
  padding-bottom: 15%;
}

</style>
