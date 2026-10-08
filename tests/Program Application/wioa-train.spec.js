import { test, expect } from '@playwright/test';
// This test is written by Jade of Team Eagle 
// Note: this test is for pending means 1-6 ='Yes' and 7='No' 
test('test', async ({ page }) => {

  //await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/user/login');
  await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/user/login '); // https://www.wyo-platform-dev.careeredgebeta.com/user/login 
  //login//
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanager@careerteam.com'); 
  await page.getByRole('textbox', { name: 'Password' }).click();
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS); // PPP
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.DEV_PASS); // DEV
  await page.getByRole('button', { name: 'Login' }).click();
  
  ///////////////////// Home Page //////////////////////
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause();
  await page.getByRole('cell', { name: 'JedOneFour' }).click(); 
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.getByText('Eligibility Approved').first().click();
  await page.getByRole('tab', { name: 'Training Justification' }).click();
  await page.getByRole('button', { name: 'Add Training Justification' }).click();
  ///////////////////// First Page /////////////////////
  await page.getByRole('textbox', { name: 'Training Justification Date *' }).click();
  await page.locator('.flatpickr-calendar.hasTime > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .flatpickr-day.today').click();
  await page.getByText('2 Case Note').click();
  await page.locator('.form-control.ui').first().click();
  await page.getByRole('option', { name: 'Business Skills' }).click(); // :: add options
  await page.getByText('2 Case Note').click();
  await page.getByRole('textbox', { name: 'Select' }).nth(1).click();
  //await page.locator('.formio-component-serviceProvided .choices__list--dropdown .choices__item--selectable').nth(1).click();
  await page.getByRole('option', { name: 'Architecture and Engineering' }).click();  // :: add options
  await page.getByText('2 Case Note').click();
  await page.getByRole('textbox', { name: 'Select' }).nth(2).click();
  await page.getByRole('option', { name: 'Accountants and Auditors' }).click(); 
  await page.getByText('2 Case Note').click(); // :: add options
  await page.getByRole('radiogroup', { name: 'Condition 1 Is unlikely or' }).getByLabel('Yes').check();
  await page.getByRole('radiogroup', { name: 'Condition 2 Is in need of' }).getByLabel('Yes').check();
  await page.getByRole('radiogroup', { name: 'Condition 3 Has the skills' }).getByLabel('Yes').check();
  await page.getByRole('radiogroup', { name: 'Condition 4 Has selected a' }).getByLabel('Yes').check();
  await page.getByRole('radiogroup', { name: 'Condition 5 Is unable to' }).getByLabel('Yes').check();
  await page.getByRole('radiogroup', { name: 'Condition 6 Is determined' }).getByLabel('Yes').check();
  await page.pause();
  const conditionSeven = page.locator('.formio-component-condtionSeven');
  await conditionSeven.getByLabel('No').check();

  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();

  ///////////////////// Second Page (Case Notes) //////////////////////////////
  await page.getByRole('textbox', { name: 'Contact Date *' }).click();
  await page.locator('.flatpickr-calendar.animate.open > .flatpickr-innerContainer > .flatpickr-rContainer > .flatpickr-days > .dayContainer > .flatpickr-day.today').click();
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Face-to-Face' }).click();
  await page.getByRole('textbox', { name: 'Subject *' }).click();
  await page.getByRole('textbox', { name: 'Subject *' }).fill('Test Subject');
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).click();
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).fill('Test Case Notes');
  await page.getByRole('button', { name: 'Submit button. Click to' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('tab', { name: 'Training Justification' }).click();
  await page.getByText('Pending').first().click();
  await page.getByText('Pending', { exact: true }).click();
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();
  ///////////////////// Login of State Admin for Approval ////////////////////
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+wyo@careerteam.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('kec5mtv_uae9gbz_RYG');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('cell', { name: 'JedOneFour' }).click();
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.getByText('Eligibility Approved').first().click();
  await page.getByRole('tab', { name: 'Training Justification' }).click();
  //await page.getByRole('cell', { name: '1875' }).click(); 
  await page.locator('table tbody tr').first().locator('td').first().click();
  await page.getByText('Verify').click();
  await page.getByRole('radio', { name: 'Yes' }).check();
  await page.getByRole('button', { name: 'Choose date' }).click();
  await page.getByRole('gridcell', { name: '22' }).click();
  await page.getByTestId('inviteButton').click();
  await page.getByRole('tabpanel', { name: 'Training Justification' }).getByLabel('Status').click();
  await page.pause();
});