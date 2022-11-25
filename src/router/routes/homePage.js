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
    component: () => import('@/views/homePage/sundayPage'),
    meta: {
      layout: 'main',
      auth: true,
    }
  },{
    path: '/connection',
    name: 'connection',
    component: () => import('@/views/homePage/connectionCard'),
    meta: {
      layout: 'main',
      auth: true,
    }
  },{
    path: '/myNotes',
    name: 'myNotes',
    component: () => import('@/views/homePage/myNotes'),
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