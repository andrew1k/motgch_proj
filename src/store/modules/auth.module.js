import {handleErrors} from '@/utilities/handleErrors'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
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
    return {
      uid: null,
      displayName: null,
      accessToken: null,
      email: null,
      emailVerified: null,
      phoneNumber: null,
      providerId: null,
      photoURL: null,
      isAnonymous: null,
    }
  },
  mutations: {
    setUserAuthInfo(state, user) {
      for (let item in user) {
        state[item] = user[item]
      }
    },
    clearUserAuthInfo(state) {
      // eslint-disable-next-line no-unused-vars
      state = null
    },
  },
  actions: {
    async appLogin({ commit }, payload) {
      try {
        await signInWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
        const user = firebaseAuth.currentUser
        commit('setUserAuthInfo', {
          uid: user.uid,
          displayName: user.displayName,
          accessToken: user.accessToken,
          email: user.email,
          emailVerified: user.emailVerified,
          phoneNumber: user.phoneNumber,
          providerId: user.providerId,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous
        })
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
      const user = firebaseAuth.currentUser
      commit('setUserAuthInfo', {
        uid: user.uid,
        displayName: user.displayName,
        accessToken: user.accessToken,
        email: user.email,
        emailVerified: user.emailVerified,
        phoneNumber: user.phoneNumber,
        providerId: user.providerId,
        photoURL: user.photoURL,
        isAnonymous: user.isAnonymous
      })
    },
    async appLogout() {
      await signOut(firebaseAuth)
      await store.commit('auth/clearUserAuthInfo')
      // ---------------------------------------------------------------------------- Debug needed: after logout push to auth page

    }
  },
  getters: {
    accessToken(state) {return state.accessToken}
  }
}