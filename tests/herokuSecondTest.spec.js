const { test } = require('@playwright/test');
const { HerokuPage } = require('../tests/POM/herokuSecondTask/herokupage');
const { DynamicLoadingPage } = require('../tests/POM/herokuSecondTask/dynamicLoadingPage');
const path = require('path');

test('Dynamic Loading Example 2', async ({ page }) => {
  const herokupage = new HerokuPage(page);
  const dynamicLoadingPage = new DynamicLoadingPage(page);

  await herokupage.navigate();
  await herokupage.clickDynamicLoading();
  await dynamicLoadingPage.clickExample2();
  await dynamicLoadingPage.clickStart();
  await dynamicLoadingPage.waitForLoading();
  await dynamicLoadingPage.verifyTextDisplayed('Hello World!');
  // Take a screenshot
  await page.screenshot({ path: 'Screenshots/dynamictest.png' });
});
