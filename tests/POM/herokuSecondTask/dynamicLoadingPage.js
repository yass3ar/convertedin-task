const { expect } = require('@playwright/test');

class DynamicLoadingPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.example2Link = this.page.locator('a[href="/dynamic_loading/2"]');
    this.startButton = this.page.locator('button');
    this.finishText = this.page.locator('#finish h4');
  }

  async clickExample2() {
    await this.example2Link.click();
  }

  async clickStart() {
    await this.startButton.click();
  }

  async waitForLoading() {
    await this.finishText.waitFor({ state: 'visible' });
  }

  async verifyTextDisplayed(expectedText) {
    await expect(this.finishText).toHaveText(expectedText);
  }
}

module.exports = { DynamicLoadingPage };