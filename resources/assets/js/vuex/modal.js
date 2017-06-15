
export default {
  state : {
    active: false,
    data: {}
  },
  mutations : {
    callModal (state, data) {
      state.active = data.active
      state.data = data.product
    }
  },
  actions : {
    callModal(context, data) {
      context.commit('callModal', data)
    }
  }
}
