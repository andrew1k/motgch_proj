import { createRouter, createWebHistory } from 'vue-router'
import auth from '@/router/routes/auth'
import homePageRoutes from '@/router/routes/homePage'
import discoverPage from '@/router/routes/discoverPage'
import homePage from '@/views/homePage/homePage'
import { useAuthStore } from '@/stores/authStore'
import {storeToRefs} from 'pinia'



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
    path: '/privacyPolicy',
    name: 'privacyPolicy',
    component: () => import('@/views/policies/privacyPolicy'),
    meta: {
      layout: 'main', // Debug needed
      auth: true,
    }
  },
  ...auth,
  ...homePageRoutes,
  ...discoverPage,
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component:  () => import('@/views/notFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=> {
  const authStore = useAuthStore()
  const { isAuthed } = storeToRefs(authStore)
  const requireAuth = to.meta.auth
  if (requireAuth && !isAuthed.value) next('/auth?message=needAuthorization')
  else if (requireAuth && isAuthed.value) next()
  else if (!requireAuth && isAuthed.value)next('/')
  else next()
})

export default router