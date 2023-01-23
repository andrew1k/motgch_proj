export default [
  {
    path:  '/calendar',
    name: 'calendar',
    component: () => import('@/views/calendar/calendarPage.vue'),
    meta:  {
      layout: 'main',
      auth: true,
    }
  },{
    path: '/discover',
    name: 'discover',
    component: () => import('@/views/discover/discoverPage'),
    meta: {
      layout: 'main',
      auth: true,
    },
  },{
    path: '/sunday',
    name: 'sunday',
    component: () => import('@/views/home/sundayCard.vue'),
    meta: {
      layout: 'card',
      auth: true,
    }
  },{
    path: '/purposes/worship',
    name: 'worship',
    component: () => import('@/views/purposes/purposeWorship.vue'),
    meta: {
      layout: 'card',
      auth: true
    }
  },{
    path: '/purposes/fellowship',
    name: 'fellowship',
    component: () => import('@/views/purposes/purposeFellowship.vue'),
    meta: {
      layout: 'card',
      auth: true
    }
  },{
    path: '/purposes/discepleship',
    name: 'discepleship',
    component: () => import('@/views/purposes/purposeDiscepleship.vue'),
    meta: {
      layout: 'card',
      auth: true
    }
  },{
    path: '/purposes/ministry',
    name: 'ministry',
    component: () => import('@/views/purposes/purposeMinistry.vue'),
    meta: {
      layout: 'card',
      auth: true
    }
  },{
    path: '/purposes/evangelism',
    name: 'evangelism',
    component: () => import('@/views/purposes/purposeEvangelism.vue'),
    meta: {
      layout: 'card',
      auth: true
    }
  },{
    path: '/purposes/youth',
    name: 'youth',
    component: () => import('@/views/purposes/purposeYouth.vue'),
    meta: {
      layout: 'card',
      auth: true
    }
  }
]