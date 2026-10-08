const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();


test('Demo Grant', async ({ page }) => {

  //await page.goto(process.env.WYO_OLDDEV_LOGIN); // DEV
  await page.goto(process.env.WYO_PPP_LOGIN);    // PPP
  /////////// Login for Admin///////////
  await page.getByRole('textbox', { name: 'Email' }).click();
  //await page.getByRole('textbox', { name: 'Email' }).fill(process.env.STATE_AD_EMAIL_DEV);  //DEV
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.STATE_AD_EMAIL_PPP); 
  await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.STATE_AD_DEV_PASS); // DEV and New DEV
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.STATE_AD_PPP_PASS);  // PPP
  
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  await page.pause();
  
  await page.getByRole('button', { name: 'Manage' }).click();
  await page.getByRole('button', { name: 'Admin Console' }).click();
  await page.getByRole('button', { name: 'Manage Demonstration Grant' }).click();
  await page.getByRole('button', { name: 'New Demo Grant' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).click();
  await page.getByRole('textbox', { name: 'Name *' }).fill('demog');
  await page.getByRole('textbox', { name: 'Grant #: *' }).click();
  await page.getByRole('textbox', { name: 'Grant #: *' }).fill('69W15WR346412'); /////// change
  await page.getByRole('textbox', { name: 'Start Date *' }).click();
  await page.getByRole('textbox', { name: 'Start Date *' }).fill('2026-09-08_');
  await page.getByRole('textbox', { name: 'Start Date *' }).press('Enter');
  await page.getByRole('textbox', { name: 'End Date *' }).click();
  await page.getByRole('textbox', { name: 'End Date *' }).fill('2026-12-30_');
  await page.getByRole('textbox', { name: 'End Date *' }).press('Enter');
  await page.getByRole('button', { name: 'Create Demo Grant' }).click();
  await page.getByLabel('demog').click();  ///////// change
  await page.getByRole('button', { name: 'Add Employer to Grant' }).click();
  await page.getByRole('textbox', { name: 'Search employers by name or' }).click();
  await page.getByRole('textbox', { name: 'Search employers by name or' }).fill('434334322'); //////change Employer FEIN
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Add Deployers to grant' }).click();  //////change based on employer name
  await page.getByRole('button', { name: 'Employers' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('434334322'); ///////change Employer FEIN
  await page.getByRole('button', { name: 'search' }).click();
  await page.getByRole('cell', { name: 'Deployers' }).click();  //////change Employer Name
  await page.getByRole('tab', { name: 'Demo Grants' }).click();
  await page.getByRole('button', { name: 'Add Individual' }).click();
  await page.getByRole('textbox', { name: 'First Name* Last Name* Last 4' }).click();
  await page.getByRole('textbox', { name: 'First Name* Last Name* Last 4' }).fill('Kopi');  //////change Jobseeker 
  await page.locator('input[name="lastName"]').click();
  await page.locator('input[name="lastName"]').fill('Ko');  //////change Jobseeker
  await page.locator('input[name="searchInput"]').click();
  await page.locator('input[name="searchInput"]').fill('1174');  //////change SSN
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('dialog', { name: 'Add Individual' }).getByLabel('', { exact: true }).click();
  await page.getByRole('option', { name: 'demog' }).click();  /////// change
  await page.locator('textarea[name="comments"]').click();
  await page.locator('textarea[name="comments"]').fill('test');
  await page.getByRole('button', { name: 'Add Individual' }).click();
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).click();
  await page.getByRole('searchbox', { name: 'Search' }).fill('Kopi');  //////change
  await page.getByRole('button', { name: 'search' }).click();
  await page.getByRole('cell', { name: 'Kopi', exact: true }).click();  //////change
  await page.getByRole('radio', { name: 'IDST' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('radiogroup', { name: 'Unemployed due to layoff or' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Long-Term Unemployed' }).getByLabel('No', { exact: true }).check();
  await page.getByText('Eligible Migrant and Seasonal').click();
  await page.getByRole('option', { name: 'Migrant Farmworker Adult' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('radiogroup', { name: 'Receiving services from Adult' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Receiving services from YouthBuild *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Receiving services from Job' }).getByLabel('No', { exact: true }).check();
  await page.getByText('Receiving services from Vocational Education (Carl Perkins)').click();
  await page.getByRole('radiogroup', { name: 'Receiving services from Vocational Education (Carl Perkins) *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Social Security Disability' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Youth Currently living in' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Foster Care Payments' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Youth currently receives, or' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Ticket-to-Work Holder issued' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'The Ticket-to-Work has been' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('radiogroup', { name: 'English Language Learner *' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Basic Skills Deficient/Low' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Foster Care Status *' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Ex-Offender *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Single Parent' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Within 2 years of exhausting' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Displaced Homemaker' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Cultural Barriers' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('IDST', { exact: true }).click();

});

