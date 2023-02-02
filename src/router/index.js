import { createRouter, createWebHistory } from 'vue-router'
import homePage from '@/views/home/homePage'
import auth from '@/router/routes/auth'
import navDrawer from '@/router/routes/navDrawer'
import { useAuthStore } from '@/stores/authStore'
import {storeToRefs} from 'pinia'


const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage,
    meta: {
      title: 'Главная',
      layout: 'main',
      auth: true
    }
  },{
    path: '/privacyPolicy',
    name: 'privacyPolicy',
    component: () => import('@/views/policies/privacyPolicy'),
    meta: {
      title: 'Приваси полиси',
      layout: 'card', // Debug needed
      auth: true,
    }
  },{
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/profile/appProfilePage.vue'),
    meta: {
      title: 'Аккаунт',
      layout:  'profile',
      auth: true,
    }
  },{
    path: '/connection',
    name: 'connection',
    component: () => import('@/views/home/connectionCard.vue'),
    meta: {
      layout: 'card',
      auth: true,
      title: 'Связаться с церковью'
    }
  },{
    path: '/giving',
    name: 'giving',
    component: () => import('@/views/home/givingCard'),
    meta: {
      layout: 'card',
      auth: true,
    }
  },
  ...navDrawer,
  ...auth,
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