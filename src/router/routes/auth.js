export default [
  // {
  //   path: '/login',
  //   name: 'appLogin',
  //   component: () => import('@/views/appAuth/appLogin'),
  //   meta: {
  //     layout:  'auth',
  //     action: 'app-login',
  //     auth: false
  //   }
  // },{
  //   path: '/signup',
  //   name: 'appSignup',
  //   component: () => import('@/views/appAuth/appSignup'),
  //   meta: {
  //     layout:  'auth',
  //     action: 'app-signup',
  //     auth: false
  //   }
  // },
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