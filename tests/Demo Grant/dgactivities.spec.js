const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();


test('Demo Grant', async ({ page }) => {

  await page.goto(process.env.WYO_PPP_LOGIN);    // PPP
  /////////// Login for Admin///////////
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.STATE_AD_EMAIL_PPP);
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.STATE_AD_PPP_PASS);  // PPP
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.pause();
  await page.getByRole('cell', { name: 'DJade' }).click();
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.getByRole('button', { name: 'Open IDST application' }).click();
  await page.getByRole('tab', { name: 'Activities' }).click();
  await page.getByRole('button', { name: 'Add Activity' }).click();
  await page.getByRole('combobox', { name: 'Sub program Select' }).click();
  await page.getByRole('option', { name: 'IDST' }).click();
  await page.getByRole('combobox', { name: 'Activity code' }).click();
  await page.getByRole('option', { name: 'IDST - Industry Driven Skills' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('radio', { name: 'False' }).check();
  await page.getByRole('textbox', { name: 'Projected Begin Date *' }).click();
  //await page.locator('.flatpickr-day, {aria-label= }')
  await page.locator('.flatpickr-calendar.animate.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .flatpickr-day.today').click();
  await page.getByRole('textbox', { name: 'Projected End Date *' }).click();
  await page.locator('.flatpickr-calendar.animate.arrowBottom.arrowCenter.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > span:nth-child(7)').click();
  await page.getByText('Service Provided').click();
  await page.getByRole('option', { name: 'Virtual/Online' }).click();
  await page.getByText('Occupation', { exact: true }).click();
  await page.getByRole('option', { name: 'Insurance Appraisers, Auto' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('textbox', { name: 'Contact Date *' }).click();
  await page.locator('.flatpickr-calendar.animate.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .flatpickr-day.today').click();
  
  await page.getByRole('textbox', { name: 'Subject *' }).fill('test');
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).fill('tset');
  await page.getByRole('button', { name: 'Submit button. Click to' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.pause();
  await page.getByRole('button', { name: 'more' }).first().click();
  await page.getByRole('menuitem', { name: 'Close' }).click();
  await page.getByRole('textbox', { name: 'Actual End *' }).click();
  await page.locator('.flatpickr-calendar.animate.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .flatpickr-day.today').click();
  await page.getByText('Completion Code').click();
  await page.getByRole('option', { name: 'Successful Completion', exact: true }).click();
  await page.getByRole('textbox', { name: 'Contact Date *' }).click();
  await page.locator('.flatpickr-calendar.animate.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .flatpickr-day.today').click();
  await page.getByRole('textbox', { name: 'Subject *' }).click();
  await page.getByRole('textbox', { name: 'Subject *' }).fill('tEST');
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).click();
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).fill('TEST');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'more' }).nth(1).click();
  await page.getByRole('menuitem', { name: 'Delete' }).click();
  await page.getByRole('heading', { name: 'Delete Activity' }).click();
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).click();
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).fill('Test');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('alert').filter({ hasText: 'Case notes added and activity' }).click();
  await page.pause();
});

