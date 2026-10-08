import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle
test('test', async ({ page }) => {

 //await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/user/login'); // PPP
  await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/user/login '); // DEV
  //await page.goto('https://www.wyo-dev.careeredgebeta.com/user/login '); // NEW DEV
  //await page.goto('https://www.oregon-dev.careeredgebeta.com/user/login '); // Oregon

  /////////// Login for Admin///////////
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanager@careerteam.com'); 
  //await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanger@careerteam.com'); //oregon
  await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS); // PPP
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.DEV_PASS); // DEV and New DEV
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OR_PASS); //Oregon
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  
  ///////////////////// Home Page //////////////////////
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause();
  await page.getByRole('cell', { name: 'Reiner' , exact: true }).click();
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Credentials' }).click();
  await page.getByRole('button', { name: 'Upload Credential' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('Credentials One');
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/Selective%20Service%20-1712594370811.pdf'); // TODO: replace with the correct file for this section
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.getByText('Eligibility Approved').first().click();
  await page.getByRole('tab', { name: 'Credentials' }).click();
  await page.getByRole('button', { name: 'Add Credential' }).click();
  await page.getByLabel('data[credentialReceived]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'High School Diploma' }).click();
  await page.getByRole('textbox', { name: 'Date of Credentials Received *' }).click();
  await page.locator('.flatpickr-day[aria-current="date"]:visible').click();
  await page.getByText('Verified with document').click();
  await page.getByRole('option', { name: 'Credentials One' }).first().click();
  await page.getByRole('textbox', { name: 'Contact Date *' }).click();
  await page.locator('.flatpickr-day[aria-current="date"]:visible').click();
  await page.getByRole('textbox', { name: 'Subject *' }).click();
  await page.getByRole('textbox', { name: 'Subject *' }).fill('Test Subject Credentials');
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).click();
  await page.getByRole('textbox', { name: 'Rich Text Editor, main' }).fill('Test Case Notes Credentials');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();
});