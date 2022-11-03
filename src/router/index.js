import { createRouter, createWebHistory } from 'vue-router'
import auth from '@/router/routes/auth'
import homePage from '@/views/homePage/homePage'
import store from '@/store'
import mainCalendar from '@/views/calendar/mainCalendar'

const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage,
    meta: {
      layout: 'main',
      auth: true
    }
  }, {
    path:  '/calendar',
    name: 'calendar',
    component: mainCalendar,
    meta:  {
      layout: 'main',
      auth: true,
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