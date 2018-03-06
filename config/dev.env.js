'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MURI: '"mongodb://admin:admin@ds145750.mlab.com:45750/example"'
})
