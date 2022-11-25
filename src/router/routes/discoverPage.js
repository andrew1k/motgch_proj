export default [
  {
    path: '/discover',
    name: 'Discover',
    component: () => import('@/views/discoverPage/discoverPage'),
    meta: {
      layout: 'main',
      auth: true,
    },
  }
]