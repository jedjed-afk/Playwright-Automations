const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();
//This test is written by Jade of Team Eagle
//Every radio button / dropdown option available on each field is listed in a
//comment above the line that interacts with it, so the value can be swapped easily.

//
test('test', async ({ page }) => {

  await page.goto(process.env.WYO_PPP_LOGIN);    // PPP
  //await page.goto(process.env.WYO_OLDDEV_LOGIN); // DEV
  /////////// Login for Admin///////////
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click(); 

  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Credentials' }).click();
  await page.getByRole('button', { name: 'Upload Credential' }).click();
  await page.pause();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('Credentials One'); // Can change this
  {
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('C:/Users/ajregunay/Downloads/Budget Worksheet (3).pdf'); // TODO: replace with the correct file for this section
  }
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.locator('[data-testid^="program-row-"]')
  // Wagner Peyser | CCP | WIN | WIOA
    .filter({ hasText: 'Wagner Peyser' })
    .filter({ hasText: 'Eligibility Approved' })
    //Open Wagner Peyser application| Open CCP application|Open WIOA application
    .getByRole('button', { name: 'Open Wagner Peyser application' }).click();
  await page.getByRole('tab', { name: 'Credentials' }).click();
  await page.getByRole('button', { name: 'Add Credential' }).click();
  // Credential Received options: None Selected | High School Diploma | Secondary / High School Equivalency | AA/AS Degree | BA/BS Degree
  // | Occupational Skills License | Occupational Skills Certificate or Credential | Other Recognized Diploma, Degree, or Certificate (specify)
  // | Graduate/Post Graduate Degree | Occupational Certification
  await page.getByLabel('data[credentialReceived]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'High School Diploma' }).click();  // Can change this
  await page.getByRole('textbox', { name: 'Date of Credentials Received *' }).click();
  await page.locator('.flatpickr-day[aria-current="date"]:visible').click();
  // Verified with document is a live list of documents uploaded for this individual under Forms & Documents (not a fixed list) - matches the file name entered when uploading, e.g. "Credentials One"; shows "No choices to choose from" if none are uploaded yet
  await page.getByText('Verified with document').click();
  await page.getByRole('option', { name: 'Credentials One' }).first().click();  // Can change this
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