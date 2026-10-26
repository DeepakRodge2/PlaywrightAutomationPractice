const { BeforeAll, AfterAll, Before, After, Status, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');
const fs = require('node:fs');
const path = require('node:path');
const { PracticePage } = require('../pages/practice-page');

let browser;

setDefaultTimeout(30_000);

BeforeAll(async function () {
  browser = await chromium.launch({
    headless: process.env.HEADLESS !== 'false',
  });
});

Before(async function () {
  this.browser = browser;
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
  await this.context.tracing.start({ screenshots: true, snapshots: true });
  this.practicePage = new PracticePage(this.page);
});

After(async function (scenario) {
  if (!this.context) return;

  if (scenario.result.status === Status.FAILED) {
    const screenshot = await this.page.screenshot({ fullPage: true });
    await this.attach(screenshot, 'image/png');

    const resultsDir = path.resolve(process.cwd(), 'test-results');
    fs.mkdirSync(resultsDir, { recursive: true });
    const tracePath = path.join(resultsDir, `trace-${Date.now()}.zip`);
    await this.context.tracing.stop({ path: tracePath });
    await this.attach(fs.readFileSync(tracePath), 'application/zip');
  } else {
    await this.context.tracing.stop();
  }

  await this.context.close();
});

AfterAll(async function () {
  if (browser) await browser.close();
});
