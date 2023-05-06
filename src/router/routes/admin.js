export default [
  {
    path: '/formViewer',
    name: 'formViewer',
    component: () => import('@/views/admin/FormViewer.vue'),
    meta: {
      layout:  'admin',
      auth: true,
      admin: true,
    }
  }
]