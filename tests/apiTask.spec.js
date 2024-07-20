const { test, expect } = require('@playwright/test');

test('Get random cat fact and verify text is not empty', async ({ request }) => {
  const page = await request.newContext().newPage();
  await page.goto('https://alexwohlbruck.github.io/cat-facts/');
  console.log('Navigated to cat facts website.');

  // get one random cat fact
  const response = await request.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1');
  expect(response.ok()).toBeTruthy();
  
  const fact = await response.json();
  console.log('Received random cat fact:', fact);

  // Check that the response "text" is not empty
  expect(fact.text).not.toBe('');
  console.log('Verified that the cat fact text is not empty.');
});
