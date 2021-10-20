module.exports = {
  description: 'Add a module to this project',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Provide module name',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'src/modules/{{ kebabCase name }}/index.ts',
      template: '',
    },
  ],
}
