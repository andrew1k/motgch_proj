import {defineStore, storeToRefs} from 'pinia'
import {ref} from 'vue'
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  setDoc,
  arrayUnion,
  arrayRemove,
  deleteField,
} from 'firebase/firestore'
import {db} from '@/plugins/firebase.config'
import {useAuthStore} from '@/stores/authStore'
import {auth} from '@/plugins/firebase.config'

export const useCalendarEventsStore = defineStore('calendarEventsStore', () => {

  const authStore = useAuthStore()
  const { signedEventsIds} = storeToRefs(authStore)

  const allCalendarEvents = ref([])
  const weekCalendarEvents = ref([])
  const docIds = ref([])

  async function getCalendarEvents() {
    const colRef = await collection(db, 'calendar')

    await onSnapshot(colRef, snapshot => {
      let events = []
      let days = {}
      let filteredEvents = []
      // get data from collection
      snapshot.docs.forEach(doc => {

        // get doc ID to docIds Array
        docIds.value.push(doc.id)

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
  async function saveEventToDB(payload) {
    const id = Date.now()
    const eventToDB = {}
    eventToDB[id] = {
      title: payload.eventTitle,
      text: payload.eventText,
      color: payload.eventColor,
      start: `${payload.eventDate}T${payload.eventTime}`,
      id: id,
    }

    // проверка на существование в бд записи на этот день, тогда обнавляет док
    if (docIds.value.includes(payload.eventDate)) {
      await updateDoc(doc(db, 'calendar', payload.eventDate), eventToDB)
        .then(() => {
          alert('event updated successfully')
        })
    } else {
      await setDoc(doc(db, 'calendar', payload.eventDate), eventToDB)
        .then(() => {
          alert('event saved successfully')
        })
    }
  }
  async function signToEvent(evnt) {
    const eventDay = evnt.start.slice(0, 10)
    const docRef = doc(db, 'calendar', eventDay)
    const eventId = evnt.id
    const userLink = `users/${auth.currentUser.uid}`

    // Проверка на существование записи
    if (!signedEventsIds.value.includes(eventId)) {
      await updateDoc(docRef, {
        [eventId + '.signedAccounts']: arrayUnion({id: auth.currentUser.uid, userLink}),
      })
      await updateDoc(doc(db, 'users', auth.currentUser.uid), {
        signedEvents: arrayUnion({eventDay, eventId}),
      })
    }
  }
  async function unsignToEvent(evnt) {
    const eventDay = evnt.start.slice(0, 10)
    const docRef = doc(db, 'calendar', eventDay)
    const eventId = evnt.id
    const userLink = `users/${auth.currentUser.uid}`

    await updateDoc(docRef, {
      [eventId + '.signedAccounts']: arrayRemove({id: auth.currentUser.uid, userLink}),
    })
    await updateDoc(doc(db, 'users', auth.currentUser.uid), {
      signedEvents: arrayRemove({eventDay, eventId}),
    })

  }
  async function deleteEvent(evnt) {
    const eventDay = evnt.start.slice(0, 10)
    const docRef = doc(db, 'calendar', eventDay)
    const eventId = evnt.id

    await evnt.signedAccounts.forEach(usr => {
      updateDoc(doc(db, 'users', usr.id), {
        signedEvents: arrayRemove({eventDay, eventId}),
      })
    })
    await updateDoc(docRef, {[eventId]: deleteField()})
  }

  return {
    allCalendarEvents,
    weekCalendarEvents,

    getCalendarEvents,
    saveEventToDB,
    signToEvent,
    unsignToEvent,
    deleteEvent,
  }
})