import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Tabs from 'vue-tabs-component'
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faCoffee
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Tabs)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
