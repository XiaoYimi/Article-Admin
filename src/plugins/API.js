import user from '@/api/user'
import request from '../utils/Request'

const API = {}
API.install = function (Vue) {
  Vue.prototype.$api = {
    ...user
  }
  Vue.prototype.$request = request
}

export default API
