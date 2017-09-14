<template>
  <div class="">
    <div class="block">
        <p class="digit">{{ timeLeft}}</p>
        <p class="text">Seconds</p>
    </div>
  </div>
</template>

<script>
export default{
  created () {

  },
  mounted () {
    // console.log(this.$router)
    this.timer()
  },
  props: {
  },
  data () {
    return {
      timeLeft: '-'
    }
  },
  methods: {
    timer () {
      this.timeLeft = 3
      var timerId = setInterval(() => {
        if (this.timeLeft !== 0) {
          this.timeLeft--
        } else {
          console.log('here')
          this.timeLeft = 'GO!'
          clearInterval(timerId)
          this.$router.push({ name: 'Slides' })
        }
      }, 1000)
    }
  },
  computed: {
  }
}

</script>

<style lang="scss" src="bulma"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:400|Roboto:100);

.block {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.text {
  color: #1abc9c;
  font-size: 40px;
  font-family: 'Roboto Condensed', serif;
  font-weight: 40;
  margin-top:10px;
  margin-bottom: 10px;
  text-align: center;
}

.digit {
  padding-top: 1%;
  /*padding-bottom: 2%;*/
  color: #ecf0f1;
  font-size: 150px;
  font-weight: 100;
  font-family: 'Roboto', serif;
  margin: 10px;
  text-align: center;
}

.text{
  padding-bottom: 2%;
}

</style>
