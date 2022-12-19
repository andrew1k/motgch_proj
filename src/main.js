import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {SetupCalendar} from 'v-calendar'
import 'v-calendar/dist/style.css';


import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'


loadFonts()
let app
import {firebaseAuth} from '@/firebase/firebase.config'
import {onAuthStateChanged} from 'firebase/auth'
onAuthStateChanged(firebaseAuth,() => {
  if (!app) {
    app = createApp(App)
      .use(SetupCalendar, {})
      .use(router)
      .use(store)
      .use(vuetify)
      .mount('#app')
  }
})

