const { resolve } = require('path')
const { flow } = require('lodash')
const json = require('../utils/json')

module.exports = {
  description: 'Add prettier support',
  prompts: [],
  actions: [
    {
      type: 'modify',
      path: 'package.json',
      transform: flow([
        json.addScript('format', 'prettier'),
        json.set('prettier', '@alextheartisan/prettier-config'),
      ]),
    },
    {
      type: 'install',
      devDependencies: ['prettier', '@alextheartisan/prettier-config'],
    },
  ],
}
