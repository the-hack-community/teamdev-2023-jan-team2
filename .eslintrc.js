/** @type {import("eslint").Linter.BaseConfig} */
module.exports = {
  root: true,
  extends: ['@ca11-ope'],
  settings: {
    next: {
      rootDir: ['apps/web/*/'],
    },
  },
}
