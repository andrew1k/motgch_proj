import {defineStore} from 'pinia'
import {computed, ref} from 'vue'
import {collection, onSnapshot} from 'firebase/firestore'
import {db} from '@/firebase/firebase.config'

export const useCalendarEventsStore = defineStore('calendarEventsStore', () => {
  const allCalendarEvents = ref([])
  const weekCalendarEvents = ref([])
  const allCalEvnts = (computed(() => allCalendarEvents.value))
  const wCalEvnts = (computed(() => weekCalendarEvents.value))

async function getCalendarEvents() {
    const colRef = await collection(db, 'calendar')

    await onSnapshot(colRef, snapshot => {
      let events = []
      let days = {}
      let filteredEvents = []
      // get data from collection
      snapshot.docs.forEach(doc => {
        // doc.data() method to get data from docs
        let docData = doc.data()
        let dayEvents = Object.values(docData)
        // make it one array of all events
        events.push(...dayEvents)

        // set object by days and their arrays
        days[doc.id] = dayEvents
      })

      // ------------------------------------------  getting current week
      let curr = new Date
      let week = []
      for (let i = 1; i <= 7; i++) {
        let first = curr.getDate() - curr.getDay() + i
        let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
        week.push(day)
      }
      // ------------------------------------------ filter documents by week days
      let filteredDays = Object.keys(days)
        .filter(key => week.includes(key))
        .reduce((obj, key) => {
          obj[key] = days[key]
          return obj
        }, {})
      // write all arrays of objects to one array
      Object.values(filteredDays).map(arr => {
        filteredEvents.push(...arr)
      })
      allCalendarEvents.value = events
      weekCalendarEvents.value = filteredEvents
    })
  }


  return {
    allCalendarEvents,
    weekCalendarEvents,
    getCalendarEvents,
    allCalEvnts,
    wCalEvnts
  }
})