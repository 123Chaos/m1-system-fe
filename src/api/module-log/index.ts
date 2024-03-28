import request from '../request';

export const getList = (params: any) => {
  return request({
    method: 'get',
    url: 'http://localhost:3000/module-log/list',
    params
  });
};

export const getDetail = () => {
  return request({
    method: 'get',
    url: 'http://localhost:3000/module-log/detail'
  });
};

export const getOptions = () => {
  return request({
    method: 'get',
    url: 'http://localhost:3000/module-log/options'
  });
};
