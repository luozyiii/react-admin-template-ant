/*
 * action 类型
 */

export const type = {
  LOGIN: 'LOGIN',
  DICT: 'DICT'
}

// 用户信息
export function setUserInfo (userInfo) {
  return {
    type: type.LOGIN,
    userInfo
  }
}

// 字典
export function setDict (dict) {
  return {
    type: type.DICT,
    dict
  }
}
