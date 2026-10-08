const { test } = require('@playwright/test');

test('Jobseeker Registration', async ({ page }) => { 
  
 await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/employer-jobseeker/job-seeker/registration');
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('One'); //edit
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Lunar'); //edit
  await page.getByRole('textbox', { name: 'Email You may be contacted' }).click();
  await page.getByRole('textbox', { name: 'Email You may be contacted' }).fill('onelunar@email.com'); //edit
  await page.getByRole('textbox', { name: 'Password Create a secure' }).click();
  await page.getByRole('textbox', { name: 'Password Create a secure' }).fill('High_seas123');
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('High_seas123');
  await page.getByRole('textbox', { name: 'Social Security Number (SSN) Enter your Social Security Number without using' }).click();
  await page.getByRole('textbox', { name: 'Social Security Number (SSN) Enter your Social Security Number without using' }).fill('634556331'); //edit
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).click();
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).fill('634556331'); //edit (should be same with line17)
  await page.getByRole('textbox', { name: 'Zip Code Enter the Zip Code' }).click();
  await page.getByRole('textbox', { name: 'Zip Code Enter the Zip Code' }).fill('82001');
  await page.getByRole('textbox', { name: 'Date of Birth Select your' }).click();
  await page.getByRole('textbox', { name: 'Date of Birth Select your' }).fill('07/01/2005_');
  await page.getByRole('combobox', { name: 'data[basicInfo.gender]' }).click();
  await page.getByRole('option', { name: 'Female' }).click();
  
  await page.getByRole('combobox', { name: 'data[basicInfo.sexualOrientation]' }).click();
  await page.getByRole('option', { name: 'Bisexual' }).click();
  await page.getByText('Not applicableRemove item').click();
  await page.getByRole('option', { name: 'Not applicable' }).click();
  await page.getByLabel('data[basicInfo.siteAccessingFrom]').getByText('SelectRemove item').click();
  await page.getByRole('option', { name: 'Library' }).click();
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Business Colleague' }).click();
  await page.getByText('<span>Library</span>LibraryRemove item').click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  //////////////////////////////// 2nd PAGE ////////////////////////////////////////////////////////////////////////////////////////
  await page.getByRole('textbox', { name: 'Address Line 1 Enter your' }).click();
  await page.getByRole('textbox', { name: 'Address Line 1 Enter your' }).fill('Test');
  await page.getByRole('textbox', { name: 'City *' }).click();
  await page.getByRole('textbox', { name: 'City *' }).fill('test');
  await page.getByText('StateStateRemove item').click();
  await page.getByRole('textbox', { name: 'State' }).fill('wy');
  await page.getByText('Wyoming').click();
  await page.getByRole('textbox', { name: 'Primary Phone Number ,' }).click();
  await page.getByRole('textbox', { name: 'Primary Phone Number ,' }).fill('(343) 422-3323_');
  await page.getByRole('radio', { name: 'Message Only' }).check();
  await page.getByRole('checkbox', { name: 'Email' }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  //////////////////////////////// 3rd PAGE ////////////////////////////////////////////////////////////////////////////////////////
  await page.getByRole('radiogroup', { name: 'Are you homeless? Are you' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('SelectRemove item').click();
  await page.getByText('Citizen of U.S. or U.S.').click();
  await page.getByText('No, I do not have a').click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByLabel('data[eduInfo.areYouAttendingSchool]').getByText('SelectRemove item').click();
  await page.getByRole('option', { name: 'Yes, Attending High School,' }).click();
  await page.locator('div').filter({ hasText: /^SelectRemove item$/ }).nth(2).click();
  await page.getByRole('option', { name: 'Not in labor force' }).click();
  await page.getByLabel('data[eduInfo.unEmpEligibilityStatus]').getByText('SelectRemove item').click();
  await page.getByText('Eligible Claimant referred by').click();
  await page.getByRole('radiogroup', { name: 'Are you currently looking for' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Do you have any related' }).getByLabel('No').check();
  await page.getByRole('radio', { name: 'No, I have not recently' }).check();
  await page.getByRole('radiogroup', { name: 'Have you worked as a' }).getByLabel('No', { exact: true }).check();
  await page.getByLabel('data[eduInfo.highestEduAchieved]').getByText('SelectRemove item').click();
  await page.getByText('Attained secondary school').click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
//////////////////////////////// 4TH PAGE ////////////////////////////////////////////////////////////////////////////////////////
 
    await page.locator('.form-radio > div:nth-child(2)').first().click();
  await page.locator('div:nth-child(7)').first().click();
  await page.getByRole('checkbox', { name: 'I do not wish to answer' }).check();
  await page.getByRole('checkbox', { name: 'I do not wish to answer' }).press('Tab');
  await page.getByRole('button', { name: 'Click ‘yes’ if you speak any' }).press('Tab');
  await page.getByRole('radiogroup', { name: 'Do you primarily speak a' }).getByLabel('Yes').press('ArrowRight');
  await page.getByRole('radiogroup', { name: 'Do you primarily speak a' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Do you primarily speak a' }).getByLabel('No', { exact: true }).press('Tab');
  await page.waitForTimeout(800);
  await page.getByRole('radiogroup', { name: 'My spouse was a veteran who' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Are you currently in the U.S' }).getByLabel('Yes').press('ArrowRight');
  await page.getByRole('radiogroup', { name: 'Are you currently in the U.S' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Are you currently in the U.S' }).getByLabel('No', { exact: true }).press('Tab');
  await page.getByRole('radiogroup', { name: 'I am the spouse or family' }).getByLabel('Yes').press('ArrowRight');
  await page.getByRole('radiogroup', { name: 'I am the spouse or family' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'I am the spouse or family' }).getByLabel('No', { exact: true }).press('Tab');
  await page.getByRole('radiogroup', { name: 'My spouse was a veteran who' }).getByLabel('Yes', { exact: true }).press('ArrowRight');
  await page.getByRole('radiogroup', { name: 'My spouse was a veteran who' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'My spouse was a veteran who' }).getByLabel('No', { exact: true }).press('Tab');
  await page.getByRole('radiogroup', { name: 'My spouse has (or my deceased' }).getByLabel('Yes', { exact: true }).press('ArrowRight');
  await page.getByRole('radiogroup', { name: 'My spouse has (or my deceased' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'My spouse has (or my deceased' }).getByLabel('No', { exact: true }).press('Tab');
  await page.getByRole('radio', { name: 'Missing in action' }).press('ArrowDown');
  await page.getByRole('radio', { name: 'Captured in the line of duty' }).press('ArrowDown');
  await page.getByRole('radio', { name: 'Forcibly detained or interned' }).press('ArrowDown');
  await page.getByRole('radio', { name: 'None of the above' }).press('Tab');
  await page.getByText('My spouse has (or my deceased').click();
  await page.getByRole('button', { name: 'Click ‘yes’ if you want to be' }).press('Tab');
  await page.locator('body').press('Tab');
  await page.getByRole('radiogroup', { name: 'My spouse has (or my deceased' }).getByLabel('No', { exact: true }).press('ArrowDown');
  await page.getByRole('radiogroup', { name: 'My spouse has (or my deceased' }).getByLabel('I do not wish to disclose').press('ArrowDown');
  await page.getByRole('radiogroup', { name: 'Are you currently in the U.S' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'I am the spouse or family' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'My spouse has (or my deceased' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radio', { name: 'None of the above' }).check();
  await page.getByPlaceholder('Would you like to be').first().check();
  await page.getByRole('button', { name: 'Submit Form button. Click to' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
   await page.pause();
});