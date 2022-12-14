import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updateProfile,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { set, ref, onValue } from 'firebase/database'
import {firebaseAuth, firebaseDB} from '@/firebase/firebase.config'
import store from '@/store'
import router from '@/router'

export default {
  namespaced: true,
  state() {
    return {
      uid: null,
      displayName: null,
      email: null,
      emailVerified: null,
      phoneNumber: null,
      photoURL: null,
      isAdmin: null,
      birthDate: null,
      firstName: null,
      secondName: null,
      personGender: null,
      servTeam: [],
      telegram: {
        firstName: null,
        id: null,
        isAuthed: null,
        username: null,
      },
    }
  },
  mutations: {
    // ==============================================================================================
    setUserAuthInfo(state, user) {
      for (let item in user) {
        state[item] = user[item]
      }
    },
    // ==============================================================================================
    setUserInfo(state, user) {
      for (let item in user) {
        state[item] = user[item]
      }
    },
  },
  actions: {
    // ============================================LOGIN==================================================
    async appLogin(_, payload) {
      try {
        const res = await signInWithEmailAndPassword(firebaseAuth, payload.email, payload.password)
        if (res) {
          await store.dispatch('message/setMessage', 'Welcome')
        } else {
          throw new Error('Error')
        }
      } catch (e) {
        await store.dispatch('message/setMessage', e.message)
      }
    },
    // ============================================SIGNUP==================================================
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
          isAdmin: false,
          servTeam: []
        }
        await set(ref(firebaseDB, 'appUsers/' + firebaseAuth.currentUser.uid), toDB)
        // --------------------------------------------------------------------------------------------------- send Email verification
        await commit('setUserAuthInfo', firebaseAuth.currentUser)
        await store.dispatch('message/setMessage', '?????? ???????????? ??????????????, ?????????? ????????????????????')
      } catch (e) {
        await store.dispatch('message/setMessage', e.code)
      }
    },
    // ============================================RESTORE PASSWORD==================================================
    async restorePassword(_, payload) {
      try {
        await sendPasswordResetEmail(firebaseAuth, payload.email)
        await store.dispatch('message/setMessage', `???? ?????????????????? ?????? ???????????? ???? ${payload.email}`)
        await router.go(0)
      } catch (e) {
        await store.dispatch('message/setMessage', e.message)
      }
    },
    // ============================================GETUSER==================================================
    async getUser({commit}) {
      try {
        let user = firebaseAuth.currentUser
        onAuthStateChanged(firebaseAuth, (_user) => {
          if (_user) {
            user = _user
            commit('setUserAuthInfo', {
              uid: user.uid,
              displayName: user.displayName,
              email: user.email,
              emailVerified: user.emailVerified,
              phoneNumber: user.phoneNumber,
              photoURL: user.photoURL,
            })
            onValue(
              ref(firebaseDB, `appUsers/${user.uid}`),
              (snapshot) => {
                commit('setUserInfo', snapshot.val())
              }
            )
          } else if (!_user) {
            throw new Error('???? ?????????? ???????????????? ?? ?????????? ????????????')
          }
        })
      } catch (e) {
        await store.dispatch('message/setMessage', e.message)
      }
    },
    // ============================================LOGOUT==================================================
    async appLogout() {
      try {
        await signOut(firebaseAuth)
        router.go(0)
      } catch (e) {
        await store.dispatch('message/setMessage', e.message)
      }
    },
  },
}