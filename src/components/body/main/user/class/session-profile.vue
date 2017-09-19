<template>
  <div class="container">

    <div class="container">
      <div class="columns">
        <div class="column is-one-third"></div>
        <div class="container">
              <h1 class="title is-1">SESSION</h1>
        </div>

        <!-- <div class="column">
          <p class="has-text-centersied title-padding">
            <h1 class="title is-2">Profile</h1>
          </p>
          <div class="signup-lnk">
            <button @click="newClass = !newClass" class="button is-primary is-smedium login-btn" to="/profile">New Class Form</button>
          </div>

          <form class="">
            <div class="">
                <input v-show="newClass" v-model="titled" class="input is-large" type="text" placeholder="Class Name">
            </div>

            <div class="" v-show="newClass">
              <button @click.prevent="formHandler" class="button is-primary is-smedium login-btn" to="/profile">Add Class</button>
            </div>
          </form>

          <p class="has-text-centersied title-padding">
            <h1 class="title is-2"><u>Class List</u></h1>
            <ul>
              <li  @click="sessionRoute" =v-for="c in classes"><a class="is-2" href="#">{{ c.title }}</a></li>
            </ul>
          </p>
        </div> -->

        <div class="column"></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      // newClass: false,
      // titled: '',
      // getURL: 'http://localhost:3000/api/v1/host/' + this.$route.params.
      //  + '/classes',
      // postURL: 'http://localhost:3000/api/v1/host/create-class',
      // classes: [],
      // classesCreated: ''
    }
  },
  mounted () {
    // console.log(this.$route.params.id)
    // this.getClasses()
  },
  methods: {
  //   post: function () {
  //     console.log(this.titled)
  //     this.$http.post(this.postURL, {
  //       title: this.titled,
  //       host_id: this.$route.params.id,
  //       retro_id: 3
  //     }).then((response) => {
  //       this.getClasses()
  //       console.log(response)
  //     })
  //   },
  //   getClasses: function () {
  //     console.log('in?')
  //     console.log(this.getURL)
  //     this.$http.get(this.getURL).then((data) => {
  //       console.log('double in?')
  //       this.classes = data.body
  //       console.log('classes array??', this.classes)
  //     })
  //   },
  //   sessionRoute: function () {
  //     this.$route.push({name: 'Session'})
  //   },
  //   formHandler: function () {
  //     this.post()
  //     // this.getClasses()
  //     this.newClass = !this.newClass
  //   }
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
