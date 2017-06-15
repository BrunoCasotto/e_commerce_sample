const MainController = require('./../controller')
const controller = new MainController()
const config = require('./config')

module.exports =
  [
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
    }
  ]