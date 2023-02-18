import {defineStore} from 'pinia'
import {ref} from 'vue'
import {collection, doc, onSnapshot, setDoc} from 'firebase/firestore'
import {db} from '@/plugins/firebase.config'

export const useSGLeadersTable = defineStore('SGLeaders', () => {
  const sgLeadersData = ref([])

  async function getSGLeaders() {
    const colRef = collection(db, 'sgLeaders')
    await onSnapshot(colRef, snapshot => {
      snapshot.docs.forEach(doc => {
        const data = {...doc.data(), id: doc.id}
        // Проверка на id на существование уже в массиве в state и запись
        const ids = sgLeadersData.value.map(el => el.id)
        if (!ids.includes(doc.id)) sgLeadersData.value.push(data)
      })
    })
  }

  async function createNewSGLeader (payload) {
    const leaderId = Date.now().toString()
    await setDoc(doc(db, 'sgLeaders', leaderId), {...payload})
    await alert('all done')
  }


  return {
    getSGLeaders,
    createNewSGLeader,
    sgLeadersData,
  }
})