import {createRouter, createWebHistory} from 'vue-router'
import homePage from '@/views/home/homePage'
import auth from '@/router/routes/auth'
import nav from '@/router/routes/nav'
import admin from '@/router/routes/admin'
import {useAuthStore} from '@/stores/authStore'
import {storeToRefs} from 'pinia'
import {App} from '@capacitor/app'

const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage,
    meta: {
      title: 'Главная',
      layout: 'main',
      auth: true,
    },
  },
  ...nav,
  ...auth,
  ...admin,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
App.addListener('backButton', () => {router.back()}) // для Android слушает кнопку назад

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const {isAuthed} = storeToRefs(authStore)
  const requireAuth = to.meta.auth
  if (requireAuth && !isAuthed.value) next('/auth')
  else if (requireAuth && isAuthed.value) next()
  else if (!requireAuth && isAuthed.value) next('/')
  else next()
})

export default router