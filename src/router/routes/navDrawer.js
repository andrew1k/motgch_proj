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
      title: 'В это воскресенье'
    }
  },{
    path: '/purposes/worship',
    name: 'worship',
    component: () => import('@/views/purposes/purposeWorship.vue'),
    meta: {
      layout: 'card',
      auth: true,
      title: 'Поклонение',
      color: 'secondary',
    }
  },{
    path: '/purposes/fellowship',
    name: 'fellowship',
    component: () => import('@/views/purposes/purposeFellowship.vue'),
    meta: {
      layout: 'card',
      auth: true,
      title: 'Общение',
      color: 'secondary',
    }
  },{
    path: '/purposes/discepleship',
    name: 'discepleship',
    component: () => import('@/views/purposes/purposeDiscepleship.vue'),
    meta: {
      layout: 'card',
      auth: true,
      title: 'Ученичество',
      color: 'secondary',
    }
  },{
    path: '/purposes/ministry',
    name: 'ministry',
    component: () => import('@/views/purposes/purposeMinistry.vue'),
    meta: {
      layout: 'card',
      auth: true,
      title: 'Служение',
      color: 'secondary',
    }
  },{
    path: '/purposes/evangelism',
    name: 'evangelism',
    component: () => import('@/views/purposes/purposeEvangelism.vue'),
    meta: {
      layout: 'card',
      auth: true,
      title: 'Благовестие',
      color: 'secondary',
    }
  },{
    path: '/purposes/youth',
    name: 'youth',
    component: () => import('@/views/purposes/purposeYouth.vue'),
    meta: {
      layout: 'card',
      auth: true,
      title: 'MBVYouth',
      color: 'secondary',
    }
  }
]