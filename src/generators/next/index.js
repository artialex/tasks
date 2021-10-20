const { flow } = require('lodash')
const json = require('../../utils/json')
const { existsSync } = require('fs')

const templates = 'src/generators/next/templates'

module.exports = {
  description: 'Add Next.js support',
  prompts: [],
  actions: [
    {
      type: 'addMany',
      destination: '.',
      base: templates,
      templateFiles: templates + '/**/*',
    },
    {
      type: existsSync('.gitignore') ? 'append' : 'add',
      path: '.gitignore',
      template: '.next',
    },
    {
      type: existsSync('.env') ? 'append' : 'add',
      path: '.env',
      template: 'API_URL=https://jsonplaceholder.typicode.com',
    },
    {
      type: 'modify',
      path: 'package.json',
      transform: flow([
        json.addScript('dev', 'next dev'),
        json.addScript('build', 'next build'),
        json.addScript('start', 'next start'),
        json.addScript('export', 'next export'),

        json.set('prettier', '@alextheartisan/prettier-config'),
      ]),
    },
    {
      type: 'install',
      dependencies: [
        'next', //
        'react',
        'react-dom',
        'react-query',
        'axios',
        'normalize.css',
      ],
      devDependencies: [
        '@types/webpack', //
        '@types/react',
        '@types/react-dom',
        'sass',
      ],
    },
  ],
}
