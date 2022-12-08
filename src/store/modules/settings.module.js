import {firebaseAuth, firebaseDB} from '@/firebase/firebase.config'
import {ref, onValue} from 'firebase/database'

export default {
  namespaced: true,
  state() {
    return {
      appUser: null
    }
  },
  mutations: {
    storeUser(state,payload) {
      state.appUser = payload
    }
  },
  actions: {
    getUserFromDB({commit}) {
      const appUserId = firebaseAuth.currentUser.uid
      onValue(
        ref(firebaseDB, `appUsers/${appUserId}`),
        (snapshot) => {
          commit('storeUser', snapshot.val())
      } )
    },
  },
}