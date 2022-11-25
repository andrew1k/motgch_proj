export default [
  {
    path: '/settings',
    name: 'accountSettings',
    component: () => import('@/views/appAuth/appAccountSettings'),
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
  }
]