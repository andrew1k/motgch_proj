import { createStore } from 'vuex'
import errors from '@/store/modules/errors.module'
import auth from '@/store/modules/auth.module'
import settings from '@/store/modules/settings.module'
import calendar from '@/store/modules/calendar.module'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    errors,
    auth,
    settings,
    calendar,
  }
})
