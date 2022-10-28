export default {
  namespaced: true,
  state() {
    return {
      message: null,
      type: 'info'
    }
  },
  mutations: {
    setMessage(state, message) {
      state.message = message.value
    },
    clearMessage(state) {
      state.message = null
    }
  },
  actions: {
    setMessage({commit}, message) {
      commit('setMessage',  message)
      setTimeout(() => {
        commit('clearMessage')
      }, 8000)
    },
  },
  getters: {
    getErrorMessage(state) {
      return state.message
    }
  }
}