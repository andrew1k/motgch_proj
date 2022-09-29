import {handleErrors} from '@/utilities/handleErrors'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import {
  set,
  ref
} from 'firebase/database'
import {firebaseAuth, firebaseDB} from '@/firebase/firebase.config'
import store from '@/store'

export default {
  namespaced: true,
  state() {
    return {}
  },
  mutations: {
    setUserAuthInfo(state, user) {
      for (let item in user) {
        state[item] = user[item]
      }
    }
  },
  actions: {
    async appLogin({ commit }, payload) {
      try {
        await signInWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
        commit('setUserAuthInfo', firebaseAuth.currentUser)
        await store.dispatch('errors/setMessage', {value: 'Welcome'})
      } catch(e) {
        await store.dispatch('errors/setMessage', {value: handleErrors(e.code)})
      }
    },
    async appSignup({ commit }, payload) {
      try {
        await createUserWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
        await updateProfile(firebaseAuth.currentUser, {
          displayName: `${payload.firstName} ${payload.secondName}`
        })
        const toDB = {
          email: payload.email,
          firstName: payload.firstName,
          secondName: payload.secondName,
          personGender: payload.personGender,
          birthDate: payload.birthDate,
          phoneNumber: '',
          authLevel: '',
          servTeam: []
        }
        await set(ref(firebaseDB, 'appUsers/' + firebaseAuth.currentUser.uid), toDB)
        // send Email verification
        await commit('setUserAuthInfo', firebaseAuth.currentUser)
        await store.dispatch('errors/setMessage', 'Все прошло успешно, добро пожаловать')
      } catch (e) {
        await store.dispatch('errors/setMessage', {value: handleErrors(e.code)})
      }
    },
    async restorePassword(_, payload) {
      await sendPasswordResetEmail(firebaseAuth, payload.email)
    },
    async getUser({commit}) {
      commit('setUserAuthInfo', firebaseAuth.currentUser)
    },
    async authStateChanges(state) {
      await onAuthStateChanged(firebaseAuth, (user) => {
        for (let item in user) {
          state[item] = user[item]
        }
      })
    },
    async appLogout() {
      await signOut(firebaseAuth)
    }
  },
  getters: {
    accessToken(state) {return state.accessToken}
  }
}
