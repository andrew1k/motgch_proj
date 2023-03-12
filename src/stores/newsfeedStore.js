import {defineStore, storeToRefs} from 'pinia'
import {db,} from '@/plugins/firebase.config'
import {doc, collection, onSnapshot,} from 'firebase/firestore'
import {ref} from 'vue'
import {useAppState} from '@/stores/appState'

export const useNewsfeedStore = defineStore('newsfeedStore', () => {
  const news = ref([])
  const newsIds = ref([])
  const stories = ref([])
  const storiesIds = ref([])
  const newsItem = ref()
  const sunday = ref([])
  const sundayIds = ref([])

  const appState = useAppState()
  const {isPending} = storeToRefs(appState)

  async function getSunday() {
    isPending.value = true
    const colRef = collection(db, 'sunday')
    await onSnapshot(colRef, snapshot => {
      snapshot.docs.forEach(doc => {
        const id = doc.id
        const data = doc.data()
        if (!sundayIds.value.includes(id)) {
          sundayIds.value.push(id)
          sunday.value.push({...data})
        }
        isPending.value = false
      })
    })
  }

  async function getNews() {
    isPending.value = true
    const colRef = collection(db, 'newsfeed')
    await onSnapshot(colRef, snapshot => {
      snapshot.docs.forEach(doc => {
        const id = doc.id
        const data = doc.data()
        if (!newsIds.value.includes(id)) {
          newsIds.value.push(id)
          news.value.push({...data, id})
        }
        isPending.value = false
      })
    })
  }

  async function getNewsItem(newsId) {
    await onSnapshot(doc(db, 'newsfeed', newsId), (doc) => {
      newsItem.value = doc.data()
    })
  }


  async function getStories() {
    isPending.value = true
    const colRef = collection(db, 'stories')
    await onSnapshot(colRef, snapshot => {
      snapshot.docs.forEach(doc => {
        const id = doc.id
        const data = doc.data()
        if (!storiesIds.value.includes(id)) {
          storiesIds.value.push(id)
          stories.value.push({id, ...data})
        }
        isPending.value = false
      })
    })
  }


  return {
    getSunday,
    getStories,
    getNews,
    getNewsItem,
    news,
    stories,
    newsItem,
    sunday,
  }
})