<template>
  <div class="">
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <!-- <ul id="v-for-object" class="demo">
              <li v-for="value in object">
                {{ value }}
              </li>
            </ul> -->
            <div class="modal-header">
              <button class="modal-default-button button is-danger" @click="$emit('close')">
                X
              </button>
            </div>

            <div  class="modal-body slide-pictures">

              <slot name="body">
                <img v-show="object.visibility1" src="https://unsplash.it/1920/1080/?random" alt="a random - flowers and bees?">
              </slot>

              <slot name="body">
                <img v-show="object.visibility2" src="https://unsplash.it/1900/1080/?random" alt="a random - a dog and his bone">
              </slot>

              <slot name="body">
                <img v-show="object.visibility3" src="https://unsplash.it/1800/1080/?random" alt="a random - a curious pilot">
              </slot>

            </div>
            <div class="modal-footer">
              <slot name="footer">

              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  components: {
  },
  mounted () {
    this.timer()
  },
  data () {
    return {
      object: {
        visibility1: true,
        visibility2: false,
        visibility3: false
      }
    }
  },
  created () {
    // this.$http.get('')
  },
  methods: {
    slides: function () {
      console.log('hello form the slides method!')
    },
    timer () {
      this.timeLeft = 9
      var timerId = setInterval(() => {
        if (this.timeLeft <= 9 && this.timeLeft > 6) {
          this.timeLeft--
        } else if (this.timeLeft <= 6 && this.timeLeft > 3) {
          console.log(this.timeLeft)
          console.log('2 is === 60 ', this.timeLeft)
          if (this.timeLeft === 6) {
            this.object.visibility1 = !this.object.visibility1
            this.object.visibility2 = !this.object.visibility2
          }
          this.timeLeft--
        } else if (this.timeLeft <= 3 && this.timeLeft !== 0) {
          if (this.timeLeft === 3) {
            this.object.visibility2 = !this.object.visibility2
            this.object.visibility3 = !this.object.visibility3
          }
          this.timeLeft--
        } else if (this.timeLeft === 0) {
          clearInterval(timerId)
          this.$emit('close')
        }
      }, 1000)
    }
  }
}
</script>

<style lang="scss" src="bulma"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
