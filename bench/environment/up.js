const puppeteer = require('puppeteer');
const fs = require('fs');
const mkdirp = require('mkdirp');
const os = require('os');
const path = require('path');
const chalk = require('chalk')
const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');
const __prefix__ = chalk.bgGreenBright("mlearning-test-ui:");

module.exports = async () => {
  console.log(__prefix__ + ' ...firing up puppeteer environment...');
  const browser = await puppeteer.launch({headless: false, slowMo: 1000});
  const headlessBrowser = await puppeteer.launch({});
  global.__BROWSER_GLOBAL__ = browser;
  global.__HEADLESS_GLOBAL__ = headlessBrowser;
  mkdirp.sync(DIR);
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
}
