const userCenter: AuthRoute.Route = {
  name: 'user-center',
  path: '/user-center',
  component: 'self',
  meta: {
    hide: true,
    title: '用户中心',
    requiresAuth: true,
    keepAlive: true,
    singleLayout: 'basic',
    permissions: ['super'],
    icon: 'majesticons:user-circle-line',
    order: 6
  }
};

export default userCenter;
