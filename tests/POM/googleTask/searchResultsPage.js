const { expect } = require('@playwright/test');

class SearchResultsPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.results = this.page.locator('xpath=//ul[@role="listbox"]/li[3]');
  }

  async verifyThirdResult(expectedText) {
    const thirdResult = this.results;
    await expect(thirdResult).toContainText(expectedText);
  }
}

module.exports = { SearchResultsPage };