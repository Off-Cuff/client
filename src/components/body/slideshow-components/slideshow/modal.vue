<template>
  <div class="">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <button class="modal-default-button button is-danger" @click="$emit('close'), stopTimer()">
                X
              </button>
            </div>

            <div  class="modal-body slide-pictures">

                <!-- <img v-show="object.visibility1" :src="this.p1" alt="a random - flowers and bees?">

                <img v-show="object.visibility2" :src="this.p2" alt="a random - a dog and his bone">

                <img v-show="object.visibility3" :src="this.p3" alt="a random - a curious pilot"> -->

                <img class="image" v-show="object.visibility1" src="https://unsplash.it/1300/625/?random" alt="a random - flowers and bees?">

                <img class="image" v-show="object.visibility2" src="https://unsplash.it/1350/640/?random" alt="a random - a dog and his bone">

                <img class="image" v-show="object.visibility3" src="https://unsplash.it/1200/620/?random" alt="a random - a curious pilot">

            </div>
            <!-- <div class="">
              <ul>
                <li v-for="src in srcs">{{ src }}</li>
              </ul>
            </div> -->
            <div class="modal-footer">
              <div class="block">
                  <p class="digit">{{ timeLeft }}</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      timerInterval: 0,
      timeLeft: '-',
      load: false,
      img1: '',
      p1: '',
      p2: '',
      p3: '',
      object: {
        visibility1: true,
        visibility2: false,
        visibility3: false
      }
    }
  },
  mounted () {
    this.p1 = this.imgPath()
    this.p2 = this.imgPath()
    this.p3 = this.imgPath()
  },
  created () {
    this.timer()
  },
  destroy () {
    console.log('destroyed??')
    clearInterval(this.timerInterval)
    this.stopTimer()
  },
  methods: {
    imgPath: function () {
      let x = 1100
      let y = 1200
      let i = Math.floor(Math.random() * ((y - x) + 1) + x)
      let j = Math.round(i / 2)
      return 'https://unsplash.it/' + i + '/' + j + '/?random'
    },
    timer () {
      this.timeLeft = 45
      console.log('90')
      this.timerInterval = setInterval(() => {
        console.log('hit 1')
        if (this.timeLeft <= 45 && this.timeLeft > 30) {
          this.timeLeft--
        } else if (this.timeLeft <= 30 && this.timeLeft > 15) {
          if (this.timeLeft === 30) {
            this.object.visibility1 = !this.object.visibility1
            this.object.visibility2 = !this.object.visibility2
            console.log('hit 2')
          }
          this.timeLeft--
        } else if (this.timeLeft <= 15 && this.timeLeft !== 0) {
          if (this.timeLeft === 15) {
            this.object.visibility2 = !this.object.visibility2
            this.object.visibility3 = !this.object.visibility3
            console.log('hit 3')
          }
          this.timeLeft--
        } else if (this.timeLeft === 0) {
          console.log('hit D')
          clearInterval(this.timerInterval)
          this.$emit('close')
        }
      }, 1000)
    },
    stopTimer () {
      clearInterval(this.timerInterval)
    }
  }
}
</script>

<style lang="scss" src="bulma"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image{
  position: relative;
  width: 100%; /* for IE 6 */
}
.block {
  display: flex;
  flex-direction: column;
  margin: 20px;
}
.digit {
  position: absolute;
  top: 200px;
  left: 0;
  width: 100%;
  padding-top: 1%;
  padding-right: 5%;
  margin-bottom: 15%;
  /*padding-bottom: 2%;*/
  color: #ecf0f1;
  font-size: 100px;
  font-weight: 100;
  font-family: 'Roboto', serif;
  margin: 10px;
  text-align: right;
}
.modal-mask {
position: fixed;
z-index: 9998;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, .5);
display: table;
transition: opacity .3s ease;
}

.modal-wrapper {
display: table-cell;
vertical-align: middle;
}

.modal-container {
overflow:scroll;
width: 95%;
height: 95%;
margin: 0px auto;
padding: 20px 30px;
background-color: #fff;
border-radius: 2px;
box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
transition: all .3s ease;
font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
margin-top: 0;
color: #42b983;
}

.modal-body {
margin: 20px 0;
}

.modal-default-button {
float: right;
}

/*
* The following styles are auto-applied to elements with
* transition="modal" when their visibility is toggled
* by Vue.js.
*
* You can easily play with the modal transition by editing
* these styles.
*/

.modal-enter {
opacity: 0;
}

.modal-leave-active {
opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
-webkit-transform: scale(1.1);
transform: scale(1.1);
}
</style>
