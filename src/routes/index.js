const MainController = require('./../controller')
const controller = new MainController()
const config = require('./config')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: controller.index,
    config: config
  },
  {
    method: 'GET',
    path: '/products',
    handler: controller.getProducts,
    config: config
  },
  {
    method: 'GET',
    path: '/cart',
    handler: controller.getCart,
    config: config
  },
  {
    method: 'PUT',
    path: '/cart/insert',
    handler: controller.insertProduct,
    config: config
  },
  {
    method: 'DELETE',
    path: '/cart/remove/{identifier}',
    handler: controller.removeProduct,
    config: config
  }
]
