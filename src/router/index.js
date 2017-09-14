import Vue from 'vue'
import Router from 'vue-router'
import QuickStart from '@/components/body/slideshow-components/quick-start-home/quick-start-home.vue'
import AboutPage from '@/components/body/main/about/About.vue'
import Home from '@/components/body/Main/home/Landing.vue'
import Timer from '@/components/body/slideshow-components/quick-start-home/quick-start-timer.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/About',
      name: 'About',
      component: AboutPage
    },
    {
      path: '/QuickStart',
      name: 'QuickStart',
      component: QuickStart
    },
    {
      path: '/Timer',
      name: 'Timer',
      component: Timer
    }

  ]
})
