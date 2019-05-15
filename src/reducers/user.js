import * as ActionType from '../actions/user';
import { get } from 'lodash';
export const SUCCESS_LOGIN_INFO = 'SUCCESS_LOGIN_INFO';

export function userInfo(state = '', action) {  
  switch (action.type) {
    case ActionType.SUCCESS_LOGIN_INFO:
      return get(action, 'payload', '');
    default:
      return state;
  }
}