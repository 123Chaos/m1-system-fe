import request from '../request';

export const getList = (params: any) => {
  return request({
    method: 'get',
    url: 'http://localhost:3000/operation-log/list',
    params
  });
};
