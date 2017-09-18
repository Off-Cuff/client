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
            <button type="button" name="button is-primary" class="button is-primary is-large">
              Premium
            </button>
            <!-- <div class="">
              <ul>
                <li v-for="src in srcs">{{ src }}</li>
              </ul>
            </div> -->
          </div>
      </div>

        <img class="landingBackground" src="../../../../assets/presentation-pic.jpg" alt="thinking">

        <!-- <modal v-show="showModal">


        </modal> -->


    </div>
  </template>

<script>
// export function {
//   console.log('passed?');
// }
import modal from '../../slideshow-components/slideshow/modal.vue'
export default {
  data () {
    return {
      showModal: false,
      showImages: false,
      p1: '',
      p2: '',
      p3: '',
      srcs: []
    }
  },
  methods: {
  //   imgPath: function () {
  //     for (let index = 3; index !== 0; index--) {
  //       let x = 1100
  //       let y = 1300
  //       let j = Math.floor(Math.random() * ((y - x) + 1) + x)
  //       let i = Math.round(j / 9)
  //       if (index === 3) {
  //         this.p1 = 'https://unsplash.it/' + j + '/' + i + '/?random'
  //         console.log(this.p1)
  //       } else if (index === 2) {
  //         this.p2 = 'https://unsplash.it/' + j + '/' + i + '/?random'
  //         // console.log(this.p2)
  //       } else {
  //         this.p3 = 'https://unsplash.it/' + j + '/' + i + '/?random'
  //         // console.log(this.p3)
  //       }
  //     }
  //     this.srcs.push(this.p1)
  //     this.srcs.push(this.p2)
  //     this.srcs.push(this.p3)
  //   }
  },
  mounted () {
  },
  components: {
    'modal': modal
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*.landingBackground{
    position:fixed;
  }*/
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
