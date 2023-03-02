export default [
 {
    path: '/auth',
    name: 'appAuth',
    component: () => import('@/views/auth/appAuth'),
    meta: {
      layout:  'auth',
      auth: false,
    }
  },{
    path: '/restorePassword',
    name: 'restorePassword',
    component: () => import('@/views/auth/RestorePassword'),
    meta: {
      layout:  'auth',
      auth: false,
    }
  }
]