import {defineStore} from 'pinia'
import {ref, computed} from 'vue'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import {auth, db} from '@/firebase/firebase.config'
import {doc, setDoc, onSnapshot} from 'firebase/firestore'
import router from '@/router'

export const useAuthStore = defineStore('authStore', () => {
  const dbUser = ref({})
  const currUser = ref({})
  const uid = ref(computed(() => currUser.value.uid))
  const email = ref(computed(() => currUser.value.email))
  const displayName = ref(computed(() => `${dbUser.value.firstName} ${dbUser.value.secondName}`))
  const isAuthed = computed(() => !!currUser.value.accessToken)

  async function appLogin(payload) {
    try {
      const res = await signInWithEmailAndPassword(auth, payload.email, payload.password)
      if (res) {
        await getUser()
        await router.push('/')
      }
      else throw new Error('Error')
    } catch (e) {
      console.log(e)
    }
  }

  async function appSignup(payload) {
    try {
      const res = await createUserWithEmailAndPassword(auth, payload.email, payload.password)
      if (res) {
        await setDoc(doc(db, 'users', auth.currentUser.uid), {
          email: payload.email,
          firstName: payload.firstName,
          secondName: payload.secondName,
          personGender: payload.personGender,
          birthDate: payload.birthDate,
          phoneNumber: payload.phoneNumber,
          isAdmin: false,
          servTeam: [],
        }).catch(e => {
            throw new Error(`Произошла ошибка с записью в базу данных: ${e.message}`)
          })
        await getUser()
        await router.push('/')
      } else {
        throw new Error('Произошла неизвестная ошибка')
      }
    } catch (e) {
      console.log(e)
    }
  }

  async function restorePassword(payload) {
    try {
      await sendPasswordResetEmail(auth, payload.email)
      console.log('we send email')
      await router.go(0)
    } catch (e) {
      console.log(e.message)
    }
  }

  async function getUser() {
    try {
      await onAuthStateChanged(auth, (user) => {
        if (user) {
          currUser.value = user
          onSnapshot(doc(db, 'users', user.uid), (snapshot) => {
            dbUser.value = snapshot.data()
          })
        }
      })
    } catch (e) {
      console.log(e.message)
    }
  }

  async function appLogout() {
    try {
      await signOut(auth)
      router.go(0)
    } catch (e) {
      console.log(e.message)
    }
  }

  return {
    uid, currUser, dbUser,
    displayName, email,
    isAuthed,
    appLogin,
    appSignup,
    appLogout,
    getUser,
    restorePassword
  }
})