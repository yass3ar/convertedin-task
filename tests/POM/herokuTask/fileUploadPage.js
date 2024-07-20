const { expect } = require('@playwright/test');

class FileUploadPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.chooseFileInput = this.page.locator('input[type="file"]');
    this.uploadButton = this.page.locator('input[type="submit"]');
    this.uploadedFiles = this.page.locator('#uploaded-files');
  }

  async uploadFile(filePath) {
    await this.chooseFileInput.setInputFiles(filePath);
    await this.uploadButton.click();
  }

  async verifyFileUploaded(fileName) {
    await expect(this.uploadedFiles).toHaveText(fileName);
    await expect.soft(this.page.locator('xpath=//h3')).toHaveText("File Uploaded!");

  }
}

module.exports = { FileUploadPage };