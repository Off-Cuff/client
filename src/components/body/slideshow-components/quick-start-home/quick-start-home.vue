<template>
  <div class="container content">
    <div class="pad card">
    <div class="card-content">
      <div class="title">
        <span>Quick Start</span>
      </div>
      <span class="card-content container ">
        By pressing start, you are starting a new session.
        A session last exactly 1 minute and 30 seconds.
        It is basically a slideshow of random images. Think of your last power point presentation, but better.
        You will get a count down from 3.
        Then the slide timer starts as a random picture comes on the screen;
        that's your que, TALK! </br></br>

          (for best results,
          go <strong class="has-text-weight-bold">fullscreen</strong>
          in your browser during the presentation/session. Press control+command+F while in the browser)

      </span>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <span>
          <router-link to="/Timer">START</router-link>
           <!-- <a href="#">Start</a> -->
        </span>
      </p>
    </footer>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showImages: false
    }
  }
}
</script>

<style lang="scss" src="bulma"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p{
  float: left;
}
.content{
  padding-top: 5%;
  padding-bottom: 5%;
}
.qsButton{
  margin-top: 10%;
}
.pad{
  margin-bottom: 6%;
  margin-top: 4%;
}

</style>
