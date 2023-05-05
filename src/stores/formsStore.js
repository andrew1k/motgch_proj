import {defineStore, storeToRefs} from 'pinia'
import {useAuthStore} from '@/stores/authStore'
import {setDoc, doc, collection, onSnapshot} from 'firebase/firestore'
import {db} from '@/plugins/firebase.config'
import {useSnackbarMessages} from '@/stores/appState'
import {ref} from 'vue'

export const useFormsStore = defineStore('formsStore', () => {
  const authStore = useAuthStore()
  const {uid, dbUser} = storeToRefs(authStore)
  const {setMessage} = useSnackbarMessages()
  const formsData = ref([])

  const sendForm = async (form) => {
    const id = Date.now().toString()
    function age(birthdate) {
      const today = new Date()
      return today.getFullYear() - birthdate.getFullYear() -
        (today.getMonth() < birthdate.getMonth() ||
          (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate()))
    }
    const userAge = age(new Date(dbUser.value.birthDate))
    try {
      await setDoc(doc(db, 'forms', id), {
        uid: uid.value,
        firstName: dbUser.value.firstName,
        secondName: dbUser.value.secondName,
        age: userAge,
        phoneNumber: dbUser.value.phoneNumber,
        ...form,
      })
      await setMessage('Ваша форма успешно отправленна')
    } catch (e) {
      setMessage(e)
    }
  }

  const getForms = async () => {
    const colRef = collection(db, 'forms')
    await onSnapshot(colRef, snapshot => {
      snapshot.docs.forEach(doc => {
        const data = {...doc.data(), time: doc.id}
        const ids = formsData.value.map(el => el.time)
        if (!ids.includes(doc.id)) formsData.value.push(data)
      })
    })
  }

  return {
    sendForm,
    getForms,
    formsData,
  }
})