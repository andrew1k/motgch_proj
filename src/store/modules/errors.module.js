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
    clearMessage({commit}) {
      commit('clearMessage')
    }
  },
  getters: {
    getErrorMessage(state) {
      return state.message
    },
    getErrorType(state) {
      return state.type
    }
  }
}