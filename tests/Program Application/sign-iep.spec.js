import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle
test('test', async ({ page }) => {
  await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/user/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanager@careerteam.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.DEV_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause();
  await page.getByRole('cell', { name: 'JedOneFour' }).click();
  
  await page.waitForTimeout(3000);
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Individual Employment Plans (' }).click();
  await page.pause();
  await page.getByRole('button', { name: 'more' }).click();
  await page.getByRole('menuitem', { name: 'View the IEP' }).click();
  await page.getByRole('checkbox', { name: 'I agree to sign the IEP' }).check();
  await page.getByRole('button', { name: 'Save & Close' }).click();
});