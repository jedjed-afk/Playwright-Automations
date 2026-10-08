
  import { test, expect } from '@playwright/test';
// This Test is written by Jade of Eagle Team
test('test', async ({ page }) => {
  await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/employer-jobseeker/job-seeker/registration');
  await page.getByRole('textbox', { name: 'First Name *' }).click();
  await page.getByRole('textbox', { name: 'First Name *' }).fill('Jeds'); //change this
  await page.getByRole('textbox', { name: 'Last Name *' }).click();
  await page.getByRole('textbox', { name: 'Last Name *' }).fill('Anotherss');  //change this
  await page.getByRole('textbox', { name: 'Email You may be contacted' }).click();
  await page.getByRole('textbox', { name: 'Email You may be contacted' }).fill('jedanotheronesss@careerteam.com'); //change this
  await page.getByRole('textbox', { name: 'Password Create a secure' }).click();
  await page.getByRole('textbox', { name: 'Password Create a secure' }).fill('Not_jed123ew$3d'); //Not_jed123!
  await page.getByRole('textbox', { name: 'Confirm Password *' }).click();
  await page.getByRole('textbox', { name: 'Confirm Password *' }).fill('Not_jed123ew$3d');
  await page.getByRole('textbox', { name: 'Social Security Number (SSN) Enter your Social Security Number without using' }).click();
  await page.getByRole('textbox', { name: 'Social Security Number (SSN) Enter your Social Security Number without using' }).fill('794212243'); //change this
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).click();
  await page.getByRole('textbox', { name: 'Confirm Social Security' }).fill('794212243'); //match with line 17
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

   await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/user/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanager@careerteam.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause(); //click play after load is done
 // await page.getByRole('cell', { name: 'Jed', exact: true }).click(); // change this to name of participanat w/o WP
  await page.getByRole('radio', { name: 'Wagner Peyser' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.waitForTimeout(5000);
  //page 1
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.waitForTimeout(5000);
  //page 2
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.waitForTimeout(5000);
  //page 3
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.waitForTimeout(5000);
  //page 4
   await page.getByRole('button', { name: 'Next button. Click to go to' }).click();

  await page.getByText('SelectSelectRemove item').first().click();
  await page.getByRole('option', { name: 'Employed', exact: true }).click();

  await page.getByRole('radiogroup', { name: 'In a Registered' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radio', { name: 'Neither Claimant nor Exhaustee' }).click();
  await page.getByRole('radiogroup', { name: 'Long-Term Unemployed *' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Attended a Rapid Response' }).getByLabel('No', { exact: true }).click();
  await page.getByLabel('data[').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Migrant Farmworker Adult' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('radiogroup', { name: 'Unemployed due to layoff or' }).getByLabel('No').click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
 

  await page.getByLabel('data[highestSchoolGradeCompleted]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: '12th Grade Completed' }).click();
  await page.getByLabel('data[highestEducationalLevelCompleted]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'High School Equivalency' }).click();
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Yes, Attending High School,' }).click();
  await page.getByRole('radiogroup', { name: 'Receiving services from Adult' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Receiving services from YouthBuild *' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Receiving services from Job' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Receiving services from Vocational Education (Carl Perkins) *' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Temporary Assistance for' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Supplemental Security Income' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Supplemental Nutrition' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'General Assistance (GA)' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Refugee Cash Assistance (RCA' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Social Security Disability' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Youth Currently living in' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Foster Care Payments' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Youth currently receives, or' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Receiving Services under SNAP' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Ticket-to-Work Holder issued by Social Security Administration' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'The Ticket-to-Work has been assigned an employment network' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // page 6
  await page.getByRole('radiogroup', { name: 'English Language Learner *' }).getByLabel('No').click();
  await page.getByRole('radiogroup', { name: 'Basic Skills Deficient/Low' }).getByLabel('No').click();
  await page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No').click();
  await page.getByRole('radiogroup', { name: 'Foster Care Status *' }).getByLabel('No').click();
  await page.getByRole('radiogroup', { name: 'Ex-Offender *' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Single Parent' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Within 2 years of exhausting' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Displaced Homemaker' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Cultural Barriers' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('radiogroup', { name: 'Are you required to pay child' }).getByLabel('No', { exact: true }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Submit button. Click to' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.pause();

  await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/user/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanager@careerteam.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  // await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/home');
  await page.getByRole('button', { name: 'Individuals' }).click();
  //await page.goto('https://www.wyo-platform-dev.careeredgebeta.com/employer-jobseeker/individuals?tab=myIndividuals');
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause();
  //await page.getByLabel('Jed', { exact: true }).click();
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Evidences' }).click();
  await page.getByRole('button', { name: 'Upload Document' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).click();
  await page.getByRole('textbox', { name: 'Document Name *' }).fill('Test WIOA');
  await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
  await page.pause(); //I prefer to use this so I can choose the file I want to upload
  //await page.locator('input[type="file"]').setInputFiles('Family Size Verification Form.pdf'); //this could be executed however, you need to move the file to the playwright folder instead for it to be uploaded
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'more' }).click();
  await page.getByRole('menuitem', { name: 'Verify' }).click();
  await page.getByText('Select an evidence typeSelect').click();
  await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('self');
  await page.getByRole('option', { name: 'Self-Attestation' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.pause();

  await page.goto('https://www.wyo-platform-pre-prod.careeredgebeta.com/user/login');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanager@careerteam.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause();
  
 // await page.getByRole('cell', { name: 'JedOneOne', exact: true }).click();
  await page.getByRole('radio', { name: 'WIOA' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('checkbox', { name: 'WIOA Adult' }).check();
  await page.locator('.form-control.ui').first().click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.locator('.form-control.ui').first().click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('radiogroup', { name: 'Haitian *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 4th Page //
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Employed', exact: true }).click();
  //await page.pause();
  //await page.locator('#er0z2wf > .choices > .form-control.ui')
  await page.getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click();
  

  await page.getByRole('radiogroup', { name: 'If employed, individual is' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'In a Registered' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radio', { name: 'Neither Claimant nor Exhaustee' }).check();
  await page.getByRole('radiogroup', { name: 'Unemployed due to layoff or' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Attended a Rapid Response' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Long-Term Unemployed *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('textbox', { name: 'Current or most recent hourly' }).click();
  await page.getByRole('textbox', { name: 'Current or most recent hourly' }).fill('11');
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.pause();
  await page.getByLabel('data[highestSchoolGradeCompleted]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: '12th Grade Completed' }).click();
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'High School Diploma' }).click();
  // await page. locator('#exrwyds > .choices > .form-control.ui')

  //await page.locator('#exhibo > .choices > .form-control.ui').click();
  // await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click();

  
  await page.getByRole('textbox', { name: 'Select Document' }).nth(1).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click();

  await page.getByRole('radiogroup', { name: 'Receiving services from Adult' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Receiving services from Job' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Receiving Services from Vocational Education (Carl Perkins) *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radio', { name: 'Not applicable', exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Temporary Assistance for' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Supplemental Security Income' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'General Assistance (GA) *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Supplemental Nutrition' }).getByLabel('No', { exact: true }).check(); // Supplemental Nutrition
  await page.getByRole('radiogroup', { name: 'Refugee Cash Assistance (RCA)' }).getByLabel('No', { exact: true }).check();  // Refugee Cash Assistance (RCA)
 await page.getByRole('radiogroup', { name: 'Social Security Disability' }).getByLabel('No', { exact: true }).check();  // Social Security Disability
  await page.getByRole('radiogroup', { name: 'Receiving, or has been' }).getByLabel('No', { exact: true }).check();  // Receiving, or has been
  await page.getByRole('radiogroup', { name: 'Ticket to Work Holder issued' }).getByLabel('No', { exact: true }).check();   // Ticket to Work Holder issued
  await page.getByRole('radiogroup', { name: 'Meets Governor’s special' }).getByLabel('No', { exact: true }).check(); // Meets Governor’s special
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('radiogroup', { name: 'English language learner *' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('Yes').check();
  //await page.getByRole('combobox', { name: 'Select Document'}).nth().click(); 
  //await page.getByRole('textbox', { name: 'Select Document'}).nth(2).click({ force: true}); 
 // await page.locator('etkh4b3-verifiedWith22').first().click(); // etkh4b3-verifiedWith22-item-choice-1
  await page.getByText('Verified with').first().click();
  //const docLocator = page.getByRole('textbox', { name: 'Select Document'}).nth(2);
  //await docLocator.waitFor({ state: 'visible' }); 
  //await docLocator.click({ force: true });
  //await page.locator('.form-control').first().nth(1).click();
  //await page.getByRole('textbox', { name: 'Select Document' }).nth(0).click();
  await page.getByRole('option', { name: 'Case Note (file: Located in' }).click();
  await page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Youth in, or aged-out of,' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('No', { exact: true }).check();
  await page.pause();
  await page.getByRole('radiogroup', { name: 'Eligible under Section 477 of' }).getByLabel('No', { exact: true }).check(); //Eligible under Section 477 of
  await page.getByRole('radiogroup', { name: 'Ex-Offender' }).getByLabel('No', { exact: true }).check(); // Ex-Offender
  await page.getByRole('radiogroup', { name: 'Incarcerated at Program Entry' }).getByLabel('No', { exact: true }).check(); //Incarcerated at Program Entry
  await page.getByRole('radiogroup', { name: 'Displaced Homemaker' }).getByLabel('No', { exact: true }).check(); // Displaced Homemaker
  await page.getByRole('radiogroup', { name: 'Pregnant or parenting youth' }).getByLabel('No', { exact: true }).check(); // Pregnant or parenting youth
  await page.getByRole('radiogroup', { name: 'Youth Requires Additional' }).getByLabel('No', { exact: true }).check(); // Youth Requires Additional
  await page.getByRole('radiogroup', { name: 'Within 2 years of exhausting' }).getByLabel('No', { exact: true }).check(); // Within 2 years of exhausting
  await page.getByRole('radiogroup', { name: 'Hawaiian Native' }).getByLabel('No', { exact: true }).check(); // Hawaiian Native
  await page.getByRole('radiogroup', { name: 'Single Parent (including' }).getByLabel('No', { exact: true }).check(); // Single Parent (including
  await page.getByRole('radiogroup', { name: 'Is the individual' }).getByLabel('No', { exact: true }).check(); // Is the individual
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: '1', exact: true }).click();
  await page.getByRole('textbox', { name: 'Select Document' }).nth(1).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click();
  await page.getByRole('textbox', { name: 'Annualized Family Income (' }).click();
  await page.getByRole('textbox', { name: 'Annualized Family Income (' }).fill('11111');
  await page.getByRole('textbox', { name: 'Select Document' }).nth(2).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click();
  await page.getByRole('radio', { name: 'N/A' }).check();
  //await page.getByRole('radiogroup', { name: 'Does the participant live in' }).getByLabel('N/A', { exact: true }).check();  // Does the participant live in
  await page.getByRole('radiogroup', { name: 'TAA Petition Number' }).getByLabel('No', { exact: true }).check(); // TAA Petition Number
  await page.getByRole('radiogroup', { name: 'Intent to live and work in' }).getByLabel('Yes', { exact: true }).check(); 
  await page.getByRole('textbox', { name: 'Select Document' }).nth(3).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.pause();
});