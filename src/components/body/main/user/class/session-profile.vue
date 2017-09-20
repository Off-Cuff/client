<template>
  <div class="container">

    <div class="container">
      <div class="columns">
        <div class="column is-one-third"></div>



        <div class="column">
          <div class="signup-lnk">
            <button @click="newSession = !newSession" class="button is-primary is-smedium login-btn" to="/profile">New Session</button>
          </div>

          <form v-show="newSession">
            <div class="">
                <input  v-model="titled" class="input is-large" type="text" placeholder="Session Name">
            </div>

            <div class="">
              <button @click.prevent="formHandler" class="button is-primary is-smedium login-btn" >Add Session</button>
            </div>
          </form>
          <div class="">
                <h1 class="title is-1">Session List</h1>

          </div>

        </div>

        <div class="column"></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      newSession: false,
      titled: '',
      getURL: 'https://off-cuff.herokuapp.com/api/v1/host/class/sessions/' + this.$route.params.id,
      postURL: 'https://off-cuff.herokuapp.com/api/v1/host/create-session',
      sessions: [],
      sessionsCreated: ''
    }
  },
  mounted () {
    console.log(this.$route.params.id)
    this.getSessions()
  },
  methods: {
    post: function () {
      console.log(this.titled)
      this.$http.post(this.postURL, {
        title: this.titled,
        pic_quantity: 3,
        pic_duration: 30,
        class_id: this.$route.params.id
      }).then((response) => {
        console.log(response)
      })
    },
    formHandler: function () {
      this.post()
      this.getSessions()
      this.newSession = !this.newSession
    },
    getSessions: function () {
      console.log('in?')
      console.log(this.getURL)
      this.$http.get(this.getURL).then((data) => {
        this.sessions = data.body
      })
    }
  }
}
</script>

<style lang="scss" src="bulma"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1{
  margin-top: 10%;
}*/
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
