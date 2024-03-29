import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import VCalendar from 'v-calendar'
import 'v-calendar/dist/style.css'
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
import {auth } from '@/plugins/firebase.config'
import {onAuthStateChanged} from 'firebase/auth'
import '@/plugins/variables.scss'
import { plugin, FormKitSchema, defaultConfig } from '@formkit/vue'
import formkitConfig from '@/plugins/formkit.config'

loadFonts()

let app
const pinia = createPinia()

onAuthStateChanged(auth, () => {
  if (!app) app = createApp(App)
    .use(pinia)
    .use(router)
    .use(vuetify)
    .use(VCalendar, {})
    .use(plugin, defaultConfig(formkitConfig))
    .use(FormKitSchema)
    .mount('#app')
})