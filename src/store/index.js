import Vue from 'vue'
import Vuex from 'vuex'

//Modules
import appConfig from './modules/appConfig'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    test: 'hi'
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    appConfig
  }
})
