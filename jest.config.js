/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  globalSetup: './bench/environment/up.js',
  globalTeardown: './bench/environment/down.js',
  testEnvironment: './bench/environment/env.js'
};
