class HerokuPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.dynamicLoadingLink = this.page.locator('a[href="/dynamic_loading"]');
    }
  
    async navigate() {
      await this.page.goto('https://the-internet.herokuapp.com/');
    }
  
    async clickDynamicLoading() {
      await this.dynamicLoadingLink.click();
    }
  }
  
  module.exports = { HerokuPage };