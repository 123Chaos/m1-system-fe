import request from '../request';

// data = { phone: string, verifyCodeServer: string, verifyCodeLocal: string}
export const loginWithPhoneAndverifyCode = (data: object) => {
  return request({
    method: 'post',
    url: 'https://v2.alapi.cn/api/icp',
    data
  });
};

// data = { userName: string, password: string}
export const loginWithUserNameAndPassword = (data: object) => {
  return request({
    method: 'post',
    url: 'https://v2.alapi.cn/api/icp',
    data
  });
};

// data = { userName: string, phone: string, verifyCodeServer: string, password: string}
export const register = (data: object) => {
  return request({
    method: 'post',
    url: 'https://v2.alapi.cn/api/icp',
    data
  });
};

// data = { phone: string, verifyCodeServer: string, password: string}
export const forgetPassword = (data: object) => {
  return request({
    method: 'post',
    url: 'https://v2.alapi.cn/api/icp',
    data
  });
};
