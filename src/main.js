import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueJsonp from 'vue-jsonp'
import VueCookie from 'vue-cookie'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faMobileAlt, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { Tabs, Tab } from 'vue-tabs-component'
import VueZoomer from 'vue-zoomer'

library.add(faMobileAlt, faHome)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('tabs', Tabs)
Vue.component('tab', Tab)
Vue.use(VueAwesomeSwiper /* { default global options } */)
Vue.use(VueJsonp)
Vue.use(VueCookie)
Vue.use(VueZoomer)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
