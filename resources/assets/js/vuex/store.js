import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import modal from'./modal'

const store = new Vuex.Store({
  modules: {
    modal
  }
})

export default store