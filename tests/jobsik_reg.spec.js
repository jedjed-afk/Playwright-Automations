
  import { test, expect } from '@playwright/test';
// This Test is written by Jade of Eagle Team
test('test', async ({ page }) => {
  //await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/employer-jobseeker/job-seeker/registration'); // PPP
  await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/employer-jobseeker/job-seeker/registration'); // Dev
  //await page.goto('https://www.oregon-dev.careeredgebeta.com/employer-jobseeker/job-seeker/registration'); // Oregon

  // 1st Page //
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('JedOneFour'); //change this
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Not');  //change this
  await page.getByRole('textbox', { name: 'Email You may be contacted' }).click();
  await page.getByRole('textbox', { name: 'Email You may be contacted' }).fill('ajregunay+efive@careerteam.com'); //change this
  await page.getByRole('textbox', { name: 'Password Create a secure' }).click();
  await page.getByRole('textbox', { name: 'Password Create a secure' }).fill('Not_jed123#@$3dsd'); //Not_jed123!
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('Not_jed123#@$3dsd');
  await page.getByRole('textbox', { name: 'Social Security Number (SSN) Enter your Social Security Number without using' }).click();
  await page.getByRole('textbox', { name: 'Social Security Number (SSN) Enter your Social Security Number without using' }).fill('354211544'); //change this
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).click();
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).fill('354211544'); //match with line 17
  await page.getByRole('textbox', { name: 'Zip Code Enter the Zip Code' }).click();
  await page.getByRole('textbox', { name: 'Zip Code Enter the Zip Code' }).fill('82001');
  await page.locator('.fa.fa-calendar').click();
  await page.getByRole('textbox', { name: 'Date of Birth Select your' }).click();
  await page.getByRole('textbox', { name: 'Date of Birth Select your' }).fill('08/29/2007_');
  await page.getByRole('textbox', { name: 'Date of Birth Select your' }).press('Enter');
  await page.getByLabel('data[basicInfo.sexualOrientation]').getByText('<span>I Do Not Wish to Answer</span>I Do Not Wish to AnswerRemove item').click();
  await page.getByRole('option', { name: 'Straight/Heterosexual' }).click();
  await page.getByText('<span>I Do Not Wish to Answer</span>I Do Not Wish to AnswerRemove item').click();
  await page.getByRole('option', { name: 'Male', exact: true }).click();
  await page.getByRole('combobox', { name: 'data[basicInfo.isSelectiveService]' }).click();
  await page.getByRole('option', { name: 'Not Applicable' }).click();
  await page.getByLabel('data[basicInfo.siteAccessingFrom]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Home' }).click();
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Business Colleague' }).click();
  await page.pause();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  //second page//
  await page.getByRole('textbox', { name: 'Address Line 1 Enter your' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 Enter your' }).fill('Cheyenne');
  await page.getByRole('textbox', { name: 'City *' }).click();
  await page.getByRole('textbox', { name: 'City *' }).fill('Cheyenne');
  await page.getByText('StateRemove item').click();
  await page.getByRole('textbox', { name: 'State' }).fill('wyo');
  await page.getByRole('option', { name: 'Wyoming' }).click();
  await page.getByRole('textbox', { name: 'Primary Phone Number ,' }).click();
  await page.getByRole('textbox', { name: 'Primary Phone Number ,' }).fill('(347) 384-7383_');
  await page.getByRole('radio', { name: 'Message Only' }).check();
  await page.getByRole('checkbox', { name: 'Email' }).check();
  await page.getByRole('radiogroup', { name: 'Are you homeless? Are you' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 3rd page //
  await page.getByText('SelectRemove item').click();
  await page.getByText('Citizen of U.S. or U.S.').click();
  await page.getByRole('radio', { name: 'No, I do not have a' }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 4th page //
  await page.pause();
  await page.getByLabel('data[eduInfo.highestEduAchieved]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Attained a secondary school' }).click();
  await page.getByLabel('data[eduInfo.areYouAttendingSchool]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Yes, Attending High School,' }).click();
  await page.getByLabel('data[eduInfo.currentEmploymentStatus]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Not in labor force' }).click();
  await page.getByLabel('data[eduInfo.unEmpEligibilityStatus]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Neither Claimant nor Exhaustee' }).click();
  await page.getByRole('radiogroup', { name: 'Are you currently looking for' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Do you have any related' }).getByLabel('No').check();
  await page.getByRole('radio', { name: 'No, I have not recently' }).check();
  await page.getByRole('radiogroup', { name: 'Have you worked as a' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 5th page //
  await page.getByRole('radiogroup', { name: 'Are you of Hispanic or Latino' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('checkbox', { name: 'White' }).check();
  await page.getByRole('radiogroup', { name: 'Do you primarily speak a' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Are you currently in the U.S' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'I am the spouse or family' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'My spouse was a veteran who' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'My spouse has (or my deceased' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radio', { name: 'None of the above' }).check();
  await page.getByPlaceholder('Would you like to be').nth(1).check();
  await page.getByRole('button', { name: 'Submit Form button. Click to' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.pause();
});