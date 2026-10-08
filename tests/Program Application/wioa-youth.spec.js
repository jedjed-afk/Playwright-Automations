import { test, expect } from '@playwright/test';
//This test is written by Jade of Team Eagle
test('WIOA Application', async ({ page }) => {
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
  await page.getByRole('cell', { name: 'JedOneFourteen', exact: true }).waitFor({ state: 'visible', timeout: 60000 });
  await page.getByRole('cell', { name: 'JedOneFourteen', exact: true }).click(); 
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

  // await page.getByRole('cell', { name: 'JedOneFourteen', exact: true }).click();
  await page.getByRole('radio', { name: 'WIOA' }).check();
  await page.getByRole('button', { name: 'Continue' }).click();
  // 1st Page //
  //await page.getByRole('checkbox', { name: 'WIOA Adult' }).check();
  await page.getByRole('checkbox', { name: 'WIOA Youth' }).check();
  //await page.locator('.form-control.ui').first().click();
  //await page.getByText('Verified with').click();
  await page.locator('.col-form-label.field-required', { hasText: 'Verified with' }).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click(); // Change name on what name you put on your evidence
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 2nd Page //
  await page.locator('.form-control.ui').first().click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).first().click(); // Change name on what name you put on your evidence
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
  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click(); // Change name on what name you put on your evidence
  
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




  await page.getByRole('radiogroup', { name: 'Has secondary school diploma/' }).getByLabel('Yes').check();
  await page.getByText('School Status at Youth').click();
  await page.getByRole('option', { name: 'In-School, secondary school' }).click();
  await page.getByRole('radiogroup', { name: 'Attending any school *' }).getByLabel('Yes').check();
  await page.getByText('Highest School Grade Completed').click();
  await page.getByRole('option', { name: '12th Grade Completed' }).click();
  await page.getByText('Highest Educational Level').click();
  await page.getByRole('option', { name: 'High School Diploma' }).click();
  await page.getByText('Verified with').nth(1).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click();
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

  await page.getByRole('radiogroup', { name: 'Foster Child' }).getByLabel('Yes', { exact: true }).check();
  await page.getByText('Verified with').nth(2).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click();

  await page.getByRole('radiogroup', { name: 'Youth currently living in' }).getByLabel('No', { exact: true }).check();

  await page.getByRole('radiogroup', { name: 'Youth currently receives, or' }).getByLabel('No', { exact: true }).check();

  await page.getByRole('radiogroup', { name: 'Receiving, or has been' }).getByLabel('No', { exact: true }).check();

  await page.getByRole('radiogroup', { name: 'Ticket to Work Holder issued' }).getByLabel('No', { exact: true }).check();

  await page.getByRole('radiogroup', { name: 'Meets Governor’s special' }).getByLabel('No', { exact: true }).check();
  // 5th Page //
  await page.pause();

  
  // await page. locator('#exrwyds > .choices > .form-control.ui')

  //await page.locator('#exhibo > .choices > .form-control.ui').click();
  // await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click();
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  // 6th Page //
  await page.getByRole('radiogroup', { name: 'English language learner *' }).getByLabel('No').check();
  await page.getByRole('radiogroup', { name: 'Basic Skills deficient/Low' }).getByLabel('Yes').check();
  await page.getByRole('group').filter({ hasText: 'Barriers English language' }).getByLabel('Select Document').click();
  //await page.pause(); /// click 'Verified with' manually
  await page.waitForTimeout(1500);
  await page.getByRole('option', { name: 'Case Note (file: Located in' }).first().click();
  await page.waitForTimeout(1500);
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
  await page.getByRole('radiogroup', { name: 'Within 2 years of exhausting' }).getByLabel('No', { exact: true }).check(); // Within 2 years of exhausting
  await page.getByRole('radiogroup', { name: 'Hawaiian Native' }).getByLabel('No', { exact: true }).check(); // Hawaiian Native
  await page.getByRole('radiogroup', { name: 'Single Parent (including' }).getByLabel('No', { exact: true }).check(); // Single Parent (including
  await page.getByRole('radiogroup', { name: 'Is the individual' }).getByLabel('No', { exact: true }).check(); // Is the individual
  await page.getByText('SelectSelectRemove item').click();
  await page.getByRole('option', { name: '1', exact: true }).click();
  await page.getByRole('textbox', { name: 'Select Document' }).nth(1).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click(); // Change name on what name you put on your evidence
  await page.getByRole('textbox', { name: 'Annualized Family Income (' }).click();
  await page.getByRole('textbox', { name: 'Annualized Family Income (' }).fill('11111');
  await page.getByRole('textbox', { name: 'Select Document' }).nth(2).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click(); // Change name on what name you put on your evidence
  await page.getByRole('radio', { name: 'N/A' }).check();
  //await page.getByRole('radiogroup', { name: 'Does the participant live in' }).getByLabel('N/A', { exact: true }).check();  // Does the participant live in
  await page.getByRole('radiogroup', { name: 'TAA Petition Number' }).getByLabel('No', { exact: true }).check(); // TAA Petition Number
  await page.getByRole('radiogroup', { name: 'Intent to live and work in' }).getByLabel('Yes', { exact: true }).check(); 
  await page.getByRole('textbox', { name: 'Select Document' }).nth(3).click();
  await page.getByRole('option', { name: 'Self-Attestation (file: Test' }).click(); // Change name on what name you put on your evidence
  await page.getByRole('button', { name: 'Next button. Click to go to' }).click();
  await page.pause();
  await page.getByRole('button', { name: 'Submit Form button. Click to' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  //await page.getByRole('button', { name: 'Cancel button. Click to reset' }).click();
  //await page.getByRole('button', { name: 'Yes' }).click();

  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();
  await page.waitForTimeout(3500);

  //login for jobseeker
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+fourteen@careerteam.com'); //EDIT -- input email of the created jobseeker
  await page.getByRole('textbox', { name: 'Password' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill('High_lowers007!'); //EDIT -- input passsword
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('button', { name: 'My Profile' }).click();
  await page.getByRole('menuitem', { name: 'View Profile' }).click();
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Signature' }).click();
  await page.pause(); /// sign manually
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'Back to all Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Applications' }).click();
  await page.pause(); /// click the 3-dot menu of the correct application

  // Locate the specific status cell
  const statusCell = page.getByRole('cell', { name: 'Application Initiated', exact: true });

  // Assert it exists (fails clearly if it's missing, rather than silently doing nothing)
  await expect(statusCell).toBeVisible();

  // Get the row containing that cell
  const row = statusCell.locator('xpath=ancestor::tr[1]');

  // Click the 3-dot menu button within that row
  await row.getByRole('button').last().click();

  await page.getByRole('menuitem', { name: 'Sign Application' }).click();
  await page.getByRole('checkbox', { name: 'I agree to sign the' }).click();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  //getByRole('button').filter({ hasText: /^$/ }) check if needed
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();
  await page.waitForTimeout(3500);
  
  // login again to sign application as case manager
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanager@careerteam.com'); //DEV //EDIT -- input email of the created jobseeker
  //await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+casemanger@careerteam.com');  //OREGON
  await page.getByRole('textbox', { name: 'Password' }).click();
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PPP_PASS); // PPP
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.DEV_PASS); // DEV
  //await page.getByRole('textbox', { name: 'Password' }).fill(process.env.OR_PASS); //Oregon
  await page.getByRole('button', { name: 'Login' }).click();
  
  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.getByRole('tab', { name: 'All Individuals' }).click();
  await page.pause(); 
  await page.getByRole('cell', { name: 'JedOneFourteen', exact: true }).click(); 
  await page.getByRole('tab', { name: 'Forms & Documents' }).click();
  await page.getByRole('button', { name: 'Applications' }).click();

  
  const signatureStatus = page.getByRole('cell', {name: 'Case Manager sign is pending',exact: true});

  await expect(signatureStatus).toBeVisible();

  const signatureRow = signatureStatus.locator('xpath=ancestor::tr[1]');

  await signatureRow.getByRole('button').last().click();

  await page.getByRole('menuitem', { name: 'Sign Application' }).click();
  await page.getByRole('checkbox', { name: 'I agree to sign the' }).click();
  await page.getByRole('button', { name: 'Save & Close' }).click();
  //getByRole('button').filter({ hasText: /^$/ }) check if needed

  // Submit Application
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.getByText('Application Initiated').click(); /// this could not be used id there are other application initiated. Just pick the application after the pause
  await page.getByRole('button', { name: 'Submit for Approval' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  // Logout
  await page.getByRole('button', { name: 'Profile options' }).click();
  await page.getByText('Logout').click();
  await page.waitForTimeout(4000);

  // login Center Manager for Eligibility
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  //await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+centermanager@careerteam.com'); // PPP 
  await page.getByRole('textbox', { name: 'Email' }).fill('ajregunay+centermanager@careerteam.com');  // Dev and Oregon
  
  await page.getByRole('textbox', { name: 'Password' }).click();
  //await page.getByRole('textbox', { name: 'Password' }).fill('wdu-hgk@XZT5hnu!uzc'); // PPP
  await page.getByRole('textbox', { name: 'Password' }).fill('DCP3xmu0rch4vrm.wjd'); // DEV
  //await page.getByRole('textbox', { name: 'Password' }).fill('euv6bda9nxg!BKE0rwb'); // OREGON
  
  await page.getByRole('button', { name: 'Login' }).click();

  await page.getByRole('button', { name: 'Individuals' }).click();
  await page.pause(); // pick the jobseeker
  await page.getByRole('cell', { name: 'JedOneFourteen', exact: true }).click(); // change
  await page.getByRole('tab', { name: 'Programs Overview' }).click();
  await page.getByText('Submitted for Approval').click(); /// this could be used or just use pause 
  //await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Determine Eligibility' }).click();
  await page.getByRole('radio', { name: 'Approve' }).click();
  await page.getByRole('checkbox', { name: 'I agree to sign the' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.pause();
});


  