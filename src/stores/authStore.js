import {defineStore} from 'pinia'
import {ref, computed} from 'vue'
import {
  createUserWithEmailAndPassword, onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  deleteUser,
} from 'firebase/auth'
import {auth, db} from '@/plugins/firebase.config'
import {doc, setDoc, updateDoc, onSnapshot, getDoc, deleteDoc} from 'firebase/firestore'
import router from '@/router'
import {useSnackbarMessages} from '@/stores/appState'

export const useAuthStore = defineStore('authStore', () => {
  const {setMessage} = useSnackbarMessages() // messages for errors to user
  const user = ref(auth.currentUser)
  const dbUser = ref({})
  const uid = computed(() => user.value.uid)
  const email = computed(() => user.value.email)
  const isAuthed = computed(() => !!user.value)
  const isAdmin = computed(() => user.value.uid === process.env.VUE_APP_ADMIN_ID)
  // calendar part
  const signedEventsIds = ref(computed(() => dbUser.value.signedEvents?.map(e => e.eventId)))
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
        signedEvents: [],
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
      setMessage(e.message)
    }
  }
  const appUpdateUserData = async (payload) => {
    try {
      await updateDoc(doc(db, 'users', user.value.uid), {
        firstName: payload.firstName,
        secondName: payload.secondName,
        birthDate: payload.birthDate,
        phoneNumber: payload.phoneNumber,
      })
      console.log(payload)
    } catch (e) {
      setMessage(e.message)
    }
  }
  const appUpdateEmail = (email) => {
    try {
      updateEmail(auth.currentUser, email)
        .then(() => {
          updateDoc(doc(db, 'users', user.value.uid), {
            email,
          })
        })
        .catch(e => {
          throw new Error(e.message)
        })
    } catch (e) {
      setMessage(e.message)
    }
  }
  const appUpdatePassword = (password) => {
    try {
      updatePassword(auth.currentUser, password)
        .then(() => {
          setMessage('Успешно обновлен')
        })
        .catch((e) => {
          throw new Error(e.message)
        })
    } catch (e) {
      setMessage(e.message)
    }
  }
  const appDeleteAcc = async () => {
    try {
      const dbSnap = await getDoc(doc(db, 'users', auth.currentUser.uid))
        .catch(() => {
          throw new Error('Произошла ошибка, пожалуйста, напишите в поддержку')
        })
      await setDoc(doc(db, 'deletedUsers', auth.currentUser.uid), dbSnap.data())
        .catch(() => {
          throw new Error('Произошла ошибка, пожалуйста, напишите в поддержку')
        })
      await deleteDoc(doc(db, 'users', auth.currentUser.uid))
        .catch(() => {
          throw new Error('Произошла ошибка, пожалуйста, напишите в поддержку')
        })
      await deleteUser(auth.currentUser)
        .catch(e => {
          throw new Error('Произошла ошибка, пожалуйста, напишите в поддержку' + e.message)
        })
    } catch (e) {
      setMessage(e.message)
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
    isAdmin,
    signedEventsIds,
    appLogin,
    appSignup,
    appLogout,
    restorePassword,
    appUpdateUserData,
    appUpdateEmail,
    appUpdatePassword,
    appDeleteAcc,
  }
})