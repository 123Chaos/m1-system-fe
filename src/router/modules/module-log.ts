const moduleLog: AuthRoute.Route = {
  name: 'module-log',
  path: '/module-log',
  component: 'self',
  meta: {
    title: '模型日志',
    // i18nTitle: 'routes.about',
    requiresAuth: true,
    keepAlive: true,
    singleLayout: 'basic',
    permissions: ['super', 'admin'],
    icon: 'mdi:book-cog-outline',
    order: 3
  }
};

export default moduleLog;
