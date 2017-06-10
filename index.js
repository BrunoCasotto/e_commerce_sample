const Hapi = require('hapi')
const Path = require('path')
const Hoek = require('hoek')

const server = new Hapi.Server({
  connections: {
    routes: {
      files: {
        relativeTo: Path.join(__dirname, 'dist')
      } 
    }
  }
})

server.connection({ port: process.env.PORT || 4000 })

server.register(require('vision'), (err) => {
  Hoek.assert(!err, err)
  server.views({
    engines: {
      html: require('nunjucks-hapi')
    },
    relativeTo: __dirname,
    path: __dirname + '/resources/views',
    helpersPath: __dirname + '/resources/assets'
  })
})

const routes = require('./src/routes/index.js')
server.route(routes)

const routeFile = require('./src/routes/file.js')
server.register( require('inert'), err => {
  if (err) console.log('Failed to load inert plugin.')  
  server.route(routeFile)
})

server.start(err => {
  if (err) {
    console.log(err)
  }
  console.log(`Server running at: ${server.info.uri}`);
})
