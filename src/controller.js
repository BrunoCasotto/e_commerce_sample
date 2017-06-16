const cart = require('./cart')

class MainController {
  index (request, reply) {
    reply.view('index')
  }

  getProducts (request, reply) {
    let products = require('./products')
    reply(products)
  }

  getCart (request, reply) {
    reply(cart.cart)
  }

  insertProduct (request, reply) {
    let data = cart.cart
    // build a cart item
    let item = cart.buildItem(
      request.payload.product,
      request.payload.variation,
      request.payload.quantity
    )

    // verify if exists
    let exists = false
    data.products.forEach((product, index) => {
      if (product.identifier == item.identifier) {
        exists = true
        data.products[index].quantity = data.products[index].quantity + item.quantity
      }
    })

    if (!exists) {
      data.products.push(item)
    }

    // update cart
    cart.cart = data
    reply(cart.cart)
  }

  removeProduct (request, reply) {
    let data = cart.cart

    data.products.forEach((product, index) => {
      if (product.identifier == request.params.identifier) {
        data.products.splice(index, 1)
      }
    })

    // update cart
    cart.cart = data
    reply(cart.cart)
  }
}
module.exports = MainController
