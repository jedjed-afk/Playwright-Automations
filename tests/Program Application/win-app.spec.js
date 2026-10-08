import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle
test('WIN Application', async ({ page }) => {

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
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause();
 //  await expect(page.getByRole('cell', { name: 'Jedjed' })).toBeVisible();
 await page.getByRole('cell', { name: 'JedOneEight' }).click();
  await page.getByRole('radio', { name: 'WIN' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  // 1st Page //
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 2nd page //
  await page.getByRole('checkbox', { name: 'African American/Black' }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 3rd page
  await page.getByRole('radiogroup', { name: 'Are you the spouse of someone' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Have you served on active' }).getByLabel('No', { exact: true }).check();
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: '12th Grade Completed' }).click();
  await page.getByRole('radiogroup', { name: 'High school Diploma or' }).getByLabel('No', { exact: true }).check();
  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'High School Diploma' }).click();
  await page.pause();
  await page.getByRole('radiogroup', { name: 'Receiving services from Adult' }).getByLabel('No', { exact: true }).check();

  await page.getByRole('radiogroup', { name: 'Temporary Assistance for' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Supplemental Nutrition' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Ticket-to-Work Holder Issued' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'English Language Learner' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Basic Skills Deficient/Low' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Ex-Offender (individual has' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Displaced Homemaker' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Within 2 years of exhausting' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Single Parent (Including' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Were you referred by child' }).getByLabel('Yes', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Are you unemployed' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Are you underemployed' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Have you failed to make a' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Do you face barriers to making full child support payments' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Submit button. Click to' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.pause();
});

