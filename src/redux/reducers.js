/**
 * Reducer 数据处理
*/
import { type } from './actions'

export default (state, action) => {
  switch (action.type) {
    // 用户信息
    case type.LOGIN:
      return {
        ...state,
        userInfo: { ...action.userInfo }
      }
    // 字典
    case type.DICT:
      return {
        ...state,
        ...action.dict
      }
    default:
      return { ...state }
  }
}
