
export default {
  state : {
    active: true,
    items: []
  },
  mutations : {
    openCart (state, data) {
      state.active = data
    },
    insertItem (state, item) {
      state.items.push( item )
    },
    removeItem (state, item) {
      state.items.push( item )
    }
  },
  actions : {
    openCart (context, data) {
      context.commit('openCart', data)
    },
    insertItem (context, item) {
      context.commit('insertItem', item)
    },
    removeItem (context, item) {
      context.commit('removeItem', item)
    }
  }
}
