export default [
  {
    path: '/formViewer',
    name: 'formViewer',
    component: () => import('@/views/admin/FormViewer.vue'),
    meta: {
      layout:  'main',
      auth: true,
      admin: true,
    }
  }
]