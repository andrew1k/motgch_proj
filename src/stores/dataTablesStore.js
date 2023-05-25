import {defineStore} from 'pinia'
import {ref} from 'vue'
import {collection, getDocs, onSnapshot} from 'firebase/firestore'
import {db} from '@/plugins/firebase.config'

export const useSGLeadersTable = defineStore('SGLeaders', () => {
  const sgLeadersData = ref([])

  async function getSGLeaders() {
    const leadersSnapshoot = await getDocs(collection(db, 'sgLeaders'))
    leadersSnapshoot.forEach(doc => {
      const data = {...doc.data(), id: doc.id}
      const ids = sgLeadersData.value.map(el => el.id)
      if (!ids.includes(doc.id)) sgLeadersData.value.push(data)
    })
  }


  return {
    getSGLeaders,
    sgLeadersData,
  }
})