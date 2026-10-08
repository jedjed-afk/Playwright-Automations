import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle

// Test Cases
// With Save and Close test on page 2 and 4 
// Verify Tabs that should be enabled or disabled, Status, Pecil Icon and Eligibility Status

////////////PRECONDITION/////////////////
// Individual registered using jobsik.reg.spec.js
// Normal WIOA Adult Application using LLSIL Eligibility
//Check which ENV you are testing
//Replace Caseman, CenterMan, Jobseeker Email and Pass on .ENV
//Replace Jobseeker Name on .ENV


///////////// use this in the future if want to submit every singe time ///////////////

  //await page.getByRole('button', { name: 'Submit Form button. Click to' }).click();
  //await page.getByRole('button', { name: 'Yes' }).click();

  //await page.getByRole('button', { name: 'Edit application' }).click();

  //for (let i = 0; i < 5; i++) {
    //await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  //}
  
test('WIOA Application', async ({ page }) => {
   test.setTimeout(15 * 60 * 1000);
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
  //await page.pause();
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click(); 
  await page.pause();

  ////////////// EVIDENCE ////////////// --- use this if no evidence uploaded yet

  // await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  // await page.getByRole('button', { name: 'Evidences' }).click();
  // await page.getByRole('button', { name: 'Upload Document' }).click();
  // await page.getByRole('textbox', { name: 'Document Name *' }).click();
  // await page.getByRole('textbox', { name: 'Document Name *' }).fill('Test WIOA');
  // {
  //   const fileChooserPromise = page.waitForEvent('filechooser');
  //   await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
  //   const fileChooser = await fileChooserPromise;
  //   await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf');
  // }

  // await page.getByRole('button', { name: 'Submit' }).click();
  // await page.getByRole('button', { name: 'Yes' }).click();
  // await page.getByRole('button', { name: 'more' }).click();
  // await page.getByRole('menuitem', { name: 'Verify' }).click();
  // await page.waitForTimeout(3000);
  // await page.getByText('Select an evidence typeSelect').click();
  // await page.waitForTimeout(3000);
  // await page.getByRole('textbox', { name: 'Select an evidence type' }).fill('self');
  // await page.waitForTimeout(3000);
  // await page.getByRole('option', { name: 'Self-Attestation' }).click();
  // await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  // await page.getByRole('button', { name: 'Update' }).click();
  // await page.getByRole('button', { name: 'Yes' }).click();


//////////// Creation of WIOA Applicaiton ////////////

  // await page.getByRole('Summary', { name: 'Summary', exact: true }).click();
  await page.getByRole('radio', { name: 'WIOA' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  // 1st Page //
  await page.getByRole('checkbox', { name: 'WIOA Adult' }).check();
  await page.locator('.form-control.ui').first().click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 2nd Page //
  await page.locator('.form-control.ui').first().click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).first().click(); // Change name on what name you put on your evidence
  //await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('radiogroup', { name: 'Haitian *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Cancel button. Click to reset' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();

  await page.getByRole('button', { name: 'Edit application' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click(); ////// it will go to 4th Page

  ////////////////
  //await page.getByRole('button', { name: 'Next button. Click to go to' }).click();


  // 3rd Page //
  //await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 4th Page //
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Employed', exact: true }).click();
  //await page.pause();
  //await page.locator('#er0z2wf > .choices > .form-control.ui')
  await page.getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  //await page.getByText('Employment Information').click();
  await page.keyboard.press('Escape');
  await page.getByRole('radiogroup', { name: 'If employed, individual is' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'In a Registered' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radio', { name: 'Neither Claimant nor Exhaustee' }).check();
  await page.getByRole('radiogroup', { name: 'Unemployed due to layoff or' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Attended a Rapid Response' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Long-Term Unemployed *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('textbox', { name: 'Current or most recent hourly' }).click();
  await page.getByRole('textbox', { name: 'Current or most recent hourly' }).fill('11');


  await page.getByRole('button', { name: 'Cancel button. Click to reset' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'Edit application' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click(); /// 5th page

  // 5th Page //
  await page.getByLabel('data[highestSchoolGradeCompleted]').getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: '12th Grade Completed' }).click();
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'High School Diploma' }).click();

  // the schooll should be yes for the field to open
  await page.getByRole('textbox', { name: 'Select Document' }).nth(1).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.keyboard.press('Escape');
  await page.getByRole('radiogroup', { name: 'Receiving services from Adult' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Receiving services from Job' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Receiving Services from Vocational Education (Carl Perkins) *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radio', { name: 'Not applicable', exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Temporary Assistance for' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Supplemental Security Income' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'General Assistance (GA) *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Supplemental Nutrition' }).getByLabel('No', { exact: true }).check(); 
  await page.getByRole('radiogroup', { name: 'Refugee Cash Assistance (RCA)' }).getByLabel('No', { exact: true }).check();  
  await page.getByRole('radiogroup', { name: 'Social Security Disability' }).getByLabel('No', { exact: true }).check();  
  await page.getByRole('radiogroup', { name: 'Receiving, or has been' }).getByLabel('No', { exact: true }).check();  
  await page.getByRole('radiogroup', { name: 'Ticket to Work Holder issued' }).getByLabel('No', { exact: true }).check();   
  await page.getByRole('radiogroup', { name: 'Meets Governor’s special' }).getByLabel('No', { exact: true }).check(); 
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 6th Page //
  await page.getByRole('radiogroup', { name: 'English language learner *' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('Yes').check();
  await page.pause();
  await page.getByRole('group').filter({ hasText: 'Basic Skills deficient/Low' }).getByLabel('Select Document').click();
  //await page.pause(); /// click 'Verified with' manually
  await page.waitForTimeout(1500);
  await page.getByRole('option', { name: 'Case Note (file: Located in' }).first().click();
  await page.keyboard.press('Escape');
  await page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Youth in, or aged-out of,' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('No', { exact: true }).check();
  //await page.pause();
  await page.getByRole('radiogroup', { name: 'Eligible under Section 477 of' }).getByLabel('No', { exact: true }).check(); 
  await page.getByRole('radiogroup', { name: 'Ex-Offender' }).getByLabel('No', { exact: true }).check(); 
  await page.getByRole('radiogroup', { name: 'Incarcerated at Program Entry' }).getByLabel('No', { exact: true }).check(); 
  await page.getByRole('radiogroup', { name: 'Displaced Homemaker' }).getByLabel('No', { exact: true }).check(); 
  await page.getByRole('radiogroup', { name: 'Pregnant or parenting youth' }).getByLabel('No', { exact: true }).check(); 
  await page.getByRole('radiogroup', { name: 'Youth Requires Additional' }).getByLabel('No', { exact: true }).check(); 
  await page.getByRole('radiogroup', { name: 'Within 2 years of exhausting' }).getByLabel('No', { exact: true }).check(); 
  await page.getByRole('radiogroup', { name: 'Hawaiian Native' }).getByLabel('No', { exact: true }).check(); 
  await page.getByRole('radiogroup', { name: 'Single Parent (including' }).getByLabel('No', { exact: true }).check(); 
  await page.getByRole('radiogroup', { name: 'Is the individual' }).getByLabel('No', { exact: true }).check(); 
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: '1', exact: true }).click();
  await page.getByRole('textbox', { name: 'Select Document' }).nth(1).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.keyboard.press('Escape');
  await page.getByRole('textbox', { name: 'Annualized Family Income (' }).click();
  await page.getByRole('textbox', { name: 'Annualized Family Income (' }).fill('111111');
  await page.getByRole('textbox', { name: 'Select Document' }).nth(2).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.keyboard.press('Escape');
  await page.getByRole('radio', { name: 'N/A' }).check();
  //await page.getByRole('radiogroup', { name: 'Does the participant live in' }).getByLabel('N/A', { exact: true }).check();  // Does the participant live in
  await page.getByRole('radiogroup', { name: 'TAA Petition Number' }).getByLabel('No', { exact: true }).check(); // TAA Petition Number
  await page.getByRole('radiogroup', { name: 'Intent to live and work in' }).getByLabel('Yes', { exact: true }).check(); 
  await page.getByRole('textbox', { name: 'Select Document' }).nth(3).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();

  /////////////////// BSD ///////////////
  await page.getByText('WIOA ADULT').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA ADULT').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// Homeless /////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Homeless *' }).getByLabel('Yes').check();
  await page.getByRole('group').filter( {hasText: 'Homeless'}).getByRole('textbox', { name: 'Select Document'}).click();  
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA ADULT').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Homeless *' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA ADULT').click();
  await page.getByText('No', { exact: true }).click();


///////////////////// SNAP //////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Supplemental Nutrition' }).getByLabel('Yes').check();
  await page.getByRole('radio', { name: 'Applicant' }).check();
  await page.getByRole('radiogroup', { name: 'Receiving services under SNAP Employment' }).getByLabel('No', { exact: true }).check();

  await page.getByRole('group').filter({ hasText: 'Supplemental Nutrition' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Public Assistance Eligibility' }).click();
  await page.getByRole('group').filter({ hasText: 'Supplemental Nutrition' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Public Assistance Benefit' }).click();
  await page.getByRole('group').filter({ hasText: 'Supplemental Nutrition' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Public Assistance Referral (' }).click();
  await page.getByRole('group').filter({ hasText: 'Supplemental Nutrition' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Public Assistance Database' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA ADULT').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Supplemental Nutrition' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA ADULT').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// TANF /////////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Temporary Assistance for' }).getByLabel('Yes').check();
  await page.getByRole('radio', { name: 'Applicant' }).check();
  await page.getByRole('group').filter({ hasText: 'Temporary Assistance for' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Public Assistance Eligibility' }).click();
  await page.getByRole('option', { name: 'Public Assistance Benefit' }).click();
  await page.getByRole('option', { name: 'Public Assistance Referral (' }).click();
  await page.getByRole('option', { name: 'Public Assistance/Social' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA ADULT').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Temporary Assistance for' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA ADULT').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// General Assistance (GA) //////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'General Assistance (GA)' }).getByLabel('Yes').check();
  await page.getByRole('radio', { name: 'Applicant' }).check();
  await page.getByRole('group').filter({ hasText: 'General Assistance (GA)' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Authorization to Receive Cash' }).click();
  await page.getByRole('option', { name: 'Public Assistance Check (file' }).click();
  await page.getByRole('option', { name: 'Medical Card Showing Cash' }).click();
  await page.getByRole('option', { name: 'Public Assistance Eligibility' }).click();
  await page.getByRole('option', { name: 'Public Assistance Database' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA ADULT').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'General Assistance (GA)' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA ADULT').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// RCA ////////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Refugee Cash Assistance (RCA)' }).getByLabel('Yes').check();
  await page.getByRole('radio', { name: 'Applicant' }).check();
  await page.getByRole('group').filter({ hasText: 'Refugee Cash Assistance (RCA)' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Medical Card Showing Cash' }).click();
  await page.getByRole('option', { name: 'Public Assistance Eligibility' }).click();
  await page.getByRole('option', { name: 'Public Assistance Check (file' }).click();
  await page.getByRole('option', { name: 'Refugee Assistance Records (' }).click();
  await page.getByRole('option', { name: 'Public Assistance/Social' }).click();
  await page.getByRole('option', { name: 'Public Assistance Database' }).click();
  await page.getByRole('option', { name: 'Authorization to Receive Cash' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA ADULT').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Refugee Cash Assistance (RCA)' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA ADULT').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// SSI ///////////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Supplemental Security Income' }).getByLabel('Yes').check();
  await page.getByRole('radio', { name: 'Applicant' }).check();
  await page.getByRole('group').filter({ hasText: 'Supplemental Security Income' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Public Assistance Benefit' }).click();
  await page.keyboard.press('Escape');
  await page.getByRole('group').filter({ hasText: 'Supplemental Security Income' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Public Assistance Referral (' }).click();
  await page.getByRole('group').filter({ hasText: 'Supplemental Security Income' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Public Assistance Eligibility' }).click();
  await page.getByRole('group').filter({ hasText: 'Supplemental Security Income' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Public Assistance Database' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA ADULT').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Supplemental Security Income' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA ADULT').click();
  await page.getByText('No', { exact: true }).click();
  

  //////////////////// Spouse of Veteran ////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'I am the spouse or family' }).getByLabel('Yes').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA ADULT').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'I am the spouse or family' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA ADULT').click();
  await page.getByText('No', { exact: true }).click();


  ///////////////////// Veteran /////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Are you currently in the U.S' }).getByLabel('Yes').check();
  await page.getByRole('radiogroup', { name: 'I am on active duty and wounded, ill, or injured AND receiving treatment at a' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'I am on active duty and within 1 year of separation or 2 years of retirement,' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'I was a member of a Guard/' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('textbox', { name: 'Most Recent Active Duty Begin' }).click();
  await page.getByRole('textbox', { name: 'Most Recent Active Duty Begin' }).fill('09/01/2007_'); //////change 
  await expect(page.getByRole('textbox', { name: 'Most Recent Active Duty End' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Most Recent Active Duty End' }).click();
  await page.getByRole('textbox', { name: 'Most Recent Active Duty End' }).fill('09/20/2007_'); //////change 
  await page.getByRole('radiogroup', { name: 'Campaign Veteran' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'I served in the Republic of' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Any part of my active duty service was between August 5, 1964, and May 7, 1975.' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Received a Military Campaign' }).getByLabel('Yes', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Service-Connected Disabled' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Received Services from'}).getByLabel('No', {exact: true}).check();
  await page.getByRole('radiogroup', { name: 'I have been subjected to any' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'I am unemployed and available' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Homeless Veteran' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'I am the head of a single-' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'My total family income does' }).getByLabel('No', { exact: true }).check();
  await page.getByText('Veteran Status', { exact: true }).click();
  await page.getByRole('option', { name: 'Yes <= 180 days' }).click();
  await page.getByText('Verified with', { exact: true }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('radiogroup', {name: 'Recently Separated Veteran ('}).getByLabel('No', {exact: true}).check();
  await page.getByRole('radiogroup', {name: 'Attended a Transition'}).getByLabel('No', {exact: true}).check();
  await page.getByRole('radiogroup', { name: 'Are you a veteran who, while' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Attended any Off-Base' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'I am the spouse or family' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'My spouse was a veteran who' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'My spouse has (or my deceased' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radio', { name: 'None of the above' }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await expect(page.getByText('WIOA ADULT')).toBeVisible(); /// you can change this depending on what eligibility
  await expect(page.getByText('Yes', { exact: true })).toBeVisible(); /// you can change this depending on what expect if it is supposed to be eligible
  await page.pause();

  
  await page.getByRole('button', { name: 'Submit Form button. Click to' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  //await page.getByRole('button', { name: 'Cancel button. Click to reset' }).click();
  //await page.getByRole('button', { name: 'Yes' }).click();


  const statusSection = page.locator('text=Status').locator('..');
  await expect(statusSection.getByText('Application Initiated')).toBeVisible();


  await expect(page.getByText('Application Status')).toBeVisible();
  await expect(page.getByText('Application Initiated')).toBeVisible();

  
  const disabledTabs = [
    'Assessment',
    'IEP',
    'Activities',
    'Training Justification',
    'MSG / EFL',
    'Credentials',
    'Funding',
    'Closure',
    'Exit / Outcome',
    'Follow Up',
    'Case Notes',
  ];

  for (const tabName of disabledTabs) {
    const tab = page.getByRole('tab', { name: tabName });
    await expect(tab).toBeDisabled();

  }


  const applicationTab = page.getByRole('tab', { name: 'Application', exact: true });
  await expect(applicationTab).toBeEnabled();


  const summaryCard = page.locator('text=APPLICATION SUMMARY').locator('..');
  const editIcon = summaryCard.locator('.css-jvn5oe [focusable]');
  await expect(editIcon).toBeVisible();
  await page.pause();
});
