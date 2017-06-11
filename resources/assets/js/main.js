window.$ = window.jQuery = require('jquery')
import "es6-promise"

import Vue from 'vue'

import gridWrapper from '_components/grid_wrapper.vue'

new Vue({
  el: '#app',
  components: {
    gridWrapper
  }
})