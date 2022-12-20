import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import {SetupCalendar} from 'v-calendar'
import 'v-calendar/dist/style.css'


import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
loadFonts()

let app
import {auth} from '@/firebase/firebase.config'
import {onAuthStateChanged} from 'firebase/auth'

onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App)
      .use(createPinia())
      .use(router)
      .use(vuetify)
      .use(SetupCalendar, {})
      .mount('#app')
  }
})