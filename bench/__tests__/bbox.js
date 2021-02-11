const puppeteer = require('puppeteer');
const timeout = 5000;

describe(

  'BBox Test',

    () => {

      let page;

      it("\nbbox",  async () => {
          return true;
      }, timeout);

      (async () => {

          page = await global.__BROWSER__.newPage()
          const navigationPromise = page.waitForNavigation()

          await page.goto('127.0.0.1:5000/')

          await page.setViewport({width: 1280, height: 694})

          await page.waitForSelector('.md-card-actions > a > .md-button > .md-ripple > .md-button-content')
          await page.click('.md-card-actions > a > .md-button > .md-ripple > .md-button-content')

          await navigationPromise

          await page.waitForSelector('.col > #categoryList > ul > li:nth-child(16) > a')
          await page.click('.col > #categoryList > ul > li:nth-child(16) > a')

          await navigationPromise

          await page.waitForSelector('.col-4 > .annotation-sidebar > .row > .col-2 > .btn')
          await page.click('.col-4 > .annotation-sidebar > .row > .col-2 > .btn')

          await page.waitForSelector('.col > .form-group > .list-group > .list-group-item:nth-child(1) > .btn')
          await page.click('.col > .form-group > .list-group > .list-group-item:nth-child(1) > .btn')

          await page.waitForSelector('.row > .col-auto > .row > .col > .leaflet-image-holder')
          await page.click('.row > .col-auto > .row > .col > .leaflet-image-holder')

          await page.waitForSelector('.container-fluid > #annotationTask #nextImageButton')
          await page.click('.container-fluid > #annotationTask #nextImageButton')

      })().catch(() => console.warn('...')).finally(() => page.close());

  }, timeout);
