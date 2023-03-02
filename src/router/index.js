import {createRouter, createWebHistory} from 'vue-router'
import homePage from '@/views/home/homePage'
import auth from '@/router/routes/auth'
import nav from '@/router/routes/nav'
import {useAuthStore} from '@/stores/authStore'
import {storeToRefs} from 'pinia'


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
  },{
    path: '/:catchAll(.*)', // catchall 404
    name: 'notFound',
    component: () => import('@/views/404/notfoundPage.vue'),
    meta: {
      title: 'Not Found',
      layout: 'card',
      auth: true,
    },
  },{
    path: '/news/:id',
    name: 'newsPage',
    props: true,
    component: () => import('@/views/home/views/news/newsPage.vue'),
    meta: {
      title: 'News',
      layout: 'news',
      auth: true,
    }
  },{
    path: '/events/:id',
    name: 'eventPage',
    props: true,
    component: () => import('@/views/calendar/views/event/eventPage.vue'),
    meta: {
      title: 'Event',
      layout: 'card',
      auth: true,
    }
  },
  ...nav,
  ...auth,
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const {isAuthed} = storeToRefs(authStore)
  const requireAuth = to.meta.auth
  if (requireAuth && !isAuthed.value) next('/auth?message=needAuthorization')
  else if (requireAuth && isAuthed.value) next()
  else if (!requireAuth && isAuthed.value) next('/')
  else next()
})

export default router