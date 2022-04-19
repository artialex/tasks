const fs = require('fs')
const { resolve } = require('path')

module.exports = (/** @type {import('plop').NodePlopAPI} */ plop) => {
  plop.setActionType('install', require('./src/action-types/install'))

  for (let generator of fs.readdirSync(resolve(__dirname, 'src/generators'))) {
    plop.setGenerator(
      generator.replace('.js', ''),
      require(resolve(__dirname, `src/generators/${generator}`))
    )
  }
}
