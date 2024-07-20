const { expect } = require('@playwright/test');

class GooglePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.searchInput = this.page.locator('xpath=//textarea[@name="q"]');
  }

  async navigate() {
    await this.page.goto('https://www.google.com/ncr');
  }

  async search(query) {
    await this.searchInput.fill(query);
    // pressing Enter to perform the search
    await this.searchInput.press('Enter');
  }
}

module.exports = { GooglePage };