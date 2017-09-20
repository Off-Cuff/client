  <template>
    <div class="image-body image">
      <div class="container">

          <h1 class="landing-tag">
            <span>A new way to Speak </span>
            <span class='spacer'> </span>
              <br />
            <span class='spacer'> </span>
            <span>A new way to Train</span>
          </h1>
          <div class="landing-buttons">
            <router-link to="/quickstart" class="button is-primary is-large">

                Quick Start

            </router-link>
            <!-- <router-link to="/about"><\About\></router-link> -->
            <span class="space"></span>
            <router-link to="/Premium" class="button is-primary is-large">

                Premium

            </router-link>
            <modal v-if="showModal" @close="showModal = false">
              <img src="https://unsplash.it/1300/625/?random" alt="a random - flowers and bees?">

              <img src="https://unsplash.it/1350/640/?random" alt="a random - a dog and his bone">

              <img src="https://unsplash.it/1200/620/?random" alt="a random - a curious pilot">
            </modal>
          </div>
      </div>

        <img class="landingBackground" src="../../../../assets/presentation-pic.jpg" alt="">

    </div>
  </template>

<script>
import modal from '../../slideshow-components/slideshow/modal.vue'
export default {
  data () {
    return {
      showModal: false
    }
  },
  methods: {

  },
  mounted () {
    clearInterval(this.timerInterval)
  },
  components: {
    'modal': modal
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html{
    padding-top:-5%;
  }
img{
  z-index:3;
  padding-top: -10px;
  margin-top: -22%;
  /*margin-bottom: 5%;*/
}
.image {
   /*position: relative;*/
   width: 100%; /* for IE 6 */
}

h1 {
   z-index:2;
   /*position: absolute;*/
   top: 35%;
   left: 0;
   width: 100%;
   padding-left: 50%;

}
h1 span {
   color: white;
   font: bold 54px/15vh Helvetica, Sans-Serif;
   letter-spacing: -1px;
   background: rgb(0, 0, 0); /* fallback color */
   background: rgba(0, 0, 0, 0.75);
   padding: 1.5%;

}

h1 span.spacer {
  padding:0;
  background: rgba(0, 0, 0, 0.7);
}
.landing-buttons {
  padding-left: 50%;
  margin-top: 7%;
}
.space{
  padding:4vh;;
}

</style>
