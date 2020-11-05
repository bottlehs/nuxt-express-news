const SERVICE_API_URL = '/api/comments'

class CommentsService {
  findOne(http, id = 0) {
    return http.get(SERVICE_API_URL + '/' + id, {})
  }

  findAll(http, params = {}) {
    return http.get(SERVICE_API_URL + '/', {
      params,
    })
  }

  create(http, params = {}) {
    return http.post(SERVICE_API_URL + '/', {
      params,
    })
  }

  update(http, id = 0, params = {}) {
    return http.put(SERVICE_API_URL + '/' + id, {
      params,
    })
  }

  delete(http, id = 0) {
    return http.delete(SERVICE_API_URL + '/' + id, {})
  }

  deleteAll(http, params = {}) {
    return http.delete(SERVICE_API_URL + '/', {
      params,
    })
  }
}

export default new CommentsService()
