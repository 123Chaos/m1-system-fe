import request from '../request';

export const saveConfig = (data: any) => {
  return request({
    method: 'post',
    url: 'http://localhost:3000/config/save',
    data
  });
};
