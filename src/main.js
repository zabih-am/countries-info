import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 3rd party plugins
import '@axios'
import '@/libs/bootstrap'

//Global Styles
require('@/scss/global/index.scss')

// Global Components
import './global-components'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
