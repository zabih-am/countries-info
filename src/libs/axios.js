import Vue from'vue'
import axios from 'axios'

const axiosIns = axios.create({
  baseURL: 'test'
})

Vue.prototype.$http = axiosIns
 
export default axiosIns