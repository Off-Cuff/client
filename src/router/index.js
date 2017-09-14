import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import aboutPage from '@/components/Main/About/About.vue'
import Home from '@/components/Main/Landing.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: aboutPage
    }
  ]
})
