const config = require('./webpack.base'),
  eslint = require('./.eslintrc.json'),
  merge = require('deepmerge')

devConfig = require('./webpack.dev.js')

module.exports = merge(devConfig, config)
