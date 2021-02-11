const rimraf = require('rimraf');
const os = require('os');
const path = require('path');
const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');
const chalk = require('chalk');
const __prefix__ = chalk.bgGreenBright("\nmlearning-test-ui:");

module.exports = async function() {

  const hangOn = (s) => new Promise(resolve => setTimeout(resolve, s * 22000));

  console.log(__prefix__ + ' closing puppeteer environment...\n');

  await hangOn(5);
  await global.__BROWSER_GLOBAL__.close();

  rimraf.sync(DIR);

  await hangOn(1);
  process.exit(0);
};
