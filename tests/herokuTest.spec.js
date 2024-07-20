const { test } = require('@playwright/test');
const { HerokuPage } = require('../tests/POM/herokuTask/herokuPage');
const { FileUploadPage } = require('../tests/POM/herokuTask/fileUploadPage');
const path = require('path');

test('File upload', async ({ page }) => {
  const herokuPage = new HerokuPage(page);
  const fileUploadPage = new FileUploadPage(page);

  await herokuPage.navigate();
  await herokuPage.clickFileUpload();
  const filePath = path.resolve(__dirname, 'image.png');
  await fileUploadPage.uploadFile(filePath);
  await fileUploadPage.verifyFileUploaded('image.png');
  // Take a screenshot
  await page.screenshot({ path: 'Screenshots/fileuploadtest.png' });
});
