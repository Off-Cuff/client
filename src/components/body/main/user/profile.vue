<template>
  <div class="container">

    <div class="container">
      <div class="columns">
        <div class="column is-one-third">
          <a @click="go">back</a>
        </div>

        <div class="column">
          <p class="has-text-centersied title-padding">

          </p>
          <!-- <div class="signup-lnk">
            <button @click="newClass = !newClass" class="button is-primary is-smedium login-btn">New Class Form</button>
          </div>

          <form class="">
            <div class="">
                <input v-show="newClass" v-model="titled" class="input is-large" type="text" placeholder="Class Name">
            </div>

            <div class="" v-show="newClass">
              <button @click.prevent="formHandler" class="button is-primary is-smedium login-btn" to="/Classes">Add Class</button>
            </div>
          </form> -->

          <p class="has-text-centersied title-padding">
            <h1 class="title is-2"><u>{{this.profileName}}'s Class List</u></h1>
              <nav class="panel">
                <div class="panel-block">
                  <button @click="newClass = !newClass"
                          v-show="!newClass"
                          class="button is-primary is-fullwidth">
                    New Class
                  </button>

                  <button v-show="newClass"
                          @click.prevent="formHandler"
                          class="button is-primary login-btn is-fullwidth"
                          to="/Classes">
                          Add Class
                  </button>
                  <button v-show="newClass" class="modal-default-button button is-danger" id="show-modal" @click="newClass = !newClass">X</button>
                </div>
                <div class="panel-block">
                  <form class="">
                    <div class="">
                        <input v-show="newClass" v-model="titled" class="input is-fullwidth is-small" type="text" placeholder="Class Name">
                    </div>

                    <div class="" v-show="newClass">
                      <!-- <button @click.prevent="formHandler" class="button is-primary is-medium login-btn" to="/Classes">Add Class</button> -->
                    </div>
                  </form>
                </div>
                <span  class="title is-medium list" @click="addClassId(c.id)" v-for="c in classes">
                    <a class="panel-block is-active">
                      <div class=" is-fullwidth is-pulled-left">
                        {{ c.title }}
                      </div>
                    </a>

              </span>
              </nav>
          </p>
        </div>
        <!-- <div class="column"><a @click="this.deleteClass()">delete class</a></div> -->
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      profileName: localStorage.name,
      newClass: false,
      hostId: this.$route.params.id,
      classId: '',
      titled: '',
      getURL: 'https://off-cuff.herokuapp.com/api/v1/host/' + this.$route.params.id + '/classes',
      postURL: 'https://off-cuff.herokuapp.com/api/v1/host/create-class',
      deleteURL: '',
      classes: [],
      classesCreated: ''
    }
  },
  mounted () {
    console.log('name: ', this.profileName)
    console.log('param: ', this.$route.params.id)
    this.getClasses()
  },
  methods: {
    go () {
      clearInterval(this.timerId)
      this.$router.go(-1)
    },
    post: function () {
      console.log(this.titled)
      this.$http.post(this.postURL, {
        title: this.titled,
        host_id: this.$route.params.id,
        retro_id: 3
      }).then((response) => {
        this.getClasses()
        console.log(response)
      })
    },
    getClasses: function () {
      console.log('in?')
      console.log(this.getURL)
      this.$http.get(this.getURL).then((data) => {
        this.classes = data.body
        console.log('classes array??', this.classes)
      })
    },
    formHandler: function () {
      this.post()
      this.newClass = !this.newClass
    },
    sessionRoute: function () {
      console.log('host: ', this.hostId, ' ', 'class: ', this.classId)
      this.$router.push({name: 'Sessions', params: {host_id: this.hostId, class_id: this.classId}})
    },
    addClassId: function (id) {
      this.classId = id
      this.sessionRoute()
      console.log('addClassId: ', this.classId)
    },
    deleteClass: function (id) {
      this.$router.delete()
    }
  }
}
</script>

<style lang="scss" src="bulma"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head{
  margin-top: 10vh;
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
