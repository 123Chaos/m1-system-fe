import request from '../request';

export const getJoke = (_params: object) => {
  return request({
    method: 'get',
    url: 'https://v2.alapi.cn/api/icp',
    params: _params
  });
};
