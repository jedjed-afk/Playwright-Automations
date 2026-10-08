const { test } = require('@playwright/test');
require('dotenv').config();
test('dbg', async ({ page }) => {
  test.setTimeout(60000);
  page.on('response', r => { const m = r.request().method(); if (m !== 'GET' || /api|auth|login/i.test(r.url())) console.log(m, r.status(), r.url()); });
  await page.goto('https://www.oregon-dev.careeredgebeta.com/user/login');
  console.log('EMAIL set:', !!process.env.CASEMAN_OR_EMAIL, 'PASS set:', !!process.env.OR_PASS);
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_OR_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OR_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(12000);
  console.log('URL', page.url());
  console.log((await page.locator('body').innerText({timeout: 5000})).slice(0,600));
});
