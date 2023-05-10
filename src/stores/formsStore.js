import {defineStore, storeToRefs} from 'pinia'
import {useAuthStore} from '@/stores/authStore'
import {collection, doc, onSnapshot, setDoc} from 'firebase/firestore'
import {db} from '@/plugins/firebase.config'
import {useSnackbarMessages} from '@/stores/appState'
import {ref} from 'vue'

export const useFormsStore = defineStore('formsStore', () => {
  const authStore = useAuthStore()
  const {uid, dbUser} = storeToRefs(authStore)
  const {setMessage} = useSnackbarMessages()
  const formsData = ref({})

  const sendForm = async (path, form, from) => {
    const id = Date.now().toString()

    function age(birthdate) {
      const today = new Date()
      return today.getFullYear() - birthdate.getFullYear() -
        (today.getMonth() < birthdate.getMonth() ||
          (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()))
    }

    const userAge = age(new Date(dbUser.value.birthDate))
    const toDB = {
      uid: uid.value,
      fullName: `${dbUser.value.secondName} ${dbUser.value.firstName}`,
      age: userAge,
      phoneNumber: dbUser.value.phoneNumber,
      from,
    }
    try {
      await setDoc(doc(db, path, id), {
        ...toDB,
        answer: JSON.stringify(form),
      })
      await setMessage('Ваша форма успешно отправленна')
    } catch (e) {
      setMessage(e)
    }
  }

  const getForms = async (path) => {
    formsData.value[path] = []
    const colRef = collection(db, path)
    await onSnapshot(colRef, snapshot => {
      snapshot.docs.forEach(doc => {
        formsData.value[path].push({...doc.data(), time: doc.id})
      })
    })
  }

  return {
    sendForm,
    getForms,
    formsData,
  }
})