import {defineStore, storeToRefs} from 'pinia'
import {db, storage} from '@/plugins/firebase.config'
import {
  doc,
  collection,
  onSnapshot,
  deleteDoc,
  setDoc,
  query,
  orderBy,
  limit,
  getDocs,
  where,
  getDoc,
} from 'firebase/firestore'
import {uploadBytes, ref as sref, getDownloadURL, deleteObject} from 'firebase/storage'
import {ref} from 'vue'
import {useAppState} from '@/stores/appState'
import {useAuthStore} from '@/stores/authStore'

export const useNewsfeedStore = defineStore('newsfeedStore', () => {
  const news = ref([])
  const newsIds = ref([])
  const stories = ref([])
  const storiesIds = ref([])
  const newsItem = ref()
  const sunday = ref({docId: '0'})
  const authStore = useAuthStore()
  const {userAge} = storeToRefs(authStore)
  const appState = useAppState()
  const {isPending} = storeToRefs(appState)

  async function getSunday() {
    isPending.value = true
    const q = query(collection(db, 'sunday'), orderBy('timeId', 'desc'), limit(1))
    const qSnapshot = await getDocs(q)
    qSnapshot.forEach(doc => {
      const docId = doc.id
      sunday.value = {...doc.data(), docId}
      isPending.value = false
    })
  }

  async function getNews() {
    isPending.value = true
    const newsSnapshoot = await getDocs(collection(db, 'newsfeed'))
    newsSnapshoot.forEach(doc => {
      const id = doc.id
      const data = doc.data()
      if (!newsIds.value.includes(id)) {
        newsIds.value.push(id)
        news.value.unshift({...data, id})
      }
    })
    isPending.value = false
  }

  async function getNewsItem(newsId) {
    const newsSnap = await getDoc(doc(db, 'newsfeed', newsId))
    if (newsSnap.exists()) newsItem.value = newsSnap.data()
  }


  async function getStories() {
    isPending.value = true
    const storySnapshot = await getDocs(collection(db, 'stories'))
    storySnapshot.forEach(doc => {
      const id = doc.id
      const data = doc.data()
      if (!storiesIds.value.includes(id)) {
        storiesIds.value.push(id)
        stories.value.unshift({id, ...data})
      }
    })
    isPending.value = false
  }

  // ------------------------------------------------------------------------------------------------------------------------------ admin Funcs
  async function uploadNews(imgs, payload) {
    const newsId = Date.now().toString()
    let filePath
    let url
    let image

    try {
      // get image from fileInput array
      imgs.forEach(img => {
        image = img
      })
      filePath = `newsfeed/${newsId}/${image.name}`
      // upload image
      await uploadBytes(sref(storage, filePath), image)
      url = await getDownloadURL(sref(storage, filePath))
      // save to db
      await setDoc(doc(db, 'newsfeed', newsId), {
        title: payload.title,
        subtitle: payload.subtitle,
        text: payload.text,
        leader: payload.leader,
        url: url,
        filePath: filePath,
      })
      await alert('All done, news saved')
    } catch (e) {
      console.log(e)
    }
  }

  async function deleteNewsItem(newsId) {
    await deleteObject(sref(storage, `newsfeed/${newsId}`))
    await deleteDoc(doc(db, 'newsfeed', newsId))
    await alert('all done')
  }

  async function uploadStory(prevImg, storyImgs, title, link, linkColor, linkLabel) {
    const storyId = Date.now().toString()

    try {
      // getting preview image form array
      let previewImg
      prevImg.forEach(img => {
        previewImg = img
      })
      // path in storage
      const previewImgPath = `stories/${storyId}/${previewImg.name}`
      // uploading img to strage
      await uploadBytes(sref(storage, previewImgPath), previewImg)
      // getting img url in storage
      const previewImgUrl = await getDownloadURL(sref(storage, previewImgPath))

      // same as prev, but to group of imgs, and save its path & url to array
      const storyImages = []
      for (const _storyImg of storyImgs) {
        const _storyImgPath = `/stories/${storyId}/storyIgms/${_storyImg.name}`
        await uploadBytes(sref(storage, _storyImgPath), _storyImg)
        let _storyImgUrl = await getDownloadURL(sref(storage, _storyImgPath))
        storyImages.push({_storyImgPath, _storyImgUrl})
      }

      await setDoc(doc(db, 'stories', storyId), {
        previewImgUrl,
        previewImgPath,
        storyImages,
        title,
        link,
        linkColor,
        linkLabel,
      })
      await alert('all done successfully')
    } catch (e) {
      console.log(e)
    }
  }

  async function updateSunday(payload) {
    const timeId = Date.now().toString()
    await setDoc(doc(db, 'sunday', timeId), {...payload, timeId})
    await alert('Обновлено')
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
    // -------------------------- admin Funcs
    uploadNews,
    deleteNewsItem,
    uploadStory,
    updateSunday,
  }
})