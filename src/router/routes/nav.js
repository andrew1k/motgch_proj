import calendarPage from '@/views/calendar/calendarPage.vue'
import discoverPage from '@/views/discover/discoverPage'
import connectionPage from '@/views/discover/views/connection/connectionPage.vue'
import sundayPage from '@/views/home/views/sunday/sundayPage.vue'
import profilePage from '@/views/profile/profilePage.vue'
import givingPage from '@/views/profile/views/giving/givingPage.vue'
import notificationsPage from '@/views/profile/views/notifications/notificationsPage.vue'
import purposeWorship from '@/views/purposes/purposeWorship.vue'
import purposeFellowship from '@/views/purposes/purposeFellowship.vue'
import purposeDiscepleship from '@/views/purposes/purposeDiscepleship.vue'
import purposeMinistry from '@/views/purposes/purposeMinistry.vue'
import purposeEvangelism from '@/views/purposes/purposeEvangelism.vue'
import purposeYouth from '@/views/purposes/purposeYouth.vue'
import notfoundPage from '@/views/404/notfoundPage.vue'
import newsPage from '@/views/home/views/news/newsPage.vue'
import eventPage from '@/views/calendar/views/event/eventPage.vue'
export default [
  {
    path:  '/calendar',
    name: 'calendar',
    component: calendarPage,
    meta:  {
      title: 'Календарь',
      layout: 'main',
      auth: true,
    }
  },{
    path: '/discover',
    name: 'discover',
    component: discoverPage,
    meta: {
      title: 'Открой для себя церковь',
      layout: 'main',
      auth: true,
    },
  },{
    path: '/connection',
    name: 'connection',
    component: connectionPage,
    meta: {
      layout: 'card',
      auth: true,
      title: 'Связаться с церковью',
      color: 'primary'
    }
  },{
    path: '/sunday',
    name: 'sunday',
    component: sundayPage,
    props: true,
    meta: {
      color: 'primary',
      layout: 'card',
      auth: true,
      title: 'В это воскресенье'
    }
  },{
    path: '/profile',
    name: 'profile',
    component: profilePage,
    meta: {
      title: 'Аккаунт',
      layout:  'profile',
      auth: true,
    }
  },{
    path: '/giving',
    name: 'giving',
    component: givingPage,
    meta: {
      color: 'primary',
      title: 'Пожертвование',
      layout: 'card',
      auth: true,
    }
  },{
    path: '/notifications',
    name: 'notifications',
    component: notificationsPage,
    meta: {
      color: 'primary',
      title: 'Уведомления',
      layout: 'card',
      auth: true,
    }
  },{
    path: '/purposes/worship',
    name: 'worship',
    component: purposeWorship,
    meta: {
      layout: 'card',
      auth: true,
      title: 'Поклонение',
      color: 'worship', // error
    }
  },{
    path: '/purposes/fellowship',
    name: 'fellowship',
    component: purposeFellowship,
    meta: {
      layout: 'card',
      auth: true,
      title: 'Общение',
      color: 'fellowship', // warning
    }
  },{
    path: '/purposes/discepleship',
    name: 'discepleship',
    component: purposeDiscepleship,
    meta: {
      layout: 'card',
      auth: true,
      title: 'Ученичество',
      color: 'discepleship', // success
    }
  },{
    path: '/purposes/ministry',
    name: 'ministry',
    component: purposeMinistry,
    meta: {
      layout: 'card',
      auth: true,
      title: 'Служение',
      color: 'ministry', // secondary
    }
  },{
    path: '/purposes/evangelism',
    name: 'evangelism',
    component: purposeEvangelism,
    meta: {
      layout: 'card',
      auth: true,
      title: 'Благовестие',
      color: 'evangelism', // info
    }
  },{
    path: '/purposes/youth',
    name: 'youth',
    component: purposeYouth,
    meta: {
      layout: 'card',
      auth: true,
      title: 'MBVYouth',
      color: 'secondary',
    }
  },{
    path: '/:catchAll(.*)', // catchall 404
    name: 'notFound',
    component: notfoundPage,
    meta: {
      title: 'Not Found',
      layout: 'card',
      auth: true,
    },
  },{
    path: '/news/:id',
    name: 'newsPage',
    props: true,
    component: newsPage,
    meta: {
      title: 'News',
      layout: 'news',
      auth: true,
    }
  },{
    path: '/events/:id',
    name: 'eventPage',
    props: true,
    component: eventPage,
    meta: {
      title: 'Event',
      layout: 'card',
      auth: true,
    }
  },
]