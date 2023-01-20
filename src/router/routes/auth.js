export default [
  {
    path: '/settings',
    name: 'accountSettings',
    component: () => import('@/views/profilePage/appProfilePage.vue'),
    meta: {
      layout:  'settings',
      auth: true,
    }
  },{
    path: '/auth',
    name: 'appAuth',
    component: () => import('@/views/appAuth/appAuth'),
    meta: {
      layout:  'auth',
      auth: false,
    }
  },{
    path: '/restorePassword',
    name: 'RestorePassword',
    component: () => import('@/views/appAuth/RestorePassword'),
    meta: {
      layout:  'auth',
      auth: false,
    }
  }
]