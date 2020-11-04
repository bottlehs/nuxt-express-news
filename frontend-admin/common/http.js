import axios from 'axios'
import { API_URL } from '@/common/config'

const http = axios.create({
  baseURL: API_URL,
})

http.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

http.interceptors.response.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

export default http
