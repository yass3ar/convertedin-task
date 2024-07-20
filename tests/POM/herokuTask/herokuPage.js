class HerokuPage {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
      this.page = page;
      this.fileUploadLink = this.page.locator('a[href="/upload"]');
    }
  
    async navigate() {
      await this.page.goto('https://the-internet.herokuapp.com/');
    }
  
    async clickFileUpload() {
      await this.fileUploadLink.click();
    }
  }
  
  module.exports = { HerokuPage };