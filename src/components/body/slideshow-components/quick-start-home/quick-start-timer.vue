<template>
  <div class="">
    <a @click="go">back?</a>
    <div class="block">
        <p class="digit">{{ timeLeft }}</p>
        <p class="text">Seconds</p>
    </div>
  </div>
</template>

<script>
export default{
  mounted () {
    this.timer()
  },
  props: {
  },
  data () {
    return {
      timeLeft: '-',
      timerId: 0
    }
  },
  methods: {
    go () {
      clearInterval(this.timerId)
      this.$router.go(-1)
    },
    timer () {
      this.timeLeft = 3
      this.timerId = setInterval(() => {
        if (this.timeLeft !== 0) {
          this.timeLeft--
        } else {
          clearInterval(this.timerId)
          console.log('redirect?')
          this.$router.push({ name: 'Slides' })
        }
      }, 1000)
    }
  },
  computed: {
  },
  destroy () {
    console.log('destroy')
    clearInterval(this.timerId)
  },
  unmounted () {
    console.log('destroy')
    clearInterval(this.timerId)
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
  /*margin-top: ;*/
  margin-bottom: 6%;
  padding-bottom: 5%;
  text-align: center;
}
.digit {
  padding-top: 5%;
  /*padding-bottom: 5%;*/
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
