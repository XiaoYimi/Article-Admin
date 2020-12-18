import axios from 'axios'
const http = {}
http.install = function (Vue) {
  Vue.prototype.$http = axios
}
export default http
