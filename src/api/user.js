// 用户请求模块
import request from '../utils/Request'

// 登录
const login = data => {
  const { mobile, password, code } = data
  return request.post('/privates/login', {
    mobile,
    password,
    code
  })
}

const userInfo = data => {
  return request.get({
    userid: data.userid
  })
}

export default {
  login,
  userInfo
}
