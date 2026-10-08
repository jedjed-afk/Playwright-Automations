  const { test } = 
  require('@playwright/test');
  require('dotenv').config();

test('test', async ({ page }) => {
  await page.goto(process.env.WYO);
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+efive@careerteam.com'); // DEV
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Not_jed123#@$3dsd'); // DEV
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Jobs', exact: true }).click();
  await page.getByRole('combobox', { name: 'Job Title, Company, Keywords' }).click();
  await page.getByRole('combobox', { name: 'Job Title, Company, Keywords' }).fill('Automation Job One');
  await page.getByRole('button', { name: 'Search Jobs' }).click();
  await page.getByRole('button', { name: 'How to Apply' }).click();
  await page.getByRole('radio', { name: 'Mail paper resume to the' }).check();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('radio', { name: 'Applied' }).check();
  await page.getByRole('button', { name: 'Done' }).click();
});