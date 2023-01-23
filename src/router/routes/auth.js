export default [
 {
    path: '/auth',
    name: 'appAuth',
    component: () => import('@/views/appAuth/appAuth'),
    meta: {
      layout:  'auth',
      auth: false,
    }
  },{
    path: '/restorePassword',
    name: 'restorePassword',
    component: () => import('@/views/appAuth/RestorePassword'),
    meta: {
      layout:  'auth',
      auth: false,
    }
  }
]