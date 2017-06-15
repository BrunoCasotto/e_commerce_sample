
export default {
  state : {
    active: false,
    data: {}
  },
  mutations : {
    callModal (state, active, data) {
      state.active = active
      state.data = data
    }
  },
  actions : {
    callModal(context, data) {
      context.commit('callModal', active, data)
    }
  }
}
