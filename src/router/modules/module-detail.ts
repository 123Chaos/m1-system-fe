const moduleDetail: AuthRoute.Route = {
  name: 'module-detail',
  path: '/module-detail',
  component: 'self',
  meta: {
    hide: true,
    title: '查看更多',
    requiresAuth: true,
    keepAlive: true,
    singleLayout: 'basic',
    permissions: ['super'],
    icon: 'majesticons:search-line',
    order: 6
  }
};

export default moduleDetail;
