/* eslint-disable no-unused-vars */
import {db} from '@/firebase/firebase.config'
import {collection, onSnapshot} from 'firebase/firestore'
import store from '@/store'


let curr = new Date
let week = []

for (let i = 1; i <= 7; i++) {
  let first = curr.getDate() - curr.getDay() + i
  let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
  week.push(day)
}
console.log(week)

export default {
  namespaced: true,
  state() {
    return {
      events: {},
      weekEvents: {},
    }
  },
  mutations: {
    setEvents(state, payload) {
      state.events = payload
    },
    setWeekEvents(state, payload) {
      state.weekEvents = payload
    },
  },
  actions: {
    getEvents({commit}) {
      try {
        const colRef = collection(db, 'calendar')
        onSnapshot(colRef, snapshot => {
          let events = []
          let days = {}
          snapshot.docs.forEach(doc => {
            let docData = doc.data()
            let dayEvents = Object.values(docData)
            events.push(...dayEvents)
            days[doc.id] = dayEvents
          })
          let filteredDays = Object.keys(days)
            .filter(key => week.includes(key))
            .reduce((obj, key) => {
              obj[key] = days[key]
              return obj
            }, {})
          commit('setWeekEvents', filteredDays)

          commit('setEvents', events)
        })
      } catch (e) {
        store.dispatch('message/setMessage', e.message)
      }
    },
  },
}