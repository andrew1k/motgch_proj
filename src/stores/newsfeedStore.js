import {defineStore} from 'pinia'
import {db, storage} from '@/plugins/firebase.config'
import {doc, setDoc, collection, onSnapshot, deleteDoc} from 'firebase/firestore'
import {uploadBytes, ref as sref, getDownloadURL, deleteObject} from 'firebase/storage'
import {ref} from 'vue'

export const useNewsfeedStore = defineStore('newsfeedStore', () => {
  const news = ref([])
  const newsIds = ref([])
  const stories = ref([])
  const storiesIds = ref([])
  const newsItem = ref()

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
        if (!newsIds.value.includes(id)) {
          newsIds.value.push(id)
          news.value.push({...data, id})
        }
      })
    })
  }

  async function getNewsItem(newsId) {
    await onSnapshot(doc(db, 'newsfeed', newsId), (doc) => {
      newsItem.value = doc.data()
    })
  }

  async function deleteNewsItem(newsId) {
    await deleteObject(sref(storage, `newsfeed/${newsId}`))
    await deleteDoc(doc(db, 'newsfeed', newsId))
    await alert('all done')
  }

  async function getStories() {
    const colRef = collection(db, 'stories')
    await onSnapshot(colRef, snapshot => {
      snapshot.docs.forEach(doc => {
        const id = doc.id
        const data = doc.data()
        if (!storiesIds.value.includes(id)) {
          storiesIds.value.push(id)
          stories.value.push({id, ...data})
        }
      })
    })
  }

  async function uploadStory(prevImg, storyImgs) {
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
      })
      await alert('all done successfully')
    } catch (e) {
      console.log(e)
    }
  }

  return {
    getStories,
    uploadStory,
    uploadNews,
    getNews,
    getNewsItem,
    deleteNewsItem,
    news,
    stories,
    newsItem,
  }
})