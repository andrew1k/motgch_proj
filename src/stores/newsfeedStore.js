import {defineStore} from 'pinia'
import {db, storage} from '@/plugins/firebase.config'
import {doc, setDoc, collection, onSnapshot} from 'firebase/firestore'
import {uploadBytes, ref as sref, getDownloadURL} from 'firebase/storage'
import { ref } from 'vue'

export const useNewsfeedStore = defineStore('newsfeedStore', () => {
  const news = ref([])
  const newsIds= ref([])
  
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
        url: url,
        filePath: filePath,
      })
      await alert('All done, news saved')
    } catch (e) {
      console.log(e)
    }
  }

  async function getNews() {
    const colRef = collection(db, 'newsfeed')
    await onSnapshot(colRef, snapshot => {
      snapshot.docs.forEach(doc => {
        const id = doc.id
        const data = doc.data()
        if (!newsIds.value.includes(doc.id)) {
          newsIds.value.push(doc.id)
          news.value.push({...data, id})
        }
      })
    })
  }

  return {
    uploadNews,
    getNews,
    news
  }
})