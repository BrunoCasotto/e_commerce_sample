
export default {
  state : {
    active: true,
    data: {}
  },
  mutations : {
    toggleCart (state, data) {
      state.active = !state.active
    },
    setCart (state, cart) {
      state.data = cart
    }
  },
  actions : {
    toggleCart (context) {
      context.commit('toggleCart')
    },
    setCart (context, data) {
      context.commit('setCart', data)
    }
  }
}
