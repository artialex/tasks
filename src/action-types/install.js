const { execSync } = require('child_process')

module.exports = async (answers, config, plop) => {
  let dependencies = (config.dependencies || []).join(' ')
  let devDependencies = (config.devDependencies || []).join(' ')

  return new Promise((resolve) => {
    if (dependencies) {
      execSync(`npm install ${dependencies}`, { stdio: 'inherit' })
    }

    if (devDependencies) {
      execSync(`npm install -D ${devDependencies}`, { stdio: 'inherit' })
    }

    return resolve((dependencies + ' ' + devDependencies).trim())
  })
}
