const { resolve } = require('path')
const { flow } = require('lodash')
const json = require('../utils/json')

module.exports = {
  description: 'Add TypeScript support',
  prompts: [],
  actions: [
    {
      type: 'add',
      path: 'tsconfig.json',
      template: JSON.stringify(
        {
          extends: '@alextheartisan/typescript-config',
          compilerOptions: {
            baseUrl: '.',
            paths: {
              '@/*': ['src/modules/*'],
            },
          },
        },
        null,
        2
      ),
    },
    {
      type: 'install',
      devDependencies: ['typescript', '@alextheartisan/typescript-config'],
    },
  ],
}
