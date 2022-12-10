import {firebaseDB} from '@/firebase/firebase.config'
import { ref, onValue} from 'firebase/database'
// import store from '@/store'
export default {
  namespaced: true,
  state() {
    return {
      events: {},
    }
  },
  mutations: {
    setEvents(state, payload) {
      state.events = payload
    },
  },
  actions: {
    async getEvents({commit}) {
      try {
        const calendarRef =ref(firebaseDB, 'calendar/')
        await onValue(calendarRef, (snapshot) => {
          const calendarEvents = snapshot.val()
          commit('setEvents',  calendarEvents)
        })

      } catch (e) {
        // await store.dispatch('message/setMessage', e.code)
        console.log(e.message)
      }
    },
    // async createEvent(_, payload) {
    //   try {
    //     await set(ref(firebaseDB, 'calendar/' + payload.id), payload)
    //   } catch (e) {
    //     await store.dispatch('message/setMessage', {value: handleErrors(e.code)})
    //   }
    // },
    // async updateEvent(_, payload) {
    //   try {
    //     await set(ref(firebaseDB, 'calendar/' + payload.id), payload)
    //   } catch (e) {
    //     await store.dispatch('message/setMessage', {value: handleErrors(e.code)})
    //   }
    // },
    // async deleteEvent(_, payload) {
    //   try {
    //     await set(ref(firebaseDB, 'calendar/' + payload.id), payload)
    //   } catch (e) {
    //     await store.dispatch('message/setMessage', {value: handleErrors(e.code)})
    //   }
    // }
  },
  getters: {
    getEvents(state) {return state.events}
  },
}