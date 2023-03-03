import {defineStore} from 'pinia'
import {ref} from 'vue'
import {collection, onSnapshot,} from 'firebase/firestore'
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


  return {
    getSGLeaders,
    sgLeadersData,
  }
})