const { test, expect } = require('@playwright/test');
const { GooglePage } = require('./POM/googleTask/googlePage');
const { SearchResultsPage } = require('./POM/googleTask/searchResultsPage');

test('Google search for "selenium webdriver"', async ({ page }) => {
  const googlePage = new GooglePage(page);
  const searchResultsPage = new SearchResultsPage(page);

  await googlePage.navigate();
  await googlePage.search('selenium webdriver');
  await searchResultsPage.verifyThirdResult('What is Selenium WebDriver?');
  // Take a screenshot
  await page.screenshot({ path: 'Screenshots/googletest.png' });
});
