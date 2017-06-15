import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import modal from'./modal'
import cart from'./cart'

const store = new Vuex.Store({
  modules: {
    modal,
    cart
  }
})

export default store