import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router/routes'
import axios from 'axios'

import VueLoading from 'vue-loading-template'
Vue.use(VueLoading)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faBlog } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope, faBlog, faGithub)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
