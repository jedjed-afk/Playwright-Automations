 const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();

  // TODO: add test to which edit the SSN then the Eye button is removed on the Confirm SSN field
 test('Mini Registration Form 1', async ({page}) => {
  const registrationUrl = 'https://www.oregon-dev.careeredgebeta.com/employer-jobseeker/job-seeker/registration';
 // TC17 - Date of Birth accepted when exactly minimum age (14)
  await page.pause();
  const dob = page.getByRole('textbox', { name: 'Date of Birth *' });
  await page.reload();
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('First Name');
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Last Name');
  await page.getByRole('textbox', { name: 'Email *' }).click();

  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).click();
  await page.getByRole('textbox', { name: 'Zip Code Used to show jobs' }).fill('11111');
  await dob.click();
  await page.locator('.flatpickr-calendar.open .flatpickr-day:not(.flatpickr-disabled):not(.prevMonthDay):not(.nextMonthDay)').last().click();
  //await dob.pressSequentially('09222010', { delay: 50 }); //// change thiss ensure exactly 14 years old
  await page.keyboard.press('Tab');
  await page.locator('[class~="formio-component-eduInfo.typeOfNationalFarmworker"] .choices').click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.locator('[class~="formio-component-addInfo.veteranStatus"] .choices').click();
  await page.getByRole('option', { name: 'No' }).click();
  await page.getByRole('button', { name: 'Create Account button. Click' }).click();
  // Confirm the "Submit Registration" dialog
  await page.getByRole('dialog').getByRole('button', { name: 'Create Account' }).click();
  await expect(page).toHaveURL(/login/i, { timeout: 30000 });

});