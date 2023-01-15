/** @type {import("eslint").Linter.BaseConfig} */
module.exports = {
  ...require('@ca11-ope/config/eslint-next.js'),
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  }
}
