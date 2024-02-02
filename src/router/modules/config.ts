const config: AuthRoute.Route = {
  name: 'config',
  path: '/config',
  component: 'self',
  meta: {
    title: '全局配置',
    // i18nTitle: 'routes.about',
    requiresAuth: true,
    keepAlive: true,
    singleLayout: 'basic',
    permissions: ['super'],
    icon: 'icon-park-outline:config',
    order: 6
  }
};

export default config;
