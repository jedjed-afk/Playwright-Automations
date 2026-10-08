const { test, expect } =
  require('@playwright/test');
  require('dotenv').config();
  //This test is written by Jade of Team Eagle
  
  //eligblity BSD and LMI

  ///////////// use this in the future if want to submit every singe time ///////////////

  //await page.getByRole('button', { name: 'Submit Form button. Click to' }).click();
  //await page.getByRole('button', { name: 'Yes' }).click();

  //await page.getByRole('button', { name: 'Edit application' }).click();

  //for (let i = 0; i < 5; i++) {
    //await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  //}

test('WIOA In Shool Youth', async ({ page }) => {
//await page.goto(process.env.WYO_PPP_LOGIN);    // PPP
  await page.goto(process.env.WYO_OLDDEV_LOGIN); // DEV
  /////////// Login for Admin///////////
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.CASEMAN_WYO_EMAIL);
  await page.getByRole('textbox', { name: 'Password' }).click();

  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS);  // PPP
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OLD_DEV_PASS);
  
  await page.getByRole('button', { name: 'Login' }).click();
  //login//
  
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: process.env.JOBSIK_NAME, exact: true }).click(); 
  /////////// EVIDENCE ////////////// --- use this if no evidence uploaded yet
  // await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  // await page.getByRole('button', { name: 'Evidences' }).click();
  // await page.getByRole('button', { name: 'Upload Document' }).click();
  // await page.getByRole('textbox', { name: 'Document Name *' }).click();
  // await page.getByRole('textbox', { name: 'Document Name *' }).fill('Test WIOA');
  // //await page.getByRole('link', { name: 'browse Browse to attach file' }).click(); // don't click - this opens the native OS file picker
  // //await page.pause(); //I prefer to use this so I can choose the file I want to upload
  // //await page.locator('input[type="file"]').setInputFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf');
  // {
  //   const fileChooserPromise = page.waitForEvent('filechooser');
  //   await page.getByRole('link', { name: 'browse Browse to attach file' }).click();
  //   const fileChooser = await fileChooserPromise;
  //   await fileChooser.setFiles('C:/Users/ajregunay/Downloads/WEX Special Provisionpdfpdfpdfpdf 1pdf.pdf');
  // }

  // //await page.locator('input[type="file"]').setInputFiles('Family Size Verification Form.pdf'); //this could be executed however, you need to move the file to the playwright folder instead for it to be uploaded
  // //await page.locator('input[type="file"]').setInputFiles('C:/path/to/Family Size Verification Form.pdf'); // this can be used also just provide absolute path
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
  // //await expect (page.getByRole('button', { name: 'update' })).toBeEnabled();
  // await page.getByRole('button', { name: 'Update' }).click();
  // await page.getByRole('button', { name: 'Yes' }).click();
  //await page.pause();

