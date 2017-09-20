<template>
  <div class="container">

    <div class="container list">
      <div class="columns head">
        <div class="column is-one-third">
            <a @click="go">back?</a>
        </div>

        <div class="column">
          <h1 class="title is-2"><u>Session List</u></h1>
          <nav class="panel">
            <div class="panel-block">
              <button @click="newSession = !newSession"
                      v-show="!newSession"
                      class="button is-primary is-fullwidth">
                New Session
              </button>

              <button v-show="newSession"
                      @click.prevent="formHandler"
                      class="button is-primary login-btn is-fullwidth"
                      to="/Classes">
                      Add Session
              </button>
              <button v-show="newSession" class="modal-default-button button is-danger" id="show-modal" @click="newSession = !newSession">X</button>
            </div>
            <div class="panel-block">
              <form class="">
                <div class="">
                    <input v-show="newSession" v-model="titled" class="input is-fullwidth is-small" type="text" placeholder="Class Name">
                </div>

                <div class="" v-show="newSession">
                  <!-- <button @click.prevent="formHandler" class="button is-primary is-medium login-btn" to="/Classes">Add Class</button> -->
                </div>
              </form>
            </div>
            <span  class="title is-medium" v-for="s in sessions">
                <span class="panel-block is-active">
                  <div class=" ">
                    <router-link to="/Timer">
                      <div class="">
                        {{ s.title }}
                      </div>
                    </router-link>
                  </div>
                </span>

          </span>
          </nav>
        </div>

        <div class="column"></div>
          <!-- <div class="signup-lnk">
            <button @click="newSession = !newSession" class="button is-primary is-smedium login-btn" to="/profile">New Session</button>
          </div>

          <form v-show="newSession">
            <div class="">
                <input  v-model="titled" class="input is-large" type="text" placeholder="Session Name">
            </div>

            <div class="">
              <button @click.prevent="formHandler" class="button is-primary is-smedium login-btn" >Add Session</button>
            </div>
          </form> -->
          <!--  -->


          <!--  -->
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
      getURL: 'https://off-cuff.herokuapp.com/api/v1/host/class/sessions/' + this.$route.params.class_id,
      postURL: 'https://off-cuff.herokuapp.com/api/v1/host/create-session',
      sessions: [],
      classesCreated: ''
    }
  },
  mounted () {
    console.log('host: ', this.$route.params.host_id, ' ', 'class: ', this.$route.params.class_id)
    this.getSessions()
  },
  methods: {
    go () {
      clearInterval(this.timerId)
      this.$router.go(-1)
    },
    post: function () {
      console.log('post')
      this.$http.post(this.postURL, {
        title: this.titled,
        pic_quantity: '3',
        pic_duration: '30',
        class_id: this.$route.params.class_id
      }).then((response) => {
        console.log('got in post then()?')
        this.getSessions()
      })
    },
    formHandler: function () {
      console.log('get in?')
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
    this.newSession = !this.newSession
  }
}
</script>

<style lang="scss" src="bulma"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head{
  margin-top: 5%;
}
.list{
  margin-bottom: 15%;
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
