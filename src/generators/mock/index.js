const json = require('../../utils/json')

module.exports = {
  description: 'Add mock server',
  prompts: [],
  actions: [
    {
      type: 'add',
      path: 'mock/db.js',
      templateFile: 'src/generators/mock/templates/db.js',
    },
    {
      type: 'modify',
      path: 'package.json',
      transform: json.addScript('mock', 'json-server --watch mock/db.js'),
    },
    {
      type: 'install',
      devDependencies: [
        'json-server', //
        'faker',
        '@types/faker',
      ],
    },
  ],
}
