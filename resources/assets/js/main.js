window.$ = window.jQuery = require('jquery')
import 'es6-promise'

import Vue from 'vue'

import gridWrapper from '_components/grid_wrapper.vue'
import modal from '_components/modal.vue'
import cart from '_components/cart.vue'
import cartIcon from '_components/cart-icon.vue'

import cartService from '_js/service'
import store from './vuex/store'

new Vue({
  el: '#app',
  store: store,
  components: {
    gridWrapper,
    modal,
    cart,
    cartIcon
  },
  computed: {
    overlay: function () {
      return this.$store.state.modal.active
    },
    cartOverlay: function () {
      return this.$store.state.cart.active
    }
  },
  mounted () {
    this.fetchCart()
  },
  methods: {
    closeOverlay () {
      if (this.overlay) {
        this.$store.dispatch('callModal', {
          active: false,
          product: {}
        })
      }

      if (this.cartOverlay) {
        this.$store.dispatch('toggleCart')
      }
    },
    fetchCart () {
      cartService
      .getCart().then(result => {
        this.$store.dispatch('setCart', result.data)
      }).catch(error => {
        console.log(error)
      })
    }
  }
})
