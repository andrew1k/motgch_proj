import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import { loadFonts } from './plugins/webfontloader'
loadFonts()


let app
import {firebaseAuth} from '@/firebase/firebase.config'
firebaseAuth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
      .use(router)
      .use(store)
      .use(vuetify)
      .mount('#app')
  }
})

