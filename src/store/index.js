import { createStore } from 'vuex'
import message from '@/store/modules/message.module'
import auth from '@/store/modules/auth.module'
import calendar from '@/store/modules/calendar.module'
import lists from '@/store/modules/lists.module'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
    clearState() {
      this.state = null
    }
  },
  actions: {
  },
  modules: {
    message,
    auth,
    calendar,
    lists,
  }
})
