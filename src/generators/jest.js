const { resolve } = require('path')
const { flow } = require('lodash')
const json = require('../utils/json')

module.exports = {
  description: 'Add Jest support',
  prompts: [],
  actions: [
    {
      type: 'modify',
      path: 'package.json',
      transform: flow([
        json.addScript('test', 'jest --verbose'),
        json.addScript('test:watch', 'jest --watchAll'),
        json.set('jest', {
          preset: '@alextheartisan/jest-config',
        }),
      ]),
    },
    {
      type: 'install',
      devDependencies: [
        'jest', //
        'ts-jest',
        '@types/jest',
        '@alextheartisan/jest-config',
      ],
    },
  ],
}
