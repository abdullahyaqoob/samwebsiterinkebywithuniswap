import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import indexes from '../components/indexes.vue'
import whatWeOffer from '../components/whatWeOffer.vue'
import whyBitcoin from '../components/whyBitcoin.vue'
import whoItWork from '../components/whoItWork.vue'
import profile from '../components/profile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/indexes',
    name: 'Indexes',
    component: indexes
  },
  {
    path: '/whatWeOffer',
    name: 'whatWeOffer',
    component: whatWeOffer
  },
  {
    path: '/whyBitcoin',
    name: 'whyBitcoin',
    component: whyBitcoin
  },
  {
    path: '/whoItWork',
    name: 'whoItWork',
    component: whoItWork
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
