import { test, expect } from '@playwright/test';
test('Verify Page 1 through 7 answers in read-only form', async ({ page }) => {
  // For Wp 1wp-app

  
   /////////// Login for Admin///////////
  await page.goto(process.env.WYO_OLDDEV_LOGIN); // DEV
  //await page.goto(process.env.WYO_PPP_LOGIN);    // PPP
  /////////// Login for Admin///////////
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV_PASS); // DEV and New DEV
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP

  await page.getByRole('button', { name: 'Login' }).click();
  //login//

  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();


  //await page.getByRole('cell', { name: 'SecondJade', exact: true }).click();
  //await page.getByRole('tab', { name: 'Programs Overview' }).click();
  //await page.getByText('Wagner PeyserApplication ID: 8803474Eligibility Approved').click();

  ///////////////////// Review Button ///////////////////////
  await page.pause();
  await page.getByRole('tab', { name: 'Application' }).click();
  await page.getByRole('button', { name: 'Preview eligibility' }).first().click(); /// just change this to check which subprogram
  // Form fields load asynchronously after navigating into the wizard.
  await page.getByRole('heading', { name: 'Contact information' }).waitFor();

  // --- Page 1: Basic Information ---
  await expect(page.getByRole('radiogroup', { name: 'Please review the recommendations' }).getByRole('checkbox', { name: 'Wagner-Peyser' })).toBeChecked();
  //await expect(page.getByRole('textbox', { name: 'First Name *' })).toHaveValue('SecondJade');
  //await expect(page.getByRole('textbox', { name: 'Last Name *' })).toHaveValue('Check');
  //await expect(page.getByRole('textbox', { name: 'Social Security Number (SSN)' })).toHaveValue('657-36-3837');
  // await expect(page.getByRole('textbox', { name: 'Address Line 1 *' })).toHaveValue('Cheyenne');
  //await expect(page.locator('.formio-component-state .choices__list--single .choices__item--selectable')).toContainText('Wyoming');
  //await expect(page.getByRole('textbox', { name: 'City *' })).toHaveValue('Cheyenne');
  //await expect(page.getByRole('textbox', { name: 'Zip Code *' })).toHaveValue('82001');
  //await expect(page.getByRole('radiogroup', { name: 'Is Mailing Address same as the Residential Address?' }).getByLabel('Yes', { exact: true })).toBeChecked();
  //await expect(page.getByRole('textbox', { name: 'Primary Phone Number' })).toHaveValue('3473847383');
  //await expect(page.getByRole('radiogroup', { name: 'Primary Phone Type *' }).getByLabel('Message Only', { exact: true })).toBeChecked();
  //await expect(page.getByText('No alternate contact added yet.')).toBeVisible();
  // --Page 1
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('heading', { name: 'Demographic Information' }).waitFor();

  // --- Page 2: Demographic Information ---
  await expect(page.getByRole('textbox', { name: 'Date of Birth *' })).toHaveValue('08/29/2007');
  await expect(page.getByRole('textbox', { name: 'Age' })).toHaveValue('19');
  await expect(page.locator('.formio-component-gender .choices__list--single .choices__item--selectable')).toContainText('Male');
  await expect(page.locator('.formio-component-sexualOrientation .choices__list--single .choices__item--selectable')).toContainText('Straight/Heterosexual');
  await expect(page.locator('.formio-component-registeredWithTheSelectiveService .choices__list--single .choices__item--selectable')).toContainText('Not Applicable');
  await expect(page.locator('.formio-component-citizenship .choices__list--single .choices__item--selectable')).toContainText('Citizen of U.S. or U.S. Territory');
  await expect(page.getByRole('radiogroup', { name: 'Hispanic/Latino Heritage *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Race *' }).getByRole('checkbox', { name: 'White' })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Do you wish to disclose a disability?' }).getByLabel('No, I do not have a disability.', { exact: true })).toBeChecked();
  // --Page 2
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('heading', { name: 'Spouse or Caregiver of a Military Member' }).waitFor();

  // --- Page 3: Veterans Information ---
  await expect(page.getByRole('radiogroup', { name: 'I am the spouse or family caregiver' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'My spouse was a veteran who died' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'My spouse has (or my deceased spouse had)' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'My active-duty spouse is listed' }).getByLabel('None of the above', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Are you currently in the U.S. Military or a Veteran?' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('heading', { name: 'Eligible Veteran Status' })).toBeVisible();
  // --Page 3
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('heading', { name: 'Employment Information' }).waitFor();

  // --- Page 4: Employment Information ---
  // Not in labor force, not
  await page.pause();
  await expect(page.locator('.formio-component-employmentStatus .choices__list--single .choices__item--selectable')).toContainText(' Not in labor force, not actively looking for work');
  await expect(page.getByRole('radiogroup', { name: 'In a Registered' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radio', { name: 'Neither Claimant nor Exhaustee' })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Long-Term Unemployed *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Attended a Rapid Response' }).getByLabel('No', { exact: true })).toBeChecked();
  // Eligible Migrant and Seasonal Farmworker Status
  await expect(page.locator('.formio-component-eligibleMigrantAndSeasonalFarmworkerStatus .choices__list--single .choices__item--selectable')).toContainText('Migrant Farmworker Adult');
  await expect(page.getByRole('radiogroup', { name: 'Unemployed due to layoff or' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Have you worked as a farmworker in the last 12 months?' }).getByLabel('No', { exact: true })).toBeChecked();
  // --Page 4
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('heading', { name: 'Education Information' }).waitFor();

  // --- Page 5: Education and Public Assistance ---
  await expect(page.locator('.formio-component-highestSchoolGradeCompleted .choices__list--single .choices__item--selectable')).toContainText('12th Grade Completed');
  await expect(page.locator('.formio-component-highestEducationalLevelCompleted .choices__list--single .choices__item--selectable')).toContainText('High School Equivalency Diploma');
  // School Status dropdown
  await expect(page.locator('.formio-component-schoolStatus .choices__list--single .choices__item--selectable')).toContainText('Yes, Attending High School, Junior High, Middle or Elementary School');
  await expect(page.getByRole('radiogroup', { name: 'Receiving services from Adult' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Receiving services from YouthBuild *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Receiving services from Job' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Receiving services from Vocational Education (Carl Perkins) *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Temporary Assistance for' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Supplemental Security Income' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Supplemental Nutrition' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'General Assistance (GA)' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Refugee Cash Assistance (RCA' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Social Security Disability' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Youth Currently living in' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Foster Care Payments' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Youth currently receives, or' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Receiving Services under SNAP' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Ticket-to-Work Holder issued by Social Security Administration' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'The Ticket-to-Work has been assigned an employment network' }).getByLabel('No', { exact: true })).toBeChecked();
  // --Page 5
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('heading', { name: 'Barriers' }).waitFor();

  // --- Page 6: Barriers and Miscellaneous ---
  await expect(page.getByRole('radiogroup', { name: 'English Language Learner *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Basic Skills Deficient/Low' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Homeless *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Foster Care Status *' }).getByLabel('Yes, Aged Out', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Ex-Offender *' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Single Parent' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Within 2 years of exhausting' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Displaced Homemaker' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Cultural Barriers' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Due to the individual' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Meets Qualifying Barrier for Employment' }).getByLabel('No', { exact: true })).toBeChecked();
  await expect(page.getByRole('radiogroup', { name: 'Are you required to pay child' }).getByLabel('No', { exact: true })).toBeChecked();
  // --Page 6
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('heading', { name: 'Applicant Eligibility' }).waitFor();

  // --- Page 7: Applicant Eligibility ---
  await expect(page.getByText('Following eligibilities are determined for this applicant')).toBeVisible();
  await expect(page.getByRole('checkbox', { name: 'WP' })).toBeChecked();

});
