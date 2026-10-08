import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle
test('WIOA Case Notes', async ({ page }) => {

  await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/user/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanager@careerteam.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.DEV_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause();
  await page.getByRole('cell', { name: 'JedOneFour' }).click();  //////// change name as needed
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.getByText('Eligibility Approved').first().click();

  await page.getByRole('tab', { name: 'Case Notes' }).click();
  await page.getByRole('button', { name: 'Add Case Note' }).click();
  await page.getByRole('textbox', { name: 'Contact Date *' }).click();
  await page.locator('flatpickr-day[aria-label="current"]:visible').click();
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Face-to-Face' }).click();
  await page.getByRole('textbox', { name: 'Subject *' }).click();
  await page.getByRole('textbox', { name: 'Subject *' }).fill('Test Subject Case Notes');
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).click();
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).fill('Test Program Case Notes');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();
});