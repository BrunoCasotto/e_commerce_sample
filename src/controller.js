
class MainController {
  index(request, reply) {
      reply.view('index')
  }

  getProducts(request, reply) {
    let products = require('./products')
    reply(products)
  }
}
module.exports = MainController