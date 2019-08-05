import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Tabs from 'vue-tabs-component'

Vue.use(Tabs)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
