const { readdirSync, statSync, existsSync } = require('fs')
const { resolve } = require('path')
const process = require('node:process')

const fromTemplates = (file) => `src/generators/component/templates/${file}`

const moduleDir = resolve(process.cwd(), 'src/modules')

module.exports = {
  description: 'Create a component inside a module',
  prompts: [
    {
      type: 'list',
      name: 'module',
      message: 'Select a module for this component',
      choices: existsSync(moduleDir) ? readdirSync(moduleDir) : null,
    },
    {
      type: 'input',
      name: 'name',
      message: 'Provide component name',
    },
  ],
  actions: [
    {
      type: 'add',
      templateFile: fromTemplates('index.tpl'),
      path: 'src/modules/{{ module }}/components/{{ pascalCase name }}/index.ts',
    },
    {
      type: 'add',
      templateFile: fromTemplates('Component.tpl'),
      path: 'src/modules/{{ module }}/components/{{ pascalCase name }}/{{ pascalCase name }}.tsx',
    },
    {
      type: 'add',
      templateFile: fromTemplates('Component.module.scss'),
      path: 'src/modules/{{ module }}/components/{{ pascalCase name }}/{{ pascalCase name }}.module.scss',
    },
    {
      type: 'append',
      template: "export { {{ pascalCase name }} } from './components/{{ pascalCase name }}'",
      path: 'src/modules/{{ module }}/index.ts',
    },
  ],
}
