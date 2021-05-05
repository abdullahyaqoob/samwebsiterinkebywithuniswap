import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueResource from 'vue-resource'
import './assets/made.js'
import { store } from './store/store'
import VueClipboard from 'vue-clipboard2'
import Toasted from 'vue-toasted'

const ToastedOptions = {
  position: 'bottom-center',
  duration: 4000,
  theme: 'bubble'
}

Vue.use(VueResource)
Vue.use(VueClipboard)

Vue.use(Toasted, ToastedOptions)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
