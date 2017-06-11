module.exports = [
  {
    method: 'GET',
    path: '/favicon.ico',
    handler: function(request, reply) {
      reply.file( 'favico.ico', { confine: false })
    }
  },
  {
    method: 'GET',
    path: '/css/{filename*}',
    handler: {
      directory: {
        path: 'css/'
      }
    }
  },
  {
    method: 'GET',
    path: '/js/{filename*}',
    handler: {
      directory: {
        path: 'js/'
      }
    }
  },
  {
    method: 'GET',
    path: '/img/{filename*}',
    handler: {
      directory: {
        path: 'image/'
      }
    }
  }
]