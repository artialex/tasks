const { set } = require('lodash')
const { sortPackageJson } = require('sort-package-json')

module.exports = {
  set: (key, value) => perform((_) => set(_, key, value)),

  addScript: (key, value) => perform((_) => set(_, ['scripts', key], value)),
}

function perform(performFn) {
  return (str) => {
    let pkg = JSON.parse(str)

    performFn(pkg)

    return JSON.stringify(sortPackageJson(pkg), null, 2)
  }
}
