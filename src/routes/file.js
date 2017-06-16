const config = require('./config')

module.exports = [
  {
    method: 'GET',
    path: '/favicon.ico',
    handler: function (request, reply) {
      reply.file('favico.ico', { confine: false })
    },
    config: config
  },
  {
    method: 'GET',
    path: '/css/{filename*}',
    handler: {
      directory: {
        path: 'css/'
      }
    },
    config: config
  },
  {
    method: 'GET',
    path: '/js/{filename*}',
    handler: {
      directory: {
        path: 'js/'
      }
    },
    config: config
  },
  {
    method: 'GET',
    path: '/img/{filename*}',
    handler: {
      directory: {
        path: 'image/'
      }
    },
    config: config
  }
]
