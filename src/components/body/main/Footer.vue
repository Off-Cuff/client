<template>
  <div class="vue-footer footer hero-foot">
    <footer>

          <p>

            <a href="https://github.com/Off-Cuff" class="green-a">
              {{ title }}
            </a>

            || Copyright 2017 ||

            <a href="https://www.ajdevs.com" class="green-a">
              Austin Johnston
            </a>

          </p>

    </footer>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer{
    /*background: #222;*/
    /*padding: 6px;*/
}
p{
  margin-top: 1.5%;
  margin-bottom: -8%;
  color: #222;
  text-align: center;
}
.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
}
</style>
