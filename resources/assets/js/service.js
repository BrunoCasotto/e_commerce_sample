import axios from 'axios';

export default new class ClassService {
  getProducts () {
    return axios({
      url: '/products',
      method: 'get',
      data: {}
    })
  }
}