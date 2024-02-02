const moduleSetting: AuthRoute.Route = {
  name: 'module-setting',
  path: '/module-setting',
  component: 'self',
  meta: {
    title: '模型配置',
    // i18nTitle: 'routes.about',
    requiresAuth: true,
    keepAlive: true,
    singleLayout: 'basic',
    permissions: ['super', 'admin', 'user'],
    icon: 'majesticons:chip-line',
    order: 2
  }
};

export default moduleSetting;