//////////// Creation of WIOA Applicaiton ////////////
  await page.waitForTimeout(3000);
   await page.pause();
  await page.getByRole('radio', { name: 'WIOA' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.pause();
  // 1st Page //
  //await page.getByRole('checkbox', { name: 'WIOA Adult' }).check();
  await page.getByRole('checkbox', { name: 'WIOA Youth' }).check();
  //await page.locator('.form-control.ui').first().click();
  //await page.getByText('Verified with').click();
  await page.locator('.col-form-label.field-required', { hasText: 'Verified with' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 2nd Page //
  await page.locator('.form-control.ui').first().click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).first().click(); // Change name on what name you put on your evidence
  //await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('radiogroup', { name: 'Haitian *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 3rd Page //
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 4th Page //
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: 'Employed', exact: true }).click();
  //await page.pause();
  //await page.locator('#er0z2wf > .choices > .form-control.ui')
  await page.getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.keyboard.press('Escape');
  await page.getByRole('radiogroup', { name: 'If employed, individual is' }).getByLabel('No', { exact: true }).check();
  
  await page.getByRole('radiogroup', { name: 'In a Registered' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radio', { name: 'Neither Claimant nor Exhaustee' }).check();
  await page.getByRole('radiogroup', { name: 'Unemployed due to layoff or' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Attended a Rapid Response' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Long-Term Unemployed *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('textbox', { name: 'Current or most recent hourly' }).click();
  await page.getByRole('textbox', { name: 'Current or most recent hourly' }).fill('11');
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  
  await page.getByRole('radiogroup', { name: 'Has secondary school diploma/' }).getByLabel('Yes').check();
  await page.getByText('School Status at Youth Program eligibility', { exact: true }).click();
  await page.getByRole('option', { name: 'In-School, secondary school' }).click();
  await page.getByRole('radiogroup', { name: 'Attending any school *' }).getByLabel('Yes').check();
  await page.getByText('Highest School Grade Completed').click();
  await page.getByRole('option', { name: '12th Grade Completed' }).click();
  await page.getByText('Highest Educational Level').click();
  await page.getByRole('option', { name: 'High School Diploma' }).click();
  await page.getByText('Verified with').nth(1).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.keyboard.press('Escape');
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
  await page.pause();
  await page.getByRole('radiogroup', { name: 'Foster Child' }).getByLabel('No', { exact: true }).check();
  //await page.getByRole('group').filter( {hasText: 'Foster Child'}).getByRole('textbox', {name: 'Select Document'}).click(); /// use this if yes
  //await page.getByText('Verified with').nth(2).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.keyboard.press('Escape');
  await page.getByRole('radiogroup', { name: 'Youth currently living in' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Youth currently receives, or' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Receiving, or has been' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Ticket to Work Holder issued' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('radiogroup', { name: 'Meets Governor’s special' }).getByLabel('No', { exact: true }).check();
  // 5th Page //

  
  // await page. locator('#exrwyds > .choices > .form-control.ui')

  //await page.locator('#exhibo > .choices > .form-control.ui').click();
  // await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 6th Page //
  await page.getByRole('radiogroup', { name: 'English language learner *' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'Barriers English language' }).getByLabel('Select Document').click();
  //await page.pause(); /// click 'Verified with' manually
  await page.waitForTimeout(1500);
  await page.getByRole('option', { name: 'Case Note (file: Located in' }).first().click();
  await page.waitForTimeout(1500);
  await page.keyboard.press('Escape');
  await page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Youth in, or aged-out of,' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('No', { exact: true }).check();
  //await page.pause();
  await page.getByRole('radiogroup', { name: 'Eligible under Section 477 of' }).getByLabel('No', { exact: true }).check(); //Eligible under Section 477 of
  await page.getByRole('radiogroup', { name: 'Ex-Offender' }).getByLabel('No', { exact: true }).check(); // Ex-Offender
  await page.getByRole('radiogroup', { name: 'Incarcerated at Program Entry' }).getByLabel('No', { exact: true }).check(); //Incarcerated at Program Entry
  await page.getByRole('radiogroup', { name: 'Displaced Homemaker' }).getByLabel('No', { exact: true }).check(); // Displaced Homemaker
  await page.getByRole('radiogroup', { name: 'Pregnant or parenting youth' }).getByLabel('No', { exact: true }).check(); // Pregnant or parenting youth
  await page.getByRole('radiogroup', { name: 'Youth Requires Additional' }).getByLabel('No', { exact: true }).check(); // Youth Requires Additional
  //await page.getByRole('radiogroup', { name: 'Within 2 years of exhausting' }).getByLabel('No', { exact: true }).check(); // Within 2 years of exhausting
  await page.getByRole('radiogroup', { name: 'Hawaiian Native' }).getByLabel('No', { exact: true }).check(); // Hawaiian Native
  await page.getByRole('radiogroup', { name: 'Single Parent (including' }).getByLabel('No', { exact: true }).check(); // Single Parent (including
  await page.getByRole('radiogroup', { name: 'Is the individual' }).getByLabel('No', { exact: true }).check(); // Is the individual
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: '1', exact: true }).click();
  await page.getByRole('textbox', { name: 'Select Document' }).nth(1).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click(); // Change name on what name you put on your evidence
  await page.keyboard.press('Escape');
  await page.getByRole('textbox', { name: 'Annualized Family Income (' }).click();
  await page.getByRole('textbox', { name: 'Annualized Family Income (' }).fill('11111');
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
  await page.pause();
  await expect(page.getByText('WIOA YOUTH, In-school')).toBeVisible();
  await expect(page.getByText('Yes', { exact: true })).toBeVisible();

  await page.pause();
  // NO BSD AND LLSIL
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('No').check();
  await page.getByRole('textbox', { name: 'Annualized Family Income (' }).click();
  await page.getByRole('textbox', { name: 'Annualized Family Income (' }).fill('111111');
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click(); 

  ///////////////////// SNAP AND BSD //////////////////////////////
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
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click(); 

  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'Barriers English language' }).getByLabel('Select Document').click();
  await page.waitForTimeout(1500);
  await page.getByRole('option', { name: 'Case Note (file: Located in' }).first().click();
  await page.getByRole('option', { name: 'Assessment Test Results (file' }).click();
  await page.getByRole('option', { name: 'Records from Education' }).click();
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await expect(page.getByText('WIOA YOUTH, In-school')).toBeVisible();
  await expect(page.getByText('Yes', { exact: true })).toBeVisible();

  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  //////////////////// SNAP ELL ////////////////////////
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
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();

  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'English language learner *' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// SNAP + Ex-Offender ///////////////////////////

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
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Ex-Offender' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

///////////////////// SNAP + Runaway ///////////////////////////
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
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// SNAP + Out-of-Home Placement ///////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('Yes', { exact: true }).check();
  await page.getByRole('group').filter({ hasText: 'Out-of-home placement' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('group').filter({ hasText: 'Out-of-home placement' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Social Services Agency' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();
 

  ///////////////////// SNAP +  Section 477 of SSA ///////////////////////////
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
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Eligible under Section 477 of' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();


  ///////////////////// SNAP + Pregnant/Parenting Youth ///////////////////////////
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
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Pregnant or parenting youth' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();


  ///////////////////// SNAP + No  ///////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click()
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click()
  await page.getByRole('radiogroup', { name: 'Supplemental Nutrition' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();





  ///////////////////// TANF  /////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click()
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click()
  await page.getByRole('radiogroup', { name: 'Temporary Assistance for' }).getByLabel('Yes').check();
  await page.getByRole('radio', { name: 'Applicant' }).check();
  await page.getByRole('group').filter({ hasText: 'Temporary Assistance for' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Public Assistance Eligibility' }).click();
  await page.getByRole('option', { name: 'Public Assistance Benefit' }).click();
  await page.getByRole('option', { name: 'Public Assistance Referral (' }).click();
  await page.getByRole('option', { name: 'Public Assistance/Social' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

///////////////////// TANF + BSD //////////////////////////////

  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'Barriers English language' }).getByLabel('Select Document').click();
  await page.waitForTimeout(1500);
  await page.getByRole('option', { name: 'Case Note (file: Located in' }).first().click();
  await page.getByRole('option', { name: 'Assessment Test Results (file' }).click();
  await page.getByRole('option', { name: 'Records from Education' }).click();
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await expect(page.getByText('WIOA YOUTH, In-school')).toBeVisible();
  await expect(page.getByText('Yes', { exact: true })).toBeVisible();

  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  //////////////////// TANF +  ELL ////////////////////////
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
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();

  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'English language learner *' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// TANF +  Ex-Offender ///////////////////////////

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
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Ex-Offender' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

///////////////////// TANF +  Runaway ///////////////////////////
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
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// TANF +  Out-of-Home Placement ///////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('Yes', { exact: true }).check();
  await page.getByRole('group').filter({ hasText: 'Out-of-home placement' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('group').filter({ hasText: 'Out-of-home placement' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Social Services Agency' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();
 

  ///////////////////// TANF +   Section 477 of SSA ///////////////////////////
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
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Eligible under Section 477 of' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();


  ///////////////////// TANF +  Pregnant/Parenting Youth ///////////////////////////
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
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Pregnant or parenting youth' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();


  ///////////////////// TANF + No  ///////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click()
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click()
  await page.getByRole('radiogroup', { name: 'Temporary Assistance for' }).getByLabel('Yes').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();
  




  ///////////////////// SSI ///////////////////////
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
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// SSI + BSD ////////////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'Barriers English language' }).getByLabel('Select Document').click();
  await page.waitForTimeout(1500);
  await page.getByRole('option', { name: 'Case Note (file: Located in' }).first().click();
  await page.getByRole('option', { name: 'Assessment Test Results (file' }).click();
  await page.getByRole('option', { name: 'Records from Education' }).click();
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await expect(page.getByText('WIOA YOUTH, In-school')).toBeVisible();
  await expect(page.getByText('Yes', { exact: true })).toBeVisible();

  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  //////////////////// SSI + ELL ////////////////////////
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
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();

  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'English language learner *' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// SSI + Ex-Offender ///////////////////////////

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
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Ex-Offender' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

///////////////////// SSI + Runaway ///////////////////////////
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
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// SSI + Out-of-Home Placement ///////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('Yes', { exact: true }).check();
  await page.getByRole('group').filter({ hasText: 'Out-of-home placement' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('group').filter({ hasText: 'Out-of-home placement' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Social Services Agency' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();
 

  ///////////////////// SSI +  Section 477 of SSA ///////////////////////////
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
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Eligible under Section 477 of' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();


  ///////////////////// SSI + Pregnant/Parenting Youth ///////////////////////////
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
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Pregnant or parenting youth' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();


  //////////////////// SSI No ///////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Supplemental Security Income' }).getByLabel('Yes').check();
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
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// GA + BSD ////////////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'Barriers English language' }).getByLabel('Select Document').click();
  await page.waitForTimeout(1500);
  await page.getByRole('option', { name: 'Case Note (file: Located in' }).first().click();
  await page.getByRole('option', { name: 'Assessment Test Results (file' }).click();
  await page.getByRole('option', { name: 'Records from Education' }).click();
  await page.waitForTimeout(1500);
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await expect(page.getByText('WIOA YOUTH, In-school')).toBeVisible();
  await expect(page.getByText('Yes', { exact: true })).toBeVisible();

  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  //////////////////// GA + ELL ////////////////////////
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
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();

  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'English language learner *' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// GA + Ex-Offender ///////////////////////////

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
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Ex-Offender' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

///////////////////// GA + Runaway ///////////////////////////
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
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Runaway *' }).getByLabel('No').check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();

  ///////////////////// GA + Out-of-Home Placement ///////////////////////////
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('Yes', { exact: true }).check();
  await page.getByRole('group').filter({ hasText: 'Out-of-home placement' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Self-' }).click();
  await page.getByRole('group').filter({ hasText: 'Out-of-home placement' }).getByRole('textbox', { name: 'Select Document' }).click();
  await page.getByRole('option', { name: 'Social Services Agency' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Out-of-home placement *' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();
 

  ///////////////////// GA +  Section 477 of SSA ///////////////////////////
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
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Eligible under Section 477 of' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();


  ///////////////////// GA + Pregnant/Parenting Youth ///////////////////////////
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
  await page.getByText('WIOA YOUTH, In-school').click();
  await page.getByText('Yes').click();
  await page.getByRole('button', { name: 'Previous button. Click to go' }).click();
  await page.getByRole('radiogroup', { name: 'Pregnant or parenting youth' }).getByLabel('No', { exact: true }).check();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.getByText('WIOA YOUTH').click();
  await page.getByText('No', { exact: true }).click();
})