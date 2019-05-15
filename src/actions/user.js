export const SUCCESS_LOGIN_INFO = 'SUCCESS_LOGIN_INFO';

export function setUserInfo(data) {
  return {
    type: SUCCESS_LOGIN_INFO,
    payload: data
  };
  
}