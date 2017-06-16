
export default {
  state : {
    active: false,
    items: []
  },
  mutations : {
    toggleCart (state, data) {
      state.active = !state.active
    },
    insertItem (state, item) {
      state.items.push( item )
    },
    removeItem (state, item) {
      state.items.push( item )
    }
  },
  actions : {
    toggleCart (context) {
      context.commit('toggleCart')
    },
    insertItem (context, item) {
      context.commit('insertItem', item)
    },
    removeItem (context, item) {
      context.commit('removeItem', item)
    }
  }
}
