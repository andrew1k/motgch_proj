import {defineStore, storeToRefs} from 'pinia'
import {useAuthStore} from '@/stores/authStore'
import {collection, doc, onSnapshot, setDoc, query, where, getDocs} from 'firebase/firestore'
import {db} from '@/plugins/firebase.config'
import {useSnackbarMessages} from '@/stores/appState'
import {ref} from 'vue'

export const useFormsStore = defineStore('formsStore', () => {
  const authStore = useAuthStore()
  const {
    uid,
    dbUser,
    userAge,
  } = storeToRefs(authStore)
  const {setMessage} = useSnackbarMessages()
  const formsData = ref({})

  const sendForm = async (path, form, from) => {
    const id = Date.now().toString()
    const toDB = {
      uid: uid.value,
      fullName: `${dbUser.value.secondName} ${dbUser.value.firstName}`,
      age: userAge.value,
      phoneNumber: dbUser.value.phoneNumber,
      from,
    }
    let requestAlreadyExist
    try {
      const querySnapshot = await getDocs(query(collection(db, path), where('uid', '==', uid.value)))
      querySnapshot.forEach((doc) => {
        requestAlreadyExist = doc.id
      })
      if (!requestAlreadyExist) {
        await setDoc(doc(db, path, id), {
          ...toDB,
          answer: JSON.stringify(form),
        })
        await setMessage('Ваша форма успешно отправленна')
      } else setMessage(`Вы уже отправляли ответ, номер заявки ${requestAlreadyExist}`)
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