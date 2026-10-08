import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/home');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.pause();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanager@careerteam.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('cell', { name: 'Anya' }).click();
});
