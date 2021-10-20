module.exports = (/** @type {import('plop').NodePlopAPI} */ plop) => {
  plop.setActionType('install', require('./src/action-types/install'))

  plop.setPrompt('directory', require('inquirer-directory'))

  for (let generator of ['module', 'jest', 'mock', 'typescript', 'next', 'component', 'prettier']) {
    plop.setGenerator(generator, require('./src/generators/' + generator))
  }
}
