const { readdirSync, statSync, existsSync } = require('fs')
const { resolve } = require('path')
const process = require('node:process')

const fromTemplates = (file) => `src/generators/component/templates/${file}`

module.exports = {
  description: 'Create a component inside a module',
  prompts: [
    {
      type: 'directory',
      name: 'module',
      basePath: 'src/modules',
      message: 'Select a module for this component',
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
      path: 'src/modules/{{ kebabCase module }}/components/{{ pascalCase name }}/index.ts',
    },
    {
      type: 'add',
      templateFile: fromTemplates('Component.tpl'),
      path: 'src/modules/{{ kebabCase module }}/components/{{ pascalCase name }}/{{ pascalCase name }}.tsx',
    },
    {
      type: 'add',
      templateFile: fromTemplates('Component.module.scss'),
      path: 'src/modules/{{ kebabCase module }}/components/{{ pascalCase name }}/{{ pascalCase name }}.module.scss',
    },
    {
      type: 'append',
      template: "export { {{ pascalCase name }} } from './components/{{ pascalCase name }}'",
      path: 'src/modules/{{ kebabCase module }}/index.ts',
    },
  ],
}
