import { createRouter, createWebHistory } from 'vue-router'
import auth from '@/router/routes/auth'
import homePageRoutes from '@/router/routes/homePage'
import discoverPage from '@/router/routes/discoverPage'
import homePage from '@/views/homePage/homePage'
import store from '@/store'

const routes = [
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
  ...homePageRoutes,
  ...discoverPage,
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