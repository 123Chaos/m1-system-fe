const operationLog: AuthRoute.Route = {
  name: 'operation-log',
  path: '/operation-log',
  component: 'self',
  meta: {
    title: '操作日志',
    // i18nTitle: 'routes.about',
    requiresAuth: true,
    keepAlive: true,
    singleLayout: 'basic',
    permissions: ['super', 'admin'],
    icon: 'mdi:book-edit-outline',
    order: 4
  }
};

export default operationLog;
