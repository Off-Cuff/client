import Vue from 'vue'
import Router from 'vue-router'
import QuickStart from '@/components/body/slideshow-components/quick-start-home/quick-start-home.vue'
import AboutPage from '@/components/body/main/about/About.vue'
import Home from '@/components/body/Main/home/Landing.vue'
import Signup from '@/components/body/Main/signup/signup.vue'
import Login from '@/components/body/Main/login/login.vue'
import Slides from '@/components/body/slideshow-components/slideshow/slideshow-slides.vue'
import Timer from '@/components/body/slideshow-components/quick-start-home/quick-start-timer.vue'
import Profile from '@/components/body/main/user/profile.vue'

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
    },
    {
      path: '/Slides',
      name: 'Slides',
      component: Slides
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/host/:id/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
