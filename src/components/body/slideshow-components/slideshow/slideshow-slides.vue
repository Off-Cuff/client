<template>
    <div>
      <br>
      <br>
      <h1 class="title is-1 tit">CONGRATS</h1>
      <h2 class="title is-1">You made it!</h2>
      <button class="button is-primary btn-pad is-large" id="show-modal" @click="showModal = true">Want another?</button>
        <div class="landing-buttons">
        <!-- <router-link to="/" class="btm-pad button is-primary is-large">

            Home

        </router-link> -->
      </div>
      <!-- use the modal component, pass in the prop -->
      <modal v-if="showModal" @close="showModal = false">

      </modal>
    </div>
</template>

<script>
import modal from './modal.vue'
export default {
  data () {
    return {
      showModal: false
    }
  },
  mounted () {
    this.showModal = true
  },
  components: {
    'modal': modal
  }
}

</script>

<style lang="scss" src="bulma"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tit{
  margin-top: 5%;
  /*margin-bottom: 3%;*/
}
.btn-pad{
  margin-bottom: 5%;
}
.landing-buttons{
  margin-top: 1%;
  margin-bottom: 10%;
}
.topBtmPad{
  margin-top: 3%;
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
