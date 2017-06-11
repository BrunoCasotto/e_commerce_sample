const MainController = require('./../controller')
const controller = new MainController()
module.exports =
  [
    { method: 'GET', path: '/', handler: controller.index },
    { method: 'GET', path: '/products', handler: controller.getProducts }
  ]