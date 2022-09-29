import { createRouter, createWebHistory } from 'vue-router'
import auth from '@/router/routes/auth'
import homePage from '@/views/homePage/homePage'
// import {firebaseAuth} from '@/firebase/firebase.config'
import store from '@/store'


const routes = [
  {
    path: '/home',
    name: 'unauthHomePage',
    component: () => {import('@/views/unauthHome/HomePage')},
    meta: {
      layout: 'unauth',
      auth: false,
    }
  },
  {
    path: '/',
    name: 'home',
    component: homePage,
    meta: {
      layout: 'main',
      auth: true
    }
  },
  ...auth,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=> {
  store.dispatch('auth/getUser')
  // store.dispatch('auth/authStateChanges')
  const requireAuth = to.meta.auth
  const isAuthed = store.getters['auth/accessToken']
  if (requireAuth && !isAuthed) {
    next('/home?message=needAuthorization')
  } else if (requireAuth && isAuthed) {
    next()
  } else if (!requireAuth && isAuthed){
    next('/')
  } else {
    next()
  }
})

export default router