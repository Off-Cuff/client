<template>
  <div class="container">

    <div class="container">
      <div class="columns">
        <div class="column is-one-third"></div>

        <div class="column">
          <p class="has-text-centersied title-padding">
            <h1 class="title is-2 head">Profile</h1>
          </p>
          <div class="signup-lnk">
            <button @click="newClass = !newClass" class="button is-primary is-smedium login-btn">New Class Form</button>
          </div>

          <form class="">
            <div class="">
                <input v-show="newClass" v-model="titled" class="input is-large" type="text" placeholder="Class Name">
            </div>

            <div class="" v-show="newClass">
              <button @click.prevent="formHandler" class="button is-primary is-smedium login-btn" to="/Classes">Add Class</button>
            </div>
          </form>

          <p class="has-text-centersied title-padding">
            <h1 class="title is-2"><u>Class List</u></h1>
            <ul>
              <li  class="title is-medium list" @click="addClassId(c.id)" v-for="c in classes">
                <a class="is-2">
                <!-- <router-link :to="{name: 'Sessions', params: {host_id: hostId, class_id: c.id}}"></router-link> -->
                {{ c.title }}
                </a>
            </li>
            </ul>
          </p>
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
      newClass: false,
      hostId: this.$route.params.id,
      classId: '',
      titled: '',
      getURL: 'http://localhost:3000/api/v1/host/' + this.$route.params.id + '/classes',
      postURL: 'http://localhost:3000/api/v1/host/create-class',
      classes: [],
      classesCreated: ''
    }
  },
  mounted () {
    console.log('param: ', this.$route.params.id)
    this.getClasses()
  },
  methods: {
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
