import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.oregon-dev.careeredgebeta.com/home');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('menuitem', { name: 'As Jobseeker' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Jade');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Dude');
  await page.getByRole('textbox', { name: 'Email *' }).click();
  await page.getByRole('textbox', { name: 'Email *' }).fill('ajregunay@careerteam.com');
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).click();
  await page.getByRole('textbox', { name: 'Password * Must contain at' }).fill('High_lowers007!');
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('High_lowers007!');
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).click();
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).fill('11111');
  await page.getByRole('textbox', { name: 'Date of Birth *' }).click();
  await page.getByLabel('September 25,').click();
  await page.locator('[class~="formio-component-eduInfo.typeOfNationalFarmworker"] .choices').click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.locator('#ep39kq > .choices > .form-control.ui').click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.getByRole('button', { name: 'Create Account button. Click' }).click();
});