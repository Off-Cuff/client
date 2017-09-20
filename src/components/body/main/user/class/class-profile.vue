<template>
  <div class="container">

    <div class="container">
      <div class="columns head">
        <div class="column is-one-third"></div>

        <div class="column">
          <p class="has-text-centersied title-padding">
            <h1 class="title is-2"><u>Sesion List</u></h1>
            <ul>
              <li class="title is-medium list" v-for="s in sessions"><router-link to="/Timer">{{ s.title }}</router-link></li>
            </ul>
          </p>
        </div>

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
        </div>
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
      getURL: 'http://localhost:3000/api/v1/host/class/sessions/' + this.$route.params.class_id,
      postURL: 'http://localhost:3000/api/v1/host/create-session',
      sessions: [],
      classesCreated: ''
    }
  },
  mounted () {
    console.log('host: ', this.$route.params.host_id, ' ', 'class: ', this.$route.params.class_id)
    this.getSessions()
  },
  methods: {
    post: function () {
      console.log('post')
      this.$http.post(this.postURL, {
        title: this.titled,
        pic_quantity: '3',
        pic_duration: '30',
        class_id: this.$route.params.host_id
      }).then((response) => {
        console.log(response)
        this.getSessions()
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
        console.log(this.sessions)
      })
    }
  },
  formHandler: function () {
    this.post()
    this.newClass = !this.newClass
  }
}
</script>

<style lang="scss" src="bulma"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head{
  margin-top: 10vh;
}
.list{
  margin-bottom: 10%;
}
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
