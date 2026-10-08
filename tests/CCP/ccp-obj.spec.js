import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle
// Do not fofget to change jobseeker name and email
test('CCP Application', async ({ page }) => {

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
  await page.pause();
  //await page.getByRole('cell', { name: 'JedOneEight' }).click(); //// change
  await page.getByRole('tab', { name: 'Programs Overview' }).click();

  // Find the grid item/card that contains both "CCP" and "Eligibility Approved"
  const ccpApprovedCard = page.locator('.MuiGrid-root', { hasText: 'CCP' })
  .filter({ hasText: 'Eligibility Approved' });

  // Then click the CCP button/span inside that specific card
  await ccpApprovedCard.getByRole('button', { name: 'Open CCP application' }).click();
  await page.getByRole('tab', { name: 'Assessment' }).click();
  await page.getByRole('button', { name: 'Add Assessment' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('radiogroup', { name: 'Are you seeking immediate' }).getByLabel('No').check();
  await page.getByText('Occupation').click();
  await page.getByRole('option', { name: 'Accountants and Auditors' }).click();
  await page.getByText('2 Expectations').click();
  await page.getByText('Employment Type').click();
  await page.getByRole('option', { name: 'Regular' }).click();
  await page.getByLabel('data[fullOrPartTime]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Full and Part Time Positions' }).click();
  await page.getByRole('checkbox', { name: '1st' }).check();
  await page.getByText('SelectSelectRemove item').click();
  await page.getByText('Desired Salary').click();
  await page.getByText('Desired Salary').click();
  await page.getByRole('option', { name: '$2.50 hourly (Approx. $5,000' }).click();
  await page.getByRole('checkbox', { name: 'Health Insurance' }).check();
  await page.getByRole('textbox', { name: 'Longest Commute Distance (mi' }).click();
  await page.getByRole('textbox', { name: 'Longest Commute Distance (mi' }).fill('2');
  await page.getByRole('checkbox', { name: 'Help Getting Started in Job' }).check();
  await page.getByRole('radiogroup', { name: 'Do you need help in Career' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Are you seeking Training' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Are you seeking Post-' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('Highest Grade Completed').click();
  await page.getByRole('option', { name: '12th Grade Completed', exact: true }).click();
  await page.getByRole('textbox', { name: 'Education History Assessment' }).click();
  await page.getByRole('textbox', { name: 'Education History Assessment' }).fill('Education History');
  await page.getByRole('button', { name: ' Add Degree' }).click();
  await page.getByRole('button', { name: 'Close modal window.' }).click();
  await page.getByRole('checkbox', { name: 'Not at this Time' }).check();
  await page.getByRole('textbox', { name: 'Basic Skill / Education' }).click();
  await page.getByRole('textbox', { name: 'Basic Skill / Education' }).fill('Test');
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('textbox', { name: 'Number of Children under 18' }).click();
  await page.getByRole('textbox', { name: 'Number of Children under 18' }).fill('1');
  await page.getByRole('radiogroup', { name: 'Dependent Care Needs Does the' }).getByLabel('Not at this time').check();
  await page.getByRole('checkbox', { name: 'Has a Valid License' }).check();
  await page.getByRole('radiogroup', { name: 'Automobile *' }).getByLabel('Not at this time').check();
  await page.getByRole('radiogroup', { name: 'Contacts *' }).getByLabel('Not at this time').check();
  await page.getByRole('radiogroup', { name: 'Work Attire This section' }).getByLabel('Not at this Time').check();
  await page.getByRole('radiogroup', { name: 'Motivational Factors' }).getByLabel('Not at this Time').check();
  await page.getByRole('radiogroup', { name: 'Need help with Career' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Interviewing Skills *' }).getByLabel('Not at this Time').check();
  await page.getByRole('checkbox', { name: 'Has Acceptable Resume' }).check();
  await page.getByRole('radiogroup', { name: 'Application Completion *' }).getByLabel('Not at this Time', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Need help with Appearance/' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Needs to Learn how to use' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Health *' }).getByLabel('Not at this time', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Behavior *' }).getByLabel('Not at this time', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Substance Abuse *' }).getByLabel('Not at this time', { exact: true }).check();
  await page.locator('input[name="data[residenceStatus][]"]').first().check();
  await page.locator('input[name="data[homeLifeStatus][]"]').first().check();
  await page.locator('input[name="data[financialStatus][]"]').first().check();
  await page.getByRole('checkbox', { name: 'Not at This Time', exact: true }).check();
  await page.locator('input[name="data[publicAssistance][]"]').first().check();
  await page.getByRole('checkbox', { name: 'Adult Education' }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('checkbox', { name: 'No Barriers to Employment/' }).check();
  await page.getByRole('radiogroup', { name: 'To better assist the' }).getByLabel('Chose not to Answer').check();
  await page.getByRole('radiogroup', { name: 'Individual needs the' }).getByLabel('Chose not to Answer').check();
  await page.getByRole('textbox', { name: 'Employment Barriers' }).click();
  await page.getByRole('textbox', { name: 'Employment Barriers' }).fill('Test');
  await page.getByRole('radio', { name: 'No Arrest Record' }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Submit Form button. Click to' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();
});



