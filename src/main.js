import Vue from 'vue'


import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'
import loading from "@/components/sharing/loading.vue"

Vue.config.productionTip = false

Vue.component("loading",loading)

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
