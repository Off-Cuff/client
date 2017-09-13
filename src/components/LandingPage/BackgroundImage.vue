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
            <button type="button" name="button is-primary" class="button is-primary">
              Quick Start
            </button>
            <span class="space"></span>
            <button type="button" name="button is-primary" class="button is-primary">
              Premium
            </button>
          </div>
      </div>

      <img class="landingBackground" src="../../assets/presentation-pic.jpg" alt="thinking">
    </div>
  </template>
<script>
export default {
  data () {
    return {

    }
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
  margin-top: -25%;
  margin-bottom: -1%;
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
   font: bold 8vh/18vh Helvetica, Sans-Serif;
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
  padding:inherit;
}

</style>
