export default [
  {
    path:  '/calendar',
    name: 'calendar',
    component: () => import('@/views/calendar/mainCalendar'),
    meta:  {
      layout: 'main',
      auth: true,
    }
  },{
    path: '/sunday',
    name: 'sunday',
    component: () => import('@/components/forHomePage/sundayPage.vue'),
    meta: {
      layout: 'main',
      auth: true,
    }
  },{
    path: '/connection',
    name: 'connection',
    component: () => import('@/components/forHomePage/connectionCard.vue'),
    meta: {
      layout: 'main',
      auth: true,
    }
  },{
    path: '/myNotes',
    name: 'myNotes',
    component: () => import('@/components/forHomePage/myNotes.vue'),
    meta: {
      layout: 'main',
      auth: true,
    }
  },{
    path: '/givingCard',
    name: 'givingCard',
    component: () => import('@/views/homePage/givingCard'),
    meta: {
      layout: 'main',
      auth: true,
    }
  },
]