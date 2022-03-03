import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import Notifications from 'vue-notification'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/manu-font.css'
import './assets/css/site.css'
import './assets/css/responsive.css'

// Make BootstrapVue available throughout your project
library.add(fas)
library.add(fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(Notifications)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
