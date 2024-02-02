const upload: AuthRoute.Route = {
  name: 'upload',
  path: '/upload',
  component: 'self',
  meta: {
    title: '上传图像',
    // i18nTitle: 'routes.about',
    requiresAuth: true,
    keepAlive: true,
    singleLayout: 'basic',
    permissions: ['super', 'admin', 'user'],
    icon: 'majesticons:camera-line',
    order: 1
  }
};

export default upload;
