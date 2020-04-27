import ajax from './axios'
const api = {
  // 登录
  login: params => ajax.post('/login', params || {})
}

export default api
