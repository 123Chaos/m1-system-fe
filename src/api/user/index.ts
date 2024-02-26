import request from '../request';

export const setNewPassword = (data: any) => {
  return request({
    method: 'post',
    url: 'http://localhost:3000/user/center',
    data
  });
};
