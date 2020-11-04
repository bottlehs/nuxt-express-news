import http from '@/common/http'
import authHeader from './auth.header'
const SERVICE_API_URL = '/api/faqs'

class FaqsService {
  findOne(id = 0) {
    return http.get(SERVICE_API_URL + '/' + id, {
      headers: authHeader(),
    })
  }

  findAll(params = {}) {
    return http.get(SERVICE_API_URL + '/', {
      params,
      headers: authHeader(),
    })
  }

  create(params = {}) {
    return http.post(SERVICE_API_URL + '/', {
      params,
      headers: authHeader(),
    })
  }

  update(id = 0, params = {}) {
    return http.put(SERVICE_API_URL + '/' + id, {
      params,
      headers: authHeader(),
    })
  }

  delete(id = 0) {
    return http.delete(SERVICE_API_URL + '/' + id, {
      headers: authHeader(),
    })
  }

  deleteAll(params = {}) {
    return http.delete(SERVICE_API_URL + '/', {
      params,
      headers: authHeader(),
    })
  }
}

export default new FaqsService()
