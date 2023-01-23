import {defineStore} from 'pinia'
import {storage} from '@/plugins/firebase.config'
import {ref} from 'firebase/storage'

export const useAppStorage = defineStore('useAppStorage', () => {
const sundayCardRef = ref(storage, 'images/sundayCard.png')

  return {
  sundayCardRef
  }
})