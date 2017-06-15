window.$ = window.jQuery = require('jquery')
import "es6-promise"

import Vue from 'vue'

import gridWrapper from '_components/grid_wrapper.vue'
import modal from '_components/modal.vue'
import cart from '_components/cart.vue'
import store from './vuex/store'

new Vue({
  el: '#app',
  store: store,
  components: {
    gridWrapper,
    modal,
    cart
  },
  computed: {
    overlay: function () {
      return this.$store.state.modal.active
    }
  },
  methods: {
    closeModal() {
      this.$store.dispatch('callModal', {
        active: false,
        product: {}
      })
    }
  }
})