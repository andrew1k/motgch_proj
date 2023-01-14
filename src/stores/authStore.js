import {defineStore} from 'pinia'
import {ref, computed} from 'vue'
import {
  createUserWithEmailAndPassword, onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import {auth, db} from '@/firebase/firebase.config'
import {doc, setDoc, onSnapshot} from 'firebase/firestore'
import router from '@/router'
import {useSnackbarMessages} from '@/stores/snackbarMessages'

export const useAuthStore = defineStore('authStore', () => {
  const {setMessage} = useSnackbarMessages() // messages for errors to user
  let user = ref(auth.currentUser)
  let dbUser = ref({})
  const uid = computed(() => user.value.uid)
  const email = computed(() => user.value.email)
  const isAuthed = computed(() => user.value ? !!user.value : null)
  const appSignup = async (payload) => {  // ------------------------------------------------------------------------------------------------------------------------------------ Done: tests needed
    try {
      const res = await createUserWithEmailAndPassword(auth, payload.email, payload.password)
      if (!res) throw new Error('Произошла неизвестная ошибка, повторите попытку позже')
      const dbData = {
        email: payload.email,
        firstName: payload.firstName,
        secondName: payload.secondName,
        personGender: payload.personGender,
        birthDate: payload.birthDate,
        phoneNumber: payload.phoneNumber,
        servTeam: [],
      }
      await setDoc(doc(db, 'users', res.user.uid), dbData)
      await onSnapshot(doc(db, 'users', res.user.uid), (snapshot) => {
        dbUser.value = snapshot.data()
      })
      await router.push('/')
    } catch (e) {
      setMessage(e.message)
    }
  }
  const appLogin = async (payload) => {  // ------------------------------------------------------------------------------------------------------------------------------------ Done: test needed
    try {
      const res = await signInWithEmailAndPassword(auth, payload.email, payload.password)
      if (!res) throw new Error('Ошибка входа, нет ответа с сервера')
      await router.push('/')
    } catch (e) {
      setMessage(e.message)
    }
  }

  const restorePassword = async (payload) => {  // ------------------------------------------------------------------------------------------------------------------------------------
    try {
      await sendPasswordResetEmail(auth, payload.email)
        .catch(e => {
          throw new Error(e.message)
        })
      await router.go(0)
      setMessage('Мы отправили вам сообщение')
    } catch (e) {
      setMessage(e.message)
    }
  }
  const appLogout = async () => {
    try {
      await signOut(auth)
      router.go(0)
    } catch (e) {
      console.log(e.message)
    }
  }


  // realtime actions for getting cerrent state of user
  onAuthStateChanged(auth, (_user) => {
    user.value = _user
    if (_user) onSnapshot(doc(db, 'users', _user.uid), (snapshot) => {
      dbUser.value = snapshot.data()
    })
  })
  if (auth.currentUser) onSnapshot(doc(db, 'users', auth.currentUser.uid), (snapshot) => {
    dbUser.value = snapshot.data()
  })

  return {
    uid,
    dbUser,
    email,
    isAuthed,
    appLogin,
    appSignup,
    appLogout,
    restorePassword,
  }
})