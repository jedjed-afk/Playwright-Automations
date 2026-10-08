const { test, expect } =
  require('@playwright/test');
const { transcode } = require('buffer');
  require('dotenv').config();



  /// fix line 165 - 226

  
 //This test is written by Jade of Team Eagle

 //Pre-condition = all OSY evidence is uploaded use all-evidence
 // Test all WIOA OSY Eligibility

 ///////////// use this in the future if want to submit every singe time ///////////////

  //await page.getByRole('button', { name: 'Submit Form button. Click to' }).click();
  //await page.getByRole('button', { name: 'Yes' }).click();

  //await page.getByRole('button', { name: 'Edit application' }).click();

  //for (let i = 0; i < 5; i++) {
    //await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  //}


test('WIOA Out of Shool Youth ALL Eligibility', async ({ page }) => {
  test.setTimeout(15 * 60 * 1000); // this is a long multi-page E2E flow; default 30s test timeout is not enough

  //await page.goto(process.env.WYO_OLDDEV_LOGIN); // DEV
  await page.goto(process.env.WYO_PPP_LOGIN);    // PPP


  /////////// Login for Admin///////////
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL); 
  await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV_PASS); // DEV and New DEV
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP
  
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  
  await page.getByRole('button', { name: 'Individuals' }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click(); 


//////////// Creation of WIOA Applicaiton ////////////
  await page.getByRole('radio', { name: 'WIOA' }).check();
  await expect(page.getByRole('button', { name: 'Continue' })).toBeEnabled({ timeout: 60000 });
  await page.getByRole('button', { name: 'Continue' }).click();
  // 1st Page //
  //await page.getByRole('checkbox', { name: 'WIOA Adult' }).check();
  //await page.waitForTimeout(3000);
  //await page.waitForLoadState('load');
  //await expect(page.getByRole('checkbox', { name: 'WIOA Youth' })).toBeVisible();
  await page.getByRole('checkbox', { name: 'WIOA Youth' }).check();
  await page.getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 2nd Page //
  await page.pause();
  await page.getByRole('textbox', { name: 'Select Document' }).first().click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).first().click(); // Change name on what name you put on your evidence
  await page.getByRole('radiogroup', { name: 'Haitian *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 3rd Page //
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 4th Page //
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Employed', exact: true }).click();
  await page.getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.getByText('4 Employment Information').click();
  await page.getByRole('radiogroup', { name: 'If employed, individual is' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'In a Registered' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radio', { name: 'Neither Claimant nor Exhaustee' }).check();
  await page.getByRole('radiogroup', { name: 'Unemployed due to layoff or' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Attended a Rapid Response' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Long-Term Unemployed *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('textbox', { name: 'Current or most recent hourly' }).click();
  await page.getByRole('textbox', { name: 'Current or most recent hourly' }).fill('11');
  // 5th Page //
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();  
  await page.pause();
   await page.getByRole('radiogroup', { name: 'Has secondary school diploma/' }).getByLabel('No', { exact: true }).check();
  //await page.getByRole('radiogroup', { name: 'Certificate of Attendance/' }).getByLabel('No', { exact: true }).check();
  await page.getByText('School Status at Youth Program eligibility', { exact: true }).click();
  await page.getByRole('option', { name: 'Not attending school, secondary school graduate or equivalent' }).click();
  await page.getByText('Highest School Grade Completed').click();
  await page.getByRole('option', { name: '12th Grade Completed' }).click();
  await page.getByText('Highest Educational Level').click();
  await page.getByRole('option', { name: 'High School Diploma' }).click();
  await page.getByText('School Status', { exact: true }).click();
  await page.getByRole('option', { name: 'No, Not Attending Any School' }).click();
  await page.getByRole('radiogroup', { name: 'Receiving services from Adult' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Receiving services from Job' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Receiving Services from Vocational Education (Carl Perkins) *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radio', { name: 'Not applicable', exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Temporary Assistance for' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Supplemental Security Income' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'General Assistance (GA)' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Supplemental Nutrition' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Refugee Cash Assistance (RCA)' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Social Security Disability' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Foster Child' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Youth currently living in' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Youth currently receives, or' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Receiving, or has been' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Ticket to Work Holder issued' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Meets Governor’s special' }).getByLabel('No', { exact: true }).check();
  
  // 5th Page //
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 6th Page //
  await page.getByRole('radiogroup', { name: 'English language learner *' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'Barriers English language' }).getByLabel('Select Document').click();
  await page.waitForTimeout(1500);
  await page.getByRole('option', { name: 'Case Note (file: Located in' }).first().click();
  await page.getByRole('option', { name: 'Assessment Test Results (file' }).click();
  await page.getByRole('option', { name: 'Records from Education' }).click();
  await page.waitForTimeout(1500);
  await page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Youth in, or aged-out of,' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Eligible under Section 477 of' }).getByLabel('No', { exact: true }).check(); 
  await page.getByRole('radiogroup', { name: 'Ex-Offender' }).getByLabel('No', { exact: true }).check(); // Ex-Offender
  await page.getByRole('radiogroup', { name: 'Incarcerated at Program Entry' }).getByLabel('No', { exact: true }).check(); 
  await page.getByRole('radiogroup', { name: 'Displaced Homemaker' }).getByLabel('No', { exact: true }).check(); 
  await page.getByRole('radiogroup', { name: 'Pregnant or parenting youth' }).getByLabel('No', { exact: true }).check(); 
  await page.getByRole('radiogroup', { name: 'Youth Requires Additional' }).getByLabel('No', { exact: true }).check(); 
  //await page.getByRole('radiogroup', { name: 'Within 2 years of exhausting' }).getByLabel('No', { exact: true }).check(); // Within 2 years of exhausting
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
  await expect(page.getByText('WIOA YOUTH, Out-of-school')).toBeVisible();
  await expect(page.getByText('Yes', { exact: true })).toBeVisible();
  await page.pause();

  //BSD
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click(); 

  //////  High School Diploma + BSD + LLSIL /////////////////
//   await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
//   await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
//   await page.getByText('Highest Educational Level').click();
//   await page.getByRole('option', { name: 'High School Diploma' }).click();
//   await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
//   await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
//   await page.getByText('WIOA YOUTH').click();
//   await page.getByText('No', { exact: true }).click();
//   await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
//   await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('Yes').check();
//   await page.getByRole('group').filter({ hasText: 'Barriers English language' }).getByLabel('Select Document').click();
//   await page.waitForTimeout(1500);
//   await page.getByRole('option', { name: 'Case Note (file: Located in' }).first().click();
//   await page.getByRole('option', { name: 'Assessment Test Results (file' }).click();
//   await page.getByRole('option', { name: 'Records from Education' }).click();
//   await page.waitForTimeout(1500);
//   await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
//   await expect(page.getByText('WIOA YOUTH, Out-of-school')).toBeVisible();
//   await expect(page.getByText('Yes', { exact: true })).toBeVisible();
//   await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
//   await page.getByRole('textbox', { name: 'Annualized Family Income (' }).click();
//   await page.getByRole('textbox', { name: 'Annualized Family Income (' }).fill('11111');
//   await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
//   await expect(page.getByText('WIOA YOUTH, Out-of-school')).toBeVisible();
//   await expect(page.getByText('Yes', { exact: true })).toBeVisible();

//   await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
//   await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('No').check();
//   await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
//   await page.getByText('WIOA YOUTH').click();
//   await page.getByText('No', { exact: true }).click(); 


//   await page.pause();
//   ////////// High School Diploma + English Language Learner + LLSIL
//   await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
//   await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
//   await page.getByText('Highest Educational Level').click();
//   await page.getByRole('option', { name: 'High School Diploma' }).click();
//   await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
//   await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
//   await page.getByText('WIOA YOUTH').click();
//   await page.getByText('No', { exact: true }).click();
//   await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
//   await page.getByRole('radiogroup', { name: 'English language learner *' }).getByLabel('Yes').check();
//   await page.getByRole('group').filter({ hasText: 'English language learner' }).getByRole('textbox', { name: 'Select Document' }).click();
//   await page.getByRole('option', { name: 'Assessment Test Results (file' }).click();
//   await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
//   await page.getByRole('option', { name: 'Records from Education' }).click();
//   await page.getByRole('option', { name: 'Signed Individual Service' }).click();
//   await page.getByRole('option', { name: 'Signed Intake Application or' }).click();
//   await page.getByRole('option', { name: 'Case Note (file: Located in' }).click();
//   await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
//   await page.getByText('WIOA YOUTH, Out-of-school').click();
//   await page.getByText('Yes').click();
//   await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
//   await page.getByRole('textbox', { name: 'Annualized Family Income (' }).click();
//   await page.getByRole('textbox', { name: 'Annualized Family Income (' }).fill('11111');
//   await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
//   await expect(page.getByText('WIOA YOUTH, Out-of-school')).toBeVisible();
//   await expect(page.getByText('Yes', { exact: true })).toBeVisible();


//   ////// LLSIL + Youth Needs Additional Assistance  ////////////////
//   await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
//   await page.getByRole('textbox', { name: 'Annualized Family Income (' }).click();
//   await page.getByRole('textbox', { name: 'Annualized Family Income (' }).fill('11111');
//   await page.getByRole('radio', { name: 'Youth Requires Additional'}).getByLabel('Yes', { exact: true }).click()
//   await page.filter('option').filter({ hasText: 'Youth Requires Additional'}).getByRole('textbox', { name : 'Select Document'});
//   await page.getByRole('option', { name: 'Needs Assessment (file: Needs' }).click();
//   await page.getByRole('option', { name: 'Signed Intake Application or' }).click();
//   await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
//   await page.getByRole('option', { name: 'Signed Individual Service' }).click();
//   await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
//   await page.getByText('WIOA YOUTH, Out-of-school').click();
//   await page.getByText('Yes').click();
//   await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
//   await page.getByRole('radio', { name: 'Youth Requires Additional'}).getByLabel('No', { exact: true }).click()
//   await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
//   await page.getByText('WIOA YOUTH, Out-of-school').click();
//   await page.getByText('Yes').click();

  //Homeless (YES)
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Homeless *' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'Homeless' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('group').filter({ hasText: 'Homeless' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Signed Individual Service' }).click();
  await page.getByRole('group').filter({ hasText: 'Homeless' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Needs Assessment (file: Needs' }).click();
  await page.getByRole('group').filter({ hasText: 'Homeless' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Shelter or Social Service' }).click();
  await page.getByRole('group').filter({ hasText: 'Homeless' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Signed Intake Application or' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, Out-of-school').click();
  await page.getByText('Yes').click();
  
  //Homeless (No)
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Homeless *' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();
  
   ///////////// use this in the future if want to submit every singe time ///////////////

  //await page.getByRole('button', { name: 'Submit Form button. Click to' }).click();
  //await page.getByRole('button', { name: 'Yes' }).click();

  //await page.getByRole('button', { name: 'Edit application' }).click();

  //for (let i = 0; i < 5; i++) {
    //await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  //}
   
  ///////////////////// EEL ///////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'English language learner *' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'English language learner' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Assessment Test Results (file' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('option', { name: 'Records from Education' }).click();
  await page.getByRole('option', { name: 'Signed Individual Service' }).click();
  await page.getByRole('option', { name: 'Signed Intake Application or' }).click();
  await page.getByRole('option', { name: 'Case Note (file: Located in' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, Out-of-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'English language learner *' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// Runaway /////////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'Runaway' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('group').filter({ hasText: 'Runaway' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Signed Individual Service' }).click();
  await page.getByRole('group').filter({ hasText: 'Runaway' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Needs Assessment (file: Needs' }).click();
  await page.getByRole('group').filter({ hasText: 'Runaway' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Shelter or Social Service' }).click();
  await page.getByRole('group').filter({ hasText: 'Runaway' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Signed Intake Application or' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, Out-of-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// Out of Home /////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('Yes', { exact: true }).check();
  await page.getByRole('group').filter({ hasText: 'Out-of-home placement' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('group').filter({ hasText: 'Out-of-home placement' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Social Services Agency' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, Out-of-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// Eligible Under Section 477 ////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Eligible under Section 477 of' }).getByLabel('Yes', { exact: true }).check();
  await page.getByRole('group').filter({ hasText: 'Eligible under Section 477 of' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Needs Assessment (file: Needs' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('option', { name: 'Social Services Agency' }).click();
  await page.getByRole('option', { name: 'Foster Care Agency Referral (' }).click();
  await page.getByRole('option', { name: 'Signed Intake Application or' }).click();
  await page.getByRole('option', { name: 'Signed Individual Service' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, Out-of-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Eligible under Section 477 of' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// Ex-Offender /////////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Ex-Offender' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'Ex-Offender' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Needs Assessment (file: Needs' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('option', { name: 'Court or Probation Officer' }).click();
  await page.getByRole('option', { name: 'Criminal Justice System' }).click();
  await page.getByRole('option', { name: 'Signed Intake Application or' }).click();
  await page.getByRole('option', { name: 'Signed Individual Service' }).click();
  await page.getByRole('option', { name: 'Federal Bonding Program' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, Out-of-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Ex-Offender' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();
  
  ///////////////////// Pregnant or Parenting Youth //////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Pregnant or parenting youth' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'Pregnant or parenting youth' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('group').filter({ hasText: 'Pregnant or parenting youth' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Needs Assessment (file: Needs' }).click();
  await page.getByRole('group').filter({ hasText: 'Pregnant or parenting youth' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Public Assistance Eligibility' }).click();
  await page.getByRole('group').filter({ hasText: 'Pregnant or parenting youth' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Signed Intake Application or' }).click();
  await page.getByRole('group').filter({ hasText: 'Pregnant or parenting youth' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Signed Individual Service' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, Out-of-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Pregnant or parenting youth' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
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
  await page.getByText('WIOA YOUTH, Out-of-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Supplemental Nutrition' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
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
  await page.getByText('WIOA YOUTH, Out-of-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Temporary Assistance for' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
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
  await page.getByText('WIOA YOUTH, Out-of-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'General Assistance (GA)' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
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
  await page.getByText('WIOA YOUTH, Out-of-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Refugee Cash Assistance (RCA)' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// SSI ///////////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Supplemental Security Income' }).getByLabel('Yes').check();
  await page.getByRole('radio', { name: 'Applicant' }).check();
  await page.getByRole('group').filter({ hasText: 'Supplemental Security Income' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Public Assistance Benefit' }).click();
  await page.getByRole('group').filter({ hasText: 'Supplemental Security Income' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Public Assistance Referral (' }).click();
  await page.getByRole('group').filter({ hasText: 'Supplemental Security Income' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Public Assistance Eligibility' }).click();
  await page.getByRole('group').filter({ hasText: 'Supplemental Security Income' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Public Assistance Database' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, Out-of-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Supplemental Security Income' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// Youth Currently Living in Poor Area ////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Youth currently living in' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'Youth currently living in' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Staff Verified based upon' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, Out-of-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Youth currently living in' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// Foster Child /////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Foster Child' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'Foster Child' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('option', { name: 'Social Services Agency' }).click();
  await page.getByRole('group').filter({ hasText: 'Foster Child' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Foster Care Agency Referral (' }).click();
  await page.getByRole('group').filter({ hasText: 'Foster Child' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Signed Intake Application or' }).click();
  await page.getByRole('group').filter({ hasText: 'Foster Child' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Needs Assessment (file: Needs' }).click();
  await page.getByRole('group').filter({ hasText: 'Foster Child' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Signed Individual Service' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, Out-of-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Foster Child' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// Free or Reduced Lunch Form ///////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Youth currently receives, or' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'Youth currently receives, or' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Free or Reduced Lunch Form (' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, Out-of-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Youth currently receives, or' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();
  await page.pause();
})