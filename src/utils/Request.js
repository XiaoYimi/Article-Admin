import axios from 'axios'
const instance = axios.create()
instance.defaults.baseURL = 'http://localhost:3000'

// 请求拦截器
instance.interceptors.request.use(config => {
  return config
}, err => {
  console.log(err)
})

// 响应拦截器
instance.interceptors.response.use(response => {
  return response
}, err => {
  console.log(err)
})

export default instance
